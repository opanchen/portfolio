import { client } from '@/sanity/client';
import { contactsQuery } from '@/sanity/requests/queries/contactsQuery';

import { ContactsResponse } from '@/types/cms-landing.types';

export const fetchContacts = async () => {
  const res: ContactsResponse = await client.fetch(
    contactsQuery,
    {},
    {
      next: { revalidate: 3600 },
    },
  );

  return res;
};
