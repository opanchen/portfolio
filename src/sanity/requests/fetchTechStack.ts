import { client } from '@/sanity/client';
import { techStackQuery } from './queries/techStackQuery';

import { TechStackResponse } from '@/types/cms-landing.types';

export const fetchTechStack = async () => {
  const res: TechStackResponse = await client.fetch(techStackQuery);
  return res?.techStackList || [];
};
