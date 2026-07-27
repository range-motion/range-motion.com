## ADDED Requirements

### Requirement: .gitignore exists at repository root
The repository SHALL contain a `.gitignore` file at the root level.

#### Scenario: File is present
- **WHEN** a developer clones the repository
- **THEN** a `.gitignore` file SHALL exist at the root of the working tree

### Requirement: .gitignore excludes macOS system files
The `.gitignore` SHALL prevent macOS-generated files from being tracked.

#### Scenario: DS_Store excluded
- **WHEN** a developer on macOS opens the project directory in Finder
- **THEN** `.DS_Store` and `._*` files SHALL be ignored by git

### Requirement: .gitignore excludes Windows system files
The `.gitignore` SHALL prevent Windows-generated files from being tracked.

#### Scenario: Windows artifacts excluded
- **WHEN** a developer on Windows browses the project directory
- **THEN** `Thumbs.db` and `desktop.ini` SHALL be ignored by git

### Requirement: .gitignore excludes common editor metadata
The `.gitignore` SHALL prevent editor-specific config and temp files from being tracked.

#### Scenario: Editor files excluded
- **WHEN** a developer opens the project in VS Code or JetBrains IDEs
- **THEN** `.vscode/`, `.idea/`, `*.swp`, and `*.swo` files SHALL be ignored by git

### Requirement: .gitignore includes commented stubs for likely future additions
The `.gitignore` SHALL contain commented-out entries for tooling that may be added later.

#### Scenario: Future stubs present
- **WHEN** a developer reads the `.gitignore`
- **THEN** there SHALL be commented lines for `node_modules/` and `.env` indicating they are intentionally excluded when applicable
