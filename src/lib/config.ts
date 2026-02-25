import type { SiteConfig } from "@/types";

export const config: SiteConfig = {
  siteName: "Private Practice Guide",
  siteUrl: "https://privatepracticeguide.com.au",
  supportEmail: "hello@privatepracticeguide.com.au",
  tagline: "The business side of private practice. Finally explained.",
  description:
    "Plain-English guides for allied health professionals starting private practice in Australia. Updated for GPCCMP 2025.",
};

export const navLinks = [
  { label: "Guides", href: "/guides/cdm-billing" },
  { label: "Physiotherapy", href: "/physiotherapy" },
  { label: "Podiatry", href: "/podiatry" },
  { label: "Exercise Physiology", href: "/exercise-physiology" },
  { label: "Dietetics", href: "/dietetics" },
] as const;
