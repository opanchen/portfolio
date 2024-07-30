'use client';

import { useState, useRef, useMemo } from 'react';

import { motion, useInView } from 'framer-motion';

import { ProjectCard } from '@/components/ui/ProjectCard';
import { ProjectsTab } from '@/components/ui/ProjectsTab';

import { useWindowDimensions } from '@/utils/useWindowDimensions';

import { ProjectListProps } from './types';

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  tabLabels,
  showMoreBtnLabel,
}) => {
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTabClick = (tab: string) => {
    setFilter(tab);
    setPage(1);
  };

  const { width } = useWindowDimensions();

  const limit = width && width >= 1024 ? 9 : width && width < 768 ? 6 : 8;

  const filteredProjects = useMemo(() => {
    return filter === 'all'
      ? projects
      : projects.filter(({ tags }) => tags === filter);
  }, [filter, projects]);

  const shownProjects = filteredProjects.slice(0, limit * page);

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="flex flex-col">
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
        {shownProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{
              duration: 0.3,
              delay: page === 1 ? index * 0.4 : (index - limit + 1) * 0.4,
            }}
            className="project-grid_item"
            key={project.name}
          >
            <ProjectCard project={project} />
          </motion.li>
        ))}

        {/* TODO: Make fallback or smth like that to use empty space  */}
        {/* {filter !== 'all' && limit === 9 && shownProjects.length < limit && (
          <div className="project-grid_item h-[408px]"></div>
        )} */}
      </ul>

      {shownProjects.length < filteredProjects.length && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: shownProjects.length * 0.4 }}
          type="button"
          className={`focus-shadow transition_prop mt-4 inline-block min-w-[54px] cursor-pointer self-center rounded-xl border-[1px] bg-white-primary px-[8px] py-[4px] text-[12px] font-medium text-gray-primary shadow-sm hover:scale-110 hover:shadow focus:scale-110 dark:bg-black-secondary dark:text-white-primary dark:shadow-white-shadow sm:text-[14px] md:mt-6 xl:text-[16px]`}
          onClick={() => {
            setPage(page => page + 1);
          }}
        >
          {showMoreBtnLabel}
        </motion.button>
      )}
    </div>
  );
};
