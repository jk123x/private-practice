"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const calloutStyles: Record<string, { bg: string; border: string; label: string; labelColor: string }> = {
  tldr: { bg: "bg-[var(--color-primary-bg)]", border: "border-[var(--color-primary)]/20", label: "TL;DR", labelColor: "text-[var(--color-primary)]" },
  "key-number": { bg: "bg-[var(--color-surface-warm)]", border: "border-[var(--color-border-strong)]", label: "Key Numbers", labelColor: "text-[var(--color-ink)]" },
  "key-takeaway": { bg: "bg-[var(--color-accent-bg)]", border: "border-[var(--color-accent)]/20", label: "Key Takeaway", labelColor: "text-[var(--color-accent-dark)]" },
  tip: { bg: "bg-emerald-50", border: "border-emerald-200", label: "Tip", labelColor: "text-emerald-700" },
  warning: { bg: "bg-amber-50", border: "border-amber-200", label: "Warning", labelColor: "text-amber-700" },
  action: { bg: "bg-[var(--color-primary-bg)]", border: "border-[var(--color-primary)]/30", label: "Action Items", labelColor: "text-[var(--color-primary)]" },
};

const components: Components = {
  blockquote: ({ children }) => {
    const text = extractText(children);
    const calloutMatch = text.match(/^\[!([\w-]+)\]\s*/);

    if (calloutMatch) {
      const type = calloutMatch[1];
      const style = calloutStyles[type] || calloutStyles.tip;

      return (
        <div className={`not-prose my-6 p-5 rounded-xl border ${style.bg} ${style.border}`}>
          <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${style.labelColor}`}>
            {style.label}
          </p>
          <div className="text-sm leading-relaxed text-[var(--color-ink-light)] [&>p]:mb-2 [&>p:last-child]:mb-0 [&_strong]:text-[var(--color-ink)] [&_ul]:mt-2 [&_ul]:space-y-1 [&_li]:flex [&_li]:gap-2">
            <CalloutContent>{children}</CalloutContent>
          </div>
        </div>
      );
    }

    return (
      <blockquote className="border-l-4 border-[var(--color-accent)] pl-4 italic">
        {children}
      </blockquote>
    );
  },
};

function extractText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && typeof node === "object" && "props" in node) {
    const el = node as { props: { children?: React.ReactNode } };
    return extractText(el.props.children);
  }
  return "";
}

function CalloutContent({ children }: { children: React.ReactNode }) {
  const text = extractText(children);
  const cleaned = text.replace(/^\[![\w-]+\]\s*\n?/, "");

  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {cleaned}
    </ReactMarkdown>
  );
}

export function ChapterRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
