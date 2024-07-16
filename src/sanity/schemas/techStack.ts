export const techStack = {
  name: 'techStack',
  title: 'Technologies',
  type: 'document',
  fields: [
    {
      name: 'techStackList',
      title: 'Technology List',
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
    },
  ],
};
