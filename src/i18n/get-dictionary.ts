import type { Locale } from "./config";
import type { Dictionary } from "./dictionaries/ja";
import ja from "./dictionaries/ja";
import en from "./dictionaries/en";
import ru from "./dictionaries/ru";
import hy from "./dictionaries/hy";
import ms from "./dictionaries/ms";
import vi from "./dictionaries/vi";
import th from "./dictionaries/th";
import hi from "./dictionaries/hi";
import id from "./dictionaries/id";
import ar from "./dictionaries/ar";

const dictionaries: Record<Locale, Dictionary> = { ja, en, ru, hy, ms, vi, th, hi, id, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Replaces {key} placeholders in a dictionary string. */
export function fill(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => values[key] ?? "");
}
