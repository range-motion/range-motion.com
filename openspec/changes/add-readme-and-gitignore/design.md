# Design: add-readme-and-gitignore

## Context

The repository is a static HTML website (`site/`) with no build system, no package manager, and no framework. The root contains `site/`, `openspec/`, and a `brand-imaging.jpg`. There is no existing `README.md` or `.gitignore`.

No `docs/dev/architecture.md` exists in the project.

## Goals / Non-Goals

**Goals:**

- Add `README.md` at the repository root documenting what the project is, its structure, and how to view/develop locally
- Add `.gitignore` at the repository root covering common OS, editor, and static site noise

**Non-Goals:**

- Build tooling, CI/CD, or deployment configuration
- Per-directory README files
- Automated link or HTML validation

## Decisions

### D1: Single root-level README.md

**Decision:** One `README.md` at the repository root is sufficient. The site is a flat static HTML project with no subpackages or workspaces that would benefit from nested docs.

**Sections to include:**

- Project name and one-sentence description
- Tech stack (plain HTML/CSS/JS, static site)
- Repository structure overview
- Local development (open `site/index.html` in a browser or use `python -m http.server` / `npx serve`)
- Conventions (file naming, asset placement)

**Alternative considered:** A `docs/` directory with extended documentation. Rejected — the project complexity does not warrant it.

---

### D2: .gitignore targeting OS + editor noise only

**Decision:** Since there is no build system or package manager, the `.gitignore` need only cover:

- macOS: `.DS_Store`, `._*`
- Windows: `Thumbs.db`, `desktop.ini`
- Linux: `*~`
- Common editors: `.vscode/`, `.idea/`, `*.swp`, `*.swo`
- Potential future additions (commented): `node_modules/`, `.env`

No build output directories to ignore at this time.

**Alternative considered:** Using a comprehensive generated `.gitignore` (e.g., from gitignore.io). Rejected — adds many irrelevant entries for a stack that doesn't use them, creating noise.

---

## Risks / Trade-offs

### README content becomes stale

**Risk:** If the project evolves (e.g., gains a build step), the README won't automatically update.

**Mitigation:** This is inherent to all README files. Keep the README factual and minimal so drift is easy to spot and fix.

### .gitignore too narrow

**Risk:** Future tooling additions (Node, Python scripts, etc.) will generate files the current `.gitignore` won't cover.

**Mitigation:** The design includes commented-out stubs for the most likely additions. Expanding `.gitignore` as the stack grows is a low-effort, one-line change.
