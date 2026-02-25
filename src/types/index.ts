export type ProfessionSlug =
  | "physiotherapy"
  | "podiatry"
  | "exercise-physiology"
  | "dietetics";

export type GuideSlug =
  | "cdm-billing"
  | "practice-costs"
  | "provider-number"
  | "business-structure";

export interface Profession {
  slug: ProfessionSlug;
  name: string;
  practitionerTitle: string;
  pluralTitle: string;
  registeredCount: string;
  privateCount: string;
  registrationBody: string;
  registrationBodyAbbr: string;
  registrationUrl: string;
  association: string;
  associationAbbr: string;
  associationUrl: string;
  ahpraRegulated: boolean;
  medicareItems: MedicareItem[];
  typicalSessionFee: string;
  typicalGapFee: string;
  trainingYears: string;
  painPoints: string[];
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
}

export interface MedicareItem {
  code: string;
  description: string;
  rebate: string;
}

export interface Guide {
  slug: GuideSlug;
  title: string;
  shortTitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  readingTime: string;
  lastUpdated: string;
}

export interface SiteConfig {
  siteName: string;
  siteUrl: string;
  supportEmail: string;
  tagline: string;
  description: string;
}
