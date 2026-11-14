import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page not found / ページが見つかりません",
  robots: {
    index: false,
    follow: true,
  },
};

// not-found receives no route params, so the message is shown in Japanese and English
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 pt-32 pb-20 text-center">
      <h1 className="text-7xl md:text-9xl font-semibold text-sage/40 mb-6">404</h1>
      <p className="text-lg md:text-xl text-forest mb-1">ページが見つかりません</p>
      <p className="text-base text-forest mb-4">Page not found</p>
      <p className="text-sm text-text-muted mb-8">
        お探しのページは存在しないか、移動した可能性があります。
        <br />
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="btn-primary bg-accent hover:bg-sage text-white px-10 py-3.5 text-[0.9rem] font-medium no-underline"
      >
        Home / トップページへ
      </Link>
    </div>
  );
}
