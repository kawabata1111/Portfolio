export interface Work {
  id: string;
  title: string;
  category: string;
  year: string;
  client: string;
  description: string;
  longDescription: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
  images: string[];
  thumbnail: string;
  url?: string;
}

export const works: Work[] = [
  {
    id: 'silent-oak',
    title: 'SILENT OAK',
    category: 'Branding / Web',
    year: '2024',
    client: 'Silent Oak Inc.',
    description: '伝統と革新を融合させた家具ブランドのデジタルリブランディング。',
    longDescription: 'Silent Oakは、日本の伝統的な木工技術と現代的なデザインを融合させた家具ブランドです。創業50年を迎えるにあたり、次世代に向けたブランドの刷新を任されました。',
    challenge: '50年の歴史を持つ老舗ブランドとしての信頼感を保ちながら、若い世代にも響く新しいブランドイメージを構築すること。また、従来の店舗販売からECへの移行を成功させること。',
    solution: 'ミニマルでありながら温かみのあるビジュアルアイデンティティを開発。3Dプロダクトビューワーを実装し、オンラインでも製品の質感を体感できるECサイトを構築しました。',
    result: 'リブランディング後、オンライン売上が前年比280%増。新規顧客の平均年齢が15歳若返り、SNSフォロワーも5倍に増加しました。',
    tech: ['Next.js', 'Three.js', 'Shopify', 'Sanity CMS'],
    images: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?q=80&w=2000&auto=format&fit=crop',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    url: 'https://example.com'
  },
  {
    id: 'nebula',
    title: 'NEBULA',
    category: 'App Development',
    year: '2023',
    client: 'Nebula Labs',
    description: '次世代の宇宙観測アプリケーション。ARを活用した星座ガイド機能を搭載。',
    longDescription: 'Nebula Labsは、宇宙科学の普及を目指すスタートアップです。天体観測をより身近に、より楽しくするモバイルアプリケーションの開発を担当しました。',
    challenge: '専門知識がなくても楽しめる、直感的なUIの設計。また、ARでの星座表示における位置精度の向上と、バッテリー消費の最適化。',
    solution: 'GPSとジャイロスコープを組み合わせた独自のトラッキングアルゴリズムを開発。また、ゲーミフィケーションを取り入れ、星座を見つけるとポイントが貯まる仕組みを実装しました。',
    result: 'App Store天文学カテゴリで1位を獲得。ダウンロード数100万を突破し、ユーザー評価4.8を維持しています。',
    tech: ['React Native', 'ARKit', 'ARCore', 'Firebase', 'TensorFlow'],
    images: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000&auto=format&fit=crop',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'tokyo-future',
    title: 'TOKYO FUTURE',
    category: 'Campaign Strategy',
    year: '2023',
    client: 'Tokyo Metropolitan Gov.',
    description: '東京の未来都市構想を世界に発信するグローバルキャンペーン。',
    longDescription: '東京都が推進する「スマートシティ東京」構想を世界に発信するデジタルキャンペーンを企画・制作しました。多言語対応で10カ国以上に向けて展開。',
    challenge: 'テクノロジーと伝統が共存する東京の魅力を、グローバルなオーディエンスに効果的に伝えること。また、多様な文化背景を持つユーザーに響くメッセージングの開発。',
    solution: 'インタラクティブな3D都市マップを開発し、東京の未来像を体験できるWebサイトを構築。ローカライズチームと連携し、各地域の文化に適したコンテンツを制作しました。',
    result: 'キャンペーン期間中のサイト訪問者数300万人を達成。国際的なアワードを3つ受賞し、SNSでのリーチは1億インプレッションを超えました。',
    tech: ['WebGL', 'GSAP', 'Headless CMS', 'i18n', 'CDN'],
    images: [
      'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=2000&auto=format&fit=crop',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2000&auto=format&fit=crop',
    url: 'https://example.com'
  },
  {
    id: 'aero-dynamics',
    title: 'AERO DYNAMICS',
    category: 'Automotive / 3D',
    year: '2023',
    client: 'Aero Motors',
    description: '電気自動車の3Dコンフィギュレーター。リアルタイムレンダリングで車両をカスタマイズ。',
    longDescription: 'Aero Motorsの新型EVのローンチに合わせ、ユーザーが自由にカスタマイズできる3Dコンフィギュレーターを開発しました。',
    challenge: '高品質な3Dレンダリングをブラウザ上でリアルタイムに実現しながら、幅広いデバイスでの動作を保証すること。また、複雑なオプション組み合わせのルールを直感的に操作できるUIの設計。',
    solution: 'Three.jsとカスタムシェーダーで軽量かつフォトリアルなレンダリングを実現。LOD（Level of Detail）技術でデバイス性能に応じた最適化を行いました。',
    result: 'コンフィギュレーター経由の見積もり依頼が従来比500%増。平均滞在時間は8分を超え、高いエンゲージメントを獲得しました。',
    tech: ['Three.js', 'Blender', 'WebGL', 'React', 'Node.js'],
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format&fit=crop',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop',
    url: 'https://example.com'
  },
  {
    id: 'bloom-beauty',
    title: 'BLOOM BEAUTY',
    category: 'E-Commerce / AI',
    year: '2024',
    client: 'Bloom Cosmetics',
    description: 'AIパーソナライズを搭載した化粧品ECサイト。肌診断から最適な製品を提案。',
    longDescription: 'Bloom Cosmeticsのデジタルトランスフォーメーションプロジェクト。AIによる肌診断機能と、パーソナライズされた商品レコメンデーションシステムを構築しました。',
    challenge: 'カメラを通じた肌診断の精度向上と、プライバシーへの配慮。また、膨大なSKU（1,000以上）から最適な商品を瞬時にレコメンドするアルゴリズムの開発。',
    solution: '顔認識AIと独自の肌分析モデルを開発。画像処理はエッジで行い、個人データの外部送信を最小化。機械学習によるレコメンデーションエンジンで、購買履歴と肌タイプに基づいた提案を実現。',
    result: 'コンバージョン率が従来比180%向上。AI診断の利用率は70%を超え、リピート購入率も40%改善しました。',
    tech: ['Next.js', 'TensorFlow.js', 'Python', 'AWS', 'Shopify Plus'],
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=2000&auto=format&fit=crop',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'zen-architecture',
    title: 'ZEN ARCHITECTURE',
    category: 'Web Design / Branding',
    year: '2024',
    client: 'Zen Architects',
    description: '建築事務所のブランドサイト。空間の美しさを追求したミニマルデザイン。',
    longDescription: '日本を代表する建築事務所Zen Architectsのコーポレートサイトをフルリニューアル。彼らの建築哲学を体現するデジタル空間を創造しました。',
    challenge: '建築作品の持つ空間的な美しさを、2Dのウェブサイト上でいかに表現するか。また、高解像度の建築写真を多数掲載しながらも、快適なブラウジング体験を維持すること。',
    solution: 'パララックスと微細なアニメーションで奥行きを演出。画像は遅延読み込みと適応的な解像度切り替えで最適化。余白を活かしたレイアウトで、建築の「間」の概念を表現しました。',
    result: 'リニューアル後、問い合わせ数が200%増加。国際的な建築メディアに取り上げられ、Awwwards Site of the Dayを受賞しました。',
    tech: ['Nuxt.js', 'GSAP', 'Prismic CMS', 'Cloudinary'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2000&auto=format&fit=crop',
    ],
    thumbnail: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop',
    url: 'https://example.com'
  },
];
