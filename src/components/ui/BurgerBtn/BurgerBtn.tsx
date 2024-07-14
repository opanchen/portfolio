'use client';

import { useEffect, useState } from 'react';
import { useLocale } from 'next-intl';

import { motion } from 'framer-motion';

import { BurgerBtnProps } from './types';

const path01Variants = {
  open: { d: 'M3.06061 2.99999L21.0606 21' },
  closed: { d: 'M0 9.5L24 9.5' },
};

const path02Variants = {
  open: {
    d: 'M3.00006 21.0607L21 3.06064',
    transition: {
      duration: 0.25,
    },
  },
  moving: {
    d: 'M0 14.5L24 14.5',
    transition: {
      duration: 0.25,
    },
  },
  closed: {
    d: 'M0 14.5L15 14.5',
    transition: {
      duration: 0.25,
    },
  },
};

export const BurgerBtn: React.FC<BurgerBtnProps> = ({
  onClick,
  isMenuOpen,
}) => {
  const [animation, setAnimation] = useState<'closed' | 'open' | 'moving'>(
    'closed',
  );

  useEffect(() => {
    isMenuOpen ? setAnimation('open') : setAnimation('closed');
  }, [isMenuOpen]);

  const locale = useLocale();

  const getLabel = () => {
    if (animation === 'closed') {
      return locale === 'en' ? 'Open menu' : 'Відкрити меню';
    }

    if (animation === 'open') {
      return locale === 'en' ? 'Close menu' : 'Закрити меню';
    }

    return locale === 'en' ? 'Mobile menu' : 'Меню';
  };

  const handleClick = () => {
    setAnimation('moving');
    setTimeout(() => {
      setAnimation(animation === 'closed' ? 'open' : 'closed');
      onClick();
    }, 200);
  };

  return (
    <button
      onClick={handleClick}
      aria-label={getLabel()}
      className="transition_prop absolute right-0 top-[16px] z-10 stroke-current hover:scale-110 focus:scale-110 focus:outline-none md:hidden"
    >
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.path animate={animation} variants={path01Variants} />
        <motion.path animate={animation} variants={path02Variants} />
      </svg>
    </button>
  );
};
