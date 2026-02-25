"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Loader2, ArrowRight } from "lucide-react";

interface EmailCaptureProps {
  source: string;
  buttonText?: string;
  placeholder?: string;
  className?: string;
  dark?: boolean;
}

export function EmailCapture({
  source,
  buttonText = "Get the free checklist",
  placeholder = "Your email address",
  className = "",
  dark = false,
}: EmailCaptureProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      router.push("/thanks");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full ${className}`}>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className={`flex-1 px-4 py-3 rounded-lg text-[0.9375rem] focus-ring transition-colors ${
            dark
              ? "bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:bg-white/15"
              : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-ink)] placeholder:text-[var(--color-ink-muted)] focus:border-[var(--color-accent)]"
          }`}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-accent whitespace-nowrap disabled:opacity-60"
        >
          {status === "loading" ? (
            <Loader2 size={18} className="animate-spin" />
          ) : (
            <>
              {buttonText}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>
      {status === "error" && (
        <p className={`mt-2 text-sm ${dark ? "text-red-300" : "text-red-600"}`}>
          {errorMessage}
        </p>
      )}
    </form>
  );
}
