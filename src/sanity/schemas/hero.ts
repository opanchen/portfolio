import { defineField } from 'sanity';

export const majors = {
  title: 'Majors subtitle',
  name: 'majors',
  type: 'array',
  of: [{ type: 'string' }],
};

export const hero = {
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'en',
      type: 'document',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'tagline',
          type: 'string',
        }),
        defineField(majors),
        defineField({
          title: 'About',
          name: 'about',
          type: 'text',
        }),
      ],
    }),

    defineField({
      name: 'uk',
      type: 'document',
      fields: [
        defineField({
          name: 'heading',
          type: 'string',
        }),
        defineField({
          name: 'tagline',
          type: 'string',
        }),
        defineField(majors),
        defineField({
          title: 'About',
          name: 'about',
          type: 'text',
        }),
      ],
    }),
  ],
};
