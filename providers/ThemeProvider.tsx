'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { Theme, getRandomTheme } from '@/lib/theme-config';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dim'); // Default theme to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This runs only on the client side
    setIsClient(true);
    const randomTheme = getRandomTheme();
    setTheme(randomTheme);
    document.documentElement.setAttribute('data-theme', randomTheme);
  }, []);

  // Update the data-theme attribute when theme changes
  useEffect(() => {
    if (isClient) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, isClient]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 