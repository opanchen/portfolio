import { groq } from 'next-sanity';

export const certificatesQuery = groq`
*[_type == "certificates"][0] {
  certificateList[] {
    name,
    isShown,
    icon,
    uploadUrl,
    desc_en,
    desc_uk,
    company {
      name,
      companyUrl
    }
  }
}
`;
