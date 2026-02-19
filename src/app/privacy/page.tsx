import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PageSchema } from "@/components/seo/PageSchema";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "株式会社サプリ販売のプライバシーポリシー（個人情報保護方針）。",
  alternates: {
    canonical: "https://supplement-sales.vercel.app/privacy",
  },
};

const breadcrumbItems = [
  { name: "プライバシーポリシー", href: "/privacy" },
];

export default function PrivacyPage() {
  return (
    <>
      <PageSchema
        name="プライバシーポリシー"
        description="株式会社サプリ販売のプライバシーポリシー（個人情報保護方針）。"
        path="/privacy"
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="pt-20 md:pt-24">
        <Breadcrumb items={breadcrumbItems} />

        <section className="py-12 md:py-20 px-4 md:px-16">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              tag="PRIVACY POLICY"
              title="プライバシーポリシー"
            />

            <div className="mt-8 md:mt-12 space-y-8 md:space-y-12 text-sm md:text-[0.85rem] leading-relaxed md:leading-[2.2] text-text-muted">
              <div>
                <h2 className="font-serif text-xl md:text-2xl text-forest mb-3 md:mb-4 font-light">
                  1. 個人情報の取得
                </h2>
                <p>
                  株式会社サプリ販売（以下「当社」）は、お問い合わせフォーム等を通じて、
                  お客様の会社名、氏名、メールアドレス等の個人情報を取得することがあります。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-forest mb-3 md:mb-4 font-light">
                  2. 利用目的
                </h2>
                <p>取得した個人情報は、以下の目的で利用いたします。</p>
                <ul className="mt-3 space-y-2 ml-4">
                  <li className="list-disc">お問い合わせへの回答</li>
                  <li className="list-disc">製品情報・サンプルのご案内</li>
                  <li className="list-disc">お見積もり・ご注文対応</li>
                  <li className="list-disc">当社サービスの改善</li>
                </ul>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-forest mb-3 md:mb-4 font-light">
                  3. 第三者への提供
                </h2>
                <p>
                  当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-forest mb-3 md:mb-4 font-light">
                  4. 個人情報の管理
                </h2>
                <p>
                  当社は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために必要な措置を講じます。
                </p>
              </div>

              <div>
                <h2 className="font-serif text-xl md:text-2xl text-forest mb-3 md:mb-4 font-light">
                  5. お問い合わせ窓口
                </h2>
                <p>
                  個人情報の取り扱いに関するお問い合わせは、当サイトのお問い合わせフォームよりご連絡ください。
                </p>
              </div>

              <div className="pt-6 md:pt-8 border-t border-border">
                <p className="text-[0.75rem] text-text-muted">
                  制定日：2024年1月1日
                  <br />
                  株式会社サプリ販売
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
