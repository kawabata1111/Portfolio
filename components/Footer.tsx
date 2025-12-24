import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-2xl font-display font-black tracking-tighter text-white">
            NEXUS<span className="text-primary">.</span>
        </div>
        <div className="text-gray-600 text-sm">
          &copy; 2024 NEXUS Inc. All Rights Reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm cursor-hover">Twitter</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm cursor-hover">Instagram</a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm cursor-hover">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;