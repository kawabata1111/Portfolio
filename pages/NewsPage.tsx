import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar } from 'lucide-react';
import { TextReveal } from '../components/Animators';

const newsCategories = ['All', 'お知らせ', 'プレスリリース', '受賞', 'イベント'];

const newsItems = [
  {
    id: 'news-1',
    date: '2024.12.15',
    category: 'お知らせ',
    title: '年末年始休業のお知らせ',
    excerpt: '誠に勝手ながら、2024年12月28日(土)〜2025年1月5日(日)まで年末年始休業とさせていただきます。',
    content: `
      平素は格別のご高配を賜り、厚く御礼申し上げます。

      誠に勝手ながら、下記の期間を年末年始休業とさせていただきます。

      【休業期間】
      2024年12月28日(土)〜2025年1月5日(日)

      休業期間中にいただいたお問い合わせにつきましては、
      2025年1月6日(月)より順次対応させていただきます。

      ご不便をおかけいたしますが、何卒ご了承くださいますようお願い申し上げます。
    `
  },
  {
    id: 'news-2',
    date: '2024.11.20',
    category: '受賞',
    title: 'Awwwards Site of the Day を受賞しました',
    excerpt: 'Zen Architectsプロジェクトが、Awwwards Site of the Dayを受賞いたしました。',
    content: `
      この度、弊社が手掛けた「Zen Architects」のウェブサイトが、
      世界的なデザインアワード「Awwwards」のSite of the Dayを受賞いたしました。

      このプロジェクトでは、日本の建築美学をデジタル空間で表現することに挑戦しました。
      ミニマルでありながらも、空間の奥行きと「間」を感じられるデザインを追求しています。

      今後も、世界に誇れるクリエイティブを生み出していく所存です。
      引き続きのご支援を、よろしくお願い申し上げます。
    `
  },
  {
    id: 'news-3',
    date: '2024.10.01',
    category: 'プレスリリース',
    title: 'シンガポールオフィスを開設しました',
    excerpt: 'アジア太平洋地域のクライアントへのサービス拡充のため、シンガポールに新オフィスを開設いたしました。',
    content: `
      NEXUS株式会社（本社：東京都渋谷区、代表取締役：田中健太）は、
      アジア太平洋地域のクライアントへのサービス拡充のため、
      2024年10月1日付でシンガポールに新オフィスを開設いたしました。

      【シンガポールオフィス概要】
      住所：71 Robinson Road, #14-01, Singapore 068895
      開設日：2024年10月1日

      シンガポールオフィスでは、東南アジアおよびオセアニア地域の
      クライアント様へのサービス提供を担当いたします。

      グローバルなプロジェクトへの対応力を強化し、
      より多くのクライアント様の成功に貢献してまいります。
    `
  },
  {
    id: 'news-4',
    date: '2024.08.15',
    category: 'イベント',
    title: 'デザインカンファレンス「NEXT DESIGN 2024」に登壇します',
    excerpt: '弊社クリエイティブディレクター佐藤が、NEXT DESIGN 2024にてスピーカーとして登壇いたします。',
    content: `
      弊社クリエイティブディレクターの佐藤美咲が、
      デザインカンファレンス「NEXT DESIGN 2024」にスピーカーとして登壇いたします。

      【イベント概要】
      イベント名：NEXT DESIGN 2024
      日時：2024年9月20日(金) 14:00〜
      場所：東京国際フォーラム ホールD
      テーマ：「ブランド体験のデジタルトランスフォーメーション」

      デジタル時代におけるブランディングの在り方について、
      実際のプロジェクト事例を交えながらお話しいたします。

      ご興味のある方は、ぜひご参加ください。
    `
  },
  {
    id: 'news-5',
    date: '2024.07.01',
    category: 'お知らせ',
    title: 'コーポレートサイトをリニューアルしました',
    excerpt: 'より使いやすく、より魅力的に。NEXUSのコーポレートサイトを全面リニューアルいたしました。',
    content: `
      この度、NEXUSのコーポレートサイトを全面リニューアルいたしました。

      今回のリニューアルでは、以下の点を重視して設計しました：

      1. パフォーマンスの向上
      最新のフレームワークを採用し、ページ読み込み速度を大幅に改善しました。

      2. アクセシビリティの強化
      より多くの方にコンテンツをお届けできるよう、
      アクセシビリティ対応を強化しました。

      3. 実績紹介の充実
      プロジェクトの詳細ページを新設し、
      より深く私たちの仕事をご覧いただけるようになりました。

      今後とも、NEXUSをよろしくお願いいたします。
    `
  },
  {
    id: 'news-6',
    date: '2024.05.10',
    category: '受賞',
    title: 'CSS Design Awards「Website of the Month」を受賞',
    excerpt: 'Tokyo Futureプロジェクトが、CSS Design AwardsのWebsite of the Monthを受賞しました。',
    content: `
      東京都との協業プロジェクト「Tokyo Future」が、
      CSS Design AwardsのWebsite of the Monthを受賞いたしました。

      本プロジェクトは、東京の未来都市構想を世界に発信するための
      デジタルキャンペーンとして企画・制作したものです。

      インタラクティブな3Dマップや、多言語対応など、
      技術的にも挑戦的なプロジェクトでしたが、
      このような形で評価いただき、大変光栄に思います。

      クライアント様、プロジェクトに関わったすべての皆様に
      心より感謝申し上げます。
    `
  },
];

const NewsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedNews, setSelectedNews] = useState<string | null>(null);

  const filteredNews = activeCategory === 'All'
    ? newsItems
    : newsItems.filter(news => news.category === activeCategory);

  const selectedItem = newsItems.find(news => news.id === selectedNews);

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
            <span className="font-mono text-xs text-accent mb-6 block tracking-widest">[ NEWS ]</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              <TextReveal>お知らせ</TextReveal>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              NEXUSからの最新ニュース、<br className="hidden md:block" />
              プレスリリース、イベント情報をお届けします。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 px-6 md:px-12 border-b border-white/10 sticky top-0 bg-background/80 backdrop-blur-lg z-30">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {newsCategories.map((category) => (
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

      {/* News List */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="space-y-0">
            {filteredNews.map((news, i) => (
              <motion.article
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedNews(news.id)}
                className="group py-8 border-b border-white/10 cursor-hover hover:bg-white/5 transition-colors -mx-6 px-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                  <div className="flex items-center gap-4 md:w-48 flex-shrink-0">
                    <Calendar size={14} className="text-gray-500" />
                    <span className="font-mono text-sm text-gray-500">{news.date}</span>
                  </div>
                  <span className="font-mono text-xs px-3 py-1 border border-accent/50 text-accent w-fit">
                    {news.category}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-sans text-lg md:text-xl text-white group-hover:text-accent transition-colors">
                      {news.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-1">{news.excerpt}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-gray-500 group-hover:text-accent transition-colors hidden md:block" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* News Modal */}
      {selectedNews && selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
          onClick={() => setSelectedNews(null)}
        >
          <div className="min-h-screen flex items-start justify-center py-20 px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-[#0a0a0a] max-w-3xl w-full p-8 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors cursor-hover"
              >
                <span className="font-mono text-xs">CLOSE</span>
              </button>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-sm text-gray-500">{selectedItem.date}</span>
                <span className="font-mono text-xs px-3 py-1 border border-accent/50 text-accent">
                  {selectedItem.category}
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl mb-8">{selectedItem.title}</h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                  {selectedItem.content}
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-accent hover:text-white transition-colors cursor-hover"
                >
                  <span className="font-mono text-sm">お問い合わせ</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* Subscribe */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-[1600px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl mb-6">最新情報をお届けします</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              NEXUSのニュースやイベント情報を<br />
              メールでお届けします。
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 bg-transparent border border-white/20 text-white placeholder-gray-500 focus:border-accent outline-none font-mono text-sm"
              />
              <button className="px-8 py-4 bg-white text-black font-mono text-sm hover:bg-accent transition-colors cursor-hover">
                SUBSCRIBE
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
