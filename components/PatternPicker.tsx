'use client';

import { useBackground } from '@/providers/BackgroundProvider';
import { CiWavePulse1 } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";

export default function PatternPicker() {
  const { pattern, setPattern } = useBackground();

  // Toggle between flow and particles patterns
  const togglePattern = () => {
    setPattern(pattern === 'flow' ? 'particles' : 'flow');
  };

  return (
    <button
      onClick={togglePattern}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
      aria-label="Toggle background pattern"
    >
      {pattern === 'flow' ? (
        // Wave icon for flow pattern
        <CiWavePulse1 style={{ height: '20px', width: '20px' }} />
      ) : (
        // Dots icon for particles pattern
        <BsThreeDots style={{ height: '20px', width: '20px' }} />
      )}
    </button>
  );
} 