import { groq } from 'next-sanity';

export const techStackQuery = groq`
*[_type == "techStack"][0] {
 techStackList[] {
   name,
   src,
   isShown
 }
}
`;
