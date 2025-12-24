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
  const chars = Array.from(children);
  const isManualControl = start !== undefined;

  // グリッチアニメーション
  const glitchVariants = {
    hidden: {
      opacity: 0,
      x: () => Math.random() * 40 - 20,
      y: () => Math.random() * 40 - 20,
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    }
  };

  return (
    <span className={`inline-block overflow-visible align-bottom pb-[0.1em] -mb-[0.1em] ${className}`}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial="hidden"
          animate={isManualControl ? (start ? "visible" : "hidden") : undefined}
          whileInView={!isManualControl ? "visible" : undefined}
          viewport={!isManualControl ? { once: true } : undefined}
          variants={glitchVariants}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
            opacity: { duration: 0.3 },
            filter: { duration: 0.4 },
            x: {
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            },
            y: {
              duration: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 15
            }
          }}
          className="inline-block whitespace-pre"
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.5)" }}
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
        <img src={src} alt={alt} loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
};