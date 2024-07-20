import { defineField } from 'sanity';

export const certificates = {
  name: 'certificates',
  title: 'Certificates',
  type: 'document',
  fields: [
    {
      name: 'certificateList',
      title: 'Certificate List',
      type: 'array',
      of: [
        {
          name: 'certificate',
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
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: ['study', 'atom', 'code', 'lang'],
              },
            }),
            defineField({
              name: 'uploadUrl',
              title: 'Upload URL',
              type: 'string',
            }),
            defineField({
              name: 'company',
              title: 'Company',
              type: 'document',
              fields: [
                {
                  name: 'name',
                  title: 'Company Name',
                  type: 'string',
                },
                {
                  name: 'companyUrl',
                  title: 'Company Url',
                  type: 'string',
                },
              ],
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
          ],
        },
      ],
    },
  ],
};
