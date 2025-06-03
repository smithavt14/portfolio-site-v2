import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`px-6 md:px-12 w-full max-w-screen-xl mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
