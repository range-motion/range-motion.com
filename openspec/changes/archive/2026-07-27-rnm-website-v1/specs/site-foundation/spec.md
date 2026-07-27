## ADDED Requirements

### Requirement: CSS custom properties design token file

The system SHALL define all design tokens as CSS custom properties in a single token file, covering colors, spacing, typography scale, shadows, border radius, and transitions. All other stylesheets SHALL reference these tokens exclusively — no raw values SHALL be hardcoded outside the token file.

#### Scenario: Color tokens are defined and accessible

WHEN the token file is loaded
THEN the following CSS custom properties SHALL be available on `:root`: `--color-navy` (#0D1B2A), `--color-sage` (#6FA78A), `--color-teal` (#4DB6AC), `--color-warm-gray` (#8ABF98), `--color-sand` (#F2E9D8), `--color-hibiscus` (#C0395A), and `--color-copper` (#B87333).

#### Scenario: Spacing scale tokens are defined

WHEN the token file is loaded
THEN a spacing scale SHALL be available as CSS custom properties (e.g. `--space-1` through `--space-16`) following a consistent multiplier, and all layout margins, paddings, and gaps in the site SHALL reference these tokens.

#### Scenario: Typography scale tokens are defined

WHEN the token file is loaded
THEN font-size tokens SHALL be available (e.g. `--text-xs` through `--text-6xl`) and all type-size declarations in the codebase SHALL reference these tokens rather than raw `px` or `rem` values.

#### Scenario: Shadow, border-radius, and transition tokens are defined

WHEN the token file is loaded
THEN CSS custom properties SHALL exist for shadow levels (e.g. `--shadow-sm`, `--shadow-md`, `--shadow-lg`), border-radius values (e.g. `--radius-sm`, `--radius-md`, `--radius-full`), and transition definitions (e.g. `--transition-base`, `--transition-slow`) so that interactive elements share consistent motion and depth.

---

### Requirement: Google Fonts loading via preconnect

The system SHALL load Montserrat (weights 400, 500, 600, 700, 900) and Lora (400, 400 italic, 600) from Google Fonts. The document `<head>` SHALL include `<link rel="preconnect">` tags for `https://fonts.googleapis.com` and `https://fonts.gstatic.com` before the font stylesheet link to minimize render-blocking latency.

#### Scenario: Fonts load with correct weights

WHEN a page is rendered in a browser with network access
THEN Montserrat and Lora SHALL be available as the active font faces for their respective weights and styles, and no fallback system font SHALL be visible for styled text once fonts have loaded.

#### Scenario: Preconnect links appear before the font stylesheet link

WHEN the HTML source of any page is inspected
THEN `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` SHALL appear in `<head>` before the Google Fonts `<link rel="stylesheet">` tag.

---

### Requirement: Fixed navigation bar with scroll-state style change

The system SHALL render a navigation bar that is fixed to the top of the viewport on all pages. Over a hero section the nav background SHALL be fully transparent. Once the user scrolls beyond a defined threshold the nav SHALL transition to a filled background using `--color-navy` so that links remain legible against page content below.

#### Scenario: Nav is transparent at page top

WHEN a page with a hero section is loaded and the scroll position is 0
THEN the navigation bar background SHALL be transparent and the nav SHALL not obscure the hero image.

#### Scenario: Nav fills on scroll

WHEN the user scrolls down past the defined scroll threshold (e.g. 80px)
THEN the navigation bar background SHALL transition to the filled navy state using the `--transition-base` token, and the nav SHALL remain legible over all page content.

#### Scenario: Nav returns to transparent on scroll to top

WHEN the user scrolls back to position 0 on a hero page
THEN the navigation bar SHALL revert to its transparent state.

---

### Requirement: Navigation layout — desktop

On viewports at or above the desktop breakpoint the navigation SHALL display the site logo aligned to the left, primary navigation links centered, and a CTA button aligned to the right, all within a single horizontal bar.

#### Scenario: Desktop nav elements are positioned correctly

WHEN the viewport width is at or above the desktop breakpoint
THEN the logo SHALL appear at the left edge, navigation links SHALL be centered in the available space, and the CTA button SHALL appear at the right edge of the nav bar.

---

### Requirement: Navigation layout — mobile hamburger and full-screen menu

On viewports below the desktop breakpoint the navigation SHALL hide primary links and the CTA button, replacing them with a hamburger icon button. Activating the hamburger SHALL open a full-screen overlay menu containing all navigation links. The hamburger button SHALL carry an `aria-expanded` attribute reflecting the open/closed state.

#### Scenario: Hamburger button appears on mobile

WHEN the viewport width is below the desktop breakpoint
THEN the hamburger button SHALL be visible and the primary nav links and CTA SHALL be hidden.

#### Scenario: Full-screen menu opens on hamburger activation

WHEN the user activates the hamburger button
THEN a full-screen overlay SHALL appear containing all primary navigation links, and the `aria-expanded` attribute on the hamburger button SHALL be set to `"true"`.

#### Scenario: Full-screen menu closes on second activation

WHEN the full-screen menu is open and the user activates the hamburger button again
THEN the overlay SHALL close and `aria-expanded` SHALL be set to `"false"`.

---

### Requirement: Footer structure and content

The system SHALL render a site-wide footer containing: the site logo and a tagline; a four-column layout with navigation, visit, connect, and newsletter columns; and a bottom bar with copyright text. The footer SHALL be consistent across all pages.

#### Scenario: Footer columns are rendered correctly

WHEN any page is loaded
THEN the footer SHALL contain exactly four content columns (navigation links, visit/address info, social/connect links, newsletter signup) and a bottom bar with current-year copyright text.

#### Scenario: Footer logo and tagline are present

WHEN any page is loaded
THEN the footer SHALL display the site logo and an associated tagline above the four-column section.

---

### Requirement: Button variants

The system SHALL provide three button variants as CSS classes. `btn-primary` SHALL use `--color-navy` background and `--color-sand` text. `btn-secondary` SHALL use a transparent background with a `--color-navy` border. `btn-accent` SHALL use `--color-hibiscus` background and white text. All button variants SHALL use Montserrat weight 600, uppercase text transform, letter-spacing, `border-radius: var(--radius-full)`, and shared padding tokens.

#### Scenario: btn-primary renders with correct styles

WHEN an element with class `btn-primary` is rendered
THEN its background SHALL be `--color-navy`, its text color SHALL be `--color-sand`, its font SHALL be Montserrat 600 uppercase with letter-spacing, and its border-radius SHALL be `--radius-full`.

#### Scenario: btn-secondary renders with correct styles

WHEN an element with class `btn-secondary` is rendered
THEN its background SHALL be transparent, it SHALL have a solid border using `--color-navy`, and it SHALL share the same font, padding, and border-radius as `btn-primary`.

#### Scenario: btn-accent renders with correct styles

WHEN an element with class `btn-accent` is rendered
THEN its background SHALL be `--color-hibiscus` and its text color SHALL be white, with the same font, padding, and border-radius as the other variants.

---

### Requirement: Card component variants

The system SHALL provide five card component classes: `card-service`, `card-tier`, `card-person`, `card-testimonial`, and `card-stat`. Each variant SHALL have a distinct visual treatment appropriate to its content type, while all SHALL share base structural tokens (padding, border-radius, shadow).

#### Scenario: All card variants share base structure tokens

WHEN any card variant is rendered
THEN it SHALL use `--radius-md` (or a consistent card-specific radius token), a padding derived from the spacing scale, and a shadow level from the shadow token set.

#### Scenario: Each card variant is visually distinguishable

WHEN two different card variants (e.g. `card-service` and `card-testimonial`) are rendered side by side
THEN they SHALL differ in at least one visual property (background color, border treatment, typography emphasis, or layout) so that their purpose is visually distinct.

---

### Requirement: Section header pattern

The system SHALL support a reusable section header pattern consisting of three elements: an eyebrow label (Montserrat, `tracking-widest` letter-spacing, `--color-sage` text), a primary `<h2>` headline, and an optional subtitle using Lora. This pattern SHALL be available as shared markup and styles for use in any section.

#### Scenario: Section header renders all three elements

WHEN a section header is rendered with eyebrow, h2, and subtitle content
THEN the eyebrow SHALL appear above the h2 in Montserrat with wide letter-spacing in sage color, the h2 SHALL be the dominant typographic element, and the subtitle SHALL appear below the h2 in Lora.

#### Scenario: Section header renders without optional subtitle

WHEN a section header is rendered with only eyebrow and h2 content
THEN the layout SHALL not contain an empty element or visual gap where the subtitle would have been.

---

### Requirement: Scroll reveal animation via Intersection Observer

The system SHALL implement a scroll reveal animation for elements carrying the `.reveal` class. On initial page load these elements SHALL have `opacity: 0` and be translated 24px downward. When an element enters the viewport as detected by an `IntersectionObserver`, it SHALL animate to `opacity: 1` and `translateY(0)` using the `--transition-base` token.

#### Scenario: Reveal elements are hidden before entering viewport

WHEN a page loads and a `.reveal` element has not yet scrolled into view
THEN that element SHALL have `opacity: 0` and a `transform: translateY(24px)` applied.

#### Scenario: Reveal elements animate on viewport entry

WHEN an `IntersectionObserver` detects a `.reveal` element entering the viewport
THEN the element SHALL transition to `opacity: 1` and `translateY(0)` using the configured transition.

#### Scenario: Animations are disabled for prefers-reduced-motion

WHEN the user's OS or browser reports `prefers-reduced-motion: reduce`
THEN all `.reveal` transitions SHALL be disabled and elements SHALL appear at their final visible state immediately, with no motion applied.

---

### Requirement: Accessibility — semantic structure and contrast

The system SHALL meet WCAG 2.1 AA accessibility standards across all pages. Every page SHALL contain exactly one `<main>` element and use semantic landmark elements (`<header>`, `<nav>`, `<footer>`, `<section>`, `<aside>` where appropriate). A skip-to-content link SHALL be provided as the first focusable element. All text/background color combinations used on the site SHALL meet AA contrast ratios. Heading levels SHALL not be skipped.

#### Scenario: Skip-to-content link is present and functional

WHEN a keyboard user focuses the first interactive element on any page
THEN a skip-to-content link SHALL be the first focusable element and SHALL move keyboard focus to the `<main>` element when activated.

#### Scenario: Exactly one main landmark exists per page

WHEN any page is loaded
THEN the DOM SHALL contain exactly one `<main>` element.

#### Scenario: Color combinations meet AA contrast

WHEN any text element is rendered against its background
THEN the contrast ratio between text color and background color SHALL be at least 4.5:1 for normal text and 3:1 for large text per WCAG 2.1 AA criteria.

#### Scenario: Heading levels are not skipped

WHEN the heading structure of any page is evaluated
THEN heading levels SHALL be sequential with no skipped levels (e.g. an `<h3>` SHALL NOT appear unless an `<h2>` precedes it in the same section context).
