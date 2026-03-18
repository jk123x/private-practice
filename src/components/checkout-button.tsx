"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";

interface CheckoutButtonProps {
  source: string;
  className?: string;
  children?: React.ReactNode;
}

export function CheckoutButton({
  source,
  className = "",
  children,
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ source }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Failed to create checkout session");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setError(
        err instanceof Error && err.message !== "Failed to create checkout session"
          ? err.message
          : "Something went wrong. Please try again."
      );
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        disabled={loading}
        className={`btn btn-accent disabled:opacity-60 ${className}`}
      >
        {loading ? (
          <Loader2 size={18} className="animate-spin" />
        ) : (
          children || (
            <>
              Get the guide &mdash; $79
              <ArrowRight size={16} />
            </>
          )
        )}
      </button>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
