import { client } from '@/sanity/client';
import { metadataQuery } from './queries/metadataQuery';

import { MetadataResponse } from '@/types/cms-landing.types';

export const fetchMetadata = async () => {
  const res: MetadataResponse = await client.fetch(
    metadataQuery,
    {},
    {
      next: { revalidate: 3600 },
    },
  );
  return res;
};
