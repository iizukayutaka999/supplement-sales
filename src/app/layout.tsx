import type { Metadata } from "next";
import { Cormorant_Garamond, Noto_Sans_JP } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { OrganizationSchema } from "@/components/seo/OrganizationSchema";
import "./globals.css";

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
  metadataBase: new URL("https://supplement-sales.vercel.app"),
  title: {
    default: "株式会社サプリ販売 | 高品質原材料の輸入・販売",
    template: "%s | 株式会社サプリ販売",
  },
  description:
    "コスメ・健康食品の高品質原材料を世界中から輸入・販売。コラーゲン、プロバイオティクス、ローヤルゼリー等のB2B原材料供給。日本語・英語・ロシア語対応。",
  keywords: [
    "サプリメント原材料",
    "健康食品原料",
    "化粧品原料",
    "コラーゲン",
    "プロバイオティクス",
    "ローヤルゼリー",
    "B2B",
    "輸入",
    "原料販売",
    "OEM",
  ],
  authors: [{ name: "株式会社サプリ販売" }],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://supplement-sales.vercel.app",
    siteName: "株式会社サプリ販売",
    title: "株式会社サプリ販売 | 高品質原材料の輸入・販売",
    description:
      "コスメ・健康食品の高品質原材料を世界中から輸入・販売。コラーゲン、プロバイオティクス、ローヤルゼリー等のB2B原材料供給。",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "株式会社サプリ販売",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "株式会社サプリ販売 | 高品質原材料の輸入・販売",
    description:
      "コスメ・健康食品の高品質原材料を世界中から輸入・販売。B2B原材料供給の専門商社。",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://supplement-sales.vercel.app",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
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
        <OrganizationSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
