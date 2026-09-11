export default {
  name: 'howItWorksStep',
  title: 'How It Works (Steps)',
  type: 'document',
  fields: [
    {
      name: 'stepNumber',
      title: 'Paso # (Número)',
      type: 'number',
      description: '1, 2, 3...',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Título del Paso',
      type: 'string',
      description: 'ej: 1. Join the Network',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descripción del Paso',
      type: 'text',
      rows: 4,
      description: 'Texto explicativo de este paso para contratistas o constructores.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Foto / Imagen del Paso',
      type: 'image',
      description: 'Sube la imagen ilustrativa de este paso.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageAlt',
      title: 'Texto Alternativo (Alt Text)',
      type: 'string',
      description: 'Descripción breve de la imagen para accesibilidad y SEO.',
    },
    {
      name: 'order',
      title: 'Orden de visualización',
      type: 'number',
      initialValue: 1,
    },
  ],
  orderings: [
    {
      title: 'Paso (1, 2, 3...)',
      name: 'stepAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
};
