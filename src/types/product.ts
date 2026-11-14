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
  /** true = kept in data but not published on the site */
  hidden?: boolean;
}
