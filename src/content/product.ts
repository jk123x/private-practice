export interface Chapter {
  number: number;
  title: string;
  description: string;
}

export interface SalesPageData {
  slug: string;
  profession: string;
  practitionerTitle: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  subheadline: string;
  problemParagraphs: string[];
  faq: { question: string; answer: string }[];
}

export const product = {
  name: "The Allied Health Practice Setup Guide",
  price: 79,
  currency: "AUD",
  format: "PDF",
  pageCount: 85,
  chapterCount: 9,
  lastUpdated: "March 2026",
  guarantee: "30-day money-back guarantee",
  chapters: [
    {
      number: 1,
      title: "The Decision: Employed vs Private",
      description:
        "A real income comparison. What you'll take home in Year 1 vs staying employed, once you account for super, leave, and the expenses most calculators leave out. Plus the scenarios where staying employed is the smarter call.",
    },
    {
      number: 2,
      title: "Setting Up Your Practice",
      description:
        "Where to practise (room rental vs lease vs home office), which practice management software to use, setting up Medicare claiming, choosing insurance, getting telehealth ready, and what equipment you actually need on day one.",
    },
    {
      number: 3,
      title: "Medicare CDM Billing in Your Practice",
      description:
        "Setting up your claiming workflow so it works from day one. Managing the 5-session shared cap, avoiding the billing errors that cost you real money, and talking to patients about Medicare in plain English.",
    },
    {
      number: 4,
      title: "NDIS Basics for CDM Practitioners",
      description:
        "Should you register as an NDIS provider? How plan management types affect when you get paid. The GST complications for non-AHPRA professions. What registration costs and whether it's worth it when you're starting out.",
    },
    {
      number: 5,
      title: "Pricing Your Services",
      description:
        "How to set your fee when everyone gives you a different number. The gap fee maths, when bulk billing makes sense (rarely), and how to tell patients your price without apologising.",
    },
    {
      number: 6,
      title: "Finding Your First Clients",
      description:
        "How to walk into a GP clinic when you've never done it before. What to say, what to bring, how to follow up so they remember you. Plus the directories worth listing on and the ones that waste your money.",
    },
    {
      number: 7,
      title: "Financial Foundations",
      description:
        "Setting aside tax when nobody's withholding it for you. Paying your own super. Budgeting when your income is $2,500 one week and $900 the next. The bank accounts to set up before you see your first patient.",
    },
    {
      number: 8,
      title: "Common Mistakes & What They Cost",
      description:
        "Ten mistakes with real dollar figures. The session cap surprise, the lease you signed too early, the telehealth you never set up. Each one with what it costs and how to avoid it.",
    },
    {
      number: 9,
      title: "Your First 90 Days",
      description:
        "Week by week: how many patients to expect, when to visit GPs, what to set up and in what order. With benchmarks at 30, 60, and 90 days so you know if you're on track.",
    },
  ] as Chapter[],
  appendix: {
    title: "Quick Reference Appendix",
    description:
      "Software comparison table, insurance checklist, first-30-days admin calendar, and summaries of the four free reference guides with links to the full versions.",
  },
  freeGuides: [
    "What sole trader vs Pty Ltd means",
    "How GPCCMP Medicare billing works",
    "Getting your Medicare provider number",
    "Practice setup costs, broken down",
  ],
  paidTopics: [
    "Should you go private? A side-by-side income comparison for Year 1",
    "Where to practise, which software to use, and how to set up Medicare claiming",
    "How CDM billing works in your practice: the 5-session cap, common errors, patient conversations",
    "NDIS: should you register, and what it costs if you don't",
    "What to charge per session, with the maths worked through",
    "How to get GPs referring to you when you know zero GPs",
    "Tax, super, and cash flow on variable income",
    "Ten mistakes that cost new practice owners $10,000+",
    "Week-by-week plan for your first 90 days",
  ],
};

export const salesPages: Record<string, SalesPageData> = {
  physiotherapy: {
    slug: "physiotherapy",
    profession: "Physiotherapy",
    practitionerTitle: "physiotherapist",
    metaTitle: "The Practice Setup Guide for Physiotherapists | $79 AUD",
    metaDescription:
      "85-page guide to starting your physio practice in Australia. Medicare billing (updated for GPCCMP), pricing, GP referrals, and a 90-day action plan. $79.",
    headline: "You can diagnose a rotator cuff tear. Can you set a session fee?",
    subheadline:
      "Where to practise, what to charge, how to set up Medicare billing, how to get GPs referring to you, and a week-by-week plan for your first 90 days. Updated for the July 2025 GPCCMP changes.",
    problemParagraphs: [
      "You've been Googling some combination of 'how much does it cost to start a physio practice' and 'sole trader or Pty Ltd for allied health' and getting the same vague answers everywhere. Lots of 'talk to your accountant' and very few dollar figures.",
      "Meanwhile, Medicare CDM billing changed in July 2025 when GPCCMP replaced the old GPMP/TCA system. Most of the content you're finding online still references rules that no longer apply. You're trying to figure out the 5-session shared cap, whether referrals need a form or a letter now, and what happens to patients on existing plans.",
      "And then there's the GP referral question. Your entire CDM patient pipeline depends on GPs sending patients to you, and your degree included exactly zero hours on how to walk into a GP clinic and introduce yourself.",
      "Everything else out there is either a regulatory checklist (ABN, AHPRA, provider number) that tells you WHAT to do but not how to think about it, or a $5,000 coaching program for people who already have an established practice. This guide sits in the gap: specific numbers, specific steps, current rules, $79.",
    ],
    faq: [
      {
        question: "Can I find this online for free?",
        answer:
          "The reference material, yes. Four chapters' worth is free on this site right now. What you won't find anywhere is a single resource covering the decisions: should you go private, what to charge, how to get GPs referring, what order to do things in. That's what this guide covers.",
      },
      {
        question: "Is this relevant to my state or territory?",
        answer:
          "Yes. Medicare CDM billing, AHPRA registration, and business structure are all federal. Where state-specific rules apply (room rental regulations, council requirements), the guide notes them.",
      },
      {
        question: "What format is the guide?",
        answer:
          "85-page PDF. Download link immediately after purchase.",
      },
      {
        question: "Is this up to date with the GPCCMP changes?",
        answer:
          "Yes. Updated for the July 2025 changes. Most content online still references GPMP/TCA, which no longer applies for new patients.",
      },
      {
        question:
          "I'm joining an existing practice, not starting my own. Is this useful?",
        answer:
          "Pricing, finding clients, financial foundations, and the 90-day plan are still relevant. The business structure chapters less so, but understanding billing and the business side is useful regardless.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Yes. Email within 30 days for a full refund.",
      },
    ],
  },
  "exercise-physiology": {
    slug: "exercise-physiology",
    profession: "Exercise Physiology",
    practitionerTitle: "exercise physiologist",
    metaTitle:
      "The Practice Setup Guide for Exercise Physiologists | $79 AUD",
    metaDescription:
      "85-page guide to starting your EP practice in Australia. NDIS, Medicare as a non-AHPRA profession, GST, GP referrals, and a 90-day plan. $79.",
    headline:
      "Every business guide is written for physios. This one is for EPs.",
    subheadline:
      "NDIS registration decisions, Medicare CDM billing, the GST trap for non-AHPRA professions, getting GPs to understand what you do, and a 90-day plan for building your practice.",
    problemParagraphs: [
      "The business guides that exist for physios and podiatrists don't exist for you. And the generic allied health advice doesn't cover the things that are different for EPs: the GST rules, the ESSA accreditation pathway for Medicare, the NDIS registration decision, or the fact that half the GPs in your area aren't sure what an accredited exercise physiologist does.",
      "You're probably trying to figure out whether to register as an NDIS provider (and what it costs if you don't), how the GST exemption works when you're not AHPRA-registered, and how to explain to a GP why they should be referring CDM patients to you instead of the physio down the road.",
      "On top of that, Medicare CDM billing changed in July 2025. GPCCMP replaced the old GPMP/TCA system, and most of what you'll find online still references the old rules.",
      "There's virtually zero business content written specifically for exercise physiologists. This guide covers the CDM pathway, NDIS, pricing, GP referrals, and a practical 90-day plan. Specific to your profession, current rules, $79.",
    ],
    faq: [
      {
        question: "Can I find this online for free?",
        answer:
          "The reference material, yes. Four chapters' worth is free on this site. What doesn't exist anywhere is a single resource covering the decisions specific to EPs going private. Should you do it, how to price, how to build GP referrals when they don't know what you do, and what order to tackle it. There's very little written for EPs on the business side.",
      },
      {
        question: "Is this relevant to my state or territory?",
        answer:
          "Yes. Medicare CDM billing, ESSA accreditation, and business structure are all federal. Where state-specific rules apply, the guide notes them.",
      },
      {
        question: "What format is the guide?",
        answer:
          "85-page PDF. Download link immediately after purchase.",
      },
      {
        question: "Is this up to date with the GPCCMP changes?",
        answer:
          "Yes. Updated for the July 2025 changes. Most content online still references GPMP/TCA, which no longer applies for new patients.",
      },
      {
        question:
          "I'm ESSA-accredited but still working towards AEP. Can I use this?",
        answer:
          "The business planning, pricing, and financial chapters are useful right now. The setup chapter covers the ESSA accreditation pathway and provider number process specifically for EPs, so you'll know exactly what steps are ahead when you're ready.",
      },
      {
        question: "Can I get a refund?",
        answer:
          "Yes. Email within 30 days for a full refund.",
      },
    ],
  },
};
