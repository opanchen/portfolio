'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

import { AnimatePresence } from 'framer-motion';
import { FaRegEye } from 'react-icons/fa';

import { Modal } from '@/components/Modal';
import { ProjectArticle } from '@/components/ProjectArticle';

import { ProjectCardProps } from './types';

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [focus, setFocus] = useState(false);

  const locale = useLocale();

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const { name, images, year, techList } = project;

  const tech = techList.map(item => item.name).join(' • ');

  const imagePlaceholderPath = '/assets/images/placeholder.jpg';
  return (
    <>
      <div
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        tabIndex={0}
        className={`transition_prop group flex h-full w-full flex-col rounded-md bg-white-primary p-[8px] shadow hover:scale-105 focus:scale-105 focus:outline-none dark:bg-black-secondary dark:shadow-white-shadow sm:p-[16px] ${focus ? 'scale-105' : ''}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <div className="h-full w-full">
            <Image
              src={(images && images[0]?.path) || imagePlaceholderPath}
              alt={name}
              width={400}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div
            className={`transition_prop absolute bottom-0 left-0 flex h-full w-full translate-y-full items-center justify-center bg-white-primary/80 group-hover:translate-y-0 dark:bg-black-secondary/80 ${focus ? 'translate-y-0' : ''}`}
          >
            <button
              className="eye-btn transition_prop relative text-gray-primary hover:scale-125 focus:scale-125 dark:text-white-primary"
              type="button"
              onClick={toggleModal}
              aria-label={
                locale === 'en' ? 'View info' : 'Переглянути інформацію'
              }
            >
              <span className="eye-btn_icon block text-gray-primary dark:text-white-primary">
                <FaRegEye size={32} />
              </span>
            </button>
          </div>
        </div>

        <p className="mb-8px self-end text-[14px] font-extralight">{year}</p>

        <h3 className="mb-8px text-center text-[16px] font-medium text-gray-primary dark:text-white-primary md:text-[20px]">
          {name}
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
