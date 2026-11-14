"use client";

import { useState } from "react";
import type { Locale } from "@/i18n/config";
import ja, { type Dictionary } from "@/i18n/dictionaries/ja";

interface ContactFormProps {
  t: Dictionary["contactPage"]["form"];
  locale: Locale;
}

export function ContactForm({ t, locale }: ContactFormProps) {
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
          language: locale,
        }),
      });

      if (!res.ok) {
        throw new Error(t.error);
      }

      setSubmitted(true);
    } catch {
      setError(t.error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-cream/60 px-8 py-14 md:px-12 md:py-20 text-center relative">
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
        <p className="text-xl md:text-[1.75rem] text-forest mb-4">
          {t.thanksTitle}
        </p>
        <p className="text-sm text-text-muted leading-relaxed">
          {t.thanksBody}
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
        { name: "company", label: t.company, type: "text", placeholder: t.companyPlaceholder, required: true },
        { name: "name", label: t.name, type: "text", placeholder: t.namePlaceholder, required: true },
        { name: "email", label: t.email, type: "email", placeholder: t.emailPlaceholder, required: true },
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
          {t.inquiryType}
        </label>
        <select name="inquiryType" className="form-input" defaultValue="">
          <option value="" disabled>
            {t.selectPlaceholder}
          </option>
          {/* Values stay Japanese so staff always receive the same inquiry types */}
          {t.inquiryOptions.map((label, i) => (
            <option key={label} value={ja.contactPage.form.inquiryOptions[i]}>
              {label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-2.5">
        <label className="text-[0.62rem] tracking-[0.32em] text-gold/90 uppercase font-medium">
          {t.message}
        </label>
        <textarea
          name="message"
          placeholder={t.messagePlaceholder}
          className="form-input resize-y min-h-[140px]"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="btn-primary bg-accent hover:bg-sage text-white border-none py-3.5 px-12 text-[0.9rem] font-sans cursor-pointer self-start disabled:opacity-50 disabled:cursor-not-allowed font-medium"
      >
        {loading ? t.sending : t.submit}
      </button>
    </form>
  );
}
