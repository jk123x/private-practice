import Link from "next/link";
import type { Profession } from "@/types";

export function ProfessionHero({ profession }: { profession: Profession }) {
  return (
    <section className="relative overflow-hidden gradient-warm py-16 sm:py-24">
      <div className="container-narrow">
        <div className="hero-headline">
          <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-4">
            {profession.name} Private Practice
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-ink)] leading-[1.15]">
            Starting your {profession.name.toLowerCase()} practice?
          </h1>
        </div>
        <div className="hero-subtitle">
          <p className="mt-6 text-lg text-[var(--color-ink-light)] leading-relaxed max-w-xl">
            {profession.heroSubtitle}
          </p>
        </div>
        <div className="hero-ctas mt-8 flex flex-wrap gap-4">
          <Link href="/checklist" className="btn btn-accent">
            Get the free setup checklist
          </Link>
          <Link href="/guides/cdm-billing" className="btn btn-outline">
            Read the CDM billing guide
          </Link>
        </div>
      </div>
    </section>
  );
}
