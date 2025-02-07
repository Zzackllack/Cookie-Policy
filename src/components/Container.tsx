import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {children}
    </div>
  );
};

export default Container;