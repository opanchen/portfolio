export const contacts = {
  name: 'contacts',
  title: 'Contacts (email, socials, cv)',
  type: 'document',
  fields: [
    {
      name: 'gitHub',
      title: 'GitHub',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
      ],
    },
    {
      name: 'linkedIn',
      title: 'LinkedIn',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
      ],
    },
    {
      name: 'telegram',
      title: 'Telegram',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
      ],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
        Rule.email().error('This field should be an email'),
      ],
    },
    {
      name: 'cv',
      title: 'CV Document',
      type: 'string',
      validation: (Rule: any) => [
        Rule.required().error('This field is required'),
      ],
    },
  ],
};
