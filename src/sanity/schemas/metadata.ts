import { defineField } from 'sanity';

export const metadata = {
  name: 'metadata',
  title: 'Metadata',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Site title for search systems and browser tab as well',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'Site description',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'keywords',
      title: 'Key Words',
      description: 'Key words for search systems',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
};
