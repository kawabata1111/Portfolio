import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Users, Target, Award, Building } from 'lucide-react';
import { TextReveal } from '../components/Animators';

const team = [
  {
    name: '田中 健太',
    role: 'CEO / Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
    description: '10年以上のデジタル戦略経験。前職ではグローバル企業のDX推進を統括。'
  },
  {
    name: '佐藤 美咲',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    description: '国際的なデザインアワード複数受賞。ブランド構築のスペシャリスト。'
  },
  {
    name: '山田 翔太',
    role: 'Tech Lead',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    description: 'フルスタックエンジニア。大規模システムの設計・構築に精通。'
  },
  {
    name: '鈴木 恵',
    role: 'UX Director',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
    description: 'ユーザーリサーチからプロトタイピングまで、体験設計の全工程を担当。'
  },
];

const milestones = [
  { year: '2020', title: '創業', description: '東京・渋谷にてNEXUS Inc.設立' },
  { year: '2021', title: '初の大型案件受注', description: '上場企業のリブランディングプロジェクトを担当' },
  { year: '2022', title: 'チーム拡大', description: '従業員20名突破、海外クライアント対応開始' },
  { year: '2023', title: '受賞', description: 'Awwwards Site of the Day 3回受賞' },
  { year: '2024', title: 'グローバル展開', description: 'シンガポールオフィス開設' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pt-32">
      {/* Hero Section */}
      <section className="px-6 md:px-12 pb-24 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-accent mb-6 block tracking-widest">[ ABOUT US ]</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              <TextReveal>私たちについて</TextReveal>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              NEXUSは、デジタルとクリエイティブの力で<br className="hidden md:block" />
              ビジネスの未来を切り拓くデザインスタジオです。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-8">会社概要</h2>
            <div className="space-y-6">
              <div className="flex border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-gray-500 w-32 flex-shrink-0">社名</span>
                <span className="text-white">NEXUS株式会社</span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-gray-500 w-32 flex-shrink-0">設立</span>
                <span className="text-white">2020年4月</span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-gray-500 w-32 flex-shrink-0">代表者</span>
                <span className="text-white">代表取締役 田中 健太</span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-gray-500 w-32 flex-shrink-0">資本金</span>
                <span className="text-white">5,000万円</span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-gray-500 w-32 flex-shrink-0">従業員数</span>
                <span className="text-white">28名（2024年12月現在）</span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-gray-500 w-32 flex-shrink-0">所在地</span>
                <span className="text-white">
                  〒150-0001<br />
                  東京都渋谷区神宮前3-1-1 NEXUS Building 5F
                </span>
              </div>
              <div className="flex border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-gray-500 w-32 flex-shrink-0">事業内容</span>
                <span className="text-white">
                  デジタル戦略策定<br />
                  ブランディング・デザイン<br />
                  Webサイト・アプリ開発<br />
                  UXリサーチ・コンサルティング
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative aspect-square overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop"
              alt="Office"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute bottom-6 left-6 bg-white text-black p-4 font-mono text-xs">
              NEXUS OFFICE — TOKYO
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Building, value: '2', label: 'OFFICES', sub: '東京・シンガポール' },
              { icon: Users, value: '28', label: 'MEMBERS', sub: '多様なスペシャリスト' },
              { icon: Target, value: '150+', label: 'PROJECTS', sub: '累計プロジェクト数' },
              { icon: Award, value: '8', label: 'AWARDS', sub: '国内外デザイン賞' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 border border-white/10"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                <div className="font-serif text-4xl md:text-5xl mb-2">{stat.value}</div>
                <div className="font-mono text-xs text-gray-500 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-12 border border-white/10"
          >
            <span className="font-mono text-xs text-accent mb-4 block tracking-widest">MISSION</span>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">使命</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              テクノロジーとクリエイティブの力で、<br />
              人と企業の可能性を最大化する。<br /><br />
              私たちは、単なるデジタル制作会社ではありません。<br />
              クライアントのビジョンを深く理解し、<br />
              共に未来を創造するパートナーです。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-12 border border-white/10"
          >
            <span className="font-mono text-xs text-accent mb-4 block tracking-widest">VISION</span>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">展望</h3>
            <p className="text-gray-400 leading-relaxed text-lg">
              日本発、世界基準のデザインスタジオへ。<br /><br />
              2030年までに、アジアNo.1の<br />
              デジタルエクスペリエンスカンパニーとなり、<br />
              グローバル企業のDXパートナーとして<br />
              選ばれ続ける存在を目指します。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="font-mono text-xs text-accent mb-4 block tracking-widest">[ HISTORY ]</span>
            <h2 className="font-serif text-3xl md:text-4xl">沿革</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/20" />
            {milestones.map((milestone, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`w-full md:w-1/2 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-8 md:pl-0`}>
                  <span className="font-mono text-accent text-sm">{milestone.year}</span>
                  <h3 className="font-sans text-xl font-medium text-white mt-2">{milestone.title}</h3>
                  <p className="text-gray-500 mt-2">{milestone.description}</p>
                </div>
                <div className="absolute left-0 md:left-1/2 w-3 h-3 bg-accent rounded-full transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="font-mono text-xs text-accent mb-4 block tracking-widest">[ TEAM ]</span>
            <h2 className="font-serif text-3xl md:text-4xl">チーム</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-hover"
              >
                <div className="relative aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                </div>
                <h3 className="font-sans text-lg font-medium text-white">{member.name}</h3>
                <p className="font-mono text-xs text-accent mt-1">{member.role}</p>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
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
            <h2 className="font-serif text-3xl md:text-5xl mb-8">一緒に働きませんか？</h2>
            <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
              NEXUSでは、共に未来を創造する仲間を募集しています。<br />
              経験・スキルを問わず、情熱を持った方をお待ちしています。
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-colors cursor-hover"
            >
              <span className="font-mono text-sm">採用情報を見る</span>
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
