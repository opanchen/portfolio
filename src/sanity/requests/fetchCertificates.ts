import { client } from '@/sanity/client';
import { certificatesQuery } from '@/sanity/requests/queries/certificatesQuery';

import { CertificatesResponse } from '@/types/cms-landing.types';

export const fetchCertificates = async () => {
  const res: CertificatesResponse = await client.fetch(
    certificatesQuery,
    {},
    {
      next: { revalidate: 3600 },
    },
  );
  return res?.certificateList || [];
};
