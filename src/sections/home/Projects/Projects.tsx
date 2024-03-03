import { useTranslations } from "next-intl";

import { ProjectList } from "@/components/ProjectList/ProjectList";
import { Container } from "@/components/ui/Container";

import projects from "@/data/projects.json";

export const Projects: React.FC = () => {
  const t = useTranslations("Projects");

  const tabLabels = {
    all: t("kind.all"),
    individual: t("kind.individual"),
    collaborations: t("kind.collaborations"),
  };

  return (
    <section id="projects" className="py-[16px]">
      <Container>
        <div className="">
          <h2 className="mb-[16px] text-section-title text-center sm:text-left">
            {t("title")}
          </h2>

          <ProjectList projects={projects} tabLabels={tabLabels} />
        </div>
      </Container>
    </section>
  );
};
