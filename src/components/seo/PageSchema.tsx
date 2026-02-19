import { JsonLd } from "./JsonLd";
import { SITE_URL, COMPANY_NAME } from "@/lib/constants";

interface PageSchemaProps {
  type?: "WebPage" | "AboutPage" | "ContactPage";
  name: string;
  description: string;
  path: string;
}

export function PageSchema({ type = "WebPage", name, description, path }: PageSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: `${SITE_URL}${path}`,
    isPartOf: {
      "@type": "WebSite",
      name: COMPANY_NAME,
      url: SITE_URL,
    },
    inLanguage: "ja",
  };

  return <JsonLd data={data} />;
}
