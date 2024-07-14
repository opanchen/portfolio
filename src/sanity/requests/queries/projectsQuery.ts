import { groq } from 'next-sanity';

export const projectsQuery = groq`
*[_type == "projects"][0]{
   projectList[] {
     name,
       tags,
       year,
       ghUrl,
       liveUrl,
       desc_en,
       desc_uk,
       images[] 
     {
        alt,
        "path": asset -> url,
        _key
       }
   }
}
`;
