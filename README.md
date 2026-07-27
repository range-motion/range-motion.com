# Range & Motion

Premium movement coaching, recovery, and personalized wellness — based in West Chester, PA.

## Repository Structure

```text
range-motion.com/
├── site/               # Static site source (HTML, CSS, JS, assets)
│   ├── index.html      # Home page
│   ├── about.html
│   ├── services.html
│   ├── memberships.html
│   ├── mios.html
│   ├── recovery.html
│   ├── youth-athletes.html
│   ├── assets/         # Images, logos, and other static assets
│   ├── css/            # Stylesheets (tokens, base, components, per-page)
│   └── js/             # Client-side scripts (nav, animations, booking)
├── openspec/           # OpenSpec change management
└── brand-imaging.jpg   # Brand reference image
```

## Local Development

No build step required. The site is plain HTML/CSS/JS.

**Option 1 — Open directly in a browser:**

```text
open site/index.html
```

**Option 2 — Serve with Python (recommended for relative paths):**

```bash
python -m http.server 8080 --directory site
```

Then visit `http://localhost:8080`.

**Option 3 — Serve with Node:**

```bash
npx serve site
```

## Conventions

- **HTML pages** live directly in `site/` (e.g., `site/new-page.html`).
- **Stylesheets** live in `site/css/`. Per-page styles go in `site/css/pages/`.
- **Scripts** live in `site/js/`. One file per concern (e.g., `booking.js`, `nav.js`).
- **Assets** (images, logos) live in `site/assets/`. Organize by type as the directory grows.
- **File names** use kebab-case (e.g., `youth-athletes.html`, `base.css`).
- **No framework, no build tool.** Keep it plain HTML/CSS/JS unless a build step is explicitly introduced.
