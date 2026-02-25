import type { Profession } from "@/types";

export const professions: Record<string, Profession> = {
  physiotherapy: {
    slug: "physiotherapy",
    name: "Physiotherapy",
    practitionerTitle: "Physiotherapist",
    pluralTitle: "Physiotherapists",
    registeredCount: "47,500",
    privateCount: "~28,500",
    registrationBody: "Physiotherapy Board of Australia (AHPRA)",
    registrationBodyAbbr: "AHPRA",
    registrationUrl: "https://www.physiotherapyboard.gov.au",
    association: "Australian Physiotherapy Association",
    associationAbbr: "APA",
    associationUrl: "https://australian.physio",
    ahpraRegulated: true,
    medicareItems: [
      {
        code: "10960",
        description: "Individual allied health service (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "10966",
        description:
          "Individual allied health service via telehealth (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "81110",
        description: "Group allied health service (60+ min)",
        rebate: "$18.90",
      },
    ],
    typicalSessionFee: "$90-$150",
    typicalGapFee: "$33-$93",
    trainingYears: "4",
    painPoints: [
      "Understanding CDM billing and the new GPCCMP pathway, including which patients qualify and how to manage the 5-session shared cap",
      "Navigating the Medicare provider number application when you want to work across multiple locations or run a home-visit service",
      "Building a GP referral network from scratch when you have no existing relationships outside your clinical placement sites",
      "Choosing between renting a room in an existing clinic, subletting, or committing to a standalone premises with equipment costs",
    ],
    metaTitle:
      "Starting a Physiotherapy Private Practice in Australia | Setup Guide",
    metaDescription:
      "Step-by-step guide to starting your physiotherapy private practice in Australia. Medicare CDM billing (updated for GPCCMP 2025), provider numbers, costs, and business setup.",
    heroSubtitle:
      "You spent 4 years learning to treat patients. Nobody taught you how to run a business.",
  },

  podiatry: {
    slug: "podiatry",
    name: "Podiatry",
    practitionerTitle: "Podiatrist",
    pluralTitle: "Podiatrists",
    registeredCount: "~5,800",
    privateCount: "~2,900",
    registrationBody: "Podiatry Board of Australia (AHPRA)",
    registrationBodyAbbr: "AHPRA",
    registrationUrl: "https://www.podiatryboard.gov.au",
    association: "Australasian Podiatry Association",
    associationAbbr: "APodA",
    associationUrl: "https://www.podiatry.org.au",
    ahpraRegulated: true,
    medicareItems: [
      {
        code: "10962",
        description: "Individual allied health service (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "10968",
        description:
          "Individual allied health service via telehealth (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "81115",
        description: "Group allied health service (60+ min)",
        rebate: "$18.90",
      },
    ],
    typicalSessionFee: "$85-$130",
    typicalGapFee: "$28-$73",
    trainingYears: "4",
    painPoints: [
      "Managing the highest CDM billing volume of any allied health profession, with diabetic foot care plans making up a huge portion of your caseload",
      "Understanding Medicare item numbers and billing correctly when you have both CDM patients and private-fee patients in the same clinic day",
      "Budgeting for podiatry-specific equipment costs (treatment chairs, autoclaves, instruments) that are higher than most other allied health startups",
      "Setting up efficient clinical workflows when you are the business owner, the clinician, the receptionist, and the cleaner",
    ],
    metaTitle:
      "Starting a Podiatry Private Practice in Australia | Setup Guide",
    metaDescription:
      "How to start your podiatry private practice in Australia. CDM Medicare billing (updated for GPCCMP 2025), provider numbers, equipment costs, and practice setup.",
    heroSubtitle:
      "You spent 4 years learning to treat patients. Nobody taught you how to run a business.",
  },

  "exercise-physiology": {
    slug: "exercise-physiology",
    name: "Exercise Physiology",
    practitionerTitle: "Exercise Physiologist",
    pluralTitle: "Exercise Physiologists",
    registeredCount: "~7,500",
    privateCount: "Growing fast",
    registrationBody:
      "Exercise & Sports Science Australia (self-regulated, not AHPRA)",
    registrationBodyAbbr: "ESSA",
    registrationUrl: "https://www.essa.org.au",
    association: "Exercise & Sports Science Australia",
    associationAbbr: "ESSA",
    associationUrl: "https://www.essa.org.au",
    ahpraRegulated: false,
    medicareItems: [
      {
        code: "10953",
        description: "Individual allied health service (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "10959",
        description:
          "Individual allied health service via telehealth (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "81100",
        description: "Group allied health service (60+ min)",
        rebate: "$18.90",
      },
    ],
    typicalSessionFee: "$80-$130",
    typicalGapFee: "$23-$73",
    trainingYears: "4",
    painPoints: [
      "Navigating Medicare CDM billing as a non-AHPRA profession where ESSA accreditation requirements and Medicare eligibility rules work differently",
      "Understanding the GST implications unique to exercise physiology, where some services may not qualify for the medical GST exemption",
      "Finding your niche in a crowded wellness space where personal trainers, strength coaches, and physios all overlap with your scope",
      "Building GP referral relationships when many GPs still don't fully understand what an accredited exercise physiologist does",
    ],
    metaTitle:
      "Starting an Exercise Physiology Practice in Australia | Setup Guide",
    metaDescription:
      "How to start your exercise physiology private practice. Medicare CDM billing (updated for GPCCMP 2025), ESSA accreditation, costs, and business setup in Australia.",
    heroSubtitle:
      "You spent 4 years learning to prescribe exercise as medicine. Nobody taught you how to run a business.",
  },

  dietetics: {
    slug: "dietetics",
    name: "Dietetics",
    practitionerTitle: "Dietitian",
    pluralTitle: "Dietitians",
    registeredCount: "~9,000",
    privateCount: "~3,960",
    registrationBody:
      "Dietitians Australia (self-regulated, not AHPRA)",
    registrationBodyAbbr: "DA",
    registrationUrl: "https://dietitiansaustralia.org.au",
    association: "Dietitians Australia",
    associationAbbr: "DA",
    associationUrl: "https://dietitiansaustralia.org.au",
    ahpraRegulated: false,
    medicareItems: [
      {
        code: "10954",
        description: "Individual allied health service (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "10960",
        description:
          "Individual allied health service via telehealth (20+ min)",
        rebate: "$56.70",
      },
      {
        code: "81105",
        description: "Group allied health service (60+ min)",
        rebate: "$18.90",
      },
    ],
    typicalSessionFee: "$80-$140",
    typicalGapFee: "$23-$83",
    trainingYears: "4-5",
    painPoints: [
      "Starting private practice with virtually no business training, as academic research has specifically identified a 'significant gap in business education for graduate dietitians'",
      "Understanding CDM billing when most of your university training focused on hospital and community health settings, not private practice",
      "Competing with unregulated nutritionists and wellness influencers who charge less and make bigger (if unsubstantiated) claims",
      "Deciding between telehealth-only, renting a room, or working from home when your overhead can be much lower than equipment-heavy professions",
    ],
    metaTitle:
      "Starting a Dietetics Private Practice in Australia | Setup Guide",
    metaDescription:
      "How to start your dietetics private practice in Australia. Medicare CDM billing (updated for GPCCMP 2025), DA accreditation, practice costs, and setup guide.",
    heroSubtitle:
      "You spent 4+ years learning nutrition science. Nobody taught you how to run a business.",
  },
};

export const professionSlugs = Object.keys(professions) as Array<
  keyof typeof professions
>;

export function getProfession(slug: string) {
  return professions[slug] ?? null;
}
