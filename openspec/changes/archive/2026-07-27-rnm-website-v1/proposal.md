## Why

Range & Motion is an emerging premium movement, recovery, and longevity brand in West Chester, PA that currently has no web presence. The business is simultaneously launching its first location and rebranding away from "Assisted Stretch Therapy" toward the broader category of "Movement Intelligence." A flagship website is needed immediately to establish the brand, drive the single primary conversion action (complimentary movement assessment bookings), and serve as the public-facing front door to the MIOS platform being developed in parallel.

## What Changes

- **New**: Full marketing website (`rangeandmotion.com`) built as static HTML/CSS/JS
- **New**: Multi-page site structure — homepage, services, youth athletes, MIOS, memberships, about
- **New**: Brand implementation from approved brand board (colors, typography, iconography, photography)
- **New**: Conversion architecture centered on a single CTA: "Book Your Complimentary Assessment"
- **New**: Curated Unsplash placeholder photography (specific photo IDs, not random queries) — swappable for real photography at launch
- **New**: MIOS aspirational introduction section — positions the technology vision without demoing a product
- **New**: Youth Athlete Development dedicated section and page — strategic audience pillar
- **New**: Membership tiers presented without pricing — aspirational belonging, not transactional comparison
- **New**: Recovery Lounge section — sauna, cold plunge, premium atmosphere
- **New**: "Movement Across a Lifetime" narrative arc section — unifies all audience segments
- **New**: Client journey section — assessment → session → progress → membership
- **New**: West Chester, PA location and contact details in footer

## Capabilities

### New Capabilities

- `site-foundation`: Core HTML/CSS design system — tokens, typography, layout grid, component library (cards, buttons, nav, footer) implementing the brand board
- `homepage`: Full homepage implementing all sections in narrative arc order
- `services-page`: Services landing page — four service categories with detail
- `youth-athletes-page`: Dedicated youth athlete development page targeting youth athletes and their parents
- `mios-page`: MIOS technology introduction page — aspirational vision, dashboard mockups, differentiator story
- `memberships-page`: Membership tiers page — Wellness, Performance, Recovery, Family, Corporate — no pricing, all CTAs drive to assessment
- `recovery-lounge-section`: Recovery lounge section/page — infrared sauna, cold plunge, relaxation space
- `booking-cta`: Reusable booking CTA component and placeholder booking flow (links to TBD MIOS booking URL)

### Modified Capabilities

*(none — greenfield project)*

## Impact

- **New codebase**: `site/` directory at project root — all website files live here
- **No build tooling required**: Static files, openable directly in browser during development
- **Photography**: Unsplash CDN URLs for all placeholder images — zero local assets required initially
- **Fonts**: Google Fonts CDN (Montserrat + Lora) — matches brand board typography
- **Icons**: Inline SVG only — matches brand board icon style (clean, linear, human)
- **Future**: When MIOS booking is ready, `Book Your Complimentary Assessment` CTA href updates to MIOS URL — no structural change needed
- **Future**: Real photography replaces Unsplash `src` attributes — no structural change needed
- **Future**: Site may evolve to integrate MIOS client portal (logged-in experience) — architecture should not prevent this
