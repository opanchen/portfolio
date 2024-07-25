'use client';

import { useEffect } from 'react';

import { motion } from 'framer-motion';

import { MainNav } from '@/components/MainNav';
import { LangToggle } from '@/components/ui/LangToggle';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

import {
  disablePageTabFocusMobMenu,
  restorePageTabFocusMobMenu,
} from '@/utils';

import { MobileMenuProps } from './types';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'spring',
      damping: 25,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  navContent,
  closeMenu,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    disablePageTabFocusMobMenu();
    return () => {
      document.body.style.overflow = 'unset';
      restorePageTabFocusMobMenu();
    };
  }, []);

  return (
    <motion.div
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed bottom-0 left-0 top-0 z-[1] h-screen w-screen bg-white-secondary dark:bg-black-primary md:hidden"
    >
      <div className="flex h-full w-full flex-col items-center justify-center gap-[80px]">
        <div className="flex w-[280px] items-center justify-between px-[20px] sm:w-full sm:justify-center sm:gap-[160px]">
          <LangToggle />
          <ThemeToggle />
        </div>

        <MainNav navContent={navContent} onClick={closeMenu} />
      </div>
    </motion.div>
  );
};
