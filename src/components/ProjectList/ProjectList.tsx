'use client';

import { useState, useRef, useMemo } from 'react';

import { motion, useInView } from 'framer-motion';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectsTab } from '@/components/ui/ProjectsTab';

import { ProjectListProps } from './types';

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  tabLabels,
}) => {
  const [filter, setFilter] = useState('all');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabClick = (tab: string) => {
    setFilter(tab);
  };

  const filteredProjects = useMemo(
    () => projects.filter(({ tags }) => tags.includes(filter)),
    [filter, projects],
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div>
      <ul className="mb-[16px] flex flex-wrap items-center justify-center gap-[8px] sm:justify-end sm:pr-[16px] md:gap-[16px]">
        {Object.keys(tabLabels).map(key => {
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
            animate={isInView ? 'animate' : 'initial'}
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
