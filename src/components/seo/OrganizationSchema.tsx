import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME, COMPANY_NAME_EN } from "@/lib/constants";
import { locales } from "@/i18n/config";

export function OrganizationSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    alternateName: COMPANY_NAME_EN,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#logo`,
      url: `${SITE_URL}/images/logo.png`,
      contentUrl: `${SITE_URL}/images/logo.png`,
      width: 512,
      height: 512,
      caption: COMPANY_NAME,
    },
    image: `${SITE_URL}/images/og-image.png`,
    description:
      "サプリメント・健康食品・化粧品の原材料の輸入販売および製造販売を行うB2B専門商社。赤ビーツ粉末、ボスウェリアセラータ、アシュワガンダ、アンセリン、ギムネマ・シルベスタ、ガルシニア・カンボジア、ブロメライン、植物性コラーゲン等を取り扱い、ホームページに掲載していない原料の調達相談、サンプル・小ロット、品質資料（COA）の確認にも対応。",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      postalCode: "370-0865",
      addressRegion: "群馬県",
      addressLocality: "高崎市",
      streetAddress: "寺尾町1285-2",
      addressCountry: "JP",
    },
    location: {
      "@type": "Place",
      name: "富岡工場",
      address: {
        "@type": "PostalAddress",
        postalCode: "370-2303",
        addressRegion: "群馬県",
        addressLocality: "富岡市",
        streetAddress: "蕨1004-1",
        addressCountry: "JP",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "36.2594",
        longitude: "138.8881",
      },
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
      areaServed: "JP",
    },
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "10",
    },
    knowsAbout: [
      "サプリメント原材料",
      "健康食品原料",
      "化粧品原料",
      "赤ビーツ粉末",
      "ボスウェリアセラータ",
      "植物性コラーゲン",
      "アンセリン",
      "ギムネマ・シルベスタ",
      "アシュワガンダ",
      "ガルシニア・カンボジア",
      "ブロメライン",
      "機能性原料",
      "B2B原料販売",
      "原料輸入販売",
      "Red Beet Powder",
      "Boswellia Serrata",
      "Plant-Based Collagen",
      "Anserine",
      "Gymnema Sylvestre",
      "Ashwagandha",
      "Garcinia Cambogia",
      "Bromelain",
      "Supplement raw materials",
    ],
    sameAs: [],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: COMPANY_NAME,
    alternateName: COMPANY_NAME_EN,
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: [...locales],
    description:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売するB2B専門商社のウェブサイト",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#localbusiness`,
    name: COMPANY_NAME,
    alternateName: COMPANY_NAME_EN,
    url: SITE_URL,
    image: `${SITE_URL}/images/og-image.png`,
    description:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社",
    address: {
      "@type": "PostalAddress",
      postalCode: "370-0865",
      addressRegion: "群馬県",
      addressLocality: "高崎市",
      streetAddress: "寺尾町1285-2",
      addressCountry: "JP",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    currenciesAccepted: "JPY",
    paymentAccepted: "Bank Transfer",
  };

  const services = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/#service`,
    name: "サプリメント原材料の輸入販売・製造販売",
    description:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等のB2B原材料を供給。代替原料・掲載外原料の調達相談、サンプル・小ロット、COA等の品質資料の確認に対応。",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    serviceType: "B2B原材料販売",
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "サプリメント原材料カタログ",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "赤ビーツ粉末 (Red Beet Powder)",
          description: "天然色素・抗酸化の機能性原料",
        },
        {
          "@type": "OfferCatalog",
          name: "ボスウェリアセラータ (Boswellia Serrata)",
          description: "アーユルヴェーダ由来の抗炎症・関節サポート原料",
        },
        {
          "@type": "OfferCatalog",
          name: "植物性コラーゲン粉末 (Plant-Based Collagen)",
          description: "100%植物由来のヴィーガン対応美容原料",
        },
        {
          "@type": "OfferCatalog",
          name: "アンセリン (Anserine)",
          description: "鮭由来の高抗酸化天然ジペプチド",
        },
        {
          "@type": "OfferCatalog",
          name: "ギムネマ・シルベスタエキス (Gymnema Sylvestre Extract)",
          description: "ギムネマ酸25%規格の糖質ケア原料",
        },
        {
          "@type": "OfferCatalog",
          name: "アシュワガンダエキス (Ashwagandha Extract)",
          description: "ウィタノリド5%規格のアダプトゲン原料",
        },
        {
          "@type": "OfferCatalog",
          name: "ガルシニア・カンボジアエキス (Garcinia Cambogia Extract)",
          description: "HCA60%規格のウェイトマネジメント原料",
        },
        {
          "@type": "OfferCatalog",
          name: "ブロメラインエキス (Bromelain Extract)",
          description: "2500GDU規格のパイナップル由来消化酵素",
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={localBusiness} />
      <JsonLd data={services} />
    </>
  );
}
