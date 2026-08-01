"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: formData.get("company"),
          name: formData.get("name"),
          email: formData.get("email"),
          inquiryType: formData.get("inquiryType"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        throw new Error("送信に失敗しました");
      }

      setSubmitted(true);
    } catch {
      setError("送信に失敗しました。時間をおいて再度お試しください。");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-cream/60 px-8 py-14 md:px-12 md:py-20 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-8 rounded-full border border-gold/30 flex items-center justify-center">
          <svg
            viewBox="0 0 32 32"
            className="w-7 h-7 md:w-8 md:h-8 text-gold"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 16l6 6 12-14" />
          </svg>
        </div>
        <p className="font-serif text-xl md:text-[1.75rem] text-forest mb-4 font-light">
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
    <form onSubmit={handleSubmit} className="flex flex-col gap-7 md:gap-9">
      {error && (
        <div className="border-l-2 border-red-400 bg-red-50/60 text-red-700 px-4 py-3 text-sm">
          {error}
        </div>
      )}
      {[
        { name: "company", label: "会社名 / Company", type: "text", placeholder: "株式会社〇〇", required: true },
        { name: "name", label: "お名前 / Name", type: "text", placeholder: "山田 太郎", required: true },
        { name: "email", label: "メールアドレス / Email", type: "email", placeholder: "info@example.com", required: true },
      ].map((field) => (
        <div key={field.name} className="flex flex-col gap-2.5">
          <label className="text-[0.62rem] tracking-[0.32em] text-gold/90 uppercase font-medium">
            {field.label}
          </label>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
            className="form-input"
          />
        </div>
      ))}
      <div className="flex flex-col gap-2.5">
        <label className="text-[0.62rem] tracking-[0.32em] text-gold/90 uppercase font-medium">
          お問い合わせ内容 / Inquiry Type
        </label>
        <select name="inquiryType" className="form-input" defaultValue="">
          <option value="" disabled>
            選択してください
          </option>
          <option>サンプル依頼</option>
          <option>製品情報・お見積もり</option>
          <option>製品・原料について</option>
          <option>その他</option>
        </select>
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-[0.62rem] tracking-[0.32em] text-gold/90 uppercase font-medium">
          メッセージ / Message
        </label>
        <textarea
          name="message"
          placeholder="ご質問・ご要望をご記入ください"
          className="form-input resize-y min-h-[140px]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-forest text-cream border-none py-4 md:py-4 px-12 md:px-14 text-[0.7rem] tracking-[0.28em] font-sans cursor-pointer hover:bg-moss transition-all duration-500 self-start disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_6px_20px_rgba(26,51,40,0.18)] hover:-translate-y-0.5 uppercase font-medium"
      >
        {loading ? "送信中..." : "送信する →"}
      </button>
    </form>
  );
}
