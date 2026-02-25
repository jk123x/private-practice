import type { Guide } from "@/types";

export const guides: Record<string, Guide> = {
  "cdm-billing": {
    slug: "cdm-billing",
    title:
      "How Medicare CDM Billing Works for Allied Health (Updated for GPCCMP 2025)",
    shortTitle: "Medicare CDM Billing",
    description:
      "The new GPCCMP system explained in plain English. How referrals work, the 5-session shared cap, item numbers by profession, and common billing mistakes.",
    metaTitle:
      "Medicare CDM Billing for Allied Health (GPCCMP 2025) | Private Practice Guide",
    metaDescription:
      "How Medicare CDM billing works for allied health under the new GPCCMP system (July 2025). Referral requirements, 5-session cap, item numbers, and common mistakes.",
    icon: "receipt",
    readingTime: "12 min read",
    lastUpdated: "February 2026",
  },

  "practice-costs": {
    slug: "practice-costs",
    title:
      "What It Actually Costs to Start an Allied Health Private Practice",
    shortTitle: "Practice Costs",
    description:
      "Real numbers for insurance, software, room rental, registration, and the hidden costs nobody warns you about. Broken down by profession.",
    metaTitle:
      "Allied Health Private Practice Startup Costs (2025) | Private Practice Guide",
    metaDescription:
      "What it actually costs to start an allied health private practice in Australia. Real numbers for insurance, software, room rental, registration, and hidden costs.",
    icon: "calculator",
    readingTime: "10 min read",
    lastUpdated: "February 2026",
  },

  "provider-number": {
    slug: "provider-number",
    title: "Getting Your Medicare Provider Number: Step by Step",
    shortTitle: "Provider Number",
    description:
      "The PRODA account, the HW093 form, common rejection reasons, and the location-specific trap. A plain-English walkthrough.",
    metaTitle:
      "How to Get a Medicare Provider Number (Allied Health) | Private Practice Guide",
    metaDescription:
      "Step-by-step guide to getting your Medicare provider number as an allied health professional. PRODA setup, HW093 form, and common mistakes to avoid.",
    icon: "id-card",
    readingTime: "8 min read",
    lastUpdated: "February 2026",
  },

  "business-structure": {
    slug: "business-structure",
    title:
      "Business Structure for Allied Health: Sole Trader vs Pty Ltd",
    shortTitle: "Business Structure",
    description:
      "Honest comparison with allied-health-specific considerations. GST, ABN registration, and when to get an accountant.",
    metaTitle:
      "Sole Trader vs Pty Ltd for Allied Health (Australia) | Private Practice Guide",
    metaDescription:
      "Sole trader vs Pty Ltd for allied health private practice in Australia. GST implications, ABN setup, business name registration, and when to get an accountant.",
    icon: "building",
    readingTime: "9 min read",
    lastUpdated: "February 2026",
  },
};

export const guideSlugs = Object.keys(guides) as Array<keyof typeof guides>;

export function getGuide(slug: string) {
  return guides[slug] ?? null;
}
