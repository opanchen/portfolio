"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { LangToggle } from "@/components/ui/LangToggle";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { MainNav } from "@/components/MainNav";
import { BurgerBtn } from "@/components/ui/BurgerBtn";
import { MobileMenu } from "@/components/MobileMenu";

import { AppBarProps } from "./types";

export const AppBar: React.FC<AppBarProps> = ({ navContent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <Container>
          <div className="hidden md:flex items-center gap-[16px] md:gap-[32px] py-[16px]">
            <LangToggle />
            <ThemeToggle />
            <MainNav navContent={navContent} />
          </div>

          <div className="relative">
            <BurgerBtn onClick={toggleMenu} isMenuOpen={isMenuOpen} />
          </div>
        </Container>
        {isMenuOpen && (
          <MobileMenu navContent={navContent} closeMenu={toggleMenu} />
        )}
      </header>
    </>
  );
};
