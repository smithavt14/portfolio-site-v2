import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  /**
   * Whether to use flex layout with justify-between (like Hero)
   * If false, allows for custom layout (grid, etc.)
   */
  useFlexBetween?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = '', 
  useFlexBetween = false 
}) => {
  const baseClasses = "w-full min-h-[var(--mobile-layout-height)] md:min-h-[var(--layout-height)] py-10 relative box-border";
  const flexClasses = useFlexBetween ? "flex flex-col justify-between" : "";
  
  return (
    <section 
      id={id}
      className={`${baseClasses} ${flexClasses} ${className}`}
    >
      {children}
    </section>
  );
};

export default Section; 