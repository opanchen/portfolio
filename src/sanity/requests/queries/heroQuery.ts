import { groq } from 'next-sanity';

export const heroQuery = groq`
*[_type == "hero"][0]{
  uk,
  en
}
`;
