## ADDED Requirements

### Requirement: Site served over HTTPS at apex domain
The system SHALL serve range-motion.com over HTTPS with a valid TLS certificate. HTTP requests SHALL be redirected to HTTPS.

#### Scenario: HTTPS access
- **WHEN** a user navigates to https://range-motion.com
- **THEN** the site loads successfully with a valid TLS certificate

#### Scenario: HTTP redirect to HTTPS
- **WHEN** a user navigates to http://range-motion.com
- **THEN** the browser is redirected to https://range-motion.com with HTTP 301

### Requirement: www redirects to apex domain
The system SHALL redirect all requests to www.range-motion.com to range-motion.com with HTTP 301.

#### Scenario: www redirect
- **WHEN** a user navigates to https://www.range-motion.com
- **THEN** the browser is redirected to https://range-motion.com with HTTP 301

### Requirement: Static files served from S3
The system SHALL serve all files in the `./site` directory from an S3 bucket configured for static website hosting. The bucket SHALL be publicly readable.

#### Scenario: Index page served
- **WHEN** a user navigates to https://range-motion.com
- **THEN** the content of `site/index.html` is returned

#### Scenario: Sub-pages served
- **WHEN** a user navigates to https://range-motion.com/services.html
- **THEN** the content of `site/services.html` is returned

### Requirement: CloudFront distribution in front of S3
The system SHALL use a CloudFront distribution as the entry point for all requests. CloudFront SHALL use the S3 website endpoint as its origin.

#### Scenario: Content served via CloudFront
- **WHEN** a request is made to range-motion.com
- **THEN** the response is served through CloudFront (verified via response headers)
