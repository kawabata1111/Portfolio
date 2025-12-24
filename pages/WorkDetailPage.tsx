import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { TextReveal } from '../components/Animators';
import { works } from '../data/works';

const WorkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const work = works.find(w => w.id === id);

  if (!work) {
    return <Navigate to="/works" replace />;
  }

  const currentIndex = works.findIndex(w => w.id === id);
  const nextWork = works[(currentIndex + 1) % works.length];
  const prevWork = works[(currentIndex - 1 + works.length) % works.length];

  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Back Button */}
      <div className="px-6 md:px-12 mb-8">
        <div className="max-w-[1600px] mx-auto">
          <Link
            to="/works"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-hover"
          >
            <ArrowLeft size={16} />
            <span className="font-mono text-xs">BACK TO WORKS</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="px-6 md:px-12 pb-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="font-mono text-xs text-accent tracking-widest">{work.category}</span>
              <span className="font-mono text-xs text-gray-500">/</span>
              <span className="font-mono text-xs text-gray-500">{work.year}</span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              <TextReveal>{work.title}</TextReveal>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              {work.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Image */}
      <section className="px-6 md:px-12 mb-24">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/9] overflow-hidden"
          >
            <img
              src={work.images[0]}
              alt={work.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-6 md:px-12 py-24 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div>
              <span className="font-mono text-xs text-gray-500 block mb-2">CLIENT</span>
              <span className="text-white">{work.client}</span>
            </div>
            <div>
              <span className="font-mono text-xs text-gray-500 block mb-2">YEAR</span>
              <span className="text-white">{work.year}</span>
            </div>
            <div>
              <span className="font-mono text-xs text-gray-500 block mb-2">CATEGORY</span>
              <span className="text-white">{work.category}</span>
            </div>
            {work.url && (
              <div>
                <span className="font-mono text-xs text-gray-500 block mb-2">WEBSITE</span>
                <a
                  href={work.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-white transition-colors flex items-center gap-2 cursor-hover"
                >
                  Visit Site <ExternalLink size={14} />
                </a>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-mono text-xs text-accent mb-4 tracking-widest">CHALLENGE</h3>
              <p className="text-gray-400 leading-relaxed">{work.challenge}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="font-mono text-xs text-accent mb-4 tracking-widest">SOLUTION</h3>
              <p className="text-gray-400 leading-relaxed">{work.solution}</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-mono text-xs text-accent mb-4 tracking-widest">RESULT</h3>
              <p className="text-gray-400 leading-relaxed">{work.result}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="font-mono text-xs text-accent mb-4 block tracking-widest">[ GALLERY ]</span>
            <h2 className="font-serif text-3xl md:text-4xl">プロジェクト詳細</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {work.images.slice(1).map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`aspect-[4/3] overflow-hidden ${i === 0 ? 'md:col-span-2' : ''}`}
              >
                <img
                  src={image}
                  alt={`${work.title} - ${i + 2}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <span className="font-mono text-xs text-gray-500 block mb-6">TECH STACK</span>
          <div className="flex flex-wrap gap-4">
            {work.tech.map((tech, i) => (
              <span
                key={i}
                className="font-mono text-sm px-6 py-3 border border-white/20 text-white"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              to={`/works/${prevWork.id}`}
              className="group p-8 border border-white/10 hover:border-white/30 transition-colors cursor-hover"
            >
              <span className="font-mono text-xs text-gray-500 block mb-4">PREVIOUS PROJECT</span>
              <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                {prevWork.title}
              </h3>
            </Link>
            <Link
              to={`/works/${nextWork.id}`}
              className="group p-8 border border-white/10 hover:border-white/30 transition-colors text-right cursor-hover"
            >
              <span className="font-mono text-xs text-gray-500 block mb-4">NEXT PROJECT</span>
              <h3 className="font-serif text-2xl md:text-3xl group-hover:text-accent transition-colors">
                {nextWork.title}
              </h3>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-5xl mb-8">
              このようなプロジェクトを<br />
              一緒に創りませんか？
            </h2>
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

export default WorkDetailPage;
