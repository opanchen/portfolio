import { client } from '../client';
import { techStackQuery } from './queries/techStackQuery';

export const fetchTechStack = async () => {
  const res = await client.fetch(techStackQuery);
  return res;
};
