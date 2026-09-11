export default {
  name: 'testimonial',
  title: 'Testimonials & Reviews',
  type: 'document',
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image Quote', value: 'image' },
          { title: 'Video Review', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'image',
    },
    {
      name: 'client',
      title: 'Contractor / Builder Info',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Full Name',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'location',
          title: 'Location & Trade Title',
          type: 'string',
          description: 'e.g. Austin, Texas • Custom Home Builder',
        },
        {
          name: 'image',
          title: 'Avatar Image',
          type: 'image',
          options: { hotspot: true },
        },
      ],
    },
    {
      name: 'content',
      title: 'Quote Text',
      type: 'text',
      rows: 4,
      hidden: ({ parent }: any) => parent?.type === 'video',
    },
    {
      name: 'video',
      title: 'Video Details',
      type: 'object',
      hidden: ({ parent }: any) => parent?.type !== 'video',
      fields: [
        {
          name: 'src',
          title: 'Video Stream URL (WebM / MP4)',
          type: 'url',
        },
        {
          name: 'poster',
          title: 'Poster Image URL',
          type: 'string',
        },
      ],
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 1,
    },
  ],
};
