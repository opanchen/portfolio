'use client';

import { motion } from 'framer-motion';

import { HeroAnimationWrapperProps } from './types';

export const HeroAnimationWrapper: React.FC<HeroAnimationWrapperProps> = ({
  children,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
