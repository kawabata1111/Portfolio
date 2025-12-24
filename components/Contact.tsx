import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <p className="font-mono text-accent text-sm mb-8 tracking-widest">[ CONTACT ]</p>
                <h2 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] mb-12 mix-blend-difference">
                    Let's Build<br/>The Future.
                </h2>
                <p className="font-sans text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed">
                    プロジェクトのご相談や、パートナーシップについて。<br/>
                    まずは、あなたのビジョンをお聞かせください。
                </p>

                <a 
                    href="mailto:hello@nexus.jp" 
                    className="inline-block relative group cursor-hover"
                >
                    <span className="font-sans font-light text-4xl md:text-6xl border-b border-gray-600 pb-2 group-hover:text-white group-hover:border-white transition-all duration-300">
                        hello@nexus.jp
                    </span>
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
                </a>
            </motion.div>
        </div>
    </section>
  );
};

export default Contact;