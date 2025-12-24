import React from 'react';

const Navigation: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-start pointer-events-none mix-blend-exclusion text-white">
      <a href="#" className="pointer-events-auto cursor-hover group">
        <div className="font-sans font-bold text-xl tracking-tighter leading-none">
          NEXUS
        </div>
        <div className="text-[10px] font-mono opacity-60 tracking-widest mt-1 group-hover:opacity-100 transition-opacity">
          EST. 2024
        </div>
      </a>
    </header>
  );
};

export default Navigation;
