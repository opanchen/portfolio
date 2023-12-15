"use client";

import { useEffect, useState } from "react";

import { FaArrowUp } from "react-icons/fa6";

const ScrollToTopBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener("scroll", toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed z-10 bottom-4 right-4 md:bottom-5 md:right-5 xl:bottom-8 xl:right-8 rounded-full p-2 outline-none border-[1px]  gradient-primary-alpha text-white-primary shadow-sm dark:shadow-white-shadow transition_prop hover:scale-110 hover:shadow focus:scale-110 focus:shadow focus:outline-none ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopBtn;
