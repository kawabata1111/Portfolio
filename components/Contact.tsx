import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 bg-[#050505] relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
            {/* Main CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-center mb-24"
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

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 border-t border-white/10 pt-16">
                {/* Office */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h3 className="font-mono text-xs text-gray-500 mb-4 tracking-widest">OFFICE</h3>
                    <p className="font-sans text-white leading-relaxed">
                        〒150-0001<br/>
                        東京都渋谷区神宮前3-1-1<br/>
                        NEXUS Building 5F
                    </p>
                    <a href="#" className="inline-flex items-center gap-2 text-sm text-accent mt-4 group cursor-hover">
                        Google Maps <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <h3 className="font-mono text-xs text-gray-500 mb-4 tracking-widest">BUSINESS HOURS</h3>
                    <p className="font-sans text-white leading-relaxed">
                        月曜日 - 金曜日<br/>
                        10:00 - 19:00<br/>
                        <span className="text-gray-500">土日祝休業</span>
                    </p>
                    <p className="text-sm text-gray-500 mt-4">
                        ※ オンラインMTGも対応可能です
                    </p>
                </motion.div>

                {/* Social */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <h3 className="font-mono text-xs text-gray-500 mb-4 tracking-widest">FOLLOW US</h3>
                    <div className="flex flex-col gap-3">
                        <a href="#" className="font-sans text-white hover:text-accent transition-colors cursor-hover flex items-center gap-2 group">
                            Twitter / X <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="#" className="font-sans text-white hover:text-accent transition-colors cursor-hover flex items-center gap-2 group">
                            Instagram <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="#" className="font-sans text-white hover:text-accent transition-colors cursor-hover flex items-center gap-2 group">
                            LinkedIn <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <a href="#" className="font-sans text-white hover:text-accent transition-colors cursor-hover flex items-center gap-2 group">
                            Dribbble <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
