"use client";

import { useState } from "react";

const SERIF = "var(--font-newsreader), Georgia, serif";
const SANS = "var(--font-outfit), system-ui, sans-serif";
const SLATE = "#1e2640";
const AMBER = "#c97b3a";
const URL_TEXT = "privatepracticeguide.com.au";

function AdShell({
  children,
  bg = SLATE,
}: {
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <div
      style={{
        width: 1080,
        height: 1080,
        background: bg,
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "100px 90px",
      }}
    >
      {/* Subtle amber glow top-right */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201,123,58,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Thin amber top rule */}
      <div
        style={{
          position: "absolute",
          top: 60,
          left: 90,
          right: 90,
          height: 2,
          background: "rgba(201,123,58,0.3)",
        }}
      />
      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
      {/* Bottom bar */}
      <div
        style={{
          position: "absolute",
          bottom: 60,
          left: 90,
          right: 90,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: SANS,
            fontSize: 18,
            color: "rgba(255,255,255,0.35)",
            letterSpacing: "0.02em",
          }}
        >
          {URL_TEXT}
        </span>
        <span
          style={{
            fontFamily: SANS,
            fontSize: 20,
            fontWeight: 500,
            color: AMBER,
            letterSpacing: "0.01em",
          }}
        >
          $79
        </span>
      </div>
    </div>
  );
}

// ─── PHYSIO ADS ──────────────────────────────────────────

function Ad1A_PhysioGPMP() {
  return (
    <AdShell>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 20,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: AMBER,
          marginBottom: 48,
        }}
      >
        Physiotherapy
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 130,
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "rgba(255,255,255,0.25)",
          textDecoration: "line-through",
          textDecorationColor: AMBER,
          textDecorationThickness: 4,
          marginBottom: 16,
        }}
      >
        GPMP
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 130,
          fontWeight: 600,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          color: "#ffffff",
          marginBottom: 60,
        }}
      >
        GPCCMP
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 36,
          fontWeight: 400,
          lineHeight: 1.35,
          color: "rgba(255,255,255,0.7)",
          maxWidth: 600,
        }}
      >
        The rules changed.
        <br />
        <span style={{ color: AMBER }}>Your Google results didn&apos;t.</span>
      </div>
    </AdShell>
  );
}

function Ad1B_Physio5Sessions() {
  return (
    <AdShell>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 20,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: AMBER,
          marginBottom: 44,
        }}
      >
        Medicare CDM Billing
      </div>
      {/* What they think is true */}
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 58,
          fontWeight: 500,
          lineHeight: 1.2,
          color: "rgba(255,255,255,0.35)",
          marginBottom: 12,
        }}
      >
        5 physio sessions per patient.
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 58,
          fontWeight: 500,
          lineHeight: 1.2,
          color: "rgba(255,255,255,0.2)",
          marginBottom: 48,
        }}
      >
        5 podiatry. 5 dietetics.
      </div>
      {/* The correction */}
      <div style={{ width: 80, height: 2, background: AMBER, marginBottom: 44 }} />
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 68,
          fontWeight: 600,
          lineHeight: 1.15,
          color: "#ffffff",
          marginBottom: 32,
        }}
      >
        It&apos;s 5 total.{" "}
        <span style={{ color: AMBER }}>Shared.</span>
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 28,
          fontWeight: 400,
          lineHeight: 1.45,
          color: "rgba(255,255,255,0.55)",
          maxWidth: 620,
        }}
      >
        Across all allied health. Not per profession.
        <br />
        The rules changed in July 2025.
      </div>
    </AdShell>
  );
}

function Ad4A_PhysioMistakes() {
  const items = [
    { amount: "$10,000–20,000", label: "not setting up telehealth" },
    { amount: "$5,000–15,000", label: "signing a lease too early" },
    { amount: "$50,000+", label: "wrong insurance coverage" },
    { amount: "$2,700+", label: "missing the session cap" },
  ];
  return (
    <AdShell>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 20,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: AMBER,
          marginBottom: 48,
        }}
      >
        Starting a physio practice?
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
        {items.map((item) => (
          <div key={item.label} style={{ display: "flex", gap: 28, alignItems: "baseline" }}>
            <span
              style={{
                fontFamily: SERIF,
                fontSize: 56,
                fontWeight: 600,
                color: AMBER,
                lineHeight: 1,
                minWidth: 340,
                letterSpacing: "-0.02em",
              }}
            >
              {item.amount}
            </span>
            <span
              style={{
                fontFamily: SANS,
                fontSize: 28,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.3,
              }}
            >
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 56,
          fontFamily: SANS,
          fontSize: 26,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        This guide covers all ten.
      </div>
    </AdShell>
  );
}

// ─── EP ADS ──────────────────────────────────────────────

function Ad1C_EPGPCCMP() {
  return (
    <AdShell>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 20,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: AMBER,
          marginBottom: 48,
        }}
      >
        Exercise Physiology
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 72,
          fontWeight: 600,
          lineHeight: 1.15,
          color: "#ffffff",
          marginBottom: 12,
          letterSpacing: "-0.02em",
        }}
      >
        Almost nothing is written for EPs.
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 72,
          fontWeight: 600,
          lineHeight: 1.15,
          color: AMBER,
          marginBottom: 48,
          letterSpacing: "-0.02em",
        }}
      >
        This guide is.
      </div>
      {/* Divider */}
      <div style={{ width: 80, height: 2, background: "rgba(201,123,58,0.3)", marginBottom: 40 }} />
      <div
        style={{
          fontFamily: SANS,
          fontSize: 28,
          fontWeight: 400,
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.55)",
          maxWidth: 650,
        }}
      >
        GPCCMP. ESSA accreditation. GST rules.
        <br />
        Provider numbers without AHPRA.
        <br />
        <span style={{ color: "rgba(255,255,255,0.75)" }}>
          85 pages, current rules, EP-specific.
        </span>
      </div>
    </AdShell>
  );
}

function Ad3A_EPGST() {
  return (
    <AdShell>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 120,
          fontWeight: 600,
          lineHeight: 1,
          color: "#ffffff",
          letterSpacing: "-0.02em",
          marginBottom: 8,
        }}
      >
        GST-free?
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 78,
          fontWeight: 500,
          lineHeight: 1.1,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 56,
          letterSpacing: "-0.01em",
        }}
      >
        Not if you&apos;re an EP.
      </div>
      {/* Divider */}
      <div
        style={{
          width: 80,
          height: 2,
          background: AMBER,
          marginBottom: 44,
        }}
      />
      <div
        style={{
          fontFamily: SANS,
          fontSize: 30,
          fontWeight: 400,
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.55)",
          maxWidth: 680,
        }}
      >
        Physio services are GST-free. EP services might not be.
        <br />
        <span style={{ color: "rgba(255,255,255,0.8)" }}>
          ESSA ≠ AHPRA.
        </span>{" "}
        The tax rules are different.
      </div>
    </AdShell>
  );
}

function Ad2A_EPNDIS() {
  return (
    <AdShell>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 20,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: AMBER,
          marginBottom: 48,
        }}
      >
        Exercise Physiology
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 76,
          fontWeight: 600,
          lineHeight: 1.1,
          color: "#ffffff",
          marginBottom: 12,
          letterSpacing: "-0.02em",
        }}
      >
        NDIS registration
      </div>
      <div
        style={{
          fontFamily: SERIF,
          fontSize: 76,
          fontWeight: 600,
          lineHeight: 1.1,
          color: AMBER,
          marginBottom: 48,
          letterSpacing: "-0.02em",
        }}
      >
        costs $2,000–5,000.
      </div>
      {/* Divider */}
      <div style={{ width: 80, height: 2, background: "rgba(201,123,58,0.3)", marginBottom: 40 }} />
      <div
        style={{
          fontFamily: SANS,
          fontSize: 32,
          fontWeight: 400,
          lineHeight: 1.45,
          color: "rgba(255,255,255,0.55)",
          maxWidth: 700,
          marginBottom: 12,
        }}
      >
        60–70% of NDIS participants can see you
        <span style={{ color: "rgba(255,255,255,0.8)" }}> without it.</span>
      </div>
      <div
        style={{
          fontFamily: SANS,
          fontSize: 32,
          fontWeight: 400,
          lineHeight: 1.45,
          color: "rgba(255,255,255,0.75)",
        }}
      >
        Do you actually need to register on day one?
      </div>
    </AdShell>
  );
}

// ─── AD DATA ─────────────────────────────────────────────

const ADS = [
  {
    id: "1A",
    profession: "Physio",
    label: "Still Googling GPMP?",
    component: Ad1A_PhysioGPMP,
    headline: "The Practice Setup Guide for Physiotherapists",
    primaryText:
      "If you're starting a physio practice and still finding references to GPMPs and TCAs — those rules changed in July 2025. The new GPCCMP system works differently: 5 sessions shared across all allied health, not per profession. Most of what's online hasn't caught up yet. This 85-page guide has.",
    cta: "Download the guide — $79",
  },
  {
    id: "1B",
    profession: "Physio",
    label: "5 sessions. Not 5 per profession.",
    component: Ad1B_Physio5Sessions,
    headline:
      "Medicare CDM billing changed. Here's what it means for your practice.",
    primaryText:
      "The new Medicare GPCCMP system gives CDM patients 5 allied health sessions per year. Total. Shared across every profession. Not 5 for physio and 5 for the podiatrist. If you're setting up a practice and planning your revenue around the old rules, your numbers are wrong. This guide walks through the new billing maths.",
    cta: "Get the guide — $79",
  },
  {
    id: "4A",
    profession: "Physio",
    label: "Ten mistakes, $30,000+",
    component: Ad4A_PhysioMistakes,
    headline: "The Practice Setup Guide for Physiotherapists",
    primaryText:
      "Not setting up telehealth: $10,000–20,000/year in appointments that cancel instead of switching to video. Signing a lease too early: $5,000–15,000 in fixed costs before you have the patients to justify them. Skipping proper insurance: one claim, $50,000–500,000. Not tracking the 5-session shared cap: surprised patients and rebilled sessions. These aren't the obvious mistakes. They're the ones nobody warns you about. This guide covers ten of them, with the dollar figures and how to avoid each one.",
    cta: "Get the guide — $79",
  },
  {
    id: "1C",
    profession: "EP",
    label: "GPCCMP as a non-AHPRA profession",
    component: Ad1C_EPGPCCMP,
    headline: "The Practice Setup Guide for Exercise Physiologists",
    primaryText:
      "Medicare CDM billing changed in July 2025. If you're an EP figuring out how GPCCMP works when you're not AHPRA-registered — the ESSA accreditation pathway, the provider number process, the GST implications — there's almost nothing written for you specifically. This guide covers it. 85 pages, current rules, $79.",
    cta: "Download the guide — $79",
  },
  {
    id: "3A",
    profession: "EP",
    label: "Physios don't charge GST. You might have to.",
    component: Ad3A_EPGST,
    headline: "The Practice Setup Guide for Exercise Physiologists",
    primaryText:
      "Physiotherapy services are GST-free. Exercise physiology services might not be. Because you're ESSA-accredited, not AHPRA-registered, the GST exemption for medical services doesn't automatically apply. If you're setting up an EP practice and assuming your services are GST-free like the physio next door, check before your first BAS is due. This guide covers the GST rules specific to EPs, plus Medicare billing, NDIS, pricing, and a 90-day plan.",
    cta: "Get the guide — $79",
  },
  {
    id: "2A",
    profession: "EP",
    label: "NDIS registration costs $2K–$5K",
    component: Ad2A_EPNDIS,
    headline: "NDIS, Medicare, GST — the EP practice setup guide",
    primaryText:
      "Registering as an NDIS provider means audit fees ($2,000–5,000), compliance paperwork, and price caps. Not registering means you can still see 60–70% of NDIS participants — the plan-managed and self-managed ones. Most new solo EPs don't need to register on day one. But the decision depends on your area, your caseload mix, and the maths. This guide walks through it.",
    cta: "Get the guide — $79",
  },
];

// ─── PREVIEW PAGE ────────────────────────────────────────

export default function AdsPreviewPage() {
  const [current, setCurrent] = useState(0);
  const [fullSize, setFullSize] = useState(false);
  const ad = ADS[current];
  const Component = ad.component;

  if (fullSize) {
    return (
      <div
        data-sales-page
        style={{
          background: "#000",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <button
          onClick={() => setFullSize(false)}
          style={{
            marginBottom: 20,
            padding: "10px 24px",
            borderRadius: 6,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.05)",
            color: "rgba(255,255,255,0.6)",
            fontFamily: SANS,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          ← Back to preview
        </button>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", marginBottom: 12, fontFamily: SANS }}>
          Right-click → Save Image As (or screenshot at 1080×1080)
        </div>
        <Component />
      </div>
    );
  }

  return (
    <div
      data-sales-page
      style={{
        minHeight: "100vh",
        background: "#0f1117",
        color: "#ffffff",
        fontFamily: SANS,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "40px 24px 80px",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: SERIF,
              fontSize: 28,
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 8,
            }}
          >
            Meta Ad Creatives
          </h1>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)" }}>
            6 ads (3 physio, 3 EP). Image + copy for each. Click &quot;Full
            size&quot; to export at 1080×1080.
          </p>
        </div>

        {/* Ad selector */}
        <div
          style={{
            display: "flex",
            gap: 6,
            marginBottom: 32,
            flexWrap: "wrap",
          }}
        >
          {ADS.map((a, i) => (
            <button
              key={a.id}
              onClick={() => setCurrent(i)}
              style={{
                padding: "10px 16px",
                borderRadius: 6,
                border:
                  i === current
                    ? "1px solid " + AMBER
                    : "1px solid rgba(255,255,255,0.1)",
                background:
                  i === current
                    ? "rgba(201,123,58,0.15)"
                    : "rgba(255,255,255,0.03)",
                color:
                  i === current ? AMBER : "rgba(255,255,255,0.45)",
                fontFamily: SANS,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.15s ease",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: 32,
                  fontSize: 11,
                  fontWeight: 600,
                  color:
                    i === current
                      ? AMBER
                      : a.profession === "Physio"
                        ? "rgba(100,180,255,0.5)"
                        : "rgba(180,140,255,0.5)",
                  marginRight: 6,
                }}
              >
                {a.profession}
              </span>
              {a.id}
            </button>
          ))}
        </div>

        {/* Main preview */}
        <div
          style={{
            display: "flex",
            gap: 40,
            alignItems: "flex-start",
          }}
        >
          {/* Image preview */}
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                width: 520,
                height: 520,
                overflow: "hidden",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                cursor: "pointer",
              }}
              onClick={() => setFullSize(true)}
              title="Click for full size"
            >
              <div
                style={{
                  transform: "scale(0.4815)",
                  transformOrigin: "top left",
                }}
              >
                <Component />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: 12,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  color: "rgba(255,255,255,0.2)",
                }}
              >
                1080×1080 · shown at ~48%
              </span>
              <button
                onClick={() => setFullSize(true)}
                style={{
                  padding: "6px 14px",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: SANS,
                  fontSize: 12,
                  cursor: "pointer",
                }}
              >
                Full size →
              </button>
            </div>

            {/* Nav */}
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 16,
                alignItems: "center",
              }}
            >
              <button
                onClick={() =>
                  setCurrent((current - 1 + ADS.length) % ADS.length)
                }
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                ←
              </button>
              <button
                onClick={() => setCurrent((current + 1) % ADS.length)}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 6,
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: "rgba(255,255,255,0.4)",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                →
              </button>
              <span
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.2)",
                  marginLeft: 8,
                }}
              >
                {current + 1} / {ADS.length}
              </span>
            </div>
          </div>

          {/* Copy panel */}
          <div style={{ flex: 1, paddingTop: 4 }}>
            {/* Profession + ID badge */}
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                marginBottom: 16,
              }}
            >
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color:
                    ad.profession === "Physio"
                      ? "rgba(100,180,255,0.7)"
                      : "rgba(180,140,255,0.7)",
                  padding: "4px 10px",
                  borderRadius: 4,
                  background:
                    ad.profession === "Physio"
                      ? "rgba(100,180,255,0.1)"
                      : "rgba(180,140,255,0.1)",
                }}
              >
                {ad.profession}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: AMBER,
                  letterSpacing: "0.04em",
                }}
              >
                Ad {ad.id}
              </span>
            </div>

            <h2
              style={{
                fontFamily: SERIF,
                fontSize: 26,
                fontWeight: 500,
                color: "#ffffff",
                marginBottom: 28,
                lineHeight: 1.25,
              }}
            >
              {ad.label}
            </h2>

            {/* Copy fields for Meta Ads Manager */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 24,
              }}
            >
              <CopyField label="Headline" value={ad.headline} />
              <CopyField label="Primary text" value={ad.primaryText} long />
              <CopyField label="CTA button text" value={ad.cta} />
              <CopyField
                label="Destination URL"
                value={
                  ad.profession === "Physio"
                    ? "https://privatepracticeguide.com.au/buy/physiotherapy"
                    : "https://privatepracticeguide.com.au/buy/exercise-physiology"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CopyField({
  label,
  value,
  long,
}: {
  label: string;
  value: string;
  long?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 6,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          {label}
        </span>
        <button
          onClick={handleCopy}
          style={{
            fontSize: 11,
            color: copied ? AMBER : "rgba(255,255,255,0.25)",
            background: "none",
            border: "none",
            cursor: "pointer",
            fontFamily: SANS,
            padding: "2px 6px",
            transition: "color 0.15s ease",
          }}
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <div
        style={{
          padding: long ? "14px 16px" : "10px 16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 6,
          fontFamily: SANS,
          fontSize: 14,
          lineHeight: 1.6,
          color: "rgba(255,255,255,0.7)",
          whiteSpace: long ? "pre-wrap" : undefined,
        }}
      >
        {value}
      </div>
    </div>
  );
}
