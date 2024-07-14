import { client } from '../client';
import { certificatesQuery } from '@/sanity/requests/queries/certificatesQuery';

export const fetchCertificates = async () => {
  const res = await client.fetch(certificatesQuery);
  return res;
};
