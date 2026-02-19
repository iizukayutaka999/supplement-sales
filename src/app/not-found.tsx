import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ページが見つかりません | 株式会社サプリ販売",
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
      <h1 className="font-serif text-6xl md:text-8xl font-light text-sage mb-4">
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
        className="bg-forest text-cream px-8 py-3 text-[0.72rem] tracking-[0.2em] no-underline hover:bg-moss transition-colors"
      >
        トップページへ戻る
      </Link>
    </div>
  );
}
