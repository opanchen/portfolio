import { heroQuery } from '@/sanity/requests/queries/heroQuery';
import { client } from '../client';

export const fetchHero = async () => {
  const res = await client.fetch(heroQuery);
  return res;
};
