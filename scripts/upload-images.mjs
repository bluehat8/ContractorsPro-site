import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Read token from command line argument or environment variable
const token = process.argv[2] || process.env.SANITY_API_TOKEN;

if (!token) {
  console.error('\n❌ ERROR: Falta el Token de Sanity.');
  console.log('\nUso:');
  console.log('  node scripts/upload-images.mjs TU_TOKEN_DE_SANITY\n');
  process.exit(1);
}

const client = createClient({
  projectId: 'kisr0owh',
  dataset: 'production',
  apiVersion: '2024-03-01',
  token,
  useCdn: false,
});

async function uploadFile(relativePath) {
  const filePath = path.join(rootDir, relativePath);
  if (!fs.existsSync(filePath)) {
    console.warn(`Archivo no encontrado: ${filePath}`);
    return null;
  }
  const filename = path.basename(filePath);
  console.log(`📤 Subiendo imagen: ${filename}...`);
  const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
    filename,
  });
  console.log(`✅ Subido: ${filename} (ID: ${asset._id})`);
  return asset;
}

async function run() {
  try {
    console.log('\n🚀 Iniciando subida de imágenes a Sanity.io...\n');

    // 1. Subir imágenes de Proyectos
    const before1 = await uploadFile('src/assets/images/before1.png');
    const after1 = await uploadFile('src/assets/images/after1.png');
    const before2 = await uploadFile('src/assets/images/before2.png');
    const after2 = await uploadFile('src/assets/images/after2.png');

    // 2. Subir avatares de Testimonios
    const sarah = await uploadFile('src/assets/images/sarah-johnson.jpg');
    const emma = await uploadFile('src/assets/images/emma.jpg');

    console.log('\n🔗 Vinculando imágenes a los documentos existentes en Sanity...');

    if (before1 && after1) {
      await client
        .patch('project-1')
        .set({
          beforeImage: { _type: 'image', asset: { _type: 'reference', _ref: before1._id } },
          afterImage: { _type: 'image', asset: { _type: 'reference', _ref: after1._id } },
        })
        .commit();
      console.log('✅ Proyecto 1 (Austin Roofing) actualizado con sus fotos.');
    }

    if (before2 && after2) {
      await client
        .patch('project-2')
        .set({
          beforeImage: { _type: 'image', asset: { _type: 'reference', _ref: before2._id } },
          afterImage: { _type: 'image', asset: { _type: 'reference', _ref: after2._id } },
        })
        .commit();
      console.log('✅ Proyecto 2 (Dallas Electric) actualizado con sus fotos.');
    }

    if (sarah) {
      await client
        .patch('testimonial-1')
        .set({
          'client.image': { _type: 'image', asset: { _type: 'reference', _ref: sarah._id } },
        })
        .commit();
      console.log('✅ Testimonio 1 (David Miller) actualizado con su avatar.');
    }

    if (emma) {
      await client
        .patch('testimonial-2')
        .set({
          'client.image': { _type: 'image', asset: { _type: 'reference', _ref: emma._id } },
        })
        .commit();
      console.log('✅ Testimonio 2 (Carlos Ramirez) actualizado con su avatar.');
    }

    // 3. Subir imágenes y crear pasos de How It Works
    const consult = await uploadFile('src/assets/images/consultation.jpg');
    const design = await uploadFile('src/assets/images/design.jpg');
    const transform = await uploadFile('src/assets/images/transform.jpg');

    await client.createOrReplace({
      _id: 'how-it-works-1',
      _type: 'howItWorksStep',
      stepNumber: 1,
      title: '1. Join the Network',
      description:
        'Tell us what trades you cover and where your crews can work. Founding subcontractors receive early access to residential and commercial construction opportunities.',
      image: consult ? { _type: 'image', asset: { _type: 'reference', _ref: consult._id } } : undefined,
      imageAlt: 'Subcontractor registering specialties in ContractorPro',
      order: 1,
    });
    console.log('✅ Paso 1 de How It Works creado/actualizado.');

    await client.createOrReplace({
      _id: 'how-it-works-2',
      _type: 'howItWorksStep',
      stepNumber: 2,
      title: '2. Browse & Review Projects',
      description:
        'Review residential and commercial construction opportunities that match your expertise. Check the trade needs, scope of work, budget indications, and expected timelines before you apply.',
      image: design ? { _type: 'image', asset: { _type: 'reference', _ref: design._id } } : undefined,
      imageAlt: 'Reviewing active construction project details and blueprints',
      order: 2,
    });
    console.log('✅ Paso 2 de How It Works creado/actualizado.');

    await client.createOrReplace({
      _id: 'how-it-works-3',
      _type: 'howItWorksStep',
      stepNumber: 3,
      title: '3. Connect with Builders Directly',
      description:
        'Submit your interest directly when an opportunity fits your business. Builders and homeowners review qualified subcontractors and reach out to discuss bids and contracts.',
      image: transform ? { _type: 'image', asset: { _type: 'reference', _ref: transform._id } } : undefined,
      imageAlt: 'Subcontractor and general contractor working on site',
      order: 3,
    });
    console.log('✅ Paso 3 de How It Works creado/actualizado.');

    // 4. Vincular video por defecto y títulos en siteSettings
    await client
      .patch('siteSettings')
      .set({
        heroVideoUrl:
          'https://res.cloudinary.com/dellp9a4z/video/upload/f_auto,q_auto,vc_vp9,w_1080/v1774623099/ik-video_esc1gl.webm',
        howItWorksTag: 'HOW IT WORKS',
        howItWorksTitle: 'A simple path from joining the network to connecting with builders.',
      })
      .commit();
    console.log('✅ Site Settings actualizado con Video y títulos de How It Works.');

    console.log('\n🎉 ¡Completado! Todas las imágenes, proyectos, testimonios y How It Works están en Sanity Studio.\n');
  } catch (error) {
    console.error('❌ Error durante la subida:', error);
  }
}

run();
