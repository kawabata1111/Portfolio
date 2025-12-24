import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from './Animators';
import { ArrowDown } from 'lucide-react';
import Scene3D from './Scene3D';

interface HeroProps {
  startAnimation: boolean;
}

const Hero: React.FC<HeroProps> = ({ startAnimation }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Parallax effect for background
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden px-6 md:px-12" style={{ background: 'radial-gradient(ellipse at center, #0a1628 0%, #050510 50%, #020205 100%)' }}>

      {/* 3D Background - Z-0 */}
      <motion.div style={{ y: bgY, opacity: bgOpacity }} className="absolute inset-0 w-full h-full z-0">
        {/* Render 3D Scene. We wait for startAnimation to be potentially cleaner, but rendering immediately looks better for continuity under preloader */}
        <Scene3D className="w-full h-full" />

        {/* Overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050510] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050510]/50 via-transparent to-[#050510]/50 pointer-events-none" />
      </motion.div>

      {/* Main Content - Z-10 */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-12 gap-4 pointer-events-none">
        <div className="col-span-12 lg:col-span-9 pointer-events-auto">
            {/* 
              We use manual 'start' control for these TextReveals.
              delay is relative to when startAnimation becomes true (after preloader exit).
            */}
            <div className="font-serif font-medium text-[10vw] leading-[1.1] tracking-tighter text-white mix-blend-screen">
                <div className="ml-[5vw]">
                    <TextReveal start={startAnimation} delay={0.2}>未来を</TextReveal>
                </div>
                <div className="ml-[15vw] italic">
                    <TextReveal start={startAnimation} delay={0.4}>実装せよ</TextReveal>
                </div>
            </div>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col justify-end pb-4 lg:pb-10 mt-10 lg:mt-0 pointer-events-auto">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={startAnimation ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 1.0, duration: 1 }}
                className="flex flex-col justify-between h-full space-y-8"
             >
                <div className="hidden lg:block w-[1px] h-32 bg-white/30 origin-top" />
                
                <div className="space-y-6">
                    <p className="font-mono text-xs leading-relaxed text-gray-500 max-w-[200px]">
                        [ MISSION ]<br/>
                        WE ARCHITECT THE UNSEEN.<br/>
                        DIGITAL TRANSFORMATION<br/>
                        FOR VISIONARIES.
                    </p>
                    <p className="font-sans text-sm font-light text-gray-400 leading-7 tracking-wide">
                        NEXUSは、論理と感性を融合させ、
                        企業のポテンシャルを「体験」へと昇華させる
                        デジタル・アーキテクト集団です。
                    </p>
                </div>
             </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={startAnimation ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce z-10"
      >
        <ArrowDown size={24} />
      </motion.div>

      <motion.div 
        initial={{ scaleX: 0 }}
        animate={startAnimation ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="absolute bottom-12 left-0 w-full h-[1px] bg-white/10 origin-left z-10" 
      />
    </section>
  );
};

export default Hero;