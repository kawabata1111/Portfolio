import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TextReveal } from './Animators';

const Philosophy: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Text moves slower for parallax
  
  return (
    <section ref={ref} id="philosophy" className="py-32 md:py-48 px-6 md:px-12 bg-[#080808] relative overflow-hidden">
        {/* Background typographic decoration */}
        <motion.div 
            style={{ y: textY }}
            className="absolute top-20 right-0 font-serif text-[20vw] leading-none text-white/5 select-none pointer-events-none vertical-rl opacity-20"
        >
            理念
        </motion.div>

        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
            {/* Image Side */}
            <div className="relative aspect-[3/4] overflow-hidden w-full md:w-[80%] ml-auto">
                <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                     <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
                        alt="Office Abstract"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover grayscale contrast-100 opacity-80"
                    />
                </motion.div>
                <div className="absolute bottom-6 left-6 bg-white text-black p-4 font-mono text-xs">
                    FIG. 01 — ESSENCE
                </div>
            </div>

            {/* Text Side */}
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <span className="font-mono text-xs text-accent mb-6 block tracking-widest">[ PHILOSOPHY ]</span>
                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight font-medium mb-10">
                        美意識と論理の<br/>
                        <span className="italic text-gray-500">交差地点。</span>
                    </h2>
                    
                    <div className="space-y-8 font-sans font-light text-gray-400 leading-8 text-lg max-w-md">
                        <p>
                            デジタルはもはや「仮想」ではなく、「現実」の一部です。
                            私たちは技術的な実装力だけでなく、
                            人の心を動かす「美意識」を重んじます。
                        </p>
                        <p>
                            ノイズの多い現代において、
                            本質的で、静謐で、かつ力強いクリエイティブだけが
                            ブランドの声を届けることができると信じています。
                        </p>
                    </div>
                </motion.div>

                {/* Core Values */}
                <div className="mb-12 grid grid-cols-1 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="border-l-2 border-accent pl-6"
                    >
                        <h4 className="font-sans text-lg font-medium text-white mb-2">Precision</h4>
                        <p className="text-sm text-gray-500">細部へのこだわりが、全体の品質を決定する。</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="border-l-2 border-accent pl-6"
                    >
                        <h4 className="font-sans text-lg font-medium text-white mb-2">Innovation</h4>
                        <p className="text-sm text-gray-500">常識を疑い、新しい可能性を探求し続ける。</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="border-l-2 border-accent pl-6"
                    >
                        <h4 className="font-sans text-lg font-medium text-white mb-2">Partnership</h4>
                        <p className="text-sm text-gray-500">クライアントと共に、ビジョンを現実にする。</p>
                    </motion.div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 md:gap-12 border-t border-white/10 pt-8">
                    <div>
                        <div className="font-serif text-4xl mb-1">150+</div>
                        <div className="font-mono text-xs text-gray-500">PROJECTS</div>
                    </div>
                    <div>
                        <div className="font-serif text-4xl mb-1">98%</div>
                        <div className="font-mono text-xs text-gray-500">SATISFACTION</div>
                    </div>
                    <div>
                        <div className="font-serif text-4xl mb-1">15+</div>
                        <div className="font-mono text-xs text-gray-500">COUNTRIES</div>
                    </div>
                    <div>
                        <div className="font-serif text-4xl mb-1">8</div>
                        <div className="font-mono text-xs text-gray-500">AWARDS</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Philosophy;