import { NextRequest, NextResponse } from "next/server";

const SITE_URL = "https://supplement-sales.jp";

const ALL_URLS = [
  `${SITE_URL}/`,
  `${SITE_URL}/products`,
  `${SITE_URL}/products/red-beet-powder`,
  `${SITE_URL}/products/boswellia-serrata`,
  `${SITE_URL}/products/plant-based-collagen`,
  `${SITE_URL}/products/anserine`,
  `${SITE_URL}/company`,
  `${SITE_URL}/contact`,
  `${SITE_URL}/legal`,
  `${SITE_URL}/privacy`,
];

export async function POST(request: NextRequest) {
  // シークレットキーで認証
  const authHeader = request.headers.get("authorization");
  const expectedToken = process.env.REINDEX_SECRET;

  if (!expectedToken || authHeader !== `Bearer ${expectedToken}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results: { url: string; status: string }[] = [];

  // IndexNow (Bing/Yandex) に送信
  const indexNowKey = process.env.INDEXNOW_KEY;
  if (indexNowKey) {
    const engines = [
      "https://api.indexnow.org/indexnow",
      "https://www.bing.com/indexnow",
    ];

    for (const engine of engines) {
      try {
        const res = await fetch(engine, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            host: "supplement-sales.jp",
            key: indexNowKey,
            keyLocation: `${SITE_URL}/${indexNowKey}.txt`,
            urlList: ALL_URLS,
          }),
        });

        results.push({
          url: engine,
          status: res.ok || res.status === 202 ? "success" : `error:${res.status}`,
        });
      } catch (err) {
        results.push({
          url: engine,
          status: `error:${err instanceof Error ? err.message : "unknown"}`,
        });
      }
    }
  }

  // Google Sitemap Ping
  try {
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    const res = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );
    results.push({
      url: "google-sitemap-ping",
      status: res.ok ? "success" : `status:${res.status}`,
    });
  } catch (err) {
    results.push({
      url: "google-sitemap-ping",
      status: `error:${err instanceof Error ? err.message : "unknown"}`,
    });
  }

  return NextResponse.json({
    message: "Reindex request completed",
    urlCount: ALL_URLS.length,
    results,
  });
}
