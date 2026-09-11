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

    // 3. Vincular video por defecto en siteSettings
    await client
      .patch('siteSettings')
      .set({
        heroVideoUrl:
          'https://res.cloudinary.com/dellp9a4z/video/upload/f_auto,q_auto,vc_vp9,w_1080/v1774623099/ik-video_esc1gl.webm',
      })
      .commit();
    console.log('✅ Site Settings actualizado con la URL del video del Hero.');

    console.log('\n🎉 ¡Completado! Todas las imágenes y el video están ahora en tu Sanity Studio.\n');
  } catch (error) {
    console.error('❌ Error durante la subida:', error);
  }
}

run();
