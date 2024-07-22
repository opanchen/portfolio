import { groq } from 'next-sanity';

export const projectsQuery = groq`
*[_type == "projects"][0]{
   projectList[] {
     name,
       tags,
       year,
       ghUrl,
       ghUrlAdd,
       liveUrl,
       role_en,
       role_uk,
       desc_en,
       desc_uk,
       isShown,
       techList[] {
        name,
        src
      },
       images[] {
        alt,
        "path": asset -> url,
        _key
       }
   }
}
`;
