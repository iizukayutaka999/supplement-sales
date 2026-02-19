import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME, COMPANY_NAME_EN } from "@/lib/constants";

export function OrganizationSchema() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY_NAME,
    alternateName: COMPANY_NAME_EN,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description: "サプリメント・健康食品・化粧品の原材料の輸入販売および製造販売を行う専門商社",
    address: {
      "@type": "PostalAddress",
      postalCode: "370-2303",
      addressRegion: "群馬県",
      addressLocality: "富岡市",
      streetAddress: "蕨1004番地1",
      addressCountry: "JP",
    },
    knowsLanguage: ["ja", "en", "ru"],
    areaServed: {
      "@type": "Country",
      name: "Japan",
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
    inLanguage: "ja",
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_NAME,
    alternateName: COMPANY_NAME_EN,
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      postalCode: "370-2303",
      addressRegion: "群馬県",
      addressLocality: "富岡市",
      streetAddress: "蕨1004番地1",
      addressCountry: "JP",
    },
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
  };

  return (
    <>
      <JsonLd data={organization} />
      <JsonLd data={website} />
      <JsonLd data={localBusiness} />
    </>
  );
}
