import Link from "next/link";
import { MetaPixel } from "@/components/meta-pixel";

export default function BuyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-sales-page>
      <MetaPixel />

      <div className="py-5 text-center">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-[var(--color-ink)]"
        >
          Private Practice
          <span className="text-[var(--color-accent)]"> Guide</span>
        </Link>
      </div>

      {children}

      <div className="py-8 text-center text-xs text-[var(--color-ink-muted)] space-y-1">
        <p>
          &copy; {new Date().getFullYear()} Private Practice Guide. All rights
          reserved.
        </p>
        <p>
          This site provides general information only. Always consult a
          qualified professional for advice specific to your situation.
        </p>
      </div>
    </div>
  );
}
