import { groq } from 'next-sanity';

export const contactsQuery = groq`
*[_type == "contacts"][0]{
  gitHub,
  linkedIn,
  telegram,
  email,
  cv
}
`;
