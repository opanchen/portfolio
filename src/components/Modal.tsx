"use client";

import { useEffect } from "react";
import { useLocale } from "next-intl";

import { AiOutlineClose } from "react-icons/ai";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
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
  return (
    <div
      className="fixed left-0 right-0 top-0 bottom-0 z-20 w-full h-full flex items-center justify-center bg-gray-800/80"
      onClick={handleBackdropClick}
    >
      <div className="overflow-scroll max-h-[95%] w-[90%] sm:w-[448px] md:w-[640px] rounded-md flex flex-col gap-[16px] bg-neutral-800 text-white-primary shadow shadow-zinc-100">
        <button
          className="self-end translate-x-[-16px] translate-y-[16px] hover:scale-125 focus:outline-none focus:scale-125 transition_prop"
          onClick={onClose}
          type="button"
          aria-label={locale === "en" ? "Close" : "Закрити"}
        >
          <AiOutlineClose size={20} />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
