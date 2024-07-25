'use client';

import { useRef } from 'react';

import { useInView } from 'framer-motion';

import { TechCard } from '@/components/ui/TechCard';

import { StackListProps } from './types';

export const StackList: React.FC<StackListProps> = ({ techStack }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <ul
      ref={ref}
      className="flex shrink-0 flex-wrap gap-[16px] md:w-[336px] xl:w-1/2"
    >
      {techStack.map(({ name, src }, idx) => {
        return (
          <TechCard
            name={name}
            src={src}
            delay={idx * 0.4}
            isInView={isInView}
            key={idx}
          />
        );
      })}
    </ul>
  );
};
