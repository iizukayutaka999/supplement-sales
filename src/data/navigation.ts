export interface NavItem {
  label: string;
  href: string;
}

export const navigation: NavItem[] = [
  { label: "製品情報", href: "/products" },
  { label: "会社概要", href: "/company" },
  { label: "お問い合わせ", href: "/contact" },
];
