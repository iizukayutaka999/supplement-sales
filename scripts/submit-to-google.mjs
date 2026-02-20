#!/usr/bin/env node

/**
 * Google Search Console URL登録スクリプト
 *
 * 使い方:
 *   npm run submit-urls
 *
 * 必要な環境変数:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL - Google Cloud サービスアカウントのメール
 *   GOOGLE_PRIVATE_KEY           - サービスアカウントの秘密鍵
 *
 * === セットアップ手順 ===
 *
 * 1. Google Cloud Console (https://console.cloud.google.com) でプロジェクト作成
 *
 * 2. 「Google Search Console API」を有効化
 *    - APIs & Services > Library > "Web Search Indexing API" を検索して有効化
 *
 * 3. サービスアカウントを作成
 *    - APIs & Services > Credentials > Create Credentials > Service Account
 *    - 名前: "supplement-sales-indexing"
 *    - JSON キーをダウンロード
 *
 * 4. Google Search Console にサービスアカウントを追加
 *    - https://search.google.com/search-console にアクセス
 *    - supplement-sales.jp を追加・認証
 *    - 設定 > ユーザーと権限 > ユーザーを追加
 *    - サービスアカウントのメールアドレスを「オーナー」として追加
 *
 * 5. 環境変数を設定 (.env.local)
 *    GOOGLE_SERVICE_ACCOUNT_EMAIL=xxx@xxx.iam.gserviceaccount.com
 *    GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
 *
 * 6. 実行
 *    npm run submit-urls
 */

const SITE_URL = "https://supplement-sales.jp";

// サイトの全ページURL
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

// =============================================
// Method 1: Google Indexing API (サービスアカウント使用)
// =============================================
async function getAccessToken() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    return null;
  }

  // JWT Header
  const header = { alg: "RS256", typ: "JWT" };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  // Node.js crypto を使って JWT 署名
  const { createSign } = await import("node:crypto");

  const encode = (obj) =>
    Buffer.from(JSON.stringify(obj)).toString("base64url");
  const headerB64 = encode(header);
  const claimB64 = encode(claim);
  const signInput = `${headerB64}.${claimB64}`;

  const sign = createSign("RSA-SHA256");
  sign.update(signInput);
  const signature = sign.sign(key, "base64url");

  const jwt = `${signInput}.${signature}`;

  // JWT をアクセストークンに変換
  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const tokenData = await tokenRes.json();
  return tokenData.access_token;
}

async function submitToGoogleIndexingAPI(urls, accessToken) {
  console.log("\n=== Google Indexing API でURL登録中 ===\n");

  for (const url of urls) {
    try {
      const res = await fetch(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            url: url,
            type: "URL_UPDATED",
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        console.log(`  [OK] ${url}`);
      } else {
        console.log(
          `  [ERROR] ${url} - ${data.error?.message || res.status}`
        );
      }
    } catch (err) {
      console.log(`  [FAIL] ${url} - ${err.message}`);
    }

    // Rate limit: 少し待機
    await new Promise((r) => setTimeout(r, 500));
  }
}

// =============================================
// Method 2: IndexNow (Bing, Yandex, Naver 等)
// =============================================
async function submitToIndexNow(urls) {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.log("\n=== IndexNow (Bing/Yandex) ===");
    console.log(
      "  スキップ: INDEXNOW_KEY が設定されていません"
    );
    console.log("  設定方法:");
    console.log("    1. .env.local に INDEXNOW_KEY=your_key を追加");
    console.log(
      `    2. public/YOUR_KEY.txt を作成 (中身はキーと同じ文字列)\n`
    );
    return;
  }

  console.log("\n=== IndexNow (Bing/Yandex) でURL登録中 ===\n");

  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  for (const engine of engines) {
    try {
      const res = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host: "supplement-sales.jp",
          key: key,
          keyLocation: `${SITE_URL}/${key}.txt`,
          urlList: urls,
        }),
      });

      if (res.ok || res.status === 202) {
        console.log(`  [OK] ${engine} - ${urls.length}件登録完了`);
      } else {
        console.log(`  [ERROR] ${engine} - Status: ${res.status}`);
      }
    } catch (err) {
      console.log(`  [FAIL] ${engine} - ${err.message}`);
    }
  }
}

// =============================================
// Method 3: Google Sitemap Ping (簡易)
// =============================================
async function pingSitemap() {
  console.log("\n=== Google Sitemap Ping ===\n");
  const sitemapUrl = `${SITE_URL}/sitemap.xml`;

  try {
    const res = await fetch(
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`
    );
    if (res.ok) {
      console.log(`  [OK] サイトマップ通知成功: ${sitemapUrl}`);
    } else {
      console.log(`  [INFO] Status: ${res.status} (Google は 2024年以降 ping を非推奨にしていますが、試行しました)`);
    }
  } catch (err) {
    console.log(`  [INFO] Sitemap ping: ${err.message}`);
  }
}

// =============================================
// Main
// =============================================
async function main() {
  console.log("╔══════════════════════════════════════════════╗");
  console.log("║  株式会社サプリ販売 - URL登録スクリプト      ║");
  console.log("╚══════════════════════════════════════════════╝");
  console.log(`\n対象URL: ${ALL_URLS.length}件`);
  ALL_URLS.forEach((url) => console.log(`  - ${url}`));

  // 1. Google Indexing API
  const accessToken = await getAccessToken();
  if (accessToken) {
    await submitToGoogleIndexingAPI(ALL_URLS, accessToken);
  } else {
    console.log("\n=== Google Indexing API ===");
    console.log(
      "  スキップ: GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY が未設定"
    );
    console.log("  ※ セットアップ手順はこのファイル上部のコメントを参照\n");
  }

  // 2. IndexNow
  await submitToIndexNow(ALL_URLS);

  // 3. Sitemap Ping
  await pingSitemap();

  console.log("\n" + "=".repeat(50));
  console.log("完了！");
  console.log("\n推奨: Google Search Console にログインし、手動でもURL検査を実行してください:");
  console.log("  https://search.google.com/search-console");
  console.log("=".repeat(50) + "\n");
}

main().catch(console.error);
