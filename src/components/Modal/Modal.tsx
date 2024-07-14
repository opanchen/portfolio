'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useLocale } from 'next-intl';

import { motion } from 'framer-motion';

import { AiOutlineClose } from 'react-icons/ai';

import { ModalProps } from './type';

const flip = {
  hidden: {
    transform: 'scale(0) rotateX(-360deg)',
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: ' scale(1) rotateX(0deg)',
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: 'scale(0) rotateX(360deg)',
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const locale = useLocale();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };
  return createPortal(
    <motion.div
      className="fixed bottom-0 left-0 right-0 top-0 z-20 flex h-full w-full items-center justify-center bg-gray-800/80"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={e => e.stopPropagation()}
        className="flex max-h-[95%] w-[90%] flex-col gap-[16px] overflow-scroll rounded-md bg-neutral-800 text-white-primary shadow shadow-zinc-100 sm:w-[448px] md:w-[640px]"
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="transition_prop translate-x-[-16px] translate-y-[16px] self-end hover:scale-125 focus:scale-125 focus:outline-none"
          onClick={onClose}
          type="button"
          aria-label={locale === 'en' ? 'Close' : 'Закрити'}
        >
          <AiOutlineClose size={20} />
        </button>
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById('modal')!,
  );
};
