## 1. Project Scaffold

- [x] 1.1 Create `site/` directory structure: `css/`, `css/pages/`, `js/`, `assets/logo/`
- [x] 1.2 Create `site/css/tokens.css` — all CSS custom properties (colors, typography, spacing, shadows, radii, transitions) from design.md D2
- [x] 1.3 Create `site/css/base.css` — CSS reset, global typography rules, `.reveal` animation class, `prefers-reduced-motion` override
- [x] 1.4 Create `site/css/components.css` — nav, footer, button variants (btn-primary, btn-secondary, btn-accent), card variants, section-header pattern
- [x] 1.5 Add Google Fonts `<link>` tags (Montserrat + Lora with preconnect) to a shared HTML snippet for copy-paste into every page `<head>`

## 2. JavaScript Foundation

- [x] 2.1 Create `site/js/animations.js` — Intersection Observer scroll reveal, adds `.revealed` to `.reveal` elements on viewport entry
- [x] 2.2 Create `site/js/nav.js` — mobile hamburger toggle, `aria-expanded` management, nav background transition on scroll
- [x] 2.3 Create `site/js/booking.js` — `BOOKING_URL` constant, `.book-cta` click interceptor, accessible modal dialog (role="dialog", focus trap, ESC close, focus return), `assessment_cta_click` analytics event dispatch

## 3. Shared Components HTML

- [x] 3.1 Build `<nav>` component HTML — logo SVG inline, desktop nav links (Movement/Recovery/Youth Athletes/MIOS/Memberships/About), Book CTA button, hamburger button with aria-expanded, full-screen mobile menu
- [x] 3.2 Build `<footer>` component HTML — logo + tagline row, 4-column layout (Navigate/Visit/Connect/Newsletter), newsletter input with associated label, bottom bar with copyright and "Range Is Possible."
- [x] 3.3 Verify skip-to-content link is first focusable element on every page

## 4. Homepage (index.html)

- [x] 4.1 Create `site/index.html` skeleton — `<!DOCTYPE html>`, meta charset/viewport, title, font links, CSS links (tokens → base → components → pages/home), nav component, footer component, JS scripts
- [x] 4.2 Build Hero section — full-viewport, Unsplash bg photo (photo ID from design.md D5), navy 55% overlay, eyebrow "West Chester, PA", H1 "Move Better. Live Better.", Lora italic subheadline, two CTA buttons
- [x] 4.3 Build Philosophy section — off-white bg, centered 680px max-width, eyebrow, "Movement is freedom." H2, body copy (Lora), no CTA
- [x] 4.4 Build Services section — sand bg, eyebrow, H2, 4-column card grid (Movement/Recovery/Performance/Longevity), 2-col responsive, each card with inline SVG icon
- [x] 4.5 Build Movement Across a Lifetime section — 6 person cards (Young Athlete/Competitor/Busy Parent/Professional/Weekend Warrior/Active Elder), horizontal scroll on mobile, each card with Unsplash photo, label, one-line description
- [x] 4.6 Build MIOS section — navy bg, sand text, eyebrow, "Meet MIOS." H2, body copy, 4 stat cards (large Montserrat numbers, sage), device mockup Unsplash image, CTA to mios.html
- [x] 4.7 Build Client Journey section — sage-tint bg, 5-step horizontal timeline (Welcome/Assessment/Session/Progress/Long-Term Partnership), hibiscus tea copy in Welcome step, CTA
- [x] 4.8 Build Recovery Lounge section — off-white bg, 2-col layout (photo left, feature list right), 4 features with inline SVG icons, CTAs to recovery.html
- [x] 4.9 Build Youth Athletes section — sand bg, parent-directed sub-copy, 10-sport icon grid (inline SVG icons), CTAs to youth-athletes.html
- [x] 4.10 Build Memberships section — off-white bg, 5 tier cards (Wellness/Performance/Recovery/Family/Corporate), no pricing, each CTA → booking
- [x] 4.11 Build Social Proof section — sand bg, 3 testimonial cards with placeholder West Chester PA client quotes
- [x] 4.12 Build Final CTA section — navy bg, Lora italic sub, hibiscus btn-accent CTA, "Now accepting new clients in West Chester, PA" location line
- [x] 4.13 Create `site/css/pages/home.css` — homepage-specific layout rules
- [x] 4.14 Add `.reveal` classes to all animatable section elements on homepage
- [x] 4.15 Add sticky mobile CTA bottom bar (fixed, mobile only, "Book Your Assessment" btn-primary)

## 5. Services Page (services.html)

- [x] 5.1 Create `site/services.html` with page skeleton (meta, fonts, CSS, nav, footer)
- [x] 5.2 Build page hero — 50vh, "What We Do" eyebrow, "Movement. Recovery. Performance. Longevity." H2
- [x] 5.3 Build four service category sections (Movement / Recovery / Performance / Longevity) — each with Unsplash photo, headline, body copy, feature list, Book CTA
- [x] 5.4 Build page-level bottom CTA section — "Every service starts with a complimentary assessment" + Book button
- [x] 5.5 Create `site/css/pages/services.css`

## 6. Youth Athletes Page (youth-athletes.html)

- [x] 6.1 Create `site/youth-athletes.html` with page skeleton
- [x] 6.2 Build page hero — "Build Better Athletes. Build Healthier Movement." H1, Unsplash youth athlete photo
- [x] 6.3 Build philosophy section — movement education framing, "the long game" messaging, NOT sports medicine
- [x] 6.4 Build four benefit pillars section — Mobility / Injury Prevention / Recovery / Movement Efficiency cards
- [x] 6.5 Build sport icon grid — 10 sports (wrestling, baseball, soccer, dance, gymnastics, swimming, basketball, volleyball, lacrosse, football) as inline SVG icon + label tiles
- [x] 6.6 Build "For Parents" dedicated section — investment framing, injury prevention, confidence, healthy development messaging
- [x] 6.7 Build youth-specific CTA section — "Schedule Your Child's Movement Assessment" btn-primary
- [x] 6.8 Add photo direction HTML comments throughout for future photography brief
- [x] 6.9 Create `site/css/pages/youth.css`

## 7. MIOS Page (mios.html)

- [x] 7.1 Create `site/mios.html` with page skeleton
- [x] 7.2 Build page hero — navy bg, "Meet MIOS." H1, "Mobility Intelligence Operating System" subhead, "Powered by Movement Intelligence" eyebrow
- [x] 7.3 Build six capability feature cards — Movement Assessment / Progress Tracking / Mobility Scoring / Personalized Recommendations / Home Exercise Programs / Appointment History & Milestones
- [x] 7.4 Build technology-human balance section — prominent placement, "technology supports the practitioner — never replaces the human relationship" copy
- [x] 7.5 Build dashboard mockup section — Unsplash device placeholder image (phone + tablet), surrounding copy
- [x] 7.6 Build "coming soon" client portal callout — aspirational language, not a live link
- [x] 7.7 Build "Begin Your MIOS Journey" CTA section — "Your journey begins with a complimentary assessment — the first data point in your MIOS profile"
- [x] 7.8 Create `site/css/pages/mios.css`

## 8. Memberships Page (memberships.html)

- [x] 8.1 Create `site/memberships.html` with page skeleton
- [x] 8.2 Build page hero — "Find Your Level." H1, tagline sub
- [x] 8.3 Build "We don't sell memberships. We build relationships." philosophy statement section
- [x] 8.4 Build 5 membership tier cards — Wellness / Performance / Recovery / Family / Corporate — each with icon, 3-4 bullet features, "Start with a Complimentary Assessment" CTA, NO pricing
- [x] 8.5 Build "How it works" 3-step explainer — Assessment → Find Your Fit → Begin Your Journey
- [x] 8.6 Build FAQ section — 3-4 questions (what's included, getting started, cancellation, which tier is right for me)
- [x] 8.7 Build bottom CTA — "Not sure which membership is right for you? Start with a complimentary assessment." + Book button
- [x] 8.8 Create `site/css/pages/memberships.css`

## 9. Recovery Lounge Page (recovery.html)

- [x] 9.1 Create `site/recovery.html` with page skeleton
- [x] 9.2 Build page hero — "Recover. Recharge. Move Forward." H1, Unsplash sauna photo
- [x] 9.3 Build "Recovery isn't optional. It's part of the program." philosophy statement
- [x] 9.4 Build Infrared Sauna section — large photo, benefits copy, premium atmosphere language, Book CTA
- [x] 9.5 Build Cold Plunge section — large photo (blue-lit pool), benefits copy, premium atmosphere language, Book CTA
- [x] 9.6 Build Relaxation Space + Hydration sections — combined or adjacent, premium spa language
- [x] 9.7 Build recovery membership callout — recovery-focused access tier, CTA to memberships.html
- [x] 9.8 Create `site/css/pages/recovery.css`

## 10. About Page (about.html)

- [x] 10.1 Create `site/about.html` with page skeleton
- [x] 10.2 Build page hero — "Range & Motion." H1, "West Chester, PA" location, philosophy tagline sub
- [x] 10.3 Build brand story section — mission, philosophy, what makes R&M different from fitness/PT/chiropractic
- [x] 10.4 Build team section — placeholder practitioner cards (name, title, photo placeholder with sand bg)
- [x] 10.5 Build location section — West Chester PA address, hours, map embed placeholder, contact details
- [x] 10.6 Build "Join Us" CTA section → booking
- [x] 10.7 Create `site/css/pages/about.css`

## 11. Polish and Accessibility Audit

- [x] 11.1 Verify all Unsplash photo URLs load correct images matching brand register — replace any broken URLs
- [x] 11.2 Audit all `<img>` alt text — every image must have meaningful description, not "placeholder"
- [x] 11.3 Verify heading hierarchy on all 7 pages — no skipped levels (H1 → H2 → H3 only)
- [x] 11.4 Test keyboard navigation on all pages — Tab through all interactive elements, verify no traps
- [x] 11.5 Test booking modal accessibility — focus trap, ESC close, focus return to trigger, ARIA attributes
- [x] 11.6 Verify color contrast on all text/background combinations — Navy on Sand, Sand on Navy, Sage on White
- [x] 11.7 Test mobile nav — hamburger opens/closes full-screen menu, aria-expanded toggles correctly
- [x] 11.8 Test scroll reveal animations — elements animate in on scroll, prefers-reduced-motion disables all motion
- [x] 11.9 Test responsive layout at 375px, 768px, 1024px, 1280px breakpoints on all pages
- [x] 11.10 Verify sticky mobile CTA bar appears on homepage and hides on scroll to Final CTA section
- [x] 11.11 Add `<meta name="description">` with on-brand copy to all 7 pages
- [x] 11.12 Add `<meta property="og:*">` Open Graph tags to all pages (title, description, image)
- [x] 11.13 Verify all internal links are correct — no 404s between pages
- [x] 11.14 Add placeholder `[PHONE]` and `[EMAIL]` tokens to booking modal and footer — document these as launch-day replacements
