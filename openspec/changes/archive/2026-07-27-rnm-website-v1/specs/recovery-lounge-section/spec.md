## ADDED Requirements

### Requirement: The recovery lounge page SHALL render a hero section with the headline "Recover. Recharge. Move Forward." and a large photograph of a warm sauna interior.

#### Scenario: Hero section renders with required headline and photograph

WHEN a user navigates to `recovery.html`
THEN the page SHALL display a hero section
AND the hero headline SHALL read "Recover. Recharge. Move Forward."
AND the hero SHALL display a large photograph depicting a warm sauna interior
AND the photograph SHALL use an Unsplash placeholder consistent with the warm cedar sauna aesthetic defined in `design.md`

---

### Requirement: The recovery lounge page SHALL present the visual identity and tone of a luxury spa, not a gym recovery room.

#### Scenario: Page aesthetic reflects luxury spa identity throughout

WHEN the recovery lounge page is rendered
THEN the page SHALL incorporate warm, natural materials visually — including warm wood tones and warm lighting — in its imagery and styling
AND the page copy SHALL use language consistent with a premium, restorative experience
AND no section SHALL use gym-centric language such as "post-workout" as the primary framing for recovery

---

### Requirement: The recovery lounge page SHALL display four featured service sections in the following order: Infrared Sauna, Cold Plunge, Relaxation Space, and Hydration.

#### Scenario: All four service sections are present in document order

WHEN the recovery lounge page is rendered
THEN the page SHALL contain exactly four featured service sections
AND they SHALL appear in the following order: Infrared Sauna, Cold Plunge, Relaxation Space, Hydration

---

### Requirement: Each featured service section SHALL include a large photograph, a headline, body copy describing the experience and benefits, and a "Book" CTA.

#### Scenario: Infrared Sauna section contains all required elements

WHEN the Infrared Sauna section is rendered
THEN it SHALL display a large photograph of a sauna interior
AND it SHALL display a headline for the Infrared Sauna service
AND it SHALL display body copy describing the experience and the benefits of infrared sauna
AND it SHALL display a "Book" CTA

#### Scenario: Cold Plunge section contains all required elements

WHEN the Cold Plunge section is rendered
THEN it SHALL display a large photograph depicting a cold plunge pool or cold water environment
AND it SHALL display a headline for the Cold Plunge service
AND it SHALL display body copy describing the experience and the benefits of cold plunge therapy
AND it SHALL display a "Book" CTA

#### Scenario: Relaxation Space section contains all required elements

WHEN the Relaxation Space section is rendered
THEN it SHALL display a large photograph depicting a serene relaxation environment
AND it SHALL display a headline for the Relaxation Space
AND it SHALL display body copy describing the experience and the atmosphere of the relaxation space
AND it SHALL display a "Book" CTA

#### Scenario: Hydration section contains all required elements

WHEN the Hydration section is rendered
THEN it SHALL display a large photograph relevant to the hydration offering
AND it SHALL display a headline for the Hydration service
AND it SHALL display body copy describing the experience and the benefits of the hydration service
AND it SHALL display a "Book" CTA

---

### Requirement: Each service section photograph SHALL use an Unsplash placeholder consistent with the aesthetic direction defined in `design.md`.

#### Scenario: Service section photographs use correct Unsplash placeholders

WHEN a user inspects any featured service section photograph
THEN the photograph SHALL be sourced from Unsplash
AND the sauna photograph SHALL depict warm cedar tones and warm interior lighting
AND the cold plunge photograph SHALL depict blue-lit water or a cold plunge pool
AND all photographs SHALL reinforce a serene, premium atmosphere

---

### Requirement: The recovery lounge page SHALL include a recovery philosophy statement reading "Recovery isn't optional. It's part of the program." framed as integral to movement.

#### Scenario: Recovery philosophy statement is present and correctly framed

WHEN the recovery lounge page is rendered
THEN the philosophy statement "Recovery isn't optional. It's part of the program." SHALL be visible
AND the surrounding copy or context SHALL frame recovery as integral to movement and performance — not as an optional add-on

---

### Requirement: The recovery lounge page SHALL include atmosphere callouts referencing natural wood, warm lighting, premium materials, and a quiet environment.

#### Scenario: Atmosphere callouts are present on the page

WHEN the recovery lounge page is rendered
THEN the page SHALL include descriptive content referencing natural wood as a material detail
AND the page SHALL reference warm lighting as part of the environment
AND the page SHALL reference premium materials
AND the page SHALL reference a quiet environment or sense of calm

---

### Requirement: The recovery lounge page SHALL include a recovery memberships callout section that is distinct from the main memberships page and is focused on recovery-only access.

#### Scenario: Recovery memberships callout is present and scoped to recovery-only access

WHEN the recovery lounge page is rendered
THEN a recovery memberships callout section SHALL be present
AND the callout SHALL describe recovery-only membership access
AND the callout SHALL be visually and structurally separate from references to the full membership tiers on `memberships.html`
