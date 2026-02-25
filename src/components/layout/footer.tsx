import Link from "next/link";
import { config } from "@/lib/config";

const guideLinks = [
  { label: "Medicare CDM Billing", href: "/guides/cdm-billing" },
  { label: "Practice Costs", href: "/guides/practice-costs" },
  { label: "Provider Number", href: "/guides/provider-number" },
  { label: "Business Structure", href: "/guides/business-structure" },
];

const professionLinks = [
  { label: "Physiotherapy", href: "/physiotherapy" },
  { label: "Podiatry", href: "/podiatry" },
  { label: "Exercise Physiology", href: "/exercise-physiology" },
  { label: "Dietetics", href: "/dietetics" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white/80">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-lg font-semibold text-white"
            >
              Private Practice
              <span className="text-[var(--color-accent-light)]"> Guide</span>
            </Link>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Plain-English guides for allied health professionals starting
              private practice in Australia.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-2.5">
              {guideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              By Profession
            </h3>
            <ul className="space-y-2.5">
              {professionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/checklist"
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  Free Setup Checklist
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {config.siteName}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40">
            This site provides general information only. Always consult a
            qualified professional for advice specific to your situation.
          </p>
        </div>
      </div>
    </footer>
  );
}
