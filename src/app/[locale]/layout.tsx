import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import {
  Noto_Sans,
  Noto_Sans_Arabic,
  Noto_Sans_Armenian,
  Noto_Sans_Devanagari,
  Noto_Sans_JP,
  Noto_Sans_Thai,
} from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import { alternatesFor, isLocale, localeUrl, locales, rtlLocales, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "../globals.css";

const GA_ID = "G-5MWPMNEHWP";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

// Script-specific fonts, all exposed as --font-locale and only applied to their own language
const latinExtended = Noto_Sans({
  subsets: ["latin", "latin-ext", "cyrillic", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-locale",
  display: "swap",
  preload: false,
});
const armenian = Noto_Sans_Armenian({
  subsets: ["armenian"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-locale",
  display: "swap",
  preload: false,
});
const thai = Noto_Sans_Thai({
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-locale",
  display: "swap",
  preload: false,
});
const devanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-locale",
  display: "swap",
  preload: false,
});
const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-locale",
  display: "swap",
  preload: false,
});

const localeFont: Partial<Record<Locale, string>> = {
  ru: latinExtended.variable,
  vi: latinExtended.variable,
  hy: armenian.variable,
  th: thai.variable,
  hi: devanagari.variable,
  ar: arabic.variable,
};

const ogLocale: Record<Locale, string> = {
  ja: "ja_JP",
  en: "en_US",
  ru: "ru_RU",
  hy: "hy_AM",
  ms: "ms_MY",
  vi: "vi_VN",
  th: "th_TH",
  hi: "hi_IN",
  id: "id_ID",
  ar: "ar_AR",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const t = getDictionary(locale).meta;

  return {
    metadataBase: new URL("https://supplement-sales.jp"),
    title: {
      default: t.defaultTitle,
      template: `%s | ${t.titleSuffix}`,
    },
    description: t.description,
    keywords: [
      "サプリメント原材料",
      "健康食品原料",
      "化粧品原料",
      "赤ビーツ粉末",
      "ボスウェリアセラータ",
      "植物性コラーゲン",
      "アンセリン",
      "ギムネマシルベスタ",
      "アシュワガンダ",
      "ガルシニアカンボジア",
      "ブロメライン",
      "B2B原料販売",
      "輸入販売",
      "製造販売",
      "原料販売",
      "機能性原料",
    ],
    authors: [{ name: "株式会社サプリ販売" }],
    creator: "株式会社サプリ販売",
    publisher: "株式会社サプリ販売",
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      url: localeUrl(locale, "/"),
      siteName: t.siteName,
      title: t.defaultTitle,
      description: t.description,
      images: [
        {
          url: "/images/og-image.png",
          width: 1200,
          height: 630,
          alt: t.ogImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t.defaultTitle,
      description: t.description,
      images: ["/images/og-image.png"],
    },
    alternates: alternatesFor(locale, "/"),
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    category: "business",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} dir={rtlLocales.includes(locale) ? "rtl" : "ltr"}>
      <body
        className={`${notoSansJP.variable} ${localeFont[locale] ?? ""} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        <OrganizationSchema />
        <Header locale={locale} t={dict.nav} companyName={dict.company.name} companySubName={dict.company.subName} supportLanguages={dict.company.supportLanguages} />
        <main>{children}</main>
        <Footer locale={locale} t={dict.footer} company={dict.company} nav={dict.nav} />
      </body>
    </html>
  );
}
