import { client } from '@/sanity/client';
import { contactsQuery } from '@/sanity/requests/queries/contactsQuery';

import { ContactsResponse } from '@/types/cms-landing.types';

export const fetchContacts = async () => {
  const res: ContactsResponse = await client.fetch(contactsQuery);
  return res;
};
