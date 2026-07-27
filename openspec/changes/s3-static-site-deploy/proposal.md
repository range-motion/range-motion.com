## Why

The range-motion.com website is a static site that needs to be publicly accessible at https://range-motion.com. Currently there is no hosting infrastructure or deployment pipeline. This change establishes the full AWS hosting stack and automates deployments via GitHub Actions.

## What Changes

- Create S3 bucket `range-motion.com` with static website hosting enabled and public read access
- Create S3 bucket `www.range-motion.com` configured to redirect all requests to `range-motion.com`
- Request an ACM TLS certificate (us-east-1) covering `range-motion.com` and `www.range-motion.com`
- Create a CloudFront distribution in front of the S3 website endpoint with HTTPS enforcement and the ACM cert
- Create Route 53 alias A records pointing `range-motion.com` and `www.range-motion.com` to CloudFront
- Configure an IAM OIDC identity provider for GitHub Actions (token.actions.githubusercontent.com)
- Create an IAM role `range-motion-deploy` with a trust policy scoped to this repo's main branch and permissions to sync S3 and invalidate CloudFront
- Add a GitHub Actions workflow that triggers on push to main, assumes the IAM role via OIDC, syncs `./site` to S3, and creates a CloudFront invalidation

## Capabilities

### New Capabilities

- `static-site-hosting`: AWS infrastructure (S3, CloudFront, ACM, Route 53) serving range-motion.com over HTTPS with www redirect
- `github-actions-deploy`: Automated deployment pipeline that syncs the site to S3 and invalidates CloudFront on every push to main using OIDC authentication

### Modified Capabilities

(none)

## Impact

- Introduces AWS dependency (S3, CloudFront, ACM, Route 53, IAM)
- GitHub Actions workflow added at `.github/workflows/deploy.yml`
- No application code changes — infrastructure and CI/CD only
- Domain DNS managed in Route 53 (already registered there)
