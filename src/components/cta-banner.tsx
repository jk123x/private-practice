import { EmailCapture } from "./email-capture";

interface CTABannerProps {
  source: string;
  headline?: string;
  subtext?: string;
}

export function CTABanner({
  source,
  headline = "Get the free practice setup checklist",
  subtext = "Updated for the 2025 GPCCMP changes. Covers business setup, Medicare, and your first 90 days.",
}: CTABannerProps) {
  return (
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
          {headline}
        </h2>
        <p className="mt-4 text-white/70 max-w-lg mx-auto leading-relaxed">
          {subtext}
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <EmailCapture source={source} dark />
        </div>
        <p className="mt-4 text-xs text-white/40">
          Free. No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
