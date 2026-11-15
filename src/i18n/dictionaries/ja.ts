import { products } from "@/data/products";

export interface ProductText {
  category: string;
  /** Main display name in this language */
  name: string;
  /** Secondary name shown under the main name (e.g. English or Latin name) */
  subName: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  origins?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

const productTexts: Record<string, ProductText> = Object.fromEntries(
  products.map((p) => [
    p.slug,
    {
      category: p.category,
      name: p.nameJa,
      subName: p.nameEn,
      shortDescription: p.shortDescription,
      description: p.description,
      features: p.features,
      applications: p.applications,
      origins: p.origins,
    },
  ])
);

const ja = {
  meta: {
    siteName: "株式会社サプリ販売",
    defaultTitle: "株式会社サプリ販売 | サプリメント原材料の輸入販売・製造販売",
    /** Used as "%s | {titleSuffix}" on sub pages */
    titleSuffix: "株式会社サプリ販売",
    description:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社。赤ビーツ粉末、ボスウェリアセラータ、アシュワガンダ、ギムネマ、ガルシニア、ブロメライン等の高品質B2B原材料を供給。",
    ogImageAlt: "株式会社サプリ販売 - サプリメント原材料の輸入販売・製造販売",
  },
  company: {
    name: "株式会社サプリ販売",
    subName: "Supplement Sales Japan Co., Ltd.",
    headOfficeLabel: "本社",
    headOffice: "〒370-0865 群馬県高崎市寺尾町1285-2",
    factoryLabel: "富岡工場",
    factory: "〒370-2303 群馬県富岡市蕨1004-1",
    businessHours: "平日 9:00〜18:00 (JST)",
    founded: "2024年",
    business: "サプリメント・健康食品・化粧品原材料の輸入販売および製造販売",
  },
  nav: {
    home: "ホーム",
    products: "製品情報",
    company: "会社概要",
    contact: "お問い合わせ",
    openMenu: "メニューを開く",
    closeMenu: "メニューを閉じる",
    breadcrumb: "パンくずリスト",
    language: "言語",
  },
  home: {
    metaTitle: "株式会社サプリ販売 | サプリメント原材料の輸入販売・製造販売",
    metaDescription:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等の高品質B2B原材料を安定供給。",
    hero: {
      titleLine1: "自然の力を、",
      titleLine2: "確かな品質で。",
      lead: "サプリメント・健康食品・化粧品の原材料を、輸入販売と製造販売で安定してお届けします。",
      ctaProducts: "製品を見る",
      ctaContact: "お問い合わせ",
      highlights: ["COA完備", "サンプル対応", "小ロット可"],
    },
    featured: {
      eyebrow: "Products",
      title: "取扱原材料",
      lead: "サプリメント・健康食品・化粧品のための原材料を厳選。サンプル・小ロットからご対応します。",
      viewAll: "製品一覧へ →",
    },
    strengths: {
      eyebrow: "Our Strengths",
      title: "選ばれる理由",
      items: [
        {
          title: "自社製造 × 原料調達",
          body: "自社工場での製造体制と、国内外サプライヤーとの直接取引。原料の仕入れから製造まで、一貫した品質管理を実現します。",
        },
        {
          title: "品質管理・認証サポート",
          body: "COA・HACCP・第三者検査を完備。各種規格・認証に対応した品質管理体制で、御社の製品を確かに支えます。",
        },
        {
          title: "サンプル・小ロット対応",
          body: "量産前にサンプルでご確認いただけます。小ロットからの対応で、品質を確認しながら段階的にご発注いただけます。",
        },
      ],
    },
    cta: {
      title: "原料のご相談はお気軽に",
      lead: "掲載外の原料の調達、サンプルのご依頼も承ります。",
      button: "お問い合わせ",
    },
    faq: [
      {
        question: "株式会社サプリ販売はどのような会社ですか？",
        answer:
          "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売するB2B専門商社です。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等の高品質原材料を取り扱っています。",
      },
      {
        question: "どのような原材料を取り扱っていますか？",
        answer:
          "赤ビーツ粉末（天然色素・抗酸化）、ボスウェリアセラータ（関節・抗炎症）、植物性コラーゲン（ヴィーガン対応美容原料）、アンセリン（鮭由来の高抗酸化ジペプチド）など、エビデンスに裏付けられた機能性原材料を取り扱っています。",
      },
      {
        question: "サンプルや小ロットの注文は可能ですか？",
        answer:
          "はい、全製品でサンプルのご提供が可能です。また、小ロットからの対応も承っております。お問い合わせフォームよりお気軽にご相談ください。",
      },
    ] as FaqItem[],
  },
  productsPage: {
    metaTitle: "製品情報 | サプリメント・健康食品・化粧品原材料ラインナップ",
    metaDescription:
      "高品質サプリメント原材料の一覧。輸入販売から自社製造販売まで対応。サンプル・小ロットからご相談可能。",
    eyebrow: "Products",
    title: "製品情報",
    subtitle: "厳選された、原材料のライブラリ。",
    lead: "サプリメント・健康食品・化粧品の原材料を幅広く取り扱っています。輸入販売から自社製造まで、日本の品質基準に基づき厳格に管理しています。",
    listName: "サプリメント原材料一覧",
    faq: [
      {
        question: "サンプルの提供は可能ですか？",
        answer:
          "はい、全製品でサンプルのご提供が可能です。お問い合わせフォームより製品名をご指定の上、お気軽にご依頼ください。",
      },
      {
        question: "小ロットでの注文は可能ですか？",
        answer:
          "はい、小ロットからの対応が可能です。製品によって最小ロットが異なりますので、詳細はお問い合わせください。",
      },
      {
        question: "品質証明書（COA）は提供されますか？",
        answer:
          "はい、全製品でロットごとの品質検査証明書（COA）を完備しています。HACCP等の各種認証にも対応しています。",
      },
    ] as FaqItem[],
  },
  productCard: {
    readMore: "詳しく見る",
  },
  productDetail: {
    /** {name} = product name, {subName} = secondary name */
    metaTitle: "{name}（{subName}）| サプリメント原材料",
    metaDescriptionSuffix: "株式会社サプリ販売が取り扱う{name}。サンプル・小ロットから対応可能。",
    descriptionHeading: "製品概要",
    featuresHeading: "特徴",
    applicationsHeading: "用途",
    originsHeading: "原産地",
    ctaTitle: "{name}についてのお問い合わせ",
    ctaLead: "サンプル・詳細資料・お見積もりなど、お気軽にご相談ください。",
    ctaButton: "サンプルを依頼する",
    faqWhat: "{name}とは何ですか？",
    faqSampleQ: "{name}のサンプルは入手できますか？",
    faqSampleA:
      "はい、{name}のサンプルをご提供可能です。お問い合わせフォームより製品名をご記入の上、お気軽にご依頼ください。",
    faqUseQ: "{name}はどのような製品に使用できますか？",
    /** {applications} = comma separated list */
    faqUseA: "{name}は{applications}などの用途にご使用いただけます。",
    listSeparator: "、",
  },
  companyPage: {
    metaTitle: "会社概要 | サプリメント原材料の輸入販売・製造販売の専門商社",
    metaDescription:
      "株式会社サプリ販売の会社概要。サプリメント・健康食品・化粧品原材料の輸入販売および製造販売を行う専門商社。自社製造体制と品質管理体制を備えています。",
    eyebrow: "About Us",
    title: "会社概要",
    intro:
      "株式会社サプリ販売は、サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社です。自社製造体制と確かな調達ネットワークを活かし、原料の仕入れから製造販売まで一貫対応。お客様の製品開発をトータルでサポートします。",
    infoHeading: "Company Information",
    labels: {
      name: "会社名",
      founded: "設立",
      business: "事業内容",
      hours: "営業時間",
    },
    strengthsEyebrow: "Our Strengths",
    strengthsTitle: "私たちの強み",
    strengths: [
      {
        title: "自社製造 & 原料調達",
        description:
          "自社工場での製造体制に加え、国内外のサプライヤーと直接取引。原料の調達から製造まで一貫した品質管理を実現します。",
      },
      {
        title: "品質管理・認証サポート",
        description:
          "製造・販売に必要な証明書類（COA、HACCP等）を完備。各種規格・認証に対応した品質管理体制で安心をお届けします。",
      },
      {
        title: "サンプル・小ロット対応",
        description:
          "量産前にサンプルでご確認いただけます。小ロットから対応可能で、品質をしっかりご確認の上でご発注いただけます。",
      },
    ],
    ctaEyebrow: "Contact",
    ctaTitle: "お気軽にお問い合わせください",
    ctaLead: "製品に関するご質問、サンプルのご依頼など承ります。",
    ctaButton: "お問い合わせ",
    faq: [
      {
        question: "株式会社サプリ販売はいつ設立されましたか？",
        answer: "2024年に設立されました。本社は群馬県高崎市、工場は群馬県富岡市にあります。",
      },
      {
        question: "自社製造は可能ですか？",
        answer:
          "はい、自社工場での製造体制を備えており、原料の調達から製造まで一貫した品質管理を実現しています。",
      },
      {
        question: "品質管理体制はどうなっていますか？",
        answer:
          "COA（分析証明書）、HACCP等の証明書類を完備しており、各種規格・認証に対応した品質管理体制を整えています。",
      },
    ] as FaqItem[],
  },
  contactPage: {
    metaTitle: "お問い合わせ | サプリメント原材料のご相談・サンプル・お見積もり",
    metaDescription:
      "株式会社サプリ販売へのお問い合わせ。サプリメント・健康食品・化粧品原料のご相談、サンプルのご依頼、お見積もりなど。通常2営業日以内にご返答いたします。",
    eyebrow: "Contact",
    title: "お問い合わせ",
    lead: "原料のご相談・サンプルのご依頼・お見積もりなど、お気軽にお問い合わせください。通常2営業日以内にご返答いたします。",
    labels: {
      company: "会社名",
      hours: "受付",
    },
    faq: [
      {
        question: "サンプルの提供は可能ですか？",
        answer:
          "はい、多くの製品でサンプルのご提供が可能です。お問い合わせフォームよりご希望の製品をお知らせください。",
      },
      {
        question: "小ロットでの注文は可能ですか？",
        answer:
          "はい、小ロットからの対応が可能です。製品によって最小ロットが異なりますので、お気軽にご相談ください。",
      },
      {
        question: "お問い合わせからの返答にどれくらいかかりますか？",
        answer:
          "通常2営業日以内にご返答いたします。お急ぎの場合はその旨をお問い合わせ内容にご記載ください。",
      },
    ] as FaqItem[],
    form: {
      company: "会社名",
      companyPlaceholder: "株式会社〇〇",
      name: "お名前",
      namePlaceholder: "山田 太郎",
      email: "メールアドレス",
      emailPlaceholder: "info@example.com",
      inquiryType: "お問い合わせ内容",
      selectPlaceholder: "選択してください",
      inquiryOptions: ["サンプル依頼", "製品情報・お見積もり", "製品・原料について", "その他"],
      message: "メッセージ",
      messagePlaceholder: "ご質問・ご要望をご記入ください",
      submit: "送信する →",
      sending: "送信中...",
      error: "送信に失敗しました。時間をおいて再度お試しください。",
      thanksTitle: "お問い合わせありがとうございます",
      thanksBody: "担当者より折り返しご連絡いたします。通常2営業日以内にご返答いたします。",
    },
  },
  footer: {
    description: "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社です。",
    menuHeading: "メニュー",
    infoHeading: "会社情報",
    legal: "特定商取引法",
    privacy: "プライバシーポリシー",
    /** Appended to legal links on non-Japanese pages, e.g. " (Japanese)" */
    japaneseOnlyNote: "",
  },
  notFound: {
    title: "ページが見つかりません",
    body: "お探しのページは存在しないか、移動した可能性があります。",
    back: "トップページへ戻る",
  },
  products: productTexts,
};

export type Dictionary = typeof ja;
export default ja;
