import { type SchemaTypeDefinition } from "sanity";

import contact from "@/sanity/schemas/contact-schema";
import heroSection from "@/sanity/schemas/sections/heroSection";
import projects from "@/sanity/schemas/projects-schema";
import techStack from "@/sanity/schemas/tech-stack-schema";
import certificates from "@/sanity/schemas/certificates-schema";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact, heroSection, projects, techStack, certificates],
};
