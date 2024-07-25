'use client';

import { smoothScroll } from '@/utils';

import { HeroButtonProps } from './types';

export const HeroButton: React.FC<HeroButtonProps> = ({ label }) => {
  return (
    <a
      href="/"
      onClick={e => {
        smoothScroll(e, 'contacts');
      }}
      className="gradient-primary transition_prop bg-white f group flex w-full cursor-pointer justify-center self-center rounded-xl px-[16px] py-[8px] text-[18px] font-medium uppercase text-white-primary shadow-sm hover:shadow-md focus-visible:shadow-md dark:bg-black-secondary dark:shadow-white-shadow sm:self-start xl:w-[400px]"
    >
      <span className="transition_prop inline-block group-hover:scale-110">
        {label}
      </span>
    </a>
  );
};
