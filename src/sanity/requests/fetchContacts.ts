import { contactsQuery } from '@/sanity/requests/queries/contactsQuery';
import { client } from '../client';

export const fetchContacts = async () => {
  const res = await client.fetch(contactsQuery);
  return res;
};
