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
              Medicare, pricing,
              <br />
              GP referrals, tax.
              <br />
              <span className="text-[var(--color-accent)] italic">
                All in one place.
              </span>
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="mt-7 text-lg sm:text-xl text-[var(--color-ink-light)] leading-relaxed max-w-lg">
              Guides for allied health professionals starting private practice
              in Australia. Real numbers, current rules, and the specific
              steps that Services Australia PDFs won&apos;t walk you through.
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
              There&apos;s a moment, usually late at night, where you&apos;re
              three tabs deep into a Services Australia PDF and you realise you
              have no idea whether you need a sole trader ABN or a Pty Ltd, what
              a GPCCMP referral looks like, or what to charge for a 45-minute
              consult. You&apos;re a qualified clinician and you feel completely
              lost.
            </p>
            <p>
              The information exists. It&apos;s scattered across government
              sites, professional association member portals, legal firm blog
              posts, and Facebook groups with conflicting advice. Piecing it
              together takes weeks, and half of it is outdated.
            </p>
            <p>
              This site collects it into one resource. Every guide is kept
              current (Medicare CDM billing changed in July 2025 with the
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
