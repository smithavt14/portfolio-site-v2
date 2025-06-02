'use client';

import { useEffect, useState } from 'react';

const themes = ['sunset', 'forest', 'abyss', 'coffee'];

export default function ThemeToggle() {
  const [currentTheme, setCurrentTheme] = useState('cupcake');

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const theme = savedTheme && themes.includes(savedTheme) ? savedTheme : themes[0]; // default to sunset
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  const handleThemeChange = (theme: string) => {
    setCurrentTheme(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048">
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl">
        {themes.map((theme) => (
          <li key={theme}>
            <input
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-ghost justify-start w-full"
              aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
              value={theme}
              checked={currentTheme === theme}
              onChange={() => handleThemeChange(theme)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
} 