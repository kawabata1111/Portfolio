import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { TextReveal } from '../components/Animators';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: '',
    budget: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

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
            <span className="font-mono text-xs text-accent mb-6 block tracking-widest">[ CONTACT ]</span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
              <TextReveal>お問い合わせ</TextReveal>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-gray-400 max-w-3xl leading-relaxed">
              プロジェクトのご相談、お見積もり、<br className="hidden md:block" />
              パートナーシップについて、お気軽にご連絡ください。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-8">お問い合わせフォーム</h2>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-gray-500 block mb-2">
                      お名前 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-accent outline-none transition-colors"
                      placeholder="山田 太郎"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-gray-500 block mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-4 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-accent outline-none transition-colors"
                      placeholder="株式会社サンプル"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-gray-500 block mb-2">
                      メールアドレス <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-4 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-accent outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-gray-500 block mb-2">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-accent outline-none transition-colors"
                      placeholder="03-XXXX-XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="font-mono text-xs text-gray-500 block mb-2">
                      お問い合わせ種別 <span className="text-accent">*</span>
                    </label>
                    <select
                      required
                      value={formData.type}
                      onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                      className="w-full px-4 py-4 bg-transparent border border-white/20 text-white focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black">選択してください</option>
                      <option value="web" className="bg-black">Webサイト制作</option>
                      <option value="app" className="bg-black">アプリ開発</option>
                      <option value="branding" className="bg-black">ブランディング</option>
                      <option value="consulting" className="bg-black">コンサルティング</option>
                      <option value="other" className="bg-black">その他</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-mono text-xs text-gray-500 block mb-2">
                      ご予算
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-4 bg-transparent border border-white/20 text-white focus:border-accent outline-none transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-black">選択してください</option>
                      <option value="~100" className="bg-black">〜100万円</option>
                      <option value="100-300" className="bg-black">100〜300万円</option>
                      <option value="300-500" className="bg-black">300〜500万円</option>
                      <option value="500-1000" className="bg-black">500〜1000万円</option>
                      <option value="1000~" className="bg-black">1000万円〜</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-xs text-gray-500 block mb-2">
                    お問い合わせ内容 <span className="text-accent">*</span>
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-4 bg-transparent border border-white/20 text-white placeholder-gray-600 focus:border-accent outline-none transition-colors resize-none"
                    placeholder="プロジェクトの概要やご要望をお聞かせください"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-accent transition-colors cursor-hover group"
                >
                  <span className="font-mono text-sm">送信する</span>
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:pl-12"
            >
              <h2 className="font-serif text-2xl md:text-3xl mb-8">Contact Information</h2>

              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-xs text-gray-500 mb-2">TOKYO OFFICE</h3>
                    <p className="text-white leading-relaxed">
                      〒150-0001<br />
                      東京都渋谷区神宮前3-1-1<br />
                      NEXUS Building 5F
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-xs text-gray-500 mb-2">SINGAPORE OFFICE</h3>
                    <p className="text-white leading-relaxed">
                      71 Robinson Road, #14-01<br />
                      Singapore 068895
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-xs text-gray-500 mb-2">EMAIL</h3>
                    <a href="mailto:hello@nexus.jp" className="text-white hover:text-accent transition-colors">
                      hello@nexus.jp
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-xs text-gray-500 mb-2">PHONE</h3>
                    <a href="tel:03-XXXX-XXXX" className="text-white hover:text-accent transition-colors">
                      03-XXXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-mono text-xs text-gray-500 mb-2">BUSINESS HOURS</h3>
                    <p className="text-white leading-relaxed">
                      月曜日 - 金曜日<br />
                      10:00 - 19:00<br />
                      <span className="text-gray-500">土日祝休業</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-square bg-[#1a1a1a] flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="font-mono text-xs text-gray-500">MAP</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-accent mt-4 hover:text-white transition-colors cursor-hover"
                  >
                    Google Mapsで開く <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="font-mono text-xs text-accent mb-4 block tracking-widest">[ FAQ ]</span>
            <h2 className="font-serif text-3xl md:text-4xl">よくある質問</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: 'お問い合わせから返信までどのくらいかかりますか？',
                a: '通常、2営業日以内にご返信いたします。お急ぎの場合は、お電話でのご連絡をお勧めいたします。'
              },
              {
                q: 'プロジェクトの費用感を教えてください。',
                a: 'プロジェクトの規模や要件により大きく異なります。Webサイト制作は100万円〜、アプリ開発は300万円〜を目安としておりますが、詳細はヒアリング後にお見積もりいたします。'
              },
              {
                q: '地方や海外からの依頼も可能ですか？',
                a: 'はい、もちろん可能です。オンラインミーティングを活用し、日本全国および海外のクライアント様ともプロジェクトを進めております。'
              },
              {
                q: '納期はどのくらいですか？',
                a: 'プロジェクトの規模により異なりますが、通常のWebサイト制作で2〜3ヶ月、大規模なプロジェクトで6ヶ月〜を目安としております。'
              },
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-white/10 p-6"
              >
                <h3 className="font-sans text-lg text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
