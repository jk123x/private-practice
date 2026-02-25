import Link from "next/link";
import { Receipt, Calculator, IdCard, Building2 } from "lucide-react";
import type { Guide } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  receipt: <Receipt size={22} />,
  calculator: <Calculator size={22} />,
  "id-card": <IdCard size={22} />,
  building: <Building2 size={22} />,
};

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group block p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover-lift"
    >
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-[var(--color-accent-bg)] text-[var(--color-accent)] flex items-center justify-center">
          {iconMap[guide.icon]}
        </div>
        <div>
          <h3 className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
            {guide.shortTitle}
          </h3>
          <p className="mt-1.5 text-sm text-[var(--color-ink-muted)] leading-relaxed">
            {guide.description}
          </p>
          <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
            {guide.readingTime}
          </p>
        </div>
      </div>
    </Link>
  );
}
