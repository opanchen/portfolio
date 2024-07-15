import { Contacts } from '@/sections/home/Contacts';
import { Hero } from '@/sections/home/Hero';
import { Projects } from '@/sections/home/Projects';
import { Skills } from '@/sections/home/Skills';

// import { fetchTechStack } from '@/sanity/requests/fetchTechStack';
import { fetchHero } from '@/sanity/requests/fetchHero';
// import { fetchProjects } from '@/sanity/requests/fetchProjects';
// import { fetchCertificates } from '@/sanity/requests/fetchCertificates';
// import { fetchContacts } from '@/sanity/requests/fetchContacts';

export default async function Home() {
  // const techStack = await fetchTechStack();
  const hero = await fetchHero();
  // const projects = await fetchProjects();
  // const certificates = await fetchCertificates();
  // const contacts = await fetchContacts();
  // console.log('[DATA] : ', data, data2, data3, data4, data5);
  // console.log('[PROJECTS]: ', projects);
  // console.log('[TECH_STACK]: ', techStack);
  // console.log('[HERO]: ', hero);
  // console.log('[CONTACTS]: ', contacts);
  // console.log('[CERTIFICATES]: ', certificates);

  return (
    <>
      <Hero data={hero} />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}
