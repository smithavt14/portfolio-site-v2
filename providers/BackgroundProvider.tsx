'use client';

import { createContext, useContext, useState } from 'react';
import { PatternType } from '@/components/Background/types';

type BackgroundContextType = {
  pattern: PatternType;
  setPattern: (pattern: PatternType) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [pattern, setPattern] = useState<PatternType>('flow');

  return (
    <BackgroundContext.Provider value={{ pattern, setPattern }}>
      {children}
    </BackgroundContext.Provider>
  );
}

// Custom hook to use the background context
export function useBackground() {
  const context = useContext(BackgroundContext);
  if (context === undefined) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
} 