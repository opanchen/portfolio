import { projectsQuery } from '@/sanity/requests/queries/projectsQuery';
import { client } from '../client';

export const fetchProjects = async () => {
  const res = await client.fetch(projectsQuery);
  return res;
};
