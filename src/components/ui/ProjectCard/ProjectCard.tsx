'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

import { AnimatePresence } from 'framer-motion';
import { FaRegEye } from 'react-icons/fa';

import { Modal } from '@/components/Modal';
import { ProjectArticle } from '@/components/ProjectArticle';

import type { Project } from '@/types';

type Props = {
  project: Project;
};

export const ProjectCard: React.FC<Props> = ({ project }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locale = useLocale();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const { title, images, startDate, tech } = project;
  return (
    <>
      <div className="transition_prop group flex h-full w-full flex-col rounded-md bg-white-primary p-[8px] shadow hover:scale-105 focus:scale-105 focus:outline-none dark:bg-black-secondary dark:shadow-white-shadow sm:p-[16px]">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={`/assets/${images[0]}`}
            alt={title}
            width={400}
            height={300}
            className="h-full w-full object-cover"
          />
          <div className="transition_prop absolute bottom-0 left-0 flex h-full w-full translate-y-full items-center justify-center bg-white-primary/80 group-hover:translate-y-0 dark:bg-black-secondary/80">
            <button
              className="eye-btn transition_prop relative text-gray-primary hover:scale-125 focus:scale-125 focus:outline-none dark:text-white-primary"
              type="button"
              onClick={toggleModal}
              aria-label={
                locale === 'en' ? 'View info' : 'Переглянути інформацію'
              }
            >
              <span className="eye-btn_icon block">
                <FaRegEye size={32} />
              </span>
            </button>
          </div>
        </div>

        <p className="mb-8px self-end text-[14px] font-extralight">
          {startDate}
        </p>

        <h3 className="mb-8px text-center text-[16px] font-medium text-gray-primary dark:text-white-primary md:text-[20px]">
          {title}
        </h3>

        <p className="text-center text-[12px] font-extralight">{tech}</p>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <ProjectArticle project={project} />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
};
