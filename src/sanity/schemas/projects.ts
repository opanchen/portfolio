import { defineField } from 'sanity';

export const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'projectList',
      title: 'Project List',
      type: 'array',
      of: [
        {
          name: 'project',
          type: 'document',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'isShown',
              title: 'Is Shown',
              type: 'boolean',
            }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'string',
              options: {
                list: ['individual', 'collaboration'],
              },
            }),

            defineField({
              name: 'year',
              title: 'Year',
              type: 'string',
            }),
            defineField({
              name: 'ghUrl',
              title: 'GitHub URL',
              type: 'string',
            }),
            defineField({
              name: 'liveUrl',
              title: 'Live URL',
              type: 'string',
            }),
            defineField({
              name: 'role_en',
              title: 'Role EN',
              type: 'text',
            }),
            defineField({
              name: 'role_uk',
              title: 'Role UK',
              type: 'text',
            }),
            defineField({
              name: 'desc_en',
              title: 'Description EN',
              type: 'text',
            }),
            defineField({
              name: 'desc_uk',
              title: 'Description UK',
              type: 'text',
            }),
            defineField({
              name: 'images',
              title: 'Images',
              type: 'array',
              of: [
                {
                  type: 'image',
                  options: { hotspot: true },
                  fields: [
                    {
                      name: 'alt',
                      title: 'Alternative text',
                      description: 'Important for SEO and accessiblity.',
                      type: 'string',
                      validation: (Rule: any) =>
                        Rule.required().error('This field is required'),
                    },
                  ],
                },
              ],
            }),
            defineField({
              name: 'techList',
              title: 'Technologies',
              type: 'array',
              of: [
                {
                  name: 'techStackItem',
                  title: 'Technology',
                  type: 'document',
                  fields: [
                    {
                      name: 'name',
                      title: 'Name',
                      type: 'string',
                    },
                    {
                      name: 'src',
                      title: 'SRC',
                      type: 'string',
                    },
                    {
                      name: 'isShown',
                      title: 'Is Shown',
                      type: 'boolean',
                    },
                  ],
                },
              ],
            }),
          ],
        },
      ],
    },
  ],
};
