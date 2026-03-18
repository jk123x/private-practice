import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

const KIT_BASE = "https://api.kit.com/v4";

function kitHeaders(apiKey: string) {
  return {
    "Content-Type": "application/json",
    "X-Kit-Api-Key": apiKey,
  };
}

async function tagPurchaserInKit(email: string) {
  const apiKey = process.env.KIT_API_KEY;
  const tagId = process.env.KIT_PURCHASER_TAG_ID;

  if (!apiKey || !tagId) {
    console.warn("Kit purchaser tagging not configured (missing KIT_API_KEY or KIT_PURCHASER_TAG_ID)");
    return;
  }

  // Create/update subscriber
  const subRes = await fetch(`${KIT_BASE}/subscribers`, {
    method: "POST",
    headers: kitHeaders(apiKey),
    body: JSON.stringify({ email_address: email }),
  });

  if (!subRes.ok) {
    const data = await subRes.json();
    console.error("Kit create subscriber error:", subRes.status, data);
    return;
  }

  // Tag them as purchaser
  const tagRes = await fetch(`${KIT_BASE}/tags/${tagId}/subscribers`, {
    method: "POST",
    headers: kitHeaders(apiKey),
    body: JSON.stringify({ email_address: email }),
  });

  if (!tagRes.ok) {
    const data = await tagRes.json();
    console.error("Kit tag subscriber error:", tagRes.status, data);
    return;
  }

  console.log(`Tagged ${email} as purchaser in Kit`);
}

export async function POST(request: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set");
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const body = await request.text();
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    if (session.payment_status === "paid" && session.customer_details?.email) {
      // Fire and forget - don't block the webhook response
      tagPurchaserInKit(session.customer_details.email).catch((err) =>
        console.error("Failed to tag purchaser in Kit:", err)
      );
    }
  }

  return NextResponse.json({ received: true });
}
