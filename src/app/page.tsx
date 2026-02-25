import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Stethoscope, Footprints, Dumbbell, Apple } from "lucide-react";
import { GuideCard } from "@/components/guide-card";
import { CTABanner } from "@/components/cta-banner";
import { OrganizationSchema } from "@/components/seo";
import { guides } from "@/content/guides";
import { config } from "@/lib/config";

export const metadata: Metadata = {
  title: `${config.siteName} | Allied Health Private Practice Australia`,
  description: config.description,
  alternates: { canonical: "/" },
};

const professionTiles = [
  {
    name: "Physiotherapy",
    href: "/physiotherapy",
    icon: <Stethoscope size={24} />,
    stat: "47,500 registered",
    description: "The largest allied health private practice market in Australia",
  },
  {
    name: "Podiatry",
    href: "/podiatry",
    icon: <Footprints size={24} />,
    stat: "~5,800 registered",
    description: "Highest CDM billing volume of any allied health profession",
  },
  {
    name: "Exercise Physiology",
    href: "/exercise-physiology",
    icon: <Dumbbell size={24} />,
    stat: "~7,500 registered",
    description: "Fastest-growing allied health profession in private practice",
  },
  {
    name: "Dietetics",
    href: "/dietetics",
    icon: <Apple size={24} />,
    stat: "~9,000 registered",
    description: "Growing private practice market with minimal business training",
  },
];

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-warm texture-noise">
        <div className="container-narrow relative py-20 sm:py-28 lg:py-36">
          <div className="hero-headline">
            <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-5">
              Updated for GPCCMP 2025
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-[var(--color-ink)] leading-[1.1]">
              The business side of
              <br />
              private practice.
              <br />
              <span className="text-[var(--color-accent)] italic">
                Finally explained.
              </span>
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="mt-7 text-lg sm:text-xl text-[var(--color-ink-light)] leading-relaxed max-w-lg">
              Plain-English guides for allied health professionals starting
              private practice in Australia. No jargon. No fluff. Just the
              stuff you actually need to know.
            </p>
          </div>
          <div className="hero-ctas mt-9 flex flex-wrap gap-4">
            <Link href="/checklist" className="btn btn-accent">
              Get the free setup checklist
              <ArrowRight size={16} />
            </Link>
            <Link href="/guides/cdm-billing" className="btn btn-outline">
              Read the CDM billing guide
            </Link>
          </div>
        </div>
      </section>

      {/* Profession tiles */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)]">
              Find your profession
            </h2>
            <p className="mt-3 text-[var(--color-ink-muted)] max-w-md mx-auto">
              Profession-specific guidance for starting your practice. Medicare
              item numbers, registration requirements, and real costs.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
            {professionTiles.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="group block p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl hover-lift"
              >
                <div className="w-11 h-11 rounded-lg bg-[var(--color-primary-bg)] text-[var(--color-primary)] flex items-center justify-center mb-4 group-hover:bg-[var(--color-accent-bg)] group-hover:text-[var(--color-accent)] transition-colors">
                  {tile.icon}
                </div>
                <h3 className="font-semibold text-[var(--color-ink)] group-hover:text-[var(--color-primary)] transition-colors">
                  {tile.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--color-accent)] font-medium">
                  {tile.stat}
                </p>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)] leading-relaxed">
                  {tile.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Guide topics */}
      <section className="py-16 sm:py-24 bg-[var(--color-surface-warm)]">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)]">
              Start here
            </h2>
            <p className="mt-3 text-[var(--color-ink-muted)] max-w-md mx-auto">
              Free reference guides covering the essentials every allied health
              practitioner needs to understand before going into private practice.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto stagger">
            {Object.values(guides).map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      </section>

      {/* Credibility / What this covers */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)]">
              Why this exists
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6 text-[var(--color-ink-light)] leading-relaxed">
            <p>
              You spent years learning to be a clinician. Anatomy, pathology,
              evidence-based practice. Then one day you decided to go out on your
              own and discovered that nobody taught you how to actually{" "}
              <em className="font-serif">run a business</em>.
            </p>
            <p>
              The information exists, scattered across Services Australia PDFs,
              professional association member portals, legal firm blog posts, and
              Facebook groups. But nowhere is it collected into one clear,
              practical resource that just tells you what to do and in what order.
            </p>
            <p>
              That is what this site is. Every guide is written in plain English,
              kept current (Medicare CDM billing changed in July 2025 with the
              switch from GPMP/TCA to GPCCMP, and most existing content hasn&apos;t
              caught up), and focused on the specific needs of allied health
              professionals billing through the CDM pathway.
            </p>
            <div className="mt-10 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl">
              <p className="text-sm font-semibold text-[var(--color-accent-dark)] mb-2">
                Timing matters
              </p>
              <p className="text-sm text-[var(--color-ink-light)]">
                Medicare CDM billing changed in July 2025 when GPCCMP replaced
                the old GPMP/TCA system. Nearly all existing &ldquo;how to bill
                Medicare&rdquo; content is now outdated. Every guide on this site
                reflects the current system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner source="homepage" />
    </>
  );
}
