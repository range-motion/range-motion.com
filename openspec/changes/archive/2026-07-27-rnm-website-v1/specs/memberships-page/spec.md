## ADDED Requirements

### Requirement: The memberships page SHALL render a hero section with the headline "Find Your Level." and a supporting subheadline.

#### Scenario: Hero section renders with required headline and subheadline copy

WHEN a user navigates to `memberships.html`
THEN the page SHALL display a hero section
AND the hero headline SHALL read "Find Your Level."
AND the hero SHALL display the subheadline "Membership designed for every goal and every stage of life."

---

### Requirement: A philosophy statement SHALL appear above the membership tier cards and SHALL read "We don't sell memberships. We build relationships."

#### Scenario: Philosophy statement is present above the tier cards

WHEN the memberships page is rendered
THEN the philosophy statement "We don't sell memberships. We build relationships." SHALL be visible
AND it SHALL appear in document order before the first membership tier card

---

### Requirement: The memberships page SHALL display exactly five membership tier cards: Wellness, Performance, Recovery, Family, and Corporate.

#### Scenario: All five tier cards are present on the page

WHEN the memberships page is rendered
THEN the page SHALL contain exactly five membership tier cards
AND the tiers SHALL be: Wellness, Performance, Recovery, Family, and Corporate

---

### Requirement: Each membership tier card SHALL include the tier name, an icon, three to four feature bullet highlights, and a CTA.

#### Scenario: Wellness tier card contains all required elements

WHEN the Wellness tier card is rendered
THEN it SHALL display the tier name "Wellness"
AND it SHALL display an icon associated with the Wellness tier
AND it SHALL display between three and four feature bullet highlights
AND it SHALL display a CTA element

#### Scenario: Performance tier card contains all required elements

WHEN the Performance tier card is rendered
THEN it SHALL display the tier name "Performance"
AND it SHALL display an icon associated with the Performance tier
AND it SHALL display between three and four feature bullet highlights
AND it SHALL display a CTA element

#### Scenario: Recovery tier card contains all required elements

WHEN the Recovery tier card is rendered
THEN it SHALL display the tier name "Recovery"
AND it SHALL display an icon associated with the Recovery tier
AND it SHALL display between three and four feature bullet highlights
AND it SHALL display a CTA element

#### Scenario: Family tier card contains all required elements

WHEN the Family tier card is rendered
THEN it SHALL display the tier name "Family"
AND it SHALL display an icon associated with the Family tier
AND it SHALL display between three and four feature bullet highlights
AND it SHALL display a CTA element

#### Scenario: Corporate tier card contains all required elements

WHEN the Corporate tier card is rendered
THEN it SHALL display the tier name "Corporate"
AND it SHALL display an icon associated with the Corporate tier
AND it SHALL display between three and four feature bullet highlights
AND it SHALL display a CTA element

---

### Requirement: Every tier card CTA SHALL be labeled "Start with a Complimentary Assessment" and SHALL link to the booking placeholder destination.

#### Scenario: All tier card CTAs use the correct label and link target

WHEN a user inspects any membership tier card CTA
THEN the CTA label SHALL read "Start with a Complimentary Assessment"
AND the CTA SHALL link to the booking placeholder destination
AND no tier card CTA SHALL link to an external domain or a broken anchor

---

### Requirement: Pricing MUST NOT appear anywhere on the memberships page.

#### Scenario: No pricing information is present anywhere on the page

WHEN the memberships page is rendered
THEN no dollar amounts SHALL appear on the page
AND no per-month, per-year, or per-session pricing language SHALL appear
AND no "starting at" or equivalent pricing qualifier SHALL appear
AND no pricing table or pricing grid SHALL be present

---

### Requirement: The memberships page SHALL include a three-step "How it works" explainer section with the steps: Assessment, Find Your Fit, and Begin Your Journey.

#### Scenario: "How it works" section renders all three steps in order

WHEN the memberships page is rendered
THEN a "How it works" section SHALL be present
AND it SHALL contain exactly three steps
AND the steps SHALL appear in order: Assessment, Find Your Fit, Begin Your Journey

---

### Requirement: The memberships page SHALL include an FAQ section containing three to four questions about what membership includes, cancellation, and getting started.

#### Scenario: FAQ section is present with the required number of questions

WHEN the memberships page is rendered
THEN an FAQ section SHALL be present
AND it SHALL contain between three and four questions
AND at least one question SHALL address what membership includes
AND at least one question SHALL address cancellation
AND at least one question SHALL address how to get started

---

### Requirement: The memberships page SHALL include a bottom CTA section with qualifying copy and a "Book" button that links to the booking placeholder.

#### Scenario: Bottom CTA section renders with required copy and button

WHEN a user scrolls to the bottom of the memberships page content
THEN a dedicated CTA section SHALL be present
AND it SHALL contain the text "Not sure which membership is right for you? Start with a complimentary assessment and we'll guide you."
AND it SHALL contain a "Book" button or link that links to the booking placeholder destination
