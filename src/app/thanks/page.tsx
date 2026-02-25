import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thanks! Check your email | Private Practice Guide",
  description: "Your checklist is on its way. Check your email.",
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container-narrow text-center">
        <div className="mx-auto w-16 h-16 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6">
          <CheckCircle2 size={32} />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[var(--color-ink)]">
          You&apos;re in. Check your email.
        </h1>
        <p className="mt-4 text-lg text-[var(--color-ink-light)] max-w-md mx-auto leading-relaxed">
          The Allied Health Practice Setup Checklist is on its way to your
          inbox. If it doesn&apos;t show up in a few minutes, check your spam
          folder.
        </p>

        <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
          <p className="text-sm text-[var(--color-ink-muted)] mb-6">
            While you wait, start reading the guides:
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/guides/cdm-billing"
              className="btn btn-primary"
            >
              Medicare CDM Billing Guide
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/guides/practice-costs"
              className="btn btn-outline"
            >
              Practice Startup Costs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
