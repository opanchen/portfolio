import { Contacts } from "@/sections/home/Contacts";
import { Hero } from "@/sections/home/Hero";
import { Projects } from "@/sections/home/Projects";
import { Skills } from "@/sections/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}
