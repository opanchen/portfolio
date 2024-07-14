import { groq } from 'next-sanity';

export const contactsQuery = groq`
*[_type == "contacts"][0]{
  email,
    linkedIn,
    gitHub,
    telegram,
    cv
}
`;
