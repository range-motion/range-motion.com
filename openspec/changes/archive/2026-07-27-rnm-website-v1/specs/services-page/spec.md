## ADDED Requirements

### Requirement: The services page SHALL render a hero section with a medium-height banner, an eyebrow label, and a multi-clause headline.

#### Scenario: Hero section renders at correct height with required copy

WHEN a user navigates to `services.html`
THEN the page SHALL display a hero section with a minimum height of `50vh`
AND the hero SHALL contain an eyebrow element with the text "What We Do"
AND the hero headline SHALL read "Movement. Recovery. Performance. Longevity."

---

### Requirement: The services page SHALL present four service category sections in document order: Movement, Recovery, Performance, and Longevity.

#### Scenario: All four service category sections are present in order

WHEN the services page is rendered
THEN the page SHALL contain exactly four service category sections
AND they SHALL appear in the following order: Movement, Recovery, Performance, Longevity

---

### Requirement: Each service category section SHALL include a full photo, a headline, body copy, a feature list, and a "Book Your Assessment" CTA.

#### Scenario: Movement section contains all required structural elements

WHEN the Movement section is rendered
THEN it SHALL display a full-width or full-column photograph
AND it SHALL display the section headline "Movement"
AND it SHALL display descriptive body copy for the Movement category
AND it SHALL display a feature list that includes: assisted stretch therapy, movement coaching, and mobility assessment
AND it SHALL display a CTA element labeled "Book Your Assessment"

#### Scenario: Recovery section contains all required structural elements

WHEN the Recovery section is rendered
THEN it SHALL display a full-width or full-column photograph
AND it SHALL display the section headline "Recovery"
AND it SHALL display descriptive body copy for the Recovery category
AND it SHALL display a feature list that includes: infrared sauna, cold plunge, and recovery therapies
AND it SHALL display a CTA element labeled "Book Your Assessment"

#### Scenario: Performance section contains all required structural elements

WHEN the Performance section is rendered
THEN it SHALL display a full-width or full-column photograph
AND it SHALL display the section headline "Performance"
AND it SHALL display descriptive body copy for the Performance category
AND it SHALL display a feature list that includes: athletic performance, sport-specific mobility, and injury prevention
AND it SHALL display a CTA element labeled "Book Your Assessment"

#### Scenario: Longevity section contains all required structural elements

WHEN the Longevity section is rendered
THEN it SHALL display a full-width or full-column photograph
AND it SHALL display the section headline "Longevity"
AND it SHALL display descriptive body copy for the Longevity category
AND it SHALL display a feature list that includes: healthy aging, corporate wellness, and home mobility programs
AND it SHALL display a CTA element labeled "Book Your Assessment"

---

### Requirement: "Assisted Stretch Therapy" SHALL appear only as a sub-item within the Movement category and MUST NOT be used as the primary headline or navigation label for any section.

#### Scenario: Assisted Stretch Therapy is scoped to the Movement feature list only

WHEN the page is rendered
THEN "Assisted Stretch Therapy" SHALL appear within the Movement section's feature list
AND no page section headline SHALL use the text "Assisted Stretch Therapy"
AND no navigation element SHALL use the text "Assisted Stretch Therapy" as a label

---

### Requirement: Each service category CTA SHALL link to the booking placeholder URL.

#### Scenario: CTA links resolve to the booking placeholder

WHEN a user inspects any "Book Your Assessment" CTA on the services page
THEN each CTA SHALL have an `href` attribute pointing to the booking placeholder destination
AND no CTA SHALL link to an external domain or a broken anchor

---

### Requirement: The services page SHALL include a page-level CTA section at the bottom of the content, separate from the category-level CTAs.

#### Scenario: Page-level CTA section renders with correct copy and button

WHEN a user scrolls to the bottom of the services page content
THEN a dedicated CTA section SHALL be present
AND it SHALL contain the text "Every service starts with a complimentary assessment"
AND it SHALL contain a button or link element that initiates the booking flow
