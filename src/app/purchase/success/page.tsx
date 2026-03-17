import type { Metadata } from "next";
import Link from "next/link";
import { Download, CheckCircle, Mail } from "lucide-react";
import { getStripe } from "@/lib/stripe";
import { product } from "@/content/product";
import { MetaPixel, PurchaseEvent } from "@/components/meta-pixel";

export const metadata: Metadata = {
  title: "Purchase Complete",
  robots: { index: false, follow: false },
};

export default async function SuccessPage(props: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await props.searchParams;

  if (!session_id) {
    return <InvalidSession />;
  }

  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session.payment_status !== "paid") {
      return <InvalidSession />;
    }

    const downloadUrl = process.env.GUIDE_DOWNLOAD_URL;
    const customerEmail = session.customer_details?.email;

    return (
      <>
        <MetaPixel />
        <PurchaseEvent value={product.price} />

        <section className="py-16 sm:py-24">
          <div className="container-narrow text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-6">
              <CheckCircle size={32} />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-[var(--color-ink)]">
              You&apos;re in. Here&apos;s your guide.
            </h1>

            <p className="mt-4 text-[var(--color-ink-light)] max-w-md mx-auto leading-relaxed">
              Thanks for purchasing {product.name}. Download your copy below.
            </p>

            {downloadUrl ? (
              <div className="mt-8">
                <a
                  href={downloadUrl}
                  className="btn btn-accent text-base px-8 py-3.5"
                  download
                >
                  <Download size={18} />
                  Download your guide (PDF)
                </a>
              </div>
            ) : (
              <div className="mt-8 p-6 bg-[var(--color-accent-bg)] border border-[var(--color-accent)]/20 rounded-xl max-w-md mx-auto">
                <Mail
                  size={24}
                  className="mx-auto text-[var(--color-accent)] mb-3"
                />
                <p className="text-sm text-[var(--color-ink-light)]">
                  Your guide will be sent to{" "}
                  <strong className="text-[var(--color-ink)]">
                    {customerEmail || "your email"}
                  </strong>{" "}
                  within the next few minutes.
                </p>
              </div>
            )}

            <div className="mt-12 p-6 bg-[var(--color-surface-warm)] border border-[var(--color-border)] rounded-xl max-w-md mx-auto text-left">
              <h2 className="font-semibold text-[var(--color-ink)] mb-3">
                What happens next
              </h2>
              <ul className="space-y-2 text-sm text-[var(--color-ink-light)]">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">1.</span>
                  Download and read the guide at your own pace
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">2.</span>
                  Start with Chapter 1 if you&apos;re still deciding, or jump to
                  Chapter 7 for the 90-day action plan
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">3.</span>
                  Check out the{" "}
                  <Link
                    href="/guides/cdm-billing"
                    className="text-[var(--color-primary)] underline"
                  >
                    free CDM billing reference
                  </Link>{" "}
                  for detailed Medicare item numbers
                </li>
              </ul>
            </div>

            <p className="mt-8 text-xs text-[var(--color-ink-muted)]">
              Questions? Email{" "}
              <a
                href="mailto:hello@privatepracticeguide.com.au"
                className="underline"
              >
                hello@privatepracticeguide.com.au
              </a>
            </p>
          </div>
        </section>
      </>
    );
  } catch {
    return <InvalidSession />;
  }
}

function InvalidSession() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-narrow text-center">
        <h1 className="font-serif text-2xl font-semibold text-[var(--color-ink)]">
          Something went wrong
        </h1>
        <p className="mt-4 text-[var(--color-ink-light)]">
          We couldn&apos;t verify your purchase. If you&apos;ve completed
          payment, please email{" "}
          <a
            href="mailto:hello@privatepracticeguide.com.au"
            className="text-[var(--color-primary)] underline"
          >
            hello@privatepracticeguide.com.au
          </a>{" "}
          and we&apos;ll sort it out.
        </p>
        <div className="mt-8">
          <Link href="/" className="btn btn-outline">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
