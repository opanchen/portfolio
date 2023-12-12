"use client";

import { useRef } from "react";

import { motion, useInView } from "framer-motion";

import TechLogo from "./ui/TechLogo";

import techStack from "../data/tech-stack.json";

const StackList: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <ul
      ref={ref}
      className="shrink-0 md:w-[336px] xl:w-1/2 flex gap-[16px] flex-wrap"
    >
      {techStack.map(({ name, image }, index) => {
        return (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={name}
            className="stack-card aspect-[3/4] flex flex-col justify-center items-center gap-[8px] rounded-md shadow dark:shadow-zinc-100 bg-white-primary text-slate-500 dark:bg-neutral-800 dark:text-white-primary"
          >
            <TechLogo src={image} alt={name} size={54} />
            <p className="font-extralight text-[12px]">{name}</p>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default StackList;
