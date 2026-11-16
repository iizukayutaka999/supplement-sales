import { productsFor } from "@/data/products";
import { localeNames, localeUrl, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

// Generated at build time from the same data as the site, so it never drifts.
export const dynamic = "force-static";

const plain = (text: string) => text.replace(/\*\*/g, "");

function buildLlmsTxt(): string {
  const ja = getDictionary("ja");
  const en = getDictionary("en");
  const home = ja.home;
  const lines: string[] = [];
  const push = (...l: string[]) => lines.push(...l);

  push(
    `# ${ja.company.name} (${ja.company.subName})`,
    "",
    `> ${ja.companyPage.intro} 掲載していない原料の調達相談、サンプル・小ロット、COAなどの品質資料の確認にも対応しています。本社は群馬県高崎市、工場は群馬県富岡市にあります。`,
    "",
    "## 会社概要",
    `- 会社名: ${ja.company.name}`,
    `- 英文社名: ${ja.company.subName}`,
    `- 設立: ${ja.company.founded}`,
    `- ${ja.company.headOfficeLabel}: ${ja.company.headOffice}`,
    `- ${ja.company.factoryLabel}: ${ja.company.factory}`,
    `- 事業内容: ${ja.company.business}`,
    `- 営業時間: ${ja.company.businessHours}`,
    `- ウェブサイト: ${localeUrl("ja", "/")}`,
    `- お問い合わせ: ${localeUrl("ja", "/contact")}`,
    "",
    `## ${home.strengths.title}`,
    ...home.strengths.items.map((s) => `- ${s.title}: ${s.body}`),
    "",
    `## ${home.approach.listTitle}`,
    ...home.approach.list.map((item) => `- ${item}`),
    "",
    `## ${home.cta.title}`,
    plain(home.cta.lead),
    ...home.cta.fields.map((f) => `- ${f.label}: ${f.value}`),
    "",
  );

  const products = productsFor("ja");
  push(`## 取扱原料（${products.length}品目）`, "");
  for (const p of products) {
    const t = ja.products[p.slug];
    push(
      `### ${t.name} (${t.subName})`,
      `カテゴリ: ${t.category}`,
      t.shortDescription,
      `特徴: ${t.features.join("、")}`,
      `用途: ${t.applications.join("、")}`,
      ...(t.origins ? [`原産地: ${t.origins.join("、")}`] : []),
      `詳細: ${localeUrl("ja", `/products/${p.slug}`)}`,
      "",
    );
  }

  push(`## ${ja.faqTitle}`, "");
  for (const f of [...home.faq, ...ja.productsPage.faq, ...ja.contactPage.faq]) {
    push(`Q: ${f.question}`, `A: ${f.answer}`, "");
  }

  push(
    "## ページ一覧",
    `- トップページ: ${localeUrl("ja", "/")}`,
    `- 製品情報: ${localeUrl("ja", "/products")}`,
    ...products.map((p) => `- ${ja.products[p.slug].name}: ${localeUrl("ja", `/products/${p.slug}`)}`),
    `- 会社概要: ${localeUrl("ja", "/company")}`,
    `- お問い合わせ: ${localeUrl("ja", "/contact")}`,
    `- 特定商取引法に基づく表記: ${localeUrl("ja", "/legal")}`,
    `- プライバシーポリシー: ${localeUrl("ja", "/privacy")}`,
    "",
    "## 他の言語版 / Other languages",
    ...locales.map((l) => `- ${localeNames[l]}: ${localeUrl(l, "/")}`),
    "",
  );

  // English summary for non-Japanese AI answers
  const enProducts = productsFor("en");
  push(
    "## English summary",
    "",
    `${en.company.name} (${en.company.subName}). ${en.companyPage.intro}`,
    "",
    `- ${en.company.headOfficeLabel}: ${en.company.headOffice}`,
    `- ${en.company.factoryLabel}: ${en.company.factory}`,
    `- ${en.nav.contact}: ${localeUrl("en", "/contact")}`,
    "",
    `### ${en.home.strengths.title}`,
    ...en.home.strengths.items.map((s) => `- ${s.title}: ${s.body}`),
    "",
    `### ${en.nav.products}`,
    ...enProducts.map((p) => {
      const t = en.products[p.slug];
      return `- [${t.name}](${localeUrl("en", `/products/${p.slug}`)}): ${t.shortDescription}`;
    }),
    "",
  );

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
