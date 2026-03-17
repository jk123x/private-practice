import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { ChapterRenderer } from "./chapter-renderer";

export const metadata: Metadata = {
  title: "Guide Preview",
  robots: "noindex, nofollow",
};

const GUIDE_DIR = path.join(process.cwd(), "content/guide");

const chapters = [
  { file: "00-introduction.md", label: "Intro" },
  { file: "chapter-1-the-decision.md", label: "1. Financial Reality" },
  { file: "chapter-2-setting-up.md", label: "2. Setting Up" },
  { file: "chapter-3-medicare-cdm.md", label: "3. Medicare CDM" },
  { file: "chapter-4-ndis-basics.md", label: "4. NDIS Basics" },
  { file: "chapter-5-pricing.md", label: "5. Pricing" },
  { file: "chapter-6-finding-clients.md", label: "6. Finding Clients" },
  { file: "chapter-7-financial-foundations.md", label: "7. Financial Foundations" },
  { file: "chapter-8-common-mistakes.md", label: "8. Common Mistakes" },
  { file: "chapter-9-first-90-days.md", label: "9. First 90 Days" },
  { file: "appendix-quick-reference.md", label: "Appendix" },
];

function getChapterContent() {
  return chapters.map((ch) => ({
    ...ch,
    content: fs.readFileSync(path.join(GUIDE_DIR, ch.file), "utf-8"),
    wordCount: fs
      .readFileSync(path.join(GUIDE_DIR, ch.file), "utf-8")
      .split(/\s+/)
      .filter(Boolean).length,
  }));
}

export default function PreviewPage() {
  const data = getChapterContent();
  const totalWords = data.reduce((sum, ch) => sum + ch.wordCount, 0);

  return (
    <div className="min-h-screen bg-[var(--color-paper)]">
      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 bg-[var(--color-surface)]/95 backdrop-blur-sm border-b border-[var(--color-border)] py-3">
        <div className="container-wide">
          <div className="flex items-center justify-between gap-4 mb-2">
            <p className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wider">
              Guide Preview
            </p>
            <p className="text-xs text-[var(--color-ink-muted)]">
              {totalWords.toLocaleString()} words total
            </p>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-hide">
            {data.map((ch) => (
              <a
                key={ch.file}
                href={`#${ch.file.replace(".md", "")}`}
                className="shrink-0 text-xs px-2.5 py-1.5 rounded-md bg-[var(--color-surface-warm)] text-[var(--color-ink-muted)] hover:bg-[var(--color-primary-bg)] hover:text-[var(--color-primary)] transition-colors"
              >
                {ch.label}
                <span className="ml-1 text-[var(--color-ink-muted)]/60">
                  ({ch.wordCount.toLocaleString()}w)
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Chapters */}
      <div className="container-narrow py-12 space-y-16">
        {data.map((ch) => (
          <article
            key={ch.file}
            id={ch.file.replace(".md", "")}
            className="scroll-mt-24"
          >
            <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-[var(--color-border)]">
              <span className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider">
                {ch.label}
              </span>
              <span className="text-xs text-[var(--color-ink-muted)]">
                {ch.wordCount.toLocaleString()} words
              </span>
            </div>
            <div className="prose prose-lg prose-guide max-w-none">
              <ChapterRenderer content={ch.content} />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
