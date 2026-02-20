import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  description:
    "お探しのページは存在しないか、移動した可能性があります。株式会社サプリ販売のトップページへお戻りください。",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
      <h1 className="font-serif text-7xl md:text-9xl font-light text-sage/60 mb-6">
        404
      </h1>
      <p className="text-lg md:text-xl text-forest mb-2">
        ページが見つかりません
      </p>
      <p className="text-sm text-text-muted mb-8">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Link
        href="/"
        className="btn-primary bg-forest text-cream px-10 py-4 text-[0.72rem] tracking-[0.2em] no-underline"
      >
        <span className="relative z-10">トップページへ戻る</span>
      </Link>
    </div>
  );
}
