## ADDED Requirements

### Requirement: Hero section — full-viewport cinematic layout

The system SHALL render a full-viewport hero section as the first visible element on the homepage. The hero SHALL display a cinematic background photograph with a navy color overlay at 55% opacity. The hero SHALL contain: an eyebrow label reading "West Chester, PA"; an `<h1>` reading "Move Better. Live Better."; a subheadline in Lora italic; and two CTA buttons — a primary CTA labeled "Book Your Complimentary Assessment" and a secondary CTA labeled "Explore Memberships".

#### Scenario: Hero fills the full viewport

WHEN the homepage loads
THEN the hero section SHALL have a height of `100vh` (or equivalent full-viewport height) and the background photograph SHALL cover the full section without tiling.

#### Scenario: Navy overlay is applied at correct opacity

WHEN the hero section is rendered
THEN a navy (`--color-navy`) overlay element SHALL be positioned over the background image with 55% opacity, ensuring the photo remains visible beneath it.

#### Scenario: Hero text content is present and correctly structured

WHEN the homepage hero is rendered
THEN it SHALL contain the eyebrow "West Chester, PA", an `<h1>` with the text "Move Better. Live Better.", a Lora italic subheadline, a `btn-primary` labeled "Book Your Complimentary Assessment", and a `btn-secondary` labeled "Explore Memberships".

---

### Requirement: Philosophy section

The system SHALL render a Philosophy section with an off-white background, content centered within a maximum width of 680px, the headline "Movement is freedom.", and supporting body copy. This section SHALL NOT include a CTA button.

#### Scenario: Philosophy section renders without a CTA

WHEN the Philosophy section is rendered
THEN it SHALL NOT contain any button or link styled as a CTA element.

#### Scenario: Philosophy content is centered and constrained

WHEN the Philosophy section is rendered
THEN its text content SHALL be horizontally centered and constrained to a maximum width of 680px.

---

### Requirement: Services section — four-column card grid

The system SHALL render a Services section with a sand (`--color-sand`) background containing four `card-service` cards arranged in a four-column grid on desktop. The four services SHALL be: Movement, Recovery, Performance, and Longevity. On mobile viewports the grid SHALL collapse to two columns.

#### Scenario: Services display as four columns on desktop

WHEN the homepage is viewed at or above the desktop breakpoint
THEN the Services section SHALL display four `card-service` cards in a single four-column row.

#### Scenario: Services collapse to two columns on mobile

WHEN the homepage is viewed below the desktop breakpoint
THEN the Services section SHALL display its cards in a two-column grid.

#### Scenario: All four service cards are present

WHEN the Services section is rendered
THEN it SHALL contain exactly four cards labeled Movement, Recovery, Performance, and Longevity.

---

### Requirement: Movement Across a Lifetime section — horizontal scroll strip

The system SHALL render a "Movement Across a Lifetime" section containing six `card-person` cards in a horizontally scrollable strip. The six person cards SHALL represent: Young Athlete, Competitor, Busy Parent, Professional, Weekend Warrior, and Active Elder.

#### Scenario: Six person cards are present

WHEN the Movement Across a Lifetime section is rendered
THEN it SHALL contain exactly six person cards representing Young Athlete, Competitor, Busy Parent, Professional, Weekend Warrior, and Active Elder.

#### Scenario: Cards are arranged in a horizontal scroll container

WHEN the section is rendered on any viewport width
THEN the six cards SHALL be laid out horizontally and the container SHALL allow horizontal scrolling when card content overflows the viewport width.

---

### Requirement: MIOS section

The system SHALL render a MIOS section with a navy background and sand text. The section SHALL contain four `card-stat` cards representing: Movement Score, Progress Dashboard, Home Program, and Milestone Tracking. The section SHALL include a device mockup image and a CTA that links to `mios.html`.

#### Scenario: MIOS section has correct background and text colors

WHEN the MIOS section is rendered
THEN its background SHALL be `--color-navy` and its text SHALL use `--color-sand`.

#### Scenario: All four stat cards are present

WHEN the MIOS section is rendered
THEN it SHALL contain exactly four `card-stat` elements labeled Movement Score, Progress Dashboard, Home Program, and Milestone Tracking.

#### Scenario: MIOS CTA links to mios.html

WHEN the user activates the MIOS section CTA
THEN the browser SHALL navigate to `mios.html`.

#### Scenario: Device mockup image is present

WHEN the MIOS section is rendered
THEN it SHALL include a device mockup image displayed alongside the stat cards.

---

### Requirement: Client Journey section — five-step timeline

The system SHALL render a Client Journey section with a sage-tint background containing a five-step timeline. The steps SHALL be: Welcome, Assessment, Session, Progress, and Long-Term Partnership. The Welcome step description SHALL mention hibiscus tea.

#### Scenario: All five timeline steps are present

WHEN the Client Journey section is rendered
THEN it SHALL display exactly five steps labeled Welcome, Assessment, Session, Progress, and Long-Term Partnership in sequential order.

#### Scenario: Welcome step mentions hibiscus tea

WHEN the Welcome step content is rendered
THEN the copy SHALL include a reference to hibiscus tea.

#### Scenario: Section background uses sage tint

WHEN the Client Journey section is rendered
THEN its background SHALL use a tint derived from `--color-sage`.

---

### Requirement: Recovery Lounge section — photo and feature list layout

The system SHALL render a Recovery Lounge section with a photo on the left and a feature list on the right. The feature list SHALL include: Infrared Sauna, Cold Plunge, Relaxation Space, and Hydration Bar. The section SHALL include a CTA linking to `recovery.html`.

#### Scenario: Section uses photo-left, content-right layout on desktop

WHEN the Recovery Lounge section is rendered at or above the desktop breakpoint
THEN the background/feature photo SHALL appear in the left column and the feature list with CTA SHALL appear in the right column.

#### Scenario: All four features are listed

WHEN the Recovery Lounge section is rendered
THEN the feature list SHALL contain Infrared Sauna, Cold Plunge, Relaxation Space, and Hydration Bar.

#### Scenario: Recovery CTA links to recovery.html

WHEN the user activates the Recovery Lounge CTA
THEN the browser SHALL navigate to `recovery.html`.

---

### Requirement: Youth Athletes section

The system SHALL render a Youth Athletes section with a sand background. The section SHALL include parent-directed supporting copy, a sport icon grid displaying exactly 10 sports, and CTAs linking to `youth-athletes.html`.

#### Scenario: Sport icon grid contains ten sports

WHEN the Youth Athletes section is rendered
THEN the sport icon grid SHALL display exactly 10 sport icons or labels.

#### Scenario: Supporting copy is parent-directed

WHEN the Youth Athletes section is rendered
THEN the body copy SHALL address or reference parents as the primary audience.

#### Scenario: Youth Athletes CTAs link to youth-athletes.html

WHEN the user activates any CTA in the Youth Athletes section
THEN the browser SHALL navigate to `youth-athletes.html`.

---

### Requirement: Memberships section — five tier cards, no pricing

The system SHALL render a Memberships section containing five `card-tier` elements representing: Wellness, Performance, Recovery, Family, and Corporate. No pricing information SHALL be displayed on any card. Each card's CTA SHALL direct the user toward the assessment flow rather than a purchase flow.

#### Scenario: Five membership tier cards are present

WHEN the Memberships section is rendered
THEN it SHALL contain exactly five `card-tier` elements labeled Wellness, Performance, Recovery, Family, and Corporate.

#### Scenario: No pricing is displayed on tier cards

WHEN any membership tier card is rendered
THEN it SHALL NOT display any dollar amount, price range, or pricing tier label.

#### Scenario: Each tier card CTA directs to assessment

WHEN the user activates the CTA on any membership tier card
THEN they SHALL be directed toward the complimentary assessment booking flow, not a direct purchase or checkout page.

---

### Requirement: Social proof section — testimonial cards

The system SHALL render a social proof section containing exactly three `card-testimonial` elements. Testimonial content SHALL use placeholder copy attributed to clients in West Chester, PA.

#### Scenario: Three testimonial cards are present

WHEN the social proof section is rendered
THEN it SHALL contain exactly three `card-testimonial` elements.

#### Scenario: Testimonials reference West Chester, PA

WHEN a testimonial card is rendered
THEN the attribution or copy SHALL reference West Chester, PA as the client location.

---

### Requirement: Final CTA section

The system SHALL render a final CTA section at the bottom of the homepage with a navy background. The primary CTA button SHALL use the `btn-accent` style (hibiscus background). The section SHALL include a location line reading "Now accepting new clients in West Chester, PA".

#### Scenario: Final CTA section uses navy background

WHEN the final CTA section is rendered
THEN its background SHALL be `--color-navy`.

#### Scenario: CTA button uses hibiscus accent style

WHEN the final CTA section button is rendered
THEN it SHALL use the `btn-accent` class with `--color-hibiscus` background.

#### Scenario: Location line is present

WHEN the final CTA section is rendered
THEN it SHALL contain the text "Now accepting new clients in West Chester, PA".

---

### Requirement: Booking CTA interim modal

The system SHALL intercept all clicks on elements with the class `.book-cta` across the homepage. When the MIOS booking URL is not yet configured, clicking any `.book-cta` element SHALL display an interim modal containing the practice phone number and email address instead of navigating away. The modal SHALL be dismissible.

#### Scenario: Clicking .book-cta shows interim modal when MIOS URL is not configured

WHEN the MIOS booking URL is not set and the user clicks any element with class `.book-cta`
THEN an interim modal SHALL appear displaying the practice phone number and email address.

#### Scenario: Interim modal is dismissible

WHEN the interim modal is displayed
THEN the user SHALL be able to dismiss it via a close button or by clicking outside the modal, and the modal SHALL close without navigating the user away from the page.

#### Scenario: All homepage CTAs trigger the modal when MIOS URL is unconfigured

WHEN the MIOS booking URL is not configured
THEN ALL `.book-cta` elements on the homepage — including the hero CTA, membership card CTAs, and the final CTA section button — SHALL trigger the interim modal rather than following their href.
