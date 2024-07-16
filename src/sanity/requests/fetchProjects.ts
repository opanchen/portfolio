import { client } from '@/sanity/client';
import { projectsQuery } from '@/sanity/requests/queries/projectsQuery';

import { ProjectsResponse } from '@/types/cms-landing.types';

export const fetchProjects = async () => {
  const res: ProjectsResponse = await client.fetch(
    projectsQuery,
    {},
    {
      next: { revalidate: 3600 },
    },
  );
  return res?.projectList.filter(item => item.isShown) || [];
};
