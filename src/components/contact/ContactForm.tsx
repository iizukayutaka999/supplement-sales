"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-cream/50 p-8 md:p-12 text-center">
        <p className="font-serif text-2xl md:text-3xl text-forest mb-4">
          お問い合わせありがとうございます
        </p>
        <p className="text-sm text-text-muted leading-relaxed">
          担当者より折り返しご連絡いたします。
          <br />
          通常2営業日以内にご返答いたします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-[0.65rem] tracking-[0.25em] text-text-muted">
          会社名 / COMPANY
        </label>
        <input
          type="text"
          placeholder="株式会社〇〇"
          required
          className="form-input"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[0.65rem] tracking-[0.25em] text-text-muted">
          お名前 / NAME
        </label>
        <input
          type="text"
          placeholder="山田 太郎"
          required
          className="form-input"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[0.65rem] tracking-[0.25em] text-text-muted">
          メールアドレス / EMAIL
        </label>
        <input
          type="email"
          placeholder="info@example.com"
          required
          className="form-input"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[0.65rem] tracking-[0.25em] text-text-muted">
          お問い合わせ内容 / INQUIRY TYPE
        </label>
        <select className="form-input" defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option>サンプル依頼</option>
          <option>製品情報・お見積もり</option>
          <option>製品・原料について</option>
          <option>その他</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-[0.65rem] tracking-[0.25em] text-text-muted">
          メッセージ / MESSAGE
        </label>
        <textarea
          placeholder="ご質問・ご要望をご記入ください"
          className="form-input resize-y min-h-[120px]"
        />
      </div>
      <button
        type="submit"
        className="bg-forest text-cream border-none py-3 md:py-4 px-8 md:px-10 text-[0.72rem] tracking-[0.2em] font-sans cursor-pointer hover:bg-moss transition-colors self-start"
      >
        送信する →
      </button>
    </form>
  );
}
