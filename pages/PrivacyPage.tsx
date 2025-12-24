import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/Animators';

const PrivacyPage: React.FC = () => {
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
            <span className="font-mono text-xs text-accent mb-6 block tracking-widest">[ PRIVACY POLICY ]</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
              <TextReveal>プライバシーポリシー</TextReveal>
            </h1>
            <p className="font-mono text-sm text-gray-500">
              最終更新日：2024年12月1日
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-invert prose-lg max-w-none"
          >
            <div className="space-y-12">
              <div>
                <p className="text-gray-400 leading-relaxed">
                  NEXUS株式会社（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考え、
                  以下のプライバシーポリシーに従い、個人情報の適切な取り扱いに努めます。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">1. 個人情報の定義</h2>
                <p className="text-gray-400 leading-relaxed">
                  本プライバシーポリシーにおいて「個人情報」とは、生存する個人に関する情報であって、
                  当該情報に含まれる氏名、生年月日その他の記述等により特定の個人を識別することができるもの
                  （他の情報と容易に照合することができ、それにより特定の個人を識別することができることとなるものを含みます）
                  をいいます。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">2. 個人情報の収集方法</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  当社は、以下の方法により個人情報を収集することがあります。
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>お問い合わせフォームからのご連絡</li>
                  <li>メールでのご連絡</li>
                  <li>お電話でのご連絡</li>
                  <li>名刺の交換</li>
                  <li>契約締結時の情報提供</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">3. 個人情報の利用目的</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  当社は、収集した個人情報を以下の目的で利用いたします。
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>お問い合わせへの対応</li>
                  <li>サービスの提供および改善</li>
                  <li>契約の履行</li>
                  <li>新サービスや更新情報のご案内</li>
                  <li>イベントやセミナーのご案内</li>
                  <li>アンケートの実施</li>
                  <li>統計データの作成（個人を特定できない形式）</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">4. 個人情報の第三者提供</h2>
                <p className="text-gray-400 leading-relaxed">
                  当社は、以下の場合を除き、あらかじめお客様の同意を得ることなく、
                  第三者に個人情報を提供することはありません。
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 mt-4">
                  <li>法令に基づく場合</li>
                  <li>人の生命、身体または財産の保護のために必要がある場合</li>
                  <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                  <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">5. 個人情報の安全管理</h2>
                <p className="text-gray-400 leading-relaxed">
                  当社は、個人情報の漏えい、滅失またはき損の防止その他の個人情報の安全管理のために、
                  必要かつ適切な措置を講じます。また、従業員に対して、個人情報の適正な取り扱いについて教育を行います。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">6. Cookieの使用について</h2>
                <p className="text-gray-400 leading-relaxed">
                  当社ウェブサイトでは、サービスの利便性向上やアクセス解析のためにCookieを使用しています。
                  Cookieとは、ウェブサイトがお客様のブラウザに送信する小さなテキストファイルです。
                  ブラウザの設定によりCookieを無効にすることも可能ですが、一部のサービスが利用できなくなる場合があります。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">7. 個人情報の開示・訂正・削除</h2>
                <p className="text-gray-400 leading-relaxed">
                  お客様は、当社が保有するご自身の個人情報について、開示、訂正、追加、削除、
                  利用停止を請求することができます。ご請求の際は、下記のお問い合わせ窓口までご連絡ください。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">8. プライバシーポリシーの変更</h2>
                <p className="text-gray-400 leading-relaxed">
                  当社は、必要に応じて本プライバシーポリシーを変更することがあります。
                  変更した場合は、本ウェブサイトに掲載することにより公表いたします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">9. お問い合わせ窓口</h2>
                <p className="text-gray-400 leading-relaxed">
                  本プライバシーポリシーに関するお問い合わせは、下記までご連絡ください。
                </p>
                <div className="mt-6 p-6 border border-white/10">
                  <p className="text-white font-medium mb-4">NEXUS株式会社 個人情報保護担当</p>
                  <p className="text-gray-400">
                    〒150-0001<br />
                    東京都渋谷区神宮前3-1-1 NEXUS Building 5F<br />
                    Email: privacy@nexus.jp<br />
                    Tel: 03-XXXX-XXXX
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10">
                <p className="text-gray-500 text-sm">
                  制定日：2020年4月1日<br />
                  最終改定日：2024年12月1日
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
