## ADDED Requirements

### Requirement: Automated deployment on push to main
The system SHALL automatically deploy the site to S3 and invalidate CloudFront on every push to the main branch.

#### Scenario: Push triggers deployment
- **WHEN** a commit is pushed to the main branch
- **THEN** the GitHub Actions workflow runs and syncs `./site` to S3

#### Scenario: CloudFront invalidated after sync
- **WHEN** the S3 sync completes successfully
- **THEN** a CloudFront invalidation for `/*` is created so the latest content is served

### Requirement: Stale files removed on deployment
The system SHALL remove files from S3 that no longer exist in `./site` during deployment.

#### Scenario: Deleted file removed from S3
- **WHEN** a file is deleted from `./site` and the change is pushed to main
- **THEN** the corresponding object is deleted from the S3 bucket

### Requirement: AWS authentication uses OIDC with no stored credentials
The GitHub Actions workflow SHALL authenticate to AWS using OIDC. No long-lived AWS credentials SHALL be stored in GitHub secrets.

#### Scenario: Workflow authenticates via OIDC
- **WHEN** the deploy workflow runs
- **THEN** it assumes the `range-motion-deploy` IAM role via OIDC without any stored AWS keys

### Requirement: IAM role scoped to main branch only
The `range-motion-deploy` IAM role SHALL only be assumable by workflows running on the main branch of the range-motion.com repository.

#### Scenario: Main branch can assume role
- **WHEN** a workflow on the main branch requests the role
- **THEN** the assumption succeeds

#### Scenario: Non-main branch cannot assume role
- **WHEN** a workflow on any branch other than main requests the role
- **THEN** the assumption is denied
