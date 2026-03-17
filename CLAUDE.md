# Private Practice Guide

SEO-driven content site selling digital guides to allied health professionals starting private practice in Australia.

## Stack
- Next.js 16, TypeScript, Tailwind v4
- Deploy: Vercel
- Email: Kit.com (ConvertKit)
- Payments: Stripe (checkout sessions, not embedded)
- Domain: privatepracticeguide.com.au
- Port: 4324

## Design
- Deep slate primary, warm amber accent
- Serif headlines (Newsreader), sans body (Outfit)
- Professional, trustworthy, not clinical
- NOT healthcare blue, NOT teal (that's GoingSolo)

## Content
- All Medicare references use GPCCMP (post-July 2025), not old GPMP/TCA except in transition section
- Australian English, AUD currency
- Profession-specific data in src/content/professions.ts
- Guide metadata in src/content/guides.ts
- Paid product metadata + sales copy in src/content/product.ts
- Guide chapter drafts (for PDF) in content/guide/ at project root

## Key Patterns
- Static profession pages (not dynamic routing)
- Shared data file for profession structured data
- Kit.com subscribe via /api/subscribe route
- Stripe checkout via /api/create-checkout-session route
- CSS custom properties for design tokens (Tailwind v4, no tailwind.config)
- Sales pages (/buy/*) use a separate layout that hides the main nav via CSS :has([data-sales-page])
- Meta Pixel component ready but needs NEXT_PUBLIC_META_PIXEL_ID env var

## Paid Product
- "The Allied Health Practice Setup Guide" - $79 AUD, ~85-page PDF
- 9 chapters + appendix, covering setup, decisions, strategy, and first 90 days
- Ch1: Financial Reality, Ch2: Setting Up, Ch3: Medicare CDM, Ch4: NDIS, Ch5: Pricing, Ch6: Finding Clients, Ch7: Financial Foundations, Ch8: Common Mistakes, Ch9: First 90 Days
- Two sales pages: /buy/physiotherapy and /buy/exercise-physiology (same product, profession-specific marketing)
- Success/download page at /purchase/success (verifies Stripe session)
- Guide content drafts in content/guide/*.md - need review for voice and accuracy

## Env Vars (beyond Kit)
- STRIPE_SECRET_KEY, STRIPE_PUBLISHABLE_KEY, STRIPE_PRICE_ID, STRIPE_WEBHOOK_SECRET
- GUIDE_DOWNLOAD_URL (where the PDF lives after Figma formatting)
- NEXT_PUBLIC_META_PIXEL_ID (Meta ads pixel)

## Copy/Tone TODO
- Site-wide copy pass needed to remove AI-speak ("no jargon, no fluff", "finally explained", etc.)
- Sales page copy has been revised but rest of site (homepage, profession pages, free guides) still needs it
- Voice should be: specific, anxious-person-at-11pm-friendly, real numbers not "it depends"
- Key pain points to hit: Medicare/GPCCMP confusion, GP referral anxiety, pricing paralysis, business structure confusion, NDIS registration decision, empty diary panic
- See research on real practitioner pain points in the plan transcript
