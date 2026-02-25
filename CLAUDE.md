# Private Practice Guide

SEO-driven content site selling digital guides to allied health professionals starting private practice in Australia.

## Stack
- Next.js 16, TypeScript, Tailwind v4
- Deploy: Vercel
- Email: Kit.com (ConvertKit)
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

## Key Patterns
- Static profession pages (not dynamic routing)
- Shared data file for profession structured data
- Kit.com subscribe via /api/subscribe route
- CSS custom properties for design tokens (Tailwind v4, no tailwind.config)
