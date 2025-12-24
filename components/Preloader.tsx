import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Lock scroll
    document.body.style.overflow = 'hidden';

    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(timer);
        return 100;
      });
    }, 20); // Speed of counter

    const timeout = setTimeout(() => {
      onComplete();
    }, 2500);

    return () => {
      // Unlock scroll
      document.body.style.overflow = '';
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
      className="fixed inset-0 z-[99999] bg-[#000] flex items-center justify-center text-white"
    >
      <div className="flex flex-col items-center">
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-9xl font-display font-black tracking-tighter mix-blend-difference"
        >
            {counter}%
        </motion.div>
        <div className="mt-4 h-[1px] w-64 bg-gray-800 rounded-full overflow-hidden">
             <motion.div 
                className="h-full bg-white" 
                initial={{ width: 0 }}
                animate={{ width: `${counter}%` }}
             />
        </div>
      </div>
      
      {/* Background noise for preloader too */}
       <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </motion.div>
  );
};

export default Preloader;