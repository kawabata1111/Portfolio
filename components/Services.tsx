import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { TextReveal } from './Animators';

const services = [
  {
    id: '01',
    title: 'Strategy',
    jp: '戦略策定',
    description: 'ビジネス目標とユーザーニーズを深く理解し、デジタル戦略の青写真を描きます。',
    features: ['市場分析', 'KPI設計', 'ロードマップ策定'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'Art Direction',
    jp: '視覚演出',
    description: 'ブランドの世界観を視覚言語に翻訳し、一貫性のあるビジュアルアイデンティティを構築します。',
    features: ['ブランディング', 'UI/UXデザイン', 'モーション設計'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'Development',
    jp: '高度実装',
    description: '最新技術とベストプラクティスを駆使し、スケーラブルで保守性の高いシステムを構築します。',
    features: ['フロントエンド', 'バックエンド', 'インフラ構築'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'Experience',
    jp: '体験設計',
    description: 'ユーザーの心理と行動を分析し、記憶に残る体験をデザインします。',
    features: ['UXリサーチ', 'プロトタイピング', 'ユーザビリティテスト'],
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '05',
    title: 'Growth',
    jp: '事業成長',
    description: 'データドリブンなアプローチで継続的な成長を実現し、ビジネスを次のステージへ導きます。',
    features: ['グロースハック', 'データ分析', 'マーケティング支援'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // Use Framer Motion values for performant updates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the image following
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // We want the image centered on the cursor, relative to the viewport or container
    // Using relative to viewport for simplified fixed positioning logic or container logic.
    // Here we use fixed-like positioning relative to the section.
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - 200); // -200 is half of image width (400px)
    mouseY.set(e.clientY - rect.top - 150);  // -150 is half of image height (300px)
  };

  return (
    <section 
        id="services" 
        className="relative py-32 md:py-48 px-6 md:px-12 bg-background z-20 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="mb-24 flex items-end justify-between border-b border-white/20 pb-8">
            <h2 className="font-serif text-4xl md:text-6xl text-white">
                <TextReveal>Expertise</TextReveal>
            </h2>
            <span className="font-mono text-xs text-gray-500">[ SERVICES ]</span>
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              className="group relative border-b border-white/10 py-10 md:py-14 cursor-hover transition-colors hover:bg-white/5 z-10"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pointer-events-none">
                <div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                    <span className="font-mono text-sm text-gray-500 group-hover:text-accent transition-colors">/{service.id}</span>
                    <div>
                      <h3 className="font-sans text-3xl md:text-5xl font-light tracking-tight text-gray-300 group-hover:text-white group-hover:pl-2 transition-all duration-500 ease-out">
                          {service.title}
                      </h3>
                      <p className="mt-3 text-sm text-gray-500 max-w-md leading-relaxed group-hover:text-gray-400 transition-colors">
                          {service.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-xs font-mono px-3 py-1 border border-white/10 text-gray-500 group-hover:border-accent/50 group-hover:text-accent transition-colors">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                </div>
                <span className="font-serif text-sm md:text-lg text-gray-600 group-hover:text-white transition-colors hidden md:block md:mt-2">
                    {service.jp}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Image Reveal */}
      <motion.div
        style={{ 
            x: springX, 
            y: springY,
            opacity: hoveredIndex !== null ? 1 : 0,
            scale: hoveredIndex !== null ? 1 : 0.5,
        }}
        className="pointer-events-none absolute top-0 left-0 w-[400px] h-[300px] z-0 hidden lg:block overflow-hidden rounded-sm"
      >
        <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
                <motion.img
                    key={hoveredIndex}
                    src={services[hoveredIndex].image}
                    alt="Service Preview"
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover grayscale contrast-125 brightness-75"
                />
            )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Services;