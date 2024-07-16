'use client';

import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';

import { TechLogo } from '@/components/ui/TechLogo';

import { StackListProps } from './types';

export const StackList: React.FC<StackListProps> = ({ techStack }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <ul
      ref={ref}
      className="flex shrink-0 flex-wrap gap-[16px] md:w-[336px] xl:w-1/2"
    >
      {techStack.map(({ name, src }, index) => {
        return (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={name}
            className="stack-card flex aspect-[3/4] flex-col items-center justify-center gap-[8px] rounded-md bg-white-primary text-gray-primary shadow dark:bg-black-secondary dark:text-white-primary dark:shadow-white-shadow"
          >
            <TechLogo src={src} alt={name} size={54} />
            <p className="text-[12px] font-extralight">{name}</p>
          </motion.li>
        );
      })}
    </ul>
  );
};
