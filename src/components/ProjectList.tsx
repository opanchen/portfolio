"use client";

import { useState, useRef, useMemo } from "react";

import { motion, useInView } from "framer-motion";

import { ProjectCard, ProjectsTab } from "@components";

import type { Project, TabLabels } from "@types";

type Props = {
  projects: Project[];
  tabLabels: TabLabels;
};

const ProjectList: React.FC<Props> = ({ projects, tabLabels }) => {
  const [filter, setFilter] = useState("all");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabClick = (tab: string) => {
    setFilter(tab);
  };

  // const filteredProjects = projects.filter(({ tags }) => tags.includes(filter));
  const filteredProjects = useMemo(
    () => projects.filter(({ tags }) => tags.includes(filter)),
    [filter, projects]
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

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

      <ul
        ref={ref}
        className="flex flex-col flex-wrap gap-[16px] sm:flex-row md:gap-[32px]"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            className="project-grid_item"
            key={project.title}
          >
            <ProjectCard project={project} />
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
