import Link from "next/link";

import { MainNavProps } from "./types";

export const MainNav: React.FC<MainNavProps> = ({ navContent, onClick }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <nav>
      <ul className="flex flex-col items-center gap-[8px] md:flex-row md:gap-[16px]">
        {navContent.map((item, index) => (
          <li key={index} onClick={handleClick}>
            <Link
              href={`#${item.key}`}
              className="inline-block hover:scale-110 focus:scale-110 transition_prop"
            >
              {item.value}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
