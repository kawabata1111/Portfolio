import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Magnetic } from './Animators';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-start pointer-events-none mix-blend-exclusion text-white">
        <Link to="/" className="pointer-events-auto cursor-hover group">
          <div className="font-sans font-bold text-xl tracking-tighter leading-none">
            NEXUS
          </div>
          <div className="text-[10px] font-mono opacity-60 tracking-widest mt-1 group-hover:opacity-100 transition-opacity">
            EST. 2024
          </div>
        </Link>

        <Magnetic strength={0.3}>
            <button
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto cursor-hover flex items-center gap-3 group p-4 -m-4"
            >
            <span className="text-xs font-mono uppercase tracking-widest hidden md:block group-hover:opacity-70 transition-opacity">Menu</span>
            <div className="space-y-1.5">
                <span className="block w-8 h-[1px] bg-white transition-all group-hover:w-6"></span>
                <span className="block w-8 h-[1px] bg-white transition-all group-hover:w-8"></span>
            </div>
            </button>
        </Magnetic>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-[#0a0a0a] z-[100] flex items-center justify-center"
          >
            <div className="absolute top-8 right-8 md:right-12">
               <Magnetic>
                 <button
                    onClick={() => setIsOpen(false)}
                    className="cursor-hover text-white flex items-center gap-3 group p-4"
                >
                    <span className="text-xs font-mono uppercase tracking-widest group-hover:opacity-70 transition-opacity">Close</span>
                    <X size={32} strokeWidth={1} />
                </button>
               </Magnetic>
            </div>

            <nav className="flex flex-col items-center gap-6 md:gap-8">
              {navItems.map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                    <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ delay: 0.1 + i * 0.1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`block font-serif text-5xl md:text-7xl lg:text-8xl transition-colors duration-500 cursor-hover tracking-tight ${
                          location.pathname === item.href
                            ? 'text-white'
                            : 'text-transparent hover:text-white'
                        }`}
                        style={{ WebkitTextStroke: location.pathname === item.href ? 'none' : '1px rgba(255,255,255,0.5)' }}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                </div>
              ))}
            </nav>

            {/* Footer Links */}
            <div className="absolute bottom-8 left-8 right-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex gap-6 text-xs font-mono text-gray-500">
                <Link to="/privacy" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors cursor-hover">
                  Privacy
                </Link>
                <Link to="/terms" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors cursor-hover">
                  Terms
                </Link>
              </div>
              <div className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                Tokyo, Japan
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
