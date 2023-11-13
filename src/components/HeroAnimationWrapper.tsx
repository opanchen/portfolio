"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const HeroAnimationWrapper: React.FC<Props> = ({ children }: Props) => {
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

export default HeroAnimationWrapper;
