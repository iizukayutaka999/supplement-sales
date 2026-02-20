import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactBody {
  company: string;
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

export async function POST(request: NextRequest) {
  const body: ContactBody = await request.json();

  // バリデーション
  if (!body.name || !body.email || !body.company) {
    return NextResponse.json(
      { error: "必須項目を入力してください" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const toAddress = process.env.GMAIL_USER || "sales@supplement-sales.jp";

  try {
    // 1. 社内通知メール
    await transporter.sendMail({
      from: `"株式会社サプリ販売 ウェブサイト" <${toAddress}>`,
      to: toAddress,
      replyTo: body.email,
      subject: `【お問い合わせ】${body.inquiryType || "一般"} - ${body.company} ${body.name}様`,
      text: [
        "=== 新しいお問い合わせ ===",
        "",
        `会社名: ${body.company}`,
        `お名前: ${body.name}`,
        `メール: ${body.email}`,
        `種別: ${body.inquiryType || "未選択"}`,
        "",
        "--- メッセージ ---",
        body.message || "(なし)",
        "",
        "---",
        "このメールは supplement-sales.jp のお問い合わせフォームから自動送信されました。",
      ].join("\n"),
    });

    // 2. お問い合わせ者への自動返信メール
    await transporter.sendMail({
      from: `"株式会社サプリ販売" <${toAddress}>`,
      to: body.email,
      subject:
        "【株式会社サプリ販売】お問い合わせありがとうございます",
      text: [
        `${body.name} 様`,
        "",
        "この度は株式会社サプリ販売にお問い合わせいただき、誠にありがとうございます。",
        "以下の内容でお問い合わせを承りました。",
        "",
        "━━━━━━━━━━━━━━━━━━━━",
        `会社名: ${body.company}`,
        `お名前: ${body.name}`,
        `種別: ${body.inquiryType || "未選択"}`,
        "",
        "メッセージ:",
        body.message || "(なし)",
        "━━━━━━━━━━━━━━━━━━━━",
        "",
        "担当者より通常2営業日以内にご返答いたします。",
        "今しばらくお待ちくださいますようお願い申し上げます。",
        "",
        "---",
        "株式会社サプリ販売",
        "〒370-2303 群馬県富岡市蕨1004番地1",
        "https://supplement-sales.jp",
        "",
        "※このメールは自動送信です。このメールへの返信はお控えください。",
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail send error:", err);
    return NextResponse.json(
      { error: "メール送信に失敗しました" },
      { status: 500 }
    );
  }
}
