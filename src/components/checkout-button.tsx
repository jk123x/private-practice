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

  async function handleClick() {
    setLoading(true);
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
    } catch (error) {
      console.error("Checkout error:", error);
      setLoading(false);
    }
  }

  return (
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
  );
}
