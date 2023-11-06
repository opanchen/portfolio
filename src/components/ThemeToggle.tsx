"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const ThemeToggle: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const getBtnClassNames = (mode: "dark" | "light") => {
    return `p-[4px] text-[14px] ${
      theme === mode && "border-b-[2px] border-orange-500"
    }`;
  };

  return (
    <ul className="flex gap-[8px]">
      <li>
        <button
          type="button"
          className={getBtnClassNames("light")}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
      </li>
      <li>
        <button
          type="button"
          className={getBtnClassNames("dark")}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
      </li>
    </ul>
  );
};

export default ThemeToggle;
