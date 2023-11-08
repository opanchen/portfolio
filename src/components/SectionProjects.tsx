import { useTranslations } from "next-intl";

import { Container, ProjectList } from "@components";

import projects from "./../data/projects.json";

const SectionProjects: React.FC = () => {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-[16px]">
      <Container>
        <div className="outline-dashed">
          <h2 className="text-[20px] font-bold md:text-[32px] text-slate-500 dark:text-white text-center sm:text-left">
            {t("title")}
          </h2>
          <ProjectList projects={projects} />
        </div>
      </Container>
    </section>
  );
};

export default SectionProjects;
