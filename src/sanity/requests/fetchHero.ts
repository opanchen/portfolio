import { client } from '@/sanity/client';
import { heroQuery } from '@/sanity/requests/queries/heroQuery';

import { HeroResponse } from '@/types/cms-landing.types';

export const fetchHero = async () => {
  const res: HeroResponse = await client.fetch(heroQuery);
  return res;
};
