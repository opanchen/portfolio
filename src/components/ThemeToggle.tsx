"use client";

import { useState, useEffect } from "react";

import { useTheme } from "next-themes";
import { useLocale } from "next-intl";

import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle: React.FC = () => {
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
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const label = locale === "en" ? "Toggle theme mode" : "Перемкнути режим теми";

  return (
    <>
      <button
        className="shadow-sm hover:shadow hover:scale-110 focus:outline-none    focus:shadow focus:scale-110 transition_prop dark:shadow-zinc-100 relative w-[56px] h-[24px] p-[4px] flex items-center cursor-pointer bg-sky-200 dark:bg-gray-900 rounded-full"
        onClick={toggleTheme}
        type="button"
        aria-label={label}
      >
        <FaMoon className={"text-white"} size={16} />
        <div
          className="absolute bg-white w-[20px] h-[20px] rounded-full shadow-md transform transition-transform duration-300"
          style={theme === "dark" ? { left: "2px" } : { right: "2px" }}
        ></div>
        <BsSunFill className={"ml-auto text-yellow-400"} size={16} />
      </button>
    </>
  );
};

export default ThemeToggle;
