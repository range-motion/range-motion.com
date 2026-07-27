## ADDED Requirements

### Requirement: README exists at repository root
The repository SHALL contain a `README.md` at the root level.

#### Scenario: File is present
- **WHEN** a developer clones the repository
- **THEN** a `README.md` file SHALL exist at the root of the working tree

### Requirement: README describes the project
The README SHALL include a project name and a one-sentence description of what the site is.

#### Scenario: Project identity is clear
- **WHEN** a developer opens `README.md`
- **THEN** the first heading SHALL be the project name and the opening paragraph SHALL describe the site's purpose in one sentence

### Requirement: README documents repository structure
The README SHALL include a section describing the top-level directory layout.

#### Scenario: Structure section present
- **WHEN** a developer reads `README.md`
- **THEN** there SHALL be a section listing and briefly describing the top-level directories and key files

### Requirement: README explains how to view the site locally
The README SHALL include instructions for running or viewing the site on a local machine.

#### Scenario: Local dev instructions present
- **WHEN** a developer reads `README.md`
- **THEN** there SHALL be at least one method for serving the site locally (e.g., opening `index.html` directly, using `python -m http.server`, or `npx serve`)

### Requirement: README documents conventions
The README SHALL include a section covering project conventions such as file naming and asset placement.

#### Scenario: Conventions section present
- **WHEN** a developer reads `README.md`
- **THEN** there SHALL be a section describing naming conventions and where to place new HTML pages and assets
