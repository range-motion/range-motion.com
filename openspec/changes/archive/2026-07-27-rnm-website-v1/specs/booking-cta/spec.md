## ADDED Requirements

### Requirement: Every "Book Your Complimentary Assessment" button and link across the entire site SHALL carry the CSS class `.book-cta`.

#### Scenario: All booking CTA elements are marked with the .book-cta class

WHEN any booking CTA element is rendered on any page of the site
THEN the element SHALL have the CSS class `book-cta` applied
AND this SHALL apply regardless of the specific CTA text variant used

---

### Requirement: When `BOOKING_URL` is empty, clicking any `.book-cta` element SHALL display a custom HTML modal dialog — not a browser `alert()` or `confirm()`.

#### Scenario: Modal appears on CTA click when BOOKING_URL is not configured

WHEN `BOOKING_URL` is an empty string
AND a user clicks any `.book-cta` element
THEN a modal dialog SHALL appear on screen
AND the modal SHALL be a custom HTML element
AND the modal SHALL NOT use `alert()`, `confirm()`, or `prompt()`

---

### Requirement: The booking modal SHALL contain a title, a brief description, a phone number placeholder, an email placeholder, and a close button.

#### Scenario: Modal renders with all required content elements

WHEN the booking modal is displayed
THEN it SHALL contain a title element reading "Book Your Complimentary Assessment"
AND it SHALL contain brief descriptive copy
AND it SHALL display a phone number placeholder marked `[PHONE]`
AND it SHALL display an email placeholder marked `[EMAIL]`
AND it SHALL contain a close button

---

### Requirement: The booking modal MUST be fully accessible with ARIA attributes, focus trapping, ESC key dismissal, and focus restoration.

#### Scenario: Modal carries required ARIA attributes

WHEN the booking modal is rendered in the DOM
THEN the modal container SHALL have `role="dialog"`
AND it SHALL have `aria-modal="true"`
AND it SHALL have an `aria-labelledby` attribute pointing to the modal title element's `id`

#### Scenario: Focus is trapped within the modal while it is open

WHEN the booking modal is open
AND a user presses the Tab key repeatedly
THEN focus SHALL cycle only through focusable elements within the modal
AND focus SHALL NOT move to elements outside the modal

#### Scenario: ESC key closes the modal and restores focus

WHEN the booking modal is open
AND a user presses the Escape key
THEN the modal SHALL close
AND focus SHALL return to the `.book-cta` element that triggered the modal

#### Scenario: Close button closes the modal and restores focus

WHEN the booking modal is open
AND a user activates the close button
THEN the modal SHALL close
AND focus SHALL return to the `.book-cta` element that triggered the modal

---

### Requirement: A `BOOKING_URL` constant SHALL exist at the top of `booking.js` as the single configuration point for the live booking destination.

#### Scenario: BOOKING_URL constant is defined at the top of booking.js

WHEN `booking.js` is loaded
THEN a constant named `BOOKING_URL` SHALL be defined at the top of the file
AND all `.book-cta` behavior SHALL reference this constant to determine whether to show the modal or navigate to the URL

#### Scenario: When BOOKING_URL is a non-empty string, CTAs link directly to that URL

WHEN `BOOKING_URL` is set to a non-empty string
AND a user clicks any `.book-cta` element
THEN the browser SHALL navigate to the URL defined in `BOOKING_URL`
AND the modal SHALL NOT appear

---

### Requirement: The `.book-cta` class SHALL be applied to all permitted CTA text variants.

#### Scenario: All approved CTA text variants carry the .book-cta class

WHEN any of the following CTA text variants is rendered on any page: "Book Your Complimentary Assessment", "Book Your Assessment", "Schedule Your Child's Assessment", or "Begin Your Assessment"
THEN the element SHALL have the CSS class `book-cta` applied
AND all variants SHALL trigger the same modal or URL-redirect behavior

---

### Requirement: On mobile viewports, a fixed bottom bar containing a "Book Your Assessment" button SHALL appear on the homepage and key landing pages.

#### Scenario: Sticky mobile CTA bar is visible on the homepage at mobile viewport width

WHEN a user views the homepage on a mobile viewport
THEN a fixed bottom bar SHALL be present
AND it SHALL contain a button or link labeled "Book Your Assessment"
AND the bar SHALL remain fixed to the bottom of the viewport as the user scrolls

#### Scenario: Sticky mobile CTA bar is not visible on desktop viewports

WHEN a user views the homepage on a desktop viewport
THEN the fixed bottom bar SHALL NOT be visible

---

### Requirement: Each `.book-cta` click SHALL fire a custom analytics event named `assessment_cta_click` with a `location` property identifying the triggering section.

#### Scenario: Custom analytics event fires on CTA click with a location property

WHEN a user clicks any `.book-cta` element
THEN a custom event named `assessment_cta_click` SHALL be dispatched
AND the event SHALL carry a `location` property
AND the `location` property SHALL identify the section or page context from which the CTA was triggered
