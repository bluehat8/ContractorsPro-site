export default {
  name: 'whyJoin',
  title: 'Why Join (Por qué unirse)',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Etiqueta de la Sección (Tag)',
      type: 'string',
      initialValue: 'WHY CONTRACTORS JOIN',
      description: 'Texto pequeño en mayúsculas sobre el título (ej: WHY CONTRACTORS JOIN).',
    },
    {
      name: 'title',
      title: 'Título Principal',
      type: 'string',
      initialValue: 'Finding consistent, quality projects is still one of the hardest parts.',
      validation: (Rule: any) => Rule.required(),
      description: 'Título destacado de la sección.',
    },
    {
      name: 'image',
      title: 'Imagen de la Sección',
      type: 'image',
      options: { hotspot: true },
      description: 'Fotografía ilustrativa de la sección Why Join.',
    },
    {
      name: 'imageAlt',
      title: 'Texto Alternativo de la Imagen (Alt Text)',
      type: 'string',
      initialValue: 'Contractors discussing construction project blueprint.',
      description: 'Descripción breve de la imagen para accesibilidad y SEO.',
    },
    {
      name: 'items',
      title: 'Puntos Clave / Razones para Unirse',
      type: 'array',
      description: 'Agrega o edita los párrafos y propuestas de valor para los contratistas.',
      of: [
        {
          type: 'object',
          title: 'Bloque de Contenido',
          fields: [
            {
              name: 'title',
              title: 'Título / Encabezado del Bloque',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'text',
              title: 'Descripción / Párrafo',
              type: 'text',
              rows: 3,
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
    {
      name: 'hideSection',
      title: 'Ocultar Sección Why Join',
      type: 'boolean',
      initialValue: false,
      description: 'Activa esta casilla si deseas ocultar temporalmente la sección Why Join del sitio web.',
    },
  ],
};
