import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// Get auth token from ~/.config/sanity/config.json or env
let token = process.env.SANITY_API_TOKEN || process.env.SANITY_AUTH_TOKEN;
if (!token) {
  try {
    const configPath = path.join(
      process.env.USERPROFILE || process.env.HOME || '',
      '.config',
      'sanity',
      'config.json'
    );
    if (fs.existsSync(configPath)) {
      const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));
      token = cfg.authToken;
    }
  } catch (e) {
    console.warn('No se pudo leer el config de sanity:', e.message);
  }
}

if (!token) {
  console.error('❌ ERROR: No se encontró token de autenticación de Sanity.');
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
  console.log(`📤 Subiendo imagen a Sanity: ${filename}...`);
  const asset = await client.assets.upload('image', fs.createReadStream(filePath), {
    filename,
  });
  console.log(`✅ Imagen subida: ${filename} (ID: ${asset._id})`);
  return asset;
}

async function run() {
  try {
    console.log('\n🚀 Iniciando migración a Sanity (Why Join + Site Settings)...\n');

    // 1. Subir imagen de Why Join si existe
    const whyJoinImg = await uploadFile('src/assets/images/two-women-sitting.png');

    // 2. Crear o actualizar documento whyJoin
    console.log('📝 Creando/actualizando documento "whyJoin"...');
    await client.createOrReplace({
      _id: 'whyJoin',
      _type: 'whyJoin',
      tag: 'WHY CONTRACTORS JOIN',
      title: 'Finding consistent, quality projects is still one of the hardest parts.',
      image: whyJoinImg
        ? {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: whyJoinImg._id,
            },
          }
        : undefined,
      imageAlt: 'Contractors discussing construction project blueprint.',
      hideSection: false,
      items: [
        {
          _key: 'item-1',
          title: 'Our goal is simple:',
          text: 'Help subcontractors find new construction opportunities faster. Spend less time searching for leads and more time pursuing projects that fit your crews.',
        },
        {
          _key: 'item-2',
          title: 'Direct builder demand you can act on',
          text: 'Most contractors depend on word-of-mouth referrals, cold outreach, existing relationships, or expensive lead generation. ContractorPro connects you directly with builders and project owners seeking reliable roofing, electrical, HVAC, concrete, drywall, framing, painting, plumbing, carpentry, flooring, and more.',
        },
      ],
    });
    console.log('✅ Documento "whyJoin" migrado con éxito a Sanity.');

    // 3. Actualizar siteSettings con los nuevos campos sin sobreescribir los existentes
    console.log('📝 Actualizando siteSettings con los nuevos campos (Hero CTA y Visibilidad Formulario)...');
    await client
      .patch('siteSettings')
      .setIfMissing({
        heroCtaText: 'GET EARLY ACCESS',
        heroCtaUrl: '#contact',
        heroSecondaryCtaText: 'How It Works?',
        heroSecondaryCtaUrl: '#how-it-works',
        contactSectionTag: 'FOUNDING ACCESS',
        contactSectionTitle: 'Become a Founding Contractor.',
        contactSectionSubtitle:
          "We're onboarding a limited group of subcontractors before public launch. Tell us about your services, crew capacity, and the compliance details builders typically need.",
        hideContactForm: false,
        hideContactSection: false,
      })
      .commit();
    console.log('✅ Documento "siteSettings" actualizado en Sanity.');

    // 4. Verificar estado final
    const docs = await client.fetch(
      '*[_type in ["siteSettings", "whyJoin", "project", "testimonial", "faqItem", "howItWorksStep"]]{_id, _type}'
    );
    console.log('\n📊 Resumen de documentos en Sanity Cloud:');
    const counts = {};
    docs.forEach((d) => (counts[d._type] = (counts[d._type] || 0) + 1));
    console.table(counts);

    console.log('\n🎉 ¡Todos los documentos y secciones han sido migrados a Sanity exitosamente!\n');
  } catch (err) {
    console.error('❌ Error durante la migración:', err);
  }
}

run();
