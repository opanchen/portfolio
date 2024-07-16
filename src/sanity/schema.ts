import { certificates } from '@/sanity/schemas/certificates';
import { contacts } from '@/sanity/schemas/contacts';
import { hero } from '@/sanity/schemas/hero';
import { metadata } from '@/sanity/schemas/metadata';
import { projects } from '@/sanity/schemas/projects';
import { techStack } from '@/sanity/schemas/techStack';

import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, techStack, projects, certificates, contacts, metadata],
};
