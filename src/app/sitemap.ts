import { MetadataRoute } from "next";
import { products } from "@/data/products";

const SITE_URL = "https://supplement-sales.jp";

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = products.map((product) => ({
    url: `${SITE_URL}/products/${product.slug}`,
    lastModified: new Date("2026-02-24"),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/products`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...productPages,
    {
      url: `${SITE_URL}/company`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/legal`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date("2026-02-24"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
