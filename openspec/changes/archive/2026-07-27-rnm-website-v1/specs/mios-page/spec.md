## ADDED Requirements

### Requirement: The MIOS page SHALL render a hero section with a navy background, the headline "Meet MIOS.", and the subheadline "Mobility Intelligence Operating System".

#### Scenario: Hero renders with required copy and background color

WHEN a user navigates to `mios.html`
THEN the page SHALL display a hero section with a navy background
AND the hero headline SHALL read "Meet MIOS."
AND the hero subheadline SHALL read "Mobility Intelligence Operating System"

---

### Requirement: The page SHALL prominently present "Powered by Movement Intelligence" as the category claim that differentiates R&M from competitors.

#### Scenario: Category differentiator claim is visible and prominent

WHEN the MIOS page is rendered
THEN the phrase "Powered by Movement Intelligence" SHALL appear as a prominent statement on the page
AND it SHALL be positioned or styled to communicate its role as a competitive differentiator

---

### Requirement: The page SHALL display exactly six MIOS capability feature cards covering the defined capability set.

#### Scenario: All six capability cards are rendered

WHEN the MIOS capabilities section is rendered
THEN it SHALL contain exactly six feature cards
AND the cards SHALL cover the following capabilities: Movement Assessment, Progress Tracking, Mobility Scoring, Personalized Recommendations, Home Exercise Programs, and Appointment History & Milestones

---

### Requirement: The page MUST prominently communicate that MIOS technology supports the practitioner and never replaces the human relationship.

#### Scenario: Technology-human balance statement is displayed prominently

WHEN the MIOS page is rendered
THEN a statement affirming that technology supports the practitioner and does not replace the human relationship SHALL be present
AND that statement SHALL be positioned, sized, or styled to ensure it is encountered by users reading the page — not buried in fine print or footer copy

---

### Requirement: The page SHALL include a dashboard mockup section displaying a device image (phone and tablet) with a UI placeholder sourced from Unsplash.

#### Scenario: Dashboard mockup section renders with device imagery

WHEN the dashboard mockup section is rendered
THEN it SHALL display an image element representing a phone and tablet device
AND the image source SHALL be an Unsplash placeholder URL or reference
AND an HTML comment SHALL note that this is a placeholder for the actual MIOS dashboard UI

---

### Requirement: The page SHALL frame the client login and portal with "coming soon" aspirational language and MUST NOT present it as a live or functional link.

#### Scenario: Client portal is presented as aspirational, not live

WHEN the client portal section is rendered
THEN it SHALL include "coming soon" framing in its copy or label
AND the portal SHALL NOT be rendered as a functional link that routes to a login screen or active URL
AND the copy SHALL use aspirational language describing the future state of the portal

---

### Requirement: The page SHALL present the initial booking as the first touchpoint in a client's MIOS profile, framed as the entry point into the MIOS system.

#### Scenario: Booking is framed as the first MIOS data point

WHEN the booking touchpoint section is rendered
THEN the copy SHALL communicate that the journey begins with a complimentary assessment
AND it SHALL explicitly state or clearly imply that the assessment is the first data point in the client's MIOS profile

---

### Requirement: The page SHALL include a primary CTA labeled "Begin Your MIOS Journey" that links to the booking placeholder.

#### Scenario: Primary CTA renders with correct label and destination

WHEN the MIOS page is rendered
THEN a CTA element SHALL be present with the label "Begin Your MIOS Journey"
AND it SHALL link to the booking placeholder destination
AND it SHALL NOT link to a live portal, login page, or external URL
