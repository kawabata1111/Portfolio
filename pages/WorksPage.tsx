import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { TextReveal, ParallaxImage } from '../components/Animators';
import { works } from '../data/works';

const categories = ['All', 'Branding', 'Web', 'App', 'E-Commerce', '3D'];

const WorksPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredWorks = activeCategory === 'All'
    ? works
    : works.filter(work => work.category.toLowerCase().includes(activeCategory.toLowerCase()));

  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 pb-16 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-accent mb-6 block tracking-widest">[ WORKS ]</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              <TextReveal>実績紹介</TextReveal>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              私たちが手がけたプロジェクトの一部をご紹介します。<br className="hidden md:block" />
              各プロジェクトの詳細をご覧ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 md:px-12 border-b border-white/10 sticky top-0 bg-background/80 backdrop-blur-lg z-30">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-mono text-xs px-4 py-2 border transition-colors whitespace-nowrap cursor-hover ${
                  activeCategory === category
                    ? 'border-accent text-accent'
                    : 'border-white/20 text-gray-400 hover:border-white/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {filteredWorks.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`group ${i % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <Link to={`/works/${work.id}`} className="block cursor-hover">
                  <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-[#1a1a1a]">
                    <ParallaxImage src={work.thumbnail} alt={work.title} className="w-full h-full" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-20 h-20 rounded-full border border-white flex items-center justify-center">
                        <ArrowUpRight size={24} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-t border-white/20 pt-4">
                    <div>
                      <h3 className="font-sans text-2xl font-medium mb-1 group-hover:text-accent transition-colors">
                        {work.title}
                      </h3>
                      <p className="font-mono text-xs text-gray-500">{work.category}</p>
                      <p className="text-sm text-gray-400 mt-2 max-w-md">{work.description}</p>
                    </div>
                    <span className="font-mono text-xs text-gray-600">{work.year}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-serif text-5xl md:text-6xl mb-2">150+</div>
              <div className="font-mono text-xs text-gray-500">TOTAL PROJECTS</div>
            </div>
            <div>
              <div className="font-serif text-5xl md:text-6xl mb-2">50+</div>
              <div className="font-mono text-xs text-gray-500">CLIENTS</div>
            </div>
            <div>
              <div className="font-serif text-5xl md:text-6xl mb-2">15+</div>
              <div className="font-mono text-xs text-gray-500">COUNTRIES</div>
            </div>
            <div>
              <div className="font-serif text-5xl md:text-6xl mb-2">8</div>
              <div className="font-mono text-xs text-gray-500">AWARDS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              あなたのプロジェクトも<br />
              ここに加えませんか？
            </h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              NEXUSと一緒に、次のビッグプロジェクトを創りましょう。<br />
              まずはお気軽にご相談ください。
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors cursor-hover"
            >
              <span className="font-mono text-sm">お問い合わせ</span>
              <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorksPage;
