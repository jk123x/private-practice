import Link from "next/link";
import { navLinks } from "@/lib/config";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--color-paper)]/95 backdrop-blur-sm border-b border-[var(--color-border)]">
      <nav className="container-wide">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-serif text-xl font-semibold tracking-tight text-[var(--color-ink)]"
          >
            Private Practice
            <span className="text-[var(--color-accent)]"> Guide</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors rounded-md hover:bg-[var(--color-surface-muted)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/checklist" className="btn btn-accent ml-3 text-sm py-2 px-4">
              Free Checklist
            </Link>
          </div>

          <Nav />
        </div>
      </nav>
    </header>
  );
}
