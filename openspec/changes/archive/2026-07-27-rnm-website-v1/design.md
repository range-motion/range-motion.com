# Design: rnm-website-v1 — Range & Motion Flagship Website

## Context

Greenfield project. No existing codebase, no prior web presence. Range & Motion is a premium movement, recovery, and longevity brand opening its first location in West Chester, PA. The company is simultaneously launching and rebranding — transitioning identity away from "Assisted Stretch Therapy" toward the new category claim of "Movement Intelligence."

The website is the leading edge of this rebrand and the public-facing front door to the MIOS platform (Mobility Intelligence Operating System) being developed in parallel. MIOS will eventually handle client booking, movement assessments, progress tracking, and membership management. For this phase, the website is a static marketing site — no backend, no authentication, no CMS. Every "Book Your Assessment" CTA links to a placeholder URL that will be replaced when MIOS booking is ready.

The brand board (`brand-imaging.jpg` in the project root) is the canonical visual reference. All design decisions derive from it.

**Brand board specifications extracted:**
- Logo: "Range & Motion" wordmark with "RA" monogram icon — circular, flowing letterforms
- Primary font: Montserrat (bold headlines, clean, strong, modern)
- Secondary font: Lora (body copy, readable, approachable, timeless)
- Colors: Deep Navy `#0D1B2A`, Sage Green `#6FA78A`, Teal `#4DB6AC`, Warm Gray `#8ABF98`, Sand `#F2E9D8`
- Accent: Deep Hibiscus (red — used sparingly), Copper
- Icon style: Clean, linear, single-weight stroke, human subjects
- Photography: Warm natural light, real practitioners and clients, wood/stone textures, no exaggerated fitness poses
- Tagline: "Move Better. Live Better." / "Range Is Possible."

No `docs/dev/architecture.md` exists in the project — this is a greenfield build.

## References

- `brand-imaging.jpg` (project root) — Brand board: canonical source for all visual identity decisions, color values, typography, iconography, photography style, and emotional tone.

## Goals / Non-Goals

**Goals:**

- Deliver a fully static, multi-page marketing website opening in a browser with no build tooling
- Implement the complete brand system from the brand board with pixel-level fidelity
- Drive a single primary conversion action: "Book Your Complimentary Assessment"
- Establish the "Movement Intelligence" category claim — not a fitness brand, not a PT clinic
- Serve four distinct audiences without tonal whiplash: Healthy Aging → Professionals → Weekend Warriors → Youth Athletes
- Introduce MIOS aspirationally — vision and promise, not product demo
- Present membership tiers without pricing — drive all tiers to assessment CTA
- Use curated Unsplash placeholder photos (specific IDs, not random queries) — swappable for real photography
- West Chester, PA location context throughout
- Accessibility: WCAG 2.1 AA on all pages

**Non-Goals:**

- Backend, CMS, database, or server-side rendering of any kind
- Authentication, client portal, or logged-in experience (MIOS Phase 2)
- Real booking integration (placeholder URL only — MIOS will replace)
- Actual membership pricing or purchase flow
- Blog, news, or content publishing infrastructure
- Multi-location support (single West Chester location only)
- Build tooling (no webpack, vite, npm — plain HTML/CSS/JS)
- Third-party analytics or tracking scripts (add later)

## Decisions

### D1: Static HTML/CSS/JS — no build tooling, no framework

**Decision:** The entire site is built as plain HTML, CSS, and JavaScript files in a `site/` directory at the project root. No Node.js, no bundler, no framework. Files open directly in a browser during development and deploy to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages).

A shared `css/tokens.css` file defines all CSS custom properties (design tokens). Every page imports the same token file, guaranteeing brand consistency without a preprocessor.

```
site/
├── index.html              # Homepage
├── services.html           # Services overview
├── youth-athletes.html     # Youth Athlete Development
├── mios.html               # MIOS technology
├── memberships.html        # Membership tiers
├── recovery.html           # Recovery Lounge
├── about.html              # Story, team, West Chester location
├── css/
│   ├── tokens.css          # Design tokens (colors, type, spacing)
│   ├── base.css            # Reset, typography, global rules
│   ├── components.css      # Reusable components (nav, cards, buttons, footer)
│   └── pages/
│       ├── home.css
│       ├── services.css
│       ├── youth.css
│       ├── mios.css
│       ├── memberships.css
│       ├── recovery.css
│       └── about.css
├── js/
│   ├── nav.js              # Mobile nav toggle, scroll behavior
│   ├── animations.js       # Intersection Observer scroll animations
│   └── booking.js          # CTA click handlers (placeholder)
└── assets/
    └── logo/               # SVG logo files only (no raster assets)
```

**Alternative considered:** Next.js/React. Rejected — overkill for a marketing site with no dynamic data, adds unnecessary complexity, and requires Node.js toolchain. The goal is fast delivery and easy handoff.

**Alternative considered:** Astro or 11ty. Rejected — still requires a build step. Plain HTML gives maximum portability and zero dependency risk.

---

### D2: CSS Custom Properties as the design token system

**Decision:** All brand values live in `css/tokens.css` as CSS custom properties on `:root`. No Sass variables, no Tailwind config, no JS-side tokens. This makes the token layer accessible to all CSS files and (if needed) to JavaScript via `getComputedStyle`.

```css
/* css/tokens.css */
:root {
  /* ── Colors ── */
  --color-navy:       #0D1B2A;
  --color-sage:       #6FA78A;
  --color-teal:       #4DB6AC;
  --color-warm-gray:  #8ABF98;
  --color-sand:       #F2E9D8;
  --color-hibiscus:   #C0395A;   /* accent — use sparingly */
  --color-copper:     #B87333;   /* accent */
  --color-white:      #FFFFFF;
  --color-off-white:  #FAFAF8;

  /* ── Typography ── */
  --font-headline:    'Montserrat', sans-serif;
  --font-body:        'Lora', serif;

  --size-xs:    0.75rem;   /*  12px */
  --size-sm:    0.875rem;  /*  14px */
  --size-base:  1rem;      /*  16px */
  --size-md:    1.125rem;  /*  18px */
  --size-lg:    1.375rem;  /*  22px */
  --size-xl:    1.75rem;   /*  28px */
  --size-2xl:   2.25rem;   /*  36px */
  --size-3xl:   3rem;      /*  48px */
  --size-4xl:   3.75rem;   /*  60px */
  --size-5xl:   4.5rem;    /*  72px */

  --weight-regular: 400;
  --weight-medium:  500;
  --weight-semibold: 600;
  --weight-bold:    700;
  --weight-black:   900;

  --leading-tight:  1.15;
  --leading-snug:   1.35;
  --leading-normal: 1.6;
  --leading-loose:  1.8;

  --tracking-tight:  -0.02em;
  --tracking-normal:  0em;
  --tracking-wide:    0.05em;
  --tracking-wider:   0.1em;
  --tracking-widest:  0.2em;

  /* ── Spacing ── */
  --space-1:   0.25rem;
  --space-2:   0.5rem;
  --space-3:   0.75rem;
  --space-4:   1rem;
  --space-5:   1.25rem;
  --space-6:   1.5rem;
  --space-8:   2rem;
  --space-10:  2.5rem;
  --space-12:  3rem;
  --space-16:  4rem;
  --space-20:  5rem;
  --space-24:  6rem;
  --space-32:  8rem;
  --space-40:  10rem;

  /* ── Layout ── */
  --max-width:        1280px;
  --max-width-narrow:  800px;
  --max-width-wide:   1440px;

  /* ── Borders ── */
  --radius-sm:   4px;
  --radius-md:   8px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 9999px;

  /* ── Shadows ── */
  --shadow-sm:  0 1px 3px rgba(13,27,42,0.06), 0 1px 2px rgba(13,27,42,0.04);
  --shadow-md:  0 4px 16px rgba(13,27,42,0.08), 0 2px 6px rgba(13,27,42,0.05);
  --shadow-lg:  0 12px 40px rgba(13,27,42,0.10), 0 4px 12px rgba(13,27,42,0.06);
  --shadow-xl:  0 24px 64px rgba(13,27,42,0.14), 0 8px 20px rgba(13,27,42,0.08);

  /* ── Transitions ── */
  --ease-out:    cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.45, 0, 0.55, 1);
  --duration-fast:   150ms;
  --duration-normal: 300ms;
  --duration-slow:   600ms;
  --duration-reveal: 900ms;
}
```

**Alternative considered:** Tailwind CSS. Rejected — requires build tooling and introduces utility-class verbosity that obscures the design intent in markup. Custom properties are more explicit and maintainable for a brand-driven design.

---

### D3: Typography pairing and scale

**Decision:** Montserrat (Google Fonts) for all headlines, navigation, labels, and UI elements. Lora (Google Fonts) for body copy, subheadings where a warm literary tone is wanted, and pull quotes. Both loaded via a single Google Fonts `<link>` in the `<head>` of every page.

Headline sizing follows the principle of generous scale — the homepage hero headline renders at `--size-5xl` on desktop, stepping down gracefully to `--size-3xl` on mobile. Section headlines use `--size-3xl` desktop / `--size-2xl` mobile. All headlines use `--tracking-tight` and `--leading-tight`.

```html
<!-- In every page <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;900&family=Lora:ital,wght@0,400;0,600;1,400&display=swap" rel="stylesheet">
```

**Alternative considered:** Self-hosted fonts. Preferred for production performance but adds asset management overhead for this phase. Google Fonts CDN is acceptable for a development/launch site; self-hosting is a future optimization.

---

### D4: Navigation architecture

**Decision:** A fixed top navigation bar on all pages. On desktop: logo left, nav links center, CTA button right. On mobile: logo left, hamburger right, full-screen slide-down menu. Navigation is transparent over hero sections, transitioning to a white/sand background with shadow on scroll.

Primary nav links:
- Movement (→ services.html)
- Recovery (→ recovery.html)
- Youth Athletes (→ youth-athletes.html)
- MIOS (→ mios.html)
- Memberships (→ memberships.html)
- About (→ about.html)

"Assisted Stretch Therapy" does not appear in navigation. The nav reflects the new category framing: Movement, Recovery, Longevity.

The "Book Your Assessment" button in the nav uses `--color-navy` background on the transparent state, switching to `--color-sage` on the scrolled/filled state.

---

### D5: Photography strategy — curated Unsplash IDs

**Decision:** Every photo on the site is a specific Unsplash image referenced by its full CDN URL with width and quality parameters. No random queries, no `source.unsplash.com`. Photos are hand-selected to match the brand register: warm natural light, real humans, wood/stone/plant textures, non-performative movement.

Photo replacement protocol: when real Range & Motion photography is available, the `src` attribute on each `<img>` or the `background-image` CSS value is updated. No structural changes are needed.

Curated photo assignments by section:

```
HERO (homepage)
  Primary: https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=85
  (Practitioner working with client, warm light, natural setting)

PHILOSOPHY / AMBIENT
  https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=1400&q=80
  (Warm interior, plants, natural materials)

SERVICES — MOVEMENT
  https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80
  (Stretching, human form, natural light)

SERVICES — RECOVERY
  https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=800&q=80
  (Sauna interior, warm wood tones)

RECOVERY LOUNGE — SAUNA
  https://images.unsplash.com/photo-1545579133-99bb5ad189be?w=1200&q=80
  (Cedar sauna, warm light)

RECOVERY LOUNGE — COLD PLUNGE
  https://images.unsplash.com/photo-1617722622971-b1e3a8aa7a2d?w=1200&q=80
  (Cold plunge pool, blue tones, premium)

YOUTH ATHLETES — GENERAL
  https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=1200&q=80
  (Young athlete in focused movement, natural light)

YOUTH ATHLETES — SECONDARY
  https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80
  (Youth in sport, authentic, non-performative)

LIFETIME ARC — YOUNG ADULT
  https://images.unsplash.com/photo-1516534775068-ba3e7458af70?w=600&q=80

LIFETIME ARC — PROFESSIONAL
  https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80

LIFETIME ARC — SENIOR / ACTIVE AGING
  https://images.unsplash.com/photo-1571019613576-2b22c76fd955?w=600&q=80

ASSESSMENT / EXPERIENCE
  https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80
  (Practitioner and client, conversation, trust)

MIOS SECTION
  https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80
  (Device with app UI in warm environment)
```

Note: These URLs are placeholders. During implementation, each URL should be verified as loading a real image that matches the described register. If any URL is broken, find a replacement using the same brand criteria.

---

### D6: Scroll animation via Intersection Observer

**Decision:** Subtle entrance animations on section elements using the Intersection Observer API — no scroll-jacking, no parallax, no JavaScript animation libraries. Elements animate in with a simple `opacity: 0 → 1` + `translateY(20px → 0)` transition when they enter the viewport. A CSS class `.reveal` is applied to eligible elements; the JS observer adds `.revealed` when visible.

```css
/* css/base.css */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity var(--duration-reveal) var(--ease-out),
              transform var(--duration-reveal) var(--ease-out);
}
.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
@media (prefers-reduced-motion: reduce) {
  .reveal, .reveal.revealed {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

```javascript
// js/animations.js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

**Alternative considered:** CSS `@scroll-timeline` (native scroll animations). Rejected — limited browser support as of 2025, and Intersection Observer achieves the same brand-appropriate effect with full compatibility.

---

### D7: Homepage narrative arc and section order

**Decision:** The homepage is a single continuous scroll experience. Section order is deliberate — it follows the emotional journey from aspiration → belief → understanding → identification → proof → experience → conversion.

```
1.  NAV         — Fixed, transparent → filled on scroll
2.  HERO        — "Move Better. Live Better." Full-viewport, cinematic
3.  PHILOSOPHY  — "Movement is freedom." Belief system. Centered, quiet.
4.  SERVICES    — Four categories: Movement / Recovery / Performance / Longevity
5.  LIFETIME    — "Movement Across a Lifetime." Horizontal scroll or card grid.
6.  MIOS        — Technology that knows your movement. Aspirational.
7.  JOURNEY     — The client experience: Welcome → Assessment → Session → Progress
8.  RECOVERY    — Recovery Lounge feature. Sauna + cold plunge.
9.  YOUTH       — Youth Athlete Development. Parents as audience.
10. MEMBERSHIPS — Five tiers. No prices. All CTAs → Assessment.
11. TESTIMONIALS— Social proof (placeholder — 3 cards with "Client, West Chester PA")
12. FINAL CTA   — Full-width dark section. "Ready to move better?" + Book button.
13. FOOTER      — Location, hours, nav, newsletter, social.
```

---

### D8: Color and surface system

**Decision:** Pages use a deliberate alternation of surface backgrounds to create visual rhythm without relying on lines or dividers. No hard borders between sections.

```
Surface A (default):  --color-off-white  (#FAFAF8)  — warm white
Surface B (alternate): --color-sand      (#F2E9D8)  — warm cream
Surface C (dark):     --color-navy       (#0D1B2A)  — deep navy
Surface D (sage):     --color-sage at 12% opacity   — very light sage tint
```

Navy sections are used for: hero overlay text areas, final CTA, MIOS intro, footer.
Sand sections alternate with off-white for content variety.
Sage tint is used for the client journey / experience section.

All text on dark (navy) backgrounds is `--color-sand` or `--color-white`.
All text on light backgrounds is `--color-navy`.
Sage Green `--color-sage` is used for: accent text, icon fills, link hovers, active states.
Teal `--color-teal` is used for: data visualization in MIOS mockups, secondary accents.
Hibiscus is used sparingly: one CTA button variant, the hibiscus tea callout, milestone indicators.

---

### D9: Component inventory

**Decision:** The following components are defined in `css/components.css` and reused across all pages.

**Button variants:**
```css
/* Primary — navy background, sand text */
.btn-primary { background: var(--color-navy); color: var(--color-sand); }

/* Secondary — transparent, navy border */
.btn-secondary { background: transparent; border: 1.5px solid var(--color-navy); color: var(--color-navy); }

/* Accent — hibiscus, used once per page maximum */
.btn-accent { background: var(--color-hibiscus); color: var(--color-white); }

/* All buttons share: */
/* font-family: Montserrat; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase;
   padding: 14px 32px; border-radius: var(--radius-full); transition */
```

**Card variants:**
- `.card-service` — icon + headline + body + link arrow
- `.card-tier` — membership tier with feature list + CTA
- `.card-person` — photo + name + detail (lifetime arc)
- `.card-testimonial` — quote + attribution
- `.card-stat` — large number + label (MIOS section)

**Section header pattern:**
```html
<div class="section-header">
  <span class="eyebrow">Category label</span>  <!-- Montserrat, tracking-widest, sage -->
  <h2 class="section-title">Main headline</h2>  <!-- Montserrat, bold, navy -->
  <p class="section-sub">Supporting copy</p>    <!-- Lora, navy at 75% opacity -->
</div>
```

---

## Interfaces

### Site Map

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/index.html` | Primary entry. Full narrative arc. Single conversion goal. |
| Services | `/services.html` | Four service categories in detail |
| Youth Athletes | `/youth-athletes.html` | Dedicated youth + parent audience page |
| MIOS | `/mios.html` | Technology vision, dashboard, differentiator |
| Memberships | `/memberships.html` | Five tiers, no pricing, all CTAs → assessment |
| Recovery Lounge | `/recovery.html` | Sauna, cold plunge, premium atmosphere |
| About | `/about.html` | Story, team, West Chester location |

### Booking CTA

All "Book Your Complimentary Assessment" CTAs share a single href placeholder:

```html
<a href="#book" class="btn-primary book-cta">Book Your Complimentary Assessment</a>
```

`js/booking.js` intercepts clicks on `.book-cta` and currently shows a simple modal: "Booking is coming soon. Call us at [phone] or email [email]." When MIOS booking is ready, `#book` is replaced with the MIOS booking URL — no other code changes.

### Homepage Sections — Copy and Structure

**Section 1 — Hero**
```
Background: cinematic photo, dark overlay (navy 55%)
Eyebrow: "West Chester, PA"
H1: "Move Better.\nLive Better."
Subheadline (Lora italic): "Movement coaching, recovery, and personalized wellness —
  designed to help you move through every stage of life."
CTA Primary: "Book Your Complimentary Assessment"
CTA Secondary: "Explore Memberships" (→ memberships.html)
```

**Section 2 — Philosophy**
```
Background: off-white
Centered layout, max-width: 680px
Eyebrow: "Our Philosophy"
H2: "Movement is freedom."
Body (Lora): "We don't chase flexibility. We don't count reps. We help people
  reclaim the activities they love — the golf swing, the hike, the dance,
  the game of catch with a grandchild. Every visit moves you forward."
No CTA — this section breathes.
```

**Section 3 — Services**
```
Background: sand
Eyebrow: "What We Do"
H2: "Movement. Recovery.\nPerformance. Longevity."
4-column card grid (2-col mobile):
  1. Movement — icon: figure in motion
     "Expert-guided movement sessions that restore range, reduce pain,
      and rebuild the way your body moves."
  2. Recovery — icon: snowflake/flame (sauna + cold plunge)
     "Infrared sauna, cold plunge, and recovery therapies that help
      your body repair, recharge, and perform."
  3. Performance — icon: athlete/arrow
     "Mobility and movement coaching for athletes, weekend warriors,
      and anyone who wants to move at their best."
  4. Longevity — icon: heart/infinity
     "A long-term partnership in your health — measuring, tracking, and
      improving how you move through every decade of life."
```

**Section 4 — Movement Across a Lifetime**
```
Background: off-white
Eyebrow: "A Lifetime of Movement"
H2: "Every stage. Every body.\nOne continuous journey."
Body: "From a young athlete learning to move with intention, to an active
  adult rediscovering freedom — Range & Motion is a partner for life."
Horizontal scroll card strip (6 cards):
  1. The Young Athlete — "Building movement foundations that last"
  2. The Competitor — "Performing at your best, recovering faster"
  3. The Busy Parent — "Finding time for yourself again"
  4. The Professional — "Undoing what the desk does to your body"
  5. The Weekend Warrior — "Playing harder, longer, without paying for it"
  6. The Active Elder — "Staying strong, independent, and fully alive"
Each card: photo + label + one-line description
```

**Section 5 — MIOS**
```
Background: navy
Eyebrow (sage): "Powered by Movement Intelligence"
H2 (sand): "Meet MIOS."
Subheading (sand, Lora italic): "The Mobility Intelligence Operating System."
Body (sand/70%): "Every client receives a personalized movement assessment,
  tracked over time by MIOS. Your practitioner sees your full movement history
  at every visit. You see your progress, your home program, and your milestones.
  Technology that supports the human relationship — never replaces it."
Stats row (4 stats, large Montserrat numbers, sage):
  — Movement Score | Progress Dashboard | Home Program | Milestone Tracking
Device mockup image (phone + tablet showing MIOS UI)
CTA: "Learn About MIOS" (→ mios.html) — btn-secondary on dark
```

**Section 6 — The Client Journey**
```
Background: sage tint (--color-sage at 8%)
Eyebrow: "The Experience"
H2: "Every visit is a step forward."
5-step horizontal timeline (stacked on mobile):
  1. Welcome — "Your visit begins with complimentary hibiscus tea and
     a warm welcome from your practitioner."
  2. Assessment — "We screen your movement, understand your goals, and
     establish your personal baseline."
  3. Your Session — "Expert, individualized care. Your practitioner
     educates as they work — so you understand your own body better."
  4. Your Progress — "Your MIOS dashboard captures every improvement.
     You leave with a home program and clear next steps."
  5. Long-Term Partnership — "Membership keeps you moving forward.
     Every visit builds on the last."
CTA: "Book Your Complimentary Assessment"
```

**Section 7 — Recovery Lounge**
```
Background: off-white
Eyebrow: "Recovery Lounge"
H2: "Recover. Recharge.\nMove Forward."
Body: "Our recovery lounge features infrared sauna and cold plunge therapy
  in a premium, peaceful environment. Recovery isn't optional — it's
  part of the program."
2-column layout: photo left, feature list right
Features: Infrared Sauna / Cold Plunge / Relaxation Space / Hydration Bar
CTA: "Explore Recovery" (→ recovery.html) + "Book Your Assessment"
```

**Section 8 — Youth Athletes**
```
Background: sand
Eyebrow: "Youth Athlete Development"
H2: "Build better athletes.\nBuild healthier movement."
Body: "Range & Motion helps young athletes improve mobility, reduce injury risk,
  recover faster, and develop movement patterns that support performance today
  and healthy bodies for decades to come. This isn't sports medicine.
  It's movement education — for the long game."
Parent-directed sub-copy: "For parents: mobility is an investment in your child's future.
  We help young athletes move with confidence, avoid preventable injuries,
  and build the body awareness that separates good athletes from great ones."
Sport icon grid (wrestling, baseball, soccer, dance, gymnastics, swimming,
  basketball, volleyball, lacrosse, football)
CTA: "Learn More" (→ youth-athletes.html) + "Book an Assessment"
```

**Section 9 — Memberships**
```
Background: off-white
Eyebrow: "Membership"
H2: "Find your level."
Sub: "Five membership tiers designed for every goal, every lifestyle,
  and every stage of life. No pricing listed — start with a
  complimentary assessment and we'll find the right fit."
5 cards (horizontal scroll on mobile):
  Wellness | Performance | Recovery | Family | Corporate
Each card: tier name + icon + 3-4 bullet features + "Start with an Assessment" CTA
```

**Section 10 — Social Proof**
```
Background: sand
Eyebrow: "What Clients Say"
3 testimonial cards (placeholder copy):
  "I've tried everything. Nothing has changed how I move the way
   Range & Motion has." — Client, West Chester PA
  "My mobility score improved by 22 points in six weeks.
   I didn't know that was possible." — Client, West Chester PA
  "My daughter's coach noticed a difference before we did.
   Range & Motion is part of her training now." — Parent, West Chester PA
```

**Section 11 — Final CTA**
```
Background: navy
H2 (sand): "Ready to move better?"
Sub (Lora, sand/70%): "Start with a complimentary movement assessment.
  No commitment. Just clarity about where you are and where you can go."
CTA: "Book Your Complimentary Assessment" (btn-accent — hibiscus)
Location line (small, sand/50%): "Now accepting new clients in West Chester, PA"
```

### Footer Structure
```
Row 1: Logo + tagline "Move Better. Live Better."
Row 2 (columns):
  — Navigate: Movement / Recovery / Youth Athletes / MIOS / Memberships / About
  — Visit: [Address West Chester PA] / [Hours] / [Phone]
  — Connect: Instagram / Facebook / [Email]
  — Newsletter: email input + "Stay in Motion" subscribe button
Row 3 (bottom bar): © Range & Motion · rangeandmotion.com · "Range Is Possible."
```

## Accessibility

### Visual Design

All text meets WCAG 2.1 AA contrast ratios. Navy on sand, sand on navy, and sage on white are all verified AA compliant. Hibiscus accent is used at large sizes only where contrast requirements are met. All interactive states (hover, focus, active) have visible indicators that do not rely solely on color.

`prefers-reduced-motion` is respected: all `.reveal` animations and nav transitions are disabled when the user's OS preference is set. See D6 for implementation.

### Semantic HTML

Every page uses a single `<main>` landmark, `<nav>` with `aria-label="Main navigation"`, `<header>`, and `<footer>`. Section headings follow strict H1 → H2 → H3 hierarchy. No heading levels are skipped.

All `<img>` elements have meaningful `alt` text describing what the image shows (not "placeholder photo"). SVG icons include `aria-hidden="true"` when decorative; when standalone they carry a `<title>` element.

### Keyboard Navigation

The mobile nav hamburger is a `<button>` element with `aria-expanded` and `aria-controls`. The full-screen mobile menu traps focus until closed. All cards and CTAs are reachable by Tab. Skip-to-content link is the first focusable element on every page.

### Forms

The newsletter subscribe input has an associated `<label>` (visually hidden if needed). The booking modal (placeholder) uses `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and returns focus to the trigger on close.

## Risks / Trade-offs

### Unsplash placeholder URLs may break

**Risk:** Specific Unsplash photo IDs can be removed by their photographers, resulting in broken images at any time.

**Mitigation:** Each `<img>` includes a CSS fallback background color that matches the section surface (so a broken image doesn't create a jarring white box). During development, verify each URL before shipping. The replacement plan when real photography is ready is straightforward: update `src` values.

### MIOS booking placeholder creates dead CTAs at launch

**Risk:** The most important conversion action — "Book Your Complimentary Assessment" — links to a placeholder. A dead CTA at launch loses real clients.

**Mitigation:** The booking modal fallback (D9) displays a phone number and email address as interim booking options. This is not ideal UX but prevents a total dead end. Replace with the MIOS booking URL as the highest-priority post-launch task.

### Static site has no analytics out of the box

**Risk:** Without tracking, it's impossible to know which sections drive conversions, what audiences arrive, or where users drop off.

**Mitigation:** Google Analytics or Plausible can be added as a single `<script>` tag in the `<head>` of every page. This is intentionally excluded from Phase 1 to keep the build clean. Add it before real launch.

### Brand photography gap between launch and photo shoot

**Risk:** Curated Unsplash photos, however well-selected, will never feel as authentic as real Range & Motion photography. The website may feel slightly generic until real photos are shot.

**Mitigation:** Accept this as a known Phase 1 limitation. Unsplash photos set the tonal register and signal brand intent. A photography brief should be developed in parallel with website build so real photos are ready at or shortly after launch. The swap-in protocol (D5) makes this a trivial update.

### Single-page scroll length on homepage

**Risk:** The homepage is 11+ sections — potentially overwhelming on mobile, and possibly harming SEO if key content is too deep in the scroll.

**Mitigation:** Each section is clearly separated, loads progressively via Intersection Observer, and has its own heading that can serve as an anchor link. Core conversion content (CTA) appears in the hero (above the fold) AND as a floating element or sticky footer on mobile. Navigation links jump to key sections by anchor ID.
