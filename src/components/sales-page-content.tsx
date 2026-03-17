import { CheckoutButton } from "@/components/checkout-button";
import { product, salesPages } from "@/content/product";
import { BookOpen, Check } from "lucide-react";

interface SalesPageContentProps {
  professionKey: "physiotherapy" | "exercise-physiology";
}

export function SalesPageContent({ professionKey }: SalesPageContentProps) {
  const data = salesPages[professionKey];
  if (!data) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-warm texture-noise">
        <div className="container-narrow relative py-16 sm:py-24 lg:py-32">
          <div className="hero-headline">
            <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-5">
              The Allied Health Practice Setup Guide
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-ink)] leading-[1.1]">
              {data.headline}
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="mt-6 text-lg text-[var(--color-ink-light)] leading-relaxed max-w-xl">
              {data.subheadline}
            </p>
          </div>
          <div className="hero-ctas mt-8">
            <div className="inline-flex items-baseline gap-1.5 px-5 py-2.5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full mb-6">
              <span className="text-3xl font-semibold text-[var(--color-ink)]">
                $79
              </span>
              <span className="text-sm text-[var(--color-ink-muted)]">AUD</span>
            </div>
            <div>
              <CheckoutButton
                source={data.slug}
                className="text-base px-8 py-3.5"
              />
            </div>
            <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
              Instant PDF download. {product.pageCount} pages.{" "}
              {product.guarantee}.
            </p>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="border-b border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="container-narrow py-4 flex justify-center gap-6 sm:gap-10 text-sm text-[var(--color-ink-muted)]">
          <span>{product.chapterCount} chapters</span>
          <span className="text-[var(--color-border-strong)]">|</span>
          <span>{product.pageCount} pages</span>
          <span className="text-[var(--color-border-strong)]">|</span>
          <span>Updated {product.lastUpdated}</span>
        </div>
      </div>

      {/* Problem section */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] leading-tight">
            You know the clinical side. Nobody taught you this part.
          </h2>
          <div className="mt-8 space-y-5 text-[var(--color-ink-light)] leading-relaxed">
            {data.problemParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 sm:py-24 bg-[var(--color-surface-warm)]">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] mb-4">
            What&apos;s inside
          </h2>
          <p className="text-[var(--color-ink-muted)] mb-8">
            {product.chapterCount} chapters. Each one covers a specific decision
            or skill your degree didn&apos;t.
          </p>
          <div className="space-y-4">
            {product.chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="flex gap-4 p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-primary-bg)] text-[var(--color-primary)] flex items-center justify-center text-sm font-semibold">
                  {chapter.number}
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)]">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-light)] mt-1 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="flex gap-4 p-5 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl opacity-80">
              <div className="shrink-0 w-10 h-10 rounded-full bg-[var(--color-accent-bg)] text-[var(--color-accent)] flex items-center justify-center">
                <BookOpen size={18} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-[var(--color-ink)]">
                  {product.appendix.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-light)] mt-1 leading-relaxed">
                  {product.appendix.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free vs Paid */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] mb-4">
            Reference vs playbook
          </h2>
          <p className="text-[var(--color-ink-muted)] mb-8">
            Four free reference guides live on this site. This guide covers
            the seven chapters that don&apos;t.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border)] rounded-xl">
              <p className="text-sm font-semibold text-[var(--color-ink-muted)] uppercase tracking-wider mb-4">
                Free guides on this site
              </p>
              <ul className="space-y-3">
                {product.freeGuides.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-[var(--color-ink-light)]"
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5 text-[var(--color-ink-muted)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-[var(--color-ink-muted)]">
                Reference material. Available free.
              </p>
            </div>

            <div className="p-6 bg-[var(--color-accent-bg)] border-2 border-[var(--color-accent)]/30 rounded-xl">
              <p className="text-sm font-semibold text-[var(--color-accent-dark)] uppercase tracking-wider mb-4">
                This guide
              </p>
              <ul className="space-y-3">
                {product.paidTopics.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-[var(--color-ink)]"
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5 text-[var(--color-accent)]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs font-medium text-[var(--color-accent-dark)]">
                Strategy &amp; action plans. $79.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 sm:py-20 bg-[var(--color-accent-bg)] border-y border-[var(--color-accent)]/15">
        <div className="container-narrow text-center">
          <p className="font-serif text-3xl sm:text-4xl font-semibold text-[var(--color-ink)]">
            $79
          </p>
          <p className="mt-2 text-[var(--color-ink-light)]">
            Less than one session fee.
          </p>
          <div className="mt-6">
            <CheckoutButton
              source={data.slug}
              className="text-base px-8 py-3.5"
            />
          </div>
          <p className="mt-3 text-sm text-[var(--color-ink-muted)]">
            {product.guarantee}. Instant PDF download.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] mb-8">
            Common questions
          </h2>
          <div className="space-y-6">
            {data.faq.map((item, i) => (
              <div
                key={i}
                className="pb-6 border-b border-[var(--color-border)] last:border-0"
              >
                <h3 className="font-semibold text-[var(--color-ink)]">
                  {item.question}
                </h3>
                <p className="mt-2 text-[var(--color-ink-light)] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[var(--color-primary-dark)] py-16 sm:py-20">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="container-narrow relative text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight">
            The guide your degree didn&apos;t include.
          </h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto leading-relaxed">
            Medicare billing to your first 90 days. {product.pageCount} pages
            covering everything between qualifying and opening your doors.
          </p>
          <div className="mt-8">
            <CheckoutButton
              source={data.slug}
              className="text-base px-8 py-3.5"
            />
          </div>
          <p className="mt-4 text-xs text-white/40">
            $79 AUD. Instant download. {product.guarantee}.
          </p>
        </div>
      </section>
    </>
  );
}
