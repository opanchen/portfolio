"use client";

import Image from "next/image";

import { motion } from "framer-motion";

export const HeroImage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="shrink-[0] relative w-[240px] h-[240px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden gradient-primary shadow dark:shadow-white-shadow sm:self-start"
    >
      <Image
        src="/assets/images/hero.png"
        alt="Picture of the author"
        width={400}
        height={500}
        priority={true}
        className="absolute left-[45%] translate-x-[-50%]"
      />
    </motion.div>
  );
};
