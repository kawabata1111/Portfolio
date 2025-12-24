import React from 'react';
import { motion } from 'framer-motion';
import { TextReveal } from '../components/Animators';

const TermsPage: React.FC = () => {
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
            <span className="font-mono text-xs text-accent mb-6 block tracking-widest">[ TERMS OF SERVICE ]</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
              <TextReveal>利用規約</TextReveal>
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
                  この利用規約（以下「本規約」といいます）は、NEXUS株式会社（以下「当社」といいます）が
                  提供するウェブサイトおよびサービス（以下「本サービス」といいます）の利用に関する条件を
                  定めるものです。本サービスをご利用いただくお客様（以下「ユーザー」といいます）には、
                  本規約に同意いただく必要があります。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第1条（適用）</h2>
                <p className="text-gray-400 leading-relaxed">
                  本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
                  当社は本サービスに関し、本規約のほか、ご利用にあたってのルール等、各種の定め（以下「個別規定」といいます）
                  をすることがあります。これら個別規定はその名称のいかんにかかわらず、本規約の一部を構成するものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第2条（知的財産権）</h2>
                <p className="text-gray-400 leading-relaxed">
                  本サービスに掲載されているすべてのコンテンツ（テキスト、画像、動画、音声、ソフトウェア、
                  デザイン等）に関する著作権その他の知的財産権は、当社または当社にライセンスを許諾している者に帰属します。
                  ユーザーは、当社の事前の書面による承諾なく、これらのコンテンツを複製、転載、改変、販売、
                  出版その他の方法で利用することはできません。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第3条（禁止事項）</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>法令または公序良俗に違反する行為</li>
                  <li>犯罪行為に関連する行為</li>
                  <li>当社、本サービスの他のユーザー、または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利または利益を侵害する行為</li>
                  <li>本サービスの運営を妨害するおそれのある行為</li>
                  <li>不正アクセスをし、またはこれを試みる行為</li>
                  <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                  <li>他のユーザーに成りすます行為</li>
                  <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                  <li>その他、当社が不適切と判断する行為</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第4条（本サービスの提供の停止等）</h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                  <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                  <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                  <li>その他、当社が本サービスの提供が困難と判断した場合</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-4">
                  当社は、本サービスの提供の停止または中断により、ユーザーまたは第三者が被ったいかなる不利益または損害について、理由を問わず一切の責任を負わないものとします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第5条（免責事項）</h2>
                <p className="text-gray-400 leading-relaxed">
                  当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、
                  特定の目的への適合性、セキュリティなどに関する欠陥、エラーやバグ、権利侵害などを含みます）が
                  ないことを明示的にも黙示的にも保証しておりません。当社は、本サービスに起因してユーザーに生じた
                  あらゆる損害について、一切の責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第6条（サービス内容の変更等）</h2>
                <p className="text-gray-400 leading-relaxed">
                  当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、
                  これによってユーザーに生じた損害について一切の責任を負いません。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第7条（利用規約の変更）</h2>
                <p className="text-gray-400 leading-relaxed">
                  当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。
                  変更後の本規約は、当社ウェブサイトに掲示された時点から効力を生じるものとし、ユーザーが本サービスを
                  利用した場合には、変更後の規約に同意したものとみなします。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-2xl md:text-3xl mb-6">第8条（準拠法・裁判管轄）</h2>
                <p className="text-gray-400 leading-relaxed">
                  本規約の解釈にあたっては、日本法を準拠法とします。
                  本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄とします。
                </p>
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

export default TermsPage;
