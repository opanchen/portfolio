import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { SectionHero } from "@components";

export default function Home() {
  // const t = useTranslations("Hero");

  // Current language
  const locale = useLocale();

  return <SectionHero />;
}
