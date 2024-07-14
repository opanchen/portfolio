'use client';

import { useEffect, useState } from 'react';

import { FaArrowUp } from 'react-icons/fa6';

import { ScrollToTopBtnProps } from './types';

export const ScrollToTopBtn: React.FC<ScrollToTopBtnProps> = ({ label }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // if the user scrolls down, show the button
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };
    // listen for scroll events
    window.addEventListener('scroll', toggleVisibility);

    // clear the listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // handles the animation when scrolling to the top
  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'auto',
      });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={label}
      className={`gradient-primary-alpha transition_prop fixed bottom-4 right-4 z-10 rounded-full border-[1px] p-2 text-white-primary shadow-sm outline-none hover:scale-110 hover:shadow focus:scale-110 focus:shadow focus:outline-none dark:shadow-white-shadow md:bottom-5 md:right-5 xl:bottom-8 xl:right-8 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};
