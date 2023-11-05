import Image from "next/image";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Home() {
  const t = useTranslations("Index");

  // Current language
  const locale = useLocale();

  return (
    <section>
      <h1>{t("title")}</h1>
    </section>
  );
}
