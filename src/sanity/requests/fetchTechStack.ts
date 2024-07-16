import { client } from '@/sanity/client';
import { techStackQuery } from './queries/techStackQuery';

import { TechStackResponse } from '@/types/cms-landing.types';

export const fetchTechStack = async () => {
  const res: TechStackResponse = await client.fetch(
    techStackQuery,
    {},
    {
      next: { revalidate: 3600 },
    },
  );
  return res?.techStackList.filter(item => item.isShown) || [];
};
