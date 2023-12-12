import { useTranslations } from "next-intl";

import { PiStudentLight } from "react-icons/pi";

import { Container, IconLink, StackList } from "@components";

const SectionSkills: React.FC = () => {
  const t = useTranslations("Skills");

  const certificates = ["goitFS"];

  return (
    <section id="skills" className="py-[16px]">
      <Container>
        <h2 className="text-[20px] font-bold md:text-[32px] uppercase text-slate-500 dark:text-white text-center sm:text-left">
          {t("title")}
        </h2>

        <div className="flex flex-col gap-[16px] md:flex-row md:items-start md:gap-[32px]">
          <h3 className="sr-only">{t("stack.title")}</h3>

          <StackList />

          <div className="grow relative">
            <h3 className="md:absolute bottom-[100%] left-0 text-center md:text-left text-[20px] font-bold md:text-[32px] uppercase text-slate-500 dark:text-white">
              {t("certificates.title")}
            </h3>

            <ul className="w-full flex flex-col gap-[16px] flex-wrap md:flex-row">
              {certificates.map((item) => (
                <li
                  key={item}
                  //   className="certificate-card p-[16px] rounded-md shadow dark:shadow-zinc-100 bg-neutral-500 dark:bg-neutral-800 text-white-primary"
                  className="certificate-card p-[16px] rounded-md shadow dark:shadow-zinc-100 bg-white-primary text-slate-500 dark:bg-neutral-800 dark:text-white-primary"
                >
                  <article className="flex flex-col gap-[8px]">
                    <h4 className="text-center">
                      {t(`certificates.${item}.title`)}
                    </h4>
                    <div className="flex items-center justify-between">
                      <p>{t(`certificates.${item}.from`)}</p>
                      <IconLink
                        href={t(`certificates.${item}.urlDownload`)}
                        type="download"
                      />
                    </div>
                    <p className="text-primary">
                      {t(`certificates.${item}.desc`)}
                    </p>
                  </article>
                </li>
              ))}

              {/* Placeholder for desktop */}
              {certificates.length === 1 && (
                <li className="hidden xl:flex justify-center items-center certificate-card p-[8px]  rounded-md shadow dark:shadow-zinc-100 bg-neutral-500 dark:bg-neutral-800 text-white-primary">
                  <PiStudentLight size={120} />
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionSkills;
