"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/config";

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)] transition-colors"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <div className="absolute top-16 left-0 right-0 bg-[var(--color-surface)] border-b border-[var(--color-border)] shadow-lg z-50">
          <div className="container-wide py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-[var(--color-ink-light)] hover:text-[var(--color-ink)] hover:bg-[var(--color-surface-muted)] rounded-md transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/checklist"
              onClick={() => setOpen(false)}
              className="btn btn-accent mt-2 mx-4"
            >
              Free Checklist
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
