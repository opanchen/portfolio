const contact = {
  name: "contact",
  title: "Contacts (email, socials, cv)",
  type: "document",
  fields: [
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule: any) => [
        Rule.required().error("This field is required"),
        Rule.email().error("This field should be an email"),
      ],
    },
    {
      name: "github",
      title: "GitHub",
      type: "string",
      validation: (Rule: any) => [
        Rule.required().error("This field is required"),
      ],
    },
    {
      name: "linkedin",
      title: "LinkedIn",
      type: "string",
      validation: (Rule: any) => [
        Rule.required().error("This field is required"),
      ],
    },
    {
      name: "telegram",
      title: "Telegram",
      type: "string",
      validation: (Rule: any) => [
        Rule.required().error("This field is required"),
      ],
    },
    {
      name: "cv",
      title: "CV Document",
      type: "string",
      validation: (Rule: any) => [
        Rule.required().error("This field is required"),
      ],
    },
  ],
};

export default contact;
