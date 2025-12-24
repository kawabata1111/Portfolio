import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ParallaxImage, TextReveal } from './Animators';

const works = [
  { title: 'SILENT OAK', category: 'Branding / Web', year: '2024', img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop' },
  { title: 'NEBULA', category: 'App Development', year: '2023', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop' },
  { title: 'TOKYO FUTURE', category: 'Campaign Strategy', year: '2023', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop' },
  { title: 'AERO DYNAMICS', category: 'Automotive / 3D', year: '2023', img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop' },
];

const Works: React.FC = () => {
  return (
    <section id="works" className="py-32 px-6 md:px-12 bg-background border-t border-white/5">
        <div className="max-w-[1600px] mx-auto">
            <div className="flex justify-between items-end mb-20">
                <div className="overflow-hidden">
                    <h2 className="font-serif text-4xl md:text-6xl">
                         <TextReveal>Selected Works</TextReveal>
                    </h2>
                </div>
                <a href="#" className="hidden md:flex items-center gap-2 font-mono text-xs hover:text-accent transition-colors cursor-hover group">
                    VIEW ALL PROJECTS <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {works.map((work, i) => (
                    <motion.div 
                        key={i}
                        className={`group cursor-hover ${i % 2 === 1 ? 'md:mt-32' : ''}`} // Staggered layout for masonry feel
                    >
                        <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#1a1a1a]">
                            <ParallaxImage src={work.img} alt={work.title} className="w-full h-full" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                        <div className="flex justify-between items-start border-t border-white/20 pt-4">
                            <div>
                                <h3 className="font-sans text-2xl font-medium mb-1 group-hover:text-accent transition-colors">{work.title}</h3>
                                <p className="font-mono text-xs text-gray-500">{work.category}</p>
                            </div>
                            <span className="font-mono text-xs text-gray-600">{work.year}</span>
                        </div>
                    </motion.div>
                ))}
            </div>

             <div className="mt-12 md:hidden flex justify-center">
                <a href="#" className="flex items-center gap-2 font-mono text-xs border border-white/20 px-6 py-3 rounded-full">
                    VIEW ALL PROJECTS
                </a>
             </div>
        </div>
    </section>
  );
};

export default Works;