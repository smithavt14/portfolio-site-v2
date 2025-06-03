"use client";

import { useEffect, useState } from "react";
import { themes, type Theme } from "@/lib/theme-config";

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState<Theme>("sunset");

  // Read the initial theme from the HTML data-theme attribute set by the server
  useEffect(() => {
    const htmlElement = document.documentElement;
    const initialTheme = htmlElement.getAttribute("data-theme") as Theme;
    if (initialTheme && themes.includes(initialTheme)) {
      setCurrentTheme(initialTheme);
    }
  }, []);

  const changeTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className="dropdown dropdown-center mx-auto">
      <div
        tabIndex={0}
        role="button"
        className="flex items-center gap-2 text-primary hover:opacity-70 transition-opacity cursor-pointer bg-base-200 rounded-box p-2"
      >
        <span className="capitalize text-sm text-primary font-extralight">
          Theme
        </span>
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-200 rounded-box z-10 w-32 p-2 shadow-lg border border-base-300"
      >
        {themes.map((theme) => {
          return (
            <li key={theme}>
              <a
                onClick={() => changeTheme(theme)}
                className={`flex items-center gap-2 ${
                  theme === currentTheme ? "active text-primary font-light" : "font-extralight"
                }`}
              >
                <span className="capitalize text-sm ">
                  {theme}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
