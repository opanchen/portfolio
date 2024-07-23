'use client';

import { useState, useEffect } from 'react';

import { useTheme } from 'next-themes';
import { useLocale } from 'next-intl';

import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

export const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const label = locale === 'en' ? 'Toggle theme mode' : 'Перемкнути режим теми';

  return (
    <>
      <button
        className="transition_prop relative flex h-[24px] w-[56px] cursor-pointer items-center rounded-full bg-blue-sky p-[4px] shadow-sm hover:scale-110 hover:shadow focus:scale-110 focus:shadow dark:bg-black-primary dark:shadow-white-shadow"
        onClick={toggleTheme}
        type="button"
        aria-label={label}
      >
        <FaMoon className={'text-white-primary'} size={16} />
        <div
          className="absolute h-[20px] w-[20px] transform rounded-full bg-white-primary shadow-md transition-transform duration-300"
          style={theme === 'dark' ? { left: '2px' } : { right: '2px' }}
        ></div>
        <BsSunFill className={'ml-auto text-yellow'} size={16} />
      </button>
    </>
  );
};
