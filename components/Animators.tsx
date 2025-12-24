import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

// --- Text Reveal Animation ---
interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  /**
   * If provided, animation will trigger based on this boolean instead of scroll position.
   * Useful for Hero sections that depend on Preloader completion.
   */
  start?: boolean; 
}

export const TextReveal: React.FC<TextRevealProps> = ({ children, className = "", delay = 0, start }) => {
  // Split text into characters
  const chars = Array.from(children);
  
  // Determine animation props based on whether manual 'start' control is used
  const isManualControl = start !== undefined;
  
  // If manual control is used, we animate when start is true.
  // If not, we animate whileInView.
  const animationProps = isManualControl 
    ? { animate: start ? { y: 0 } : { y: "110%" } }
    : { initial: { y: "110%" }, whileInView: { y: 0 }, viewport: { once: true } };

  return (
    <span className={`inline-block overflow-hidden align-bottom pb-[0.1em] -mb-[0.1em] ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: "110%" }}
          {...animationProps}
          transition={{ 
            duration: 1, 
            ease: [0.16, 1, 0.3, 1], // Very smooth easing
            delay: delay + i * 0.05 
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

// --- Magnetic Button Effect ---
interface MagneticProps {
  children: React.ReactElement;
  strength?: number; // How strong the pull is
}

export const Magnetic: React.FC<MagneticProps> = ({ children, strength = 0.5 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current!.getBoundingClientRect();
    
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);

    setPosition({ x: x * strength, y: y * strength });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="inline-block" // Ensure it doesn't break layout
    >
      {React.cloneElement(children, {
        className: `${children.props.className || ''}` 
      })}
    </motion.div>
  );
};

// --- Parallax Image ---
interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const ParallaxImage: React.FC<ParallaxImageProps> = ({ src, alt, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Map scroll progress to image translation (parallax effect)
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y, scale }} className="w-full h-[120%] -mt-[10%]">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};