"use client";

import { useState } from "react";

import {
  Container,
  LangToggle,
  MainNav,
  MobileMenu,
  ThemeToggle,
  BurgerBtn,
} from "@components";

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
      <Container>
        <div className="hidden md:flex items-center gap-[16px] md:gap-[32px] py-[16px]">
          <LangToggle />
          <ThemeToggle />
          <MainNav navContent={navContent} />
        </div>

        <div className="relative">
          <BurgerBtn onClick={toggleMenu} />
        </div>
      </Container>

      {isMenuOpen && (
        <MobileMenu navContent={navContent} closeMenu={toggleMenu} />
      )}
    </header>
  );
};

export default AppBar;
