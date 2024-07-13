import { type SchemaTypeDefinition } from "sanity";

import contact from "@/sanity/schemas/contact-schema";
import heroSection from "@/sanity/schemas/sections/heroSection";
import projects from "@/sanity/schemas/projects-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact, heroSection, projects],
};
