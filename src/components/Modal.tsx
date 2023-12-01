"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocale } from "next-intl";

import { motion } from "framer-motion";

import { AiOutlineClose } from "react-icons/ai";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Modal: React.FC<Props> = ({ children, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const locale = useLocale();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };
  return createPortal(
    <motion.div
      className="fixed left-0 right-0 top-0 bottom-0 z-20 w-full h-full flex items-center justify-center bg-gray-800/80"
      onClick={handleBackdropClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="overflow-scroll max-h-[95%] w-[90%] sm:w-[448px] md:w-[640px] rounded-md flex flex-col gap-[16px] bg-neutral-800 text-white-primary shadow shadow-zinc-100"
        variants={flip}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="self-end translate-x-[-16px] translate-y-[16px] hover:scale-125 focus:outline-none focus:scale-125 transition_prop"
          onClick={onClose}
          type="button"
          aria-label={locale === "en" ? "Close" : "Закрити"}
        >
          <AiOutlineClose size={20} />
        </button>
        {children}
      </motion.div>
    </motion.div>,
    document.getElementById("modal")!
  );
};

export default Modal;
