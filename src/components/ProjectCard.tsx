"use client";

import { useState } from "react";
import { useLocale } from "next-intl";

import { FaRegEye } from "react-icons/fa";
import Image from "next/image";

import { Modal, ProjectArticle } from "@components";

import type { Project } from "@types";
import { AnimatePresence } from "framer-motion";

type Props = {
  project: Project;
};

const ProjectCard: React.FC<Props> = ({ project }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const locale = useLocale();

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const { title, images, startDate, tech } = project;
  return (
    <>
      <div className="group flex flex-col w-full h-full p-[8px] sm:p-[16px] rounded-md shadow dark:shadow-zinc-100 bg-white dark:bg-neutral-800 hover:scale-105 focus:outline-none focus:scale-105 transition_prop">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={`/assets/${images[0]}`}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 w-full h-full translate-y-full group-hover:translate-y-0 transition_prop flex items-center justify-center bg-white/80 dark:bg-neutral-800/80">
            <button
              className="text-slate-500 dark:text-white-primary hover:scale-125 focus:outline-none focus:scale-125 transition_prop"
              type="button"
              onClick={toggleModal}
              aria-label={
                locale === "en" ? "View info" : "Переглянути інформацію"
              }
            >
              <FaRegEye size={32} />
            </button>
          </div>
        </div>

        <p className="self-end mb-8px font-extralight text-[14px]">
          {startDate}
        </p>

        <h3 className="mb-8px font-medium text-[16px] md:text-[20px] text-slate-500 dark:text-white text-center">
          {title}
        </h3>

        <p className="font-extralight text-[12px] text-center">{tech}</p>
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

export default ProjectCard;
