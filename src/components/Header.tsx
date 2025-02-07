import React from 'react';
import { Cookie } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full py-6 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <Cookie className="w-12 h-12 md:w-16 md:h-16 text-gray-700 animate-pulse" />
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">Cookie Policy</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;