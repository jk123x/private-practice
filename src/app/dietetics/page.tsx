import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { ProfessionHero } from "@/components/profession-hero";
import { GuideCard } from "@/components/guide-card";
import { CTABanner } from "@/components/cta-banner";
import { WebPageSchema } from "@/components/seo";
import { getProfession } from "@/content/professions";
import { guides } from "@/content/guides";

const profession = getProfession("dietetics")!;

export const metadata: Metadata = {
  title: profession.metaTitle,
  description: profession.metaDescription,
  alternates: { canonical: "/dietetics" },
};

export default function DieteticsPage() {
  return (
    <>
      <WebPageSchema
        title={profession.metaTitle}
        description={profession.metaDescription}
        url="/dietetics"
      />

      <ProfessionHero profession={profession} />

      {/* The problem */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] leading-tight">
            You spent {profession.trainingYears} years learning nutrition
            science. Nobody taught you how to run a business.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--color-ink-light)] leading-relaxed">
            <p>
              Academic research has specifically identified a &ldquo;significant gap in
              business education for graduate dietitians.&rdquo; That&apos;s not
              speculation. It&apos;s a documented finding. Most dietetics degrees are
              heavily focused on hospital and community health settings, and
              private practice gets minimal (if any) coverage.
            </p>
            <p>
              About 44% of Australia&apos;s ~9,000 registered dietitians work in
              private practice, and that number is growing. The barrier to entry
              is lower than many allied health professions because your overhead
              can be minimal. You don&apos;t need a treatment chair, an autoclave, or
              a gym full of equipment. A consulting room (or a telehealth setup)
              and good software is enough to start.
            </p>
            <p>
              But that accessibility comes with its own challenges. You&apos;re
              competing in a market where unregulated nutritionists and wellness
              influencers can set up shop with no qualifications, often charging
              less and making bigger claims. Your advantage is clinical
              credibility and Medicare access through the CDM pathway. Knowing
              how to use that advantage is the business skill nobody taught you.
            </p>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-16 sm:py-24 bg-[var(--color-surface-warm)]">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-8">
            What catches new dietetics practice owners off guard
          </h2>
          <div className="space-y-5">
            {profession.painPoints.map((point, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <div className="shrink-0 w-8 h-8 rounded-full bg-[var(--color-accent-bg)] text-[var(--color-accent)] flex items-center justify-center text-sm font-semibold">
                  {i + 1}
                </div>
                <p className="text-[var(--color-ink-light)] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you need to know */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-4">
            What you need to know before you start
          </h2>
          <p className="text-[var(--color-ink-muted)] mb-8">
            These guides cover the shared foundations every allied health
            practitioner needs. Written for the CDM pathway and updated for the
            2025 GPCCMP changes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <GuideCard guide={guides["cdm-billing"]} />
            <GuideCard guide={guides["practice-costs"]} />
            <GuideCard guide={guides["provider-number"]} />
            <GuideCard guide={guides["business-structure"]} />
          </div>
        </div>
      </section>

      {/* Quick reference box */}
      <section className="py-16 sm:py-24 bg-[var(--color-surface-warm)]">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl font-semibold text-[var(--color-ink)] mb-8">
            Dietetics quick reference
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
              <h3 className="text-sm font-semibold text-[var(--color-ink-muted)] uppercase tracking-wider mb-4">
                Accreditation &amp; Association
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[var(--color-ink-muted)]">Accreditation body</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{profession.registrationBody}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-ink-muted)]">Professional association</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    <a href={profession.associationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:underline">
                      {profession.association} <ExternalLink size={12} />
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[var(--color-ink-muted)]">AHPRA regulated</dt>
                  <dd className="font-medium text-[var(--color-ink)]">No (self-regulated via DA)</dd>
                </div>
              </dl>
            </div>

            <div className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
              <h3 className="text-sm font-semibold text-[var(--color-ink-muted)] uppercase tracking-wider mb-4">
                Medicare &amp; Fees
              </h3>
              <dl className="space-y-3 text-sm">
                <div>
                  <dt className="text-[var(--color-ink-muted)]">Key CDM item numbers</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{profession.medicareItems.map((item) => item.code).join(", ")}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-ink-muted)]">Medicare rebate (individual)</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{profession.medicareItems[0].rebate}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-ink-muted)]">Typical session fee</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{profession.typicalSessionFee}</dd>
                </div>
                <div>
                  <dt className="text-[var(--color-ink-muted)]">Typical patient gap</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{profession.typicalGapFee}</dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-6 p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl">
            <h3 className="text-sm font-semibold text-[var(--color-ink-muted)] uppercase tracking-wider mb-4">
              Medicare Item Numbers
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--color-border)]">
                    <th className="text-left py-2 pr-4 font-medium text-[var(--color-ink-muted)]">Item</th>
                    <th className="text-left py-2 pr-4 font-medium text-[var(--color-ink-muted)]">Description</th>
                    <th className="text-right py-2 font-medium text-[var(--color-ink-muted)]">Rebate</th>
                  </tr>
                </thead>
                <tbody>
                  {profession.medicareItems.map((item) => (
                    <tr key={item.code} className="border-b border-[var(--color-border)]/50">
                      <td className="py-2.5 pr-4 font-medium text-[var(--color-ink)]">{item.code}</td>
                      <td className="py-2.5 pr-4 text-[var(--color-ink-light)]">{item.description}</td>
                      <td className="py-2.5 text-right text-[var(--color-ink)]">{item.rebate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CTABanner source="dietetics-page" />
    </>
  );
}
