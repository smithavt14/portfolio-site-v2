"use client";

import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  return (
    <div 
      className="h-12 w-12 rounded-full relative z-[60] bg-base-200 pointer-events-auto cursor-pointer"
      onClick={onClick}
    >
      {/* Span 1 - Top line */}
      <span
        className={`absolute h-[2px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'top-[23px] w-0 left-1/2' 
            : 'top-[16px] w-6 left-3'
        }`}
      />
      
      {/* Span 2 - Middle line (top of X) */}
      <span
        className={`absolute h-[2px] rounded-full bg-primary w-6 left-3 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'top-[23px] rotate-45' 
            : 'top-[23px] rotate-0'
        }`}
      />
      
      {/* Span 3 - Middle line (bottom of X) */}
      <span
        className={`absolute h-[2px] rounded-full bg-primary w-6 left-3 transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'top-[23px] -rotate-45' 
            : 'top-[23px] rotate-0'
        }`}
      />
      
      {/* Span 4 - Bottom line */}
      <span
        className={`absolute h-[2px] rounded-full bg-primary transition-all duration-300 ease-in-out ${
          isOpen 
            ? 'top-[23px] w-0 left-1/2' 
            : 'top-[30px] w-6 left-3'
        }`}
      />
    </div>
  );
};

export default HamburgerButton; 