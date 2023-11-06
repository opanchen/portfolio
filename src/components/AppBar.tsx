"use client";

import { Container, LangToggle, MainNav, ThemeToggle } from "@components";
import { useState } from "react";

type Props = {
  navContent: { [key: string]: string }[];
};

const AppBar: React.FC<Props> = ({ navContent }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="relative md:border-b-[1px]">
      <div className="hidden md:block">
        <Container>
          <div className="flex items-center gap-[16px] md:gap-[32px] py-[16px]">
            <LangToggle />
            <ThemeToggle />
            <MainNav navContent={navContent} />
          </div>
        </Container>
      </div>

      {isMenuOpen && (
        <div className="fixed z-[1] top-0 left-0 bottom-0 w-screen h-screen  bg-[#eff1ea] dark:bg-[#191919] md:hidden">
          <button
            className="absolute top-[8px] right-[8px]"
            onClick={toggleMenu}
          >
            Close
          </button>

          {/* <Container> */}
          <div className="flex flex-col items-center justify-center gap-[80px] w-full h-full">
            <div className="flex items-center gap-[160px]">
              <LangToggle />
              <ThemeToggle />
            </div>

            <MainNav navContent={navContent} />
          </div>
          {/* </Container> */}
        </div>
      )}

      <button
        className="md:hidden absolute top-[8px] right-[8px]"
        onClick={toggleMenu}
      >
        {isMenuOpen ? "Close" : "Open"}
      </button>
    </header>
  );
};

export default AppBar;
