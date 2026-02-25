import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { EmailCapture } from "@/components/email-capture";
import { WebPageSchema } from "@/components/seo";

export const metadata: Metadata = {
  title: "Free Practice Setup Checklist | Private Practice Guide",
  description:
    "Download the free Allied Health Practice Setup Checklist. Updated for GPCCMP 2025. Covers business setup, Medicare, provider numbers, and your first 90 days.",
  alternates: { canonical: "/checklist" },
};

const checklistItems = [
  {
    phase: "Business Foundations",
    items: [
      "Choose your business structure (sole trader vs Pty Ltd)",
      "Register your ABN",
      "Register your business name (if applicable)",
      "Get professional indemnity insurance",
      "Get public liability insurance",
      "Confirm AHPRA registration (or ESSA/DA accreditation) is current",
    ],
  },
  {
    phase: "Medicare Setup",
    items: [
      "Set up your PRODA account",
      "Apply for your Medicare provider number (per location)",
      "Set up HPOS access",
      "Understand GPCCMP referral requirements",
      "Set up Medicare claiming (software or manual)",
    ],
  },
  {
    phase: "Practice Setup",
    items: [
      "Secure your practice location (room rental, sublease, or standalone)",
      "Choose and set up practice management software",
      "Set your fee schedule",
      "Set up a business bank account",
      "Organise profession-specific equipment",
    ],
  },
  {
    phase: "Client Acquisition",
    items: [
      "Build your GP referral list",
      "Register on directory platforms (Healthdirect, HotDoc)",
      "Set up a professional website",
      "Create your Google Business Profile",
    ],
  },
];

export default function ChecklistPage() {
  return (
    <>
      <WebPageSchema
        title="Free Practice Setup Checklist"
        description="Download the free Allied Health Practice Setup Checklist, updated for GPCCMP 2025."
        url="/checklist"
      />

      <section className="relative overflow-hidden gradient-warm texture-noise">
        <div className="container-narrow relative py-20 sm:py-28">
          <div className="hero-headline">
            <p className="text-sm font-medium text-[var(--color-accent)] uppercase tracking-wider mb-5">
              Free download
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[var(--color-ink)] leading-[1.1]">
              The Allied Health
              <br />
              Practice Setup Checklist
            </h1>
          </div>
          <div className="hero-subtitle">
            <p className="mt-6 text-lg text-[var(--color-ink-light)] leading-relaxed max-w-lg">
              Everything you need to do to set up your private practice, in
              order. Updated for the July 2025 GPCCMP changes. Printable,
              checkable, and linked to our detailed guides.
            </p>
          </div>
          <div className="hero-ctas mt-8 max-w-md">
            <EmailCapture source="checklist-page" />
            <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
              Free. No spam. Unsubscribe any time.
            </p>
          </div>
        </div>
      </section>

      {/* Preview of what's in the checklist */}
      <section className="py-16 sm:py-24">
        <div className="container-narrow">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[var(--color-ink)] text-center mb-4">
            What&apos;s in the checklist
          </h2>
          <p className="text-center text-[var(--color-ink-muted)] mb-12 max-w-lg mx-auto">
            Four phases covering everything from ABN registration to your first
            client. Each item includes a short explainer and links to our
            detailed reference guides.
          </p>

          <div className="space-y-8">
            {checklistItems.map((section) => (
              <div
                key={section.phase}
                className="p-6 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
              >
                <h3 className="font-semibold text-[var(--color-ink)] mb-4">
                  {section.phase}
                </h3>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="shrink-0 mt-0.5 text-[var(--color-accent)]"
                      />
                      <span className="text-sm text-[var(--color-ink-light)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--color-ink-muted)] mb-6">
              Get the full checklist with detailed explanations for every step.
            </p>
            <div className="max-w-md mx-auto">
              <EmailCapture source="checklist-page-bottom" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
