import { smoothScroll } from '@/utils';

import { MainNavProps } from './types';

export const MainNav: React.FC<MainNavProps> = ({ navContent, onClick }) => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-[8px] md:flex-row md:gap-[16px]">
        {navContent.map((item, index) => (
          <li key={index}>
            <a
              className="transition_prop focus-visible::scale-110 inline-block cursor-pointer hover:scale-110"
              href={`/#${item.key}`}
              onClick={e => {
                if (onClick) onClick();
                smoothScroll(e, item.key);
              }}
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
