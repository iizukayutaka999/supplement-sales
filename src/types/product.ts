import type { Locale } from "@/i18n/config";

export interface SalesLetter {
  title: string;
  /** One entry per paragraph; wrap text in **…** to emphasize it */
  paragraphs: string[];
  brand: string;
  tagline: string;
}

export interface Product {
  slug: string;
  icon: string;
  category: string;
  nameJa: string;
  nameEn: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  origins?: string[];
  salesLetter?: SalesLetter;
  /** true = kept in data but not published on the site */
  hidden?: boolean;
  /** Languages whose pages never show this product */
  hiddenInLocales?: Locale[];
}
