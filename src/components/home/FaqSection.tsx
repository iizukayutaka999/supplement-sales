import type { FaqItem } from "@/i18n/dictionaries/ja";
import { FaqList } from "@/components/ui/FaqList";
import { HomeSectionHeading } from "./HomeSectionHeading";

export function FaqSection({ title, items }: { title: string; items: FaqItem[] }) {
  return (
    <section className="bg-white border-t border-border py-20 md:py-28 px-4 md:px-16">
      <div className="max-w-3xl mx-auto">
        <HomeSectionHeading eyebrow="FAQ" title={title} />
        <FaqList items={items} />
      </div>
    </section>
  );
}
