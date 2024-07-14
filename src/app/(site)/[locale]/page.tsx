import { Contacts } from '@/sections/home/Contacts';
import { Hero } from '@/sections/home/Hero';
import { Projects } from '@/sections/home/Projects';
import { Skills } from '@/sections/home/Skills';

// import { fetchTechStack } from '@/sanity/requests/fetchTechStack';
// import { fetchHero } from '@/sanity/requests/fetchHero';
// import { fetchProjects } from '@/sanity/requests/fetchProjects';
// import { fetchCertificates } from '@/sanity/requests/fetchCertificates';
// import { fetchContacts } from '@/sanity/requests/fetchContacts';

export default async function Home() {
  // const data = await fetchTechStack();
  // const data2 = await fetchHero();
  // const data3 = await fetchProjects();
  // const data4 = await fetchCertificates();
  // const data5 = await fetchContacts();
  // console.log('[DATA] : ', data, data2, data3, data4, data5);
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}
