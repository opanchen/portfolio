"use client";

import { useState } from "react";

import { ProjectCard, ProjectsTab } from "@components";

import type { Project, TabLabels } from "@types";

type Props = {
  projects: Project[];
  tabLabels: TabLabels;
};

const ProjectList: React.FC<Props> = ({ projects, tabLabels }) => {
  const [filter, setFilter] = useState("all");

  const handleTabClick = (tab: string) => {
    setFilter(tab);
  };

  const filteredProjects = projects.filter(({ tags }) => tags.includes(filter));

  return (
    <div>
      <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-[8px] md:gap-[16px] mb-[16px] sm:pr-[16px]">
        {Object.keys(tabLabels).map((key) => {
          return (
            <li key={key}>
              <ProjectsTab
                tab={key}
                name={tabLabels[key]}
                isSelected={filter === key}
                onClick={handleTabClick}
              />
            </li>
          );
        })}
      </ul>

      <ul className="flex flex-col flex-wrap gap-[16px] sm:flex-row md:gap-[32px]">
        {filteredProjects.map((project) => (
          <li className="project-grid_item" key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
