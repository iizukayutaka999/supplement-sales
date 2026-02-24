import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import "./globals.css";

const GA_ID = "G-5MWPMNEHWP";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://supplement-sales.jp"),
  title: {
    default: "株式会社サプリ販売 | サプリメント原材料の輸入販売・製造販売",
    template: "%s | 株式会社サプリ販売",
  },
  description:
    "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社。赤ビーツ粉末、ボスウェリアセラータ、アシュワガンダ、ギムネマ、ガルシニア、ブロメライン等の高品質B2B原材料を供給。日本語・英語・ロシア語対応。",
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
    locale: "ja_JP",
    url: "https://supplement-sales.jp",
    siteName: "株式会社サプリ販売",
    title: "株式会社サプリ販売 | サプリメント原材料の輸入販売・製造販売",
    description:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売する専門商社。赤ビーツ粉末、ボスウェリアセラータ、植物性コラーゲン、アンセリン等の高品質B2B原材料を供給。",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社サプリ販売 - サプリメント原材料の輸入販売・製造販売",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社サプリ販売 | サプリメント原材料の輸入販売・製造販売",
    description:
      "サプリメント・健康食品・化粧品の原材料を輸入販売・製造販売するB2B専門商社。",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://supplement-sales.jp",
  },
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${cormorant.variable} ${notoSansJP.variable} antialiased`}
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
