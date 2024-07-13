import { defineField, defineType, defineArrayMember } from "sanity";

// export const heroSection = defineType({
const heroSection = {
  name: "hero",
  title: "Hero Section",
  type: "document",
  language: ["uk", "en"],
  fields: [
    defineField({
      // should match 'languageField' plugin configuration setting, if customized
      name: "language",
      type: "string",
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: "heading",
      type: "string",
    }),

    defineField({
      name: "tagline",
      type: "string",
    }),

    defineField({
      title: "Majors subtitle",
      name: "majors",
      type: "array",
      of: [
        {
          type: "string",
        },
      ],
    }),

    defineField({
      title: "About",
      name: "about",
      type: "text",
    }),
  ],
};
// });

export default heroSection;
