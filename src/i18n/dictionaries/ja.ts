import { products } from "@/data/products";
import type { SalesLetter } from "@/types/product";

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
  salesLetter?: SalesLetter;
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
      salesLetter: p.salesLetter,
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
      titleLine1: "その原料、本当に今の仕入先から",
      titleLine2: "買い続けるのが最善ですか？",
      lead: "価格だけではありません。品質、規格、供給条件まで。原料調達には、まだ見直せる可能性があります。",
      ctaContact: "原料について相談する",
      ctaProducts: "取扱原料を見る",
      highlights: [
        "品質資料（COA）を確認できる",
        "サンプル・小ロットから相談可",
        "掲載外の原料も相談可",
      ],
    },
    pains: {
      eyebrow: "Challenges",
      title: "原料の仕入れで、こんな経験はありませんか？",
      items: [
        "「もう少し価格を抑えられないだろうか？」",
        "「同じ原料でも、メーカーによって規格が違う。どれを選べばいい？」",
        "「海外のメーカーから直接購入したいが、交渉や輸入手続きが面倒だ」",
        "「新しい原料を試したいのに、最低発注数量が大きすぎる」",
        "「今の仕入先が供給できなくなったら、どうしよう？」",
      ],
      note: "こうした悩みは、原料調達に携わる方なら一度は経験したことがあるのではないでしょうか。",
      conclusion: "実は、これらの問題には共通点があります。それは、**原料そのものの問題ではなく、調達先の選択肢が限られていることが原因かもしれない**ということです。",
    },
    options: {
      eyebrow: "Why Compare",
      title: "仕入先を一社増やすだけで、何が変わるでしょうか？",
      lead: "品質も納期も問題なく、今の仕入先に大きな不満はない。それでも、同等の規格を持つ原料を別の供給元から調達できるとしたら？",
      benefits: [
        {
          title: "価格を比較できます",
          body: "同等の規格の原料で、見積を並べて検討できます。",
        },
        {
          title: "供給リスクを分散できます",
          body: "一社の供給が止まっても、調達を続ける手段を持てます。",
        },
        {
          title: "新しい提案を受けられます",
          body: "別の規格や新しい原料の提案を受けられるかもしれません。",
        },
      ],
      note: "もちろん、必ず安くなるとは限りません。しかし、**比較できる選択肢を持っていること自体が、購買担当者にとって大きな強みになります。**",
      bridge: "そして、その選択肢の一つとして知っていただきたいのが、私たち株式会社サプリ販売です。",
    },
    approach: {
      eyebrow: "Our Approach",
      title: "原料を売る前に、お客様が何を必要としているのかを知りたい。",
      body: [
        "株式会社サプリ販売は、サプリメント・健康食品・化粧品向け原料の輸入販売・製造販売を行っています。",
        "私たちが大切にしているのは、ただ原料を販売することではありません。お客様が必要とする品質、規格、数量、価格、納期。その条件に合う原料を見つけることです。",
      ],
      listTitle: "例えば、こんなご相談をお待ちしています。",
      list: [
        "現在使用している原料の代替品を探している",
        "海外から特定の植物エキスを調達したい",
        "新しい機能性素材の採用を検討している",
        "COAなどの品質資料を確認してから購入したい",
        "サンプルで評価してから発注数量を決めたい",
        "ホームページに掲載されていない原料を探している",
      ],
      note: "すべてのご要望に対応できるとは限りません。しかし、まずは調達の可能性を確認することから始められます。",
    },
    strengths: {
      eyebrow: "What We Do",
      title: "原料調達のパートナーとして、私たちができること。",
      items: [
        {
          title: "国内外の原料調達ネットワーク",
          body: "日本国内だけでなく、海外サプライヤーからの原料調達にも取り組んでいます。特定の原料や規格について、既存の取扱品以外もご相談いただけます。",
        },
        {
          title: "品質資料を確認したうえで検討",
          body: "原料選びで大切なのは、名前や価格だけではありません。成分含有量、原産地、製造方法、試験成績書（COA）など、必要な資料や条件を確認しながら採用を検討いただけます。",
        },
        {
          title: "サンプル・小ロットからの相談",
          body: "初めて採用する原料を、いきなり大量に仕入れる必要はありません。対応可能な原料はサンプルや小ロットでご相談いただけます。評価し、納得したうえで次の発注をご検討ください。",
        },
        {
          title: "原料調達から製造まで",
          body: "原料を仕入れるだけでなく、その先の商品化についてもご相談いただけます。原料調達と製造の両面から、製品開発を支援できる体制を目指しています。",
        },
      ],
    },
    featured: {
      eyebrow: "Products",
      title: "例えば、こんな原料を取り扱っています。",
      lead: "これらは、現在ご案内している原料の一部です。",
      notListedTitle: "お探しの原料がホームページに掲載されていなくても、諦める必要はありません。",
      notListedBody: "まずは原料名をお知らせください。",
      notListedButton: "原料名を伝えて相談する",
      viewAll: "製品一覧へ →",
    },
    welcome: {
      title: "「今すぐ買う予定はない」という方も、歓迎します。",
      lead: "原料の調達先を探すとき、最初から発注を決めている企業ばかりではないはずです。",
      items: [
        "価格だけ知りたい",
        "サンプルがあるか確認したい",
        "希望する規格で調達できるか知りたい",
        "将来のために、別の仕入先を確保しておきたい",
      ],
      note: "それでも構いません。原料調達は、実際に必要になってから慌てて探すより、事前に選択肢を持っておくことが大切です。",
    },
    cta: {
      eyebrow: "Contact",
      title: "まずは、原料名を一つ教えてください。",
      lead: "複雑な資料を最初から用意する必要はありません。お問い合わせの際は、わかる範囲で次の情報をお知らせください。",
      fields: [
        {
          label: "原料名",
          value: "お探しの原料",
        },
        {
          label: "希望数量",
          value: "例：1kg、10kg、100kg",
        },
        {
          label: "希望規格",
          value: "成分含有量、産地など（未定でも可）",
        },
        {
          label: "ご希望",
          value: "見積、サンプル、品質資料、調達可否の確認",
        },
      ],
      fieldsNote: "いただいた情報をもとに、対応可能な内容を確認します。",
      button: "原料について問い合わせる",
      buttonNote: "原料のお見積り・サンプル・調達可否について、お気軽にお問い合わせください。",
    },
    closing: {
      title: "あなたの会社にとって、より良い原料調達を。",
      body: "私たちの目標は、単に一度だけ原料を販売することではありません。新しい原料を探すとき。今の仕入価格を見直したいとき。供給先を増やしたいとき。新しい商品を開発するとき。",
      quote: "「そうだ。サプリ販売に聞いてみよう」",
      quoteNote: "そう思い出していただける会社になることです。",
      question: "原料を購入する前に、まずは比較してみませんか？",
      ask: "あなたが今探している原料を、私たちに教えてください。",
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
      {
        question: "ホームページに掲載されていない原料も相談できますか？",
        answer:
          "はい。原料名、希望数量、希望規格（成分含有量・産地など）をお知らせいただければ、調達できるかどうかを確認します。すべてのご要望に対応できるとは限りませんが、まずはお気軽にご相談ください。",
      },
      {
        question: "購入前にCOAなどの品質資料を確認できますか？",
        answer:
          "はい。成分含有量、原産地、製造方法、試験成績書（COA）など、必要な資料や条件を確認したうえで採用をご検討いただけます。",
      },
      {
        question: "今すぐ購入する予定がなくても問い合わせできますか？",
        answer:
          "はい。価格だけ知りたい、サンプルの有無を確認したい、希望する規格で調達できるか知りたい、将来に備えて別の仕入先を確保しておきたい、といった検討段階のご相談も歓迎しています。",
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
      phone: "電話番号",
      phonePlaceholder: "03-1234-5678",
      address: "住所",
      addressPlaceholder: "〒100-0001 東京都千代田区〇〇1-2-3",
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
  faqTitle: "よくあるご質問",
  products: productTexts,
};

export type Dictionary = typeof ja;
export default ja;
