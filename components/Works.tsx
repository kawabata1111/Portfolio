import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ParallaxImage, TextReveal } from './Animators';

const works = [
  {
    id: 'silent-oak',
    title: 'SILENT OAK',
    category: 'Branding / Web',
    year: '2024',
    client: 'Silent Oak Inc.',
    description: '伝統と革新を融合させた家具ブランドのデジタルリブランディング。',
    tech: ['Next.js', 'Three.js', 'Shopify'],
    img: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'nebula',
    title: 'NEBULA',
    category: 'App Development',
    year: '2023',
    client: 'Nebula Labs',
    description: '次世代の宇宙観測アプリケーション。ARを活用した星座ガイド機能を搭載。',
    tech: ['React Native', 'ARKit', 'Firebase'],
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'tokyo-future',
    title: 'TOKYO FUTURE',
    category: 'Campaign Strategy',
    year: '2023',
    client: 'Tokyo Metropolitan Gov.',
    description: '東京の未来都市構想を世界に発信するグローバルキャンペーン。',
    tech: ['WebGL', 'GSAP', 'Headless CMS'],
    img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'aero-dynamics',
    title: 'AERO DYNAMICS',
    category: 'Automotive / 3D',
    year: '2023',
    client: 'Aero Motors',
    description: '電気自動車の3Dコンフィギュレーター。リアルタイムレンダリングで車両をカスタマイズ。',
    tech: ['Three.js', 'Blender', 'WebGL'],
    img: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070&auto=format&fit=crop'
  },
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
                <Link to="/works" className="hidden md:flex items-center gap-2 font-mono text-xs hover:text-accent transition-colors cursor-hover group">
                    VIEW ALL PROJECTS <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {works.map((work, i) => (
                    <motion.div
                        key={work.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15 }}
                        className={`group ${i % 2 === 1 ? 'md:mt-32' : ''}`}
                    >
                        <Link to={`/works/${work.id}`} className="block cursor-hover">
                            <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-[#1a1a1a]">
                                <ParallaxImage src={work.img} alt={work.title} className="w-full h-full" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                  <p className="text-sm text-white/90 leading-relaxed mb-4">{work.description}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {work.tech.map((t, idx) => (
                                      <span key={idx} className="text-xs font-mono px-2 py-1 bg-white/10 backdrop-blur-sm text-white/80">
                                        {t}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-start border-t border-white/20 pt-4">
                                <div>
                                    <h3 className="font-sans text-2xl font-medium mb-1 group-hover:text-accent transition-colors">{work.title}</h3>
                                    <p className="font-mono text-xs text-gray-500">{work.category}</p>
                                    <p className="font-mono text-xs text-gray-600 mt-1">{work.client}</p>
                                </div>
                                <span className="font-mono text-xs text-gray-600">{work.year}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

             <div className="mt-12 md:hidden flex justify-center">
                <Link to="/works" className="flex items-center gap-2 font-mono text-xs border border-white/20 px-6 py-3 rounded-full cursor-hover">
                    VIEW ALL PROJECTS
                </Link>
             </div>
        </div>
    </section>
  );
};

export default Works;