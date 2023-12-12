import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import {
  SectionHero,
  SectionProjects,
  SectionSkills,
} from "@components/sections";

export default function Home() {
  // const t = useTranslations("Hero");

  // Current language
  const locale = useLocale();

  return (
    <>
      <SectionHero />
      <SectionProjects />
      <SectionSkills />
    </>
  );
}
