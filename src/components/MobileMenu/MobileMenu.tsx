"use client";

import { useEffect } from "react";

import { motion } from "framer-motion";

import { MainNav } from "@components/MainNav";
import { LangToggle } from "@components/ui/LangToggle";
import { ThemeToggle } from "@components/ui/ThemeToggle";

import { MobileMenuProps } from "./types";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  navContent,
  closeMenu,
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed z-[1] top-0 left-0 bottom-0 w-screen h-screen  bg-white-secondary dark:bg-black-primary md:hidden"
    >
      <div className="flex flex-col items-center justify-center gap-[80px] w-full h-full">
        <div className="w-[280px] sm:w-full px-[20px] flex items-center justify-between sm:justify-center  sm:gap-[160px]">
          <LangToggle />
          <ThemeToggle />
        </div>

        <MainNav navContent={navContent} onClick={closeMenu} />
      </div>
    </motion.div>
  );
};
