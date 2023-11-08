import type { Project } from "@types";

import { ProjectCard } from "@components";

type Props = {
  projects: Project[];
};

const ProjectList: React.FC<Props> = ({ projects }) => {
  return (
    <ul className="flex flex-col flex-wrap gap-[16px] sm:flex-row md:gap-[32px]">
      {projects.map((project) => (
        <li className="project-grid_item" key={project.title}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
