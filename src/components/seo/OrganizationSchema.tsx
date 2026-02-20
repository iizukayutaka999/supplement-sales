import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME, COMPANY_NAME_EN } from "@/lib/constants";

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
      "サプリメント・健康食品・化粧品の原材料の輸入販売および製造販売を行うB2B専門商社。コラーゲン、プロバイオティクス、ローヤルゼリー、抹茶等の高品質原材料を取扱い。日本語・英語・ロシア語対応。",
    foundingDate: "2024",
    address: {
      "@type": "PostalAddress",
      postalCode: "370-2303",
      addressRegion: "群馬県",
      addressLocality: "富岡市",
      streetAddress: "蕨1004番地1",
      addressCountry: "JP",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Japanese", "English", "Russian"],
      url: `${SITE_URL}/contact`,
      areaServed: "JP",
    },
    knowsLanguage: ["ja", "en", "ru"],
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
      "機能性原料",
      "B2B原料販売",
      "原料輸入販売",
      "Red Beet Powder",
      "Boswellia Serrata",
      "Plant-Based Collagen",
      "Anserine",
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
    inLanguage: "ja",
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
      postalCode: "370-2303",
      addressRegion: "群馬県",
      addressLocality: "富岡市",
      streetAddress: "蕨1004番地1",
      addressCountry: "JP",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.2594",
      longitude: "138.8881",
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
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等の高品質B2B原材料を安定供給。サンプル提供・小ロット対応可能。",
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    serviceType: "B2B原材料販売",
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
    availableLanguage: ["Japanese", "English", "Russian"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "サプリメント原材料カタログ",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: "赤ビーツ粉末 (Red Beet Powder)", description: "天然色素・抗酸化の機能性原料" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: "ボスウェリアセラータ (Boswellia Serrata)", description: "アーユルヴェーダ由来の抗炎症・関節サポート原料" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: "植物性コラーゲン粉末 (Plant-Based Collagen)", description: "100%植物由来のヴィーガン対応美容原料" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Product", name: "アンセリン (Anserine)", description: "鮭由来の高抗酸化天然ジペプチド" },
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
