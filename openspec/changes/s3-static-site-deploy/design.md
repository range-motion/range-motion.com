# Design: s3-static-site-deploy

Static site hosting for range-motion.com on AWS with automated GitHub Actions deployment.

## Context

range-motion.com is a pure static site (HTML, CSS, JS, images) located in the `./site` directory. There is no build step. The domain is registered and DNS is managed in Route 53. No AWS infrastructure exists yet. This design covers the full stack from S3 through CloudFront to Route 53, plus the GitHub Actions pipeline using OIDC.

No `docs/dev/architecture.md` exists in the project.

## References

- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html) — S3 website endpoint behavior, bucket policy requirements, and redirect configuration.
- [CloudFront with S3 Website Endpoint](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DownloadDistS3AndCustomOrigins.html) — Why S3 website endpoint must be used over REST endpoint for path-based routing.
- [ACM Certificate Requirements for CloudFront](https://docs.aws.amazon.com/acm/latest/userguide/acm-regions.html) — CloudFront requires ACM certs in us-east-1 only.
- [GitHub OIDC with AWS](https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) — OIDC token claims, trust policy conditions, and AssumeRoleWithWebIdentity flow.
- [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) — The official GitHub Action for OIDC-based AWS authentication.

## Goals / Non-Goals

**Goals:**

- Serve range-motion.com over HTTPS via CloudFront + S3
- Redirect www.range-motion.com to range-motion.com
- Automate deployment on every push to main via GitHub Actions
- Use OIDC for AWS authentication — no long-lived credentials stored in GitHub
- Invalidate CloudFront cache on every deploy so changes are live immediately

**Non-Goals:**

- Build pipeline — the site is pre-built static files; no compilation step
- Staging environment — single production deployment only
- Pull request preview deployments
- Monitoring, alerting, or uptime checks
- WAF or advanced CloudFront security features

## Decisions

### D1: S3 website endpoint as CloudFront origin (not REST endpoint)

**Decision:** The CloudFront distribution uses the S3 *website* endpoint (`range-motion.com.s3-website-us-east-1.amazonaws.com`) as its origin, not the S3 REST endpoint.

The website endpoint handles `index.html` as a default document at every path prefix. The REST endpoint does not — requesting `/services/` on the REST endpoint returns a 403 or 404 unless the exact key exists. Since the site has top-level HTML pages without subdirectory nesting, this distinction is less critical, but using the website endpoint is the correct and conventional choice for static website hosting.

**Consequence:** Because the S3 website endpoint is HTTP-only, the CloudFront origin protocol must be HTTP. HTTPS is enforced at the viewer-facing side (CloudFront → user), not at the origin side (CloudFront → S3). This is standard and expected.

**Alternative considered:** S3 REST endpoint with Origin Access Control (OAC). This keeps the bucket private and grants CloudFront access via OAC. Rejected because OAC with the REST endpoint does not support `index.html` subdirectory routing, and the added complexity of OAC is unnecessary for a fully public static site.

---

### D2: Single CloudFront distribution serving both apex and www

**Decision:** One CloudFront distribution has both `range-motion.com` and `www.range-motion.com` as alternate domain names (CNAMEs). The apex domain S3 bucket is the primary origin. A second S3 bucket (`www.range-motion.com`) is configured with S3's built-in redirect to forward all requests to `range-motion.com`. The www CNAME points to the same CloudFront distribution, which routes www requests to the www redirect bucket.

```
www.range-motion.com
        │  (DNS alias → CloudFront)
        ▼
  CloudFront distribution
        │  (routes to www S3 bucket based on Host header)
        ▼
  www S3 bucket — HTTP 301 redirect to range-motion.com
        │
        ▼
  Browser follows redirect → range-motion.com → CloudFront → apex S3 bucket
```

**Alternative considered:** Two separate CloudFront distributions. Unnecessarily duplicates infrastructure. One distribution with both CNAMEs and two origins (configured via cache behaviors by host header) is cleaner.

**Note:** S3 website redirect buckets don't need any content — they are configured at the bucket level to redirect all requests to the target domain. No bucket policy or public access configuration is needed on the www bucket.

---

### D3: OIDC via IAM role `range-motion-deploy` scoped to main branch

**Decision:** GitHub Actions authenticates to AWS using OIDC. The IAM role trust policy restricts assumption to workflows running on the `main` branch of the `range-motion.com` repository using a `StringLike` condition on the `sub` claim.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::<ACCOUNT_ID>:oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:<ORG>/range-motion.com:ref:refs/heads/main"
        }
      }
    }
  ]
}
```

The role's permission policy grants the minimum required:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::range-motion.com",
        "arn:aws:s3:::range-motion.com/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "arn:aws:cloudfront::<ACCOUNT_ID>:distribution/<DISTRIBUTION_ID>"
    }
  ]
}
```

**Alternative considered:** `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` stored as GitHub secrets. Rejected — long-lived credentials are a security liability. OIDC tokens are short-lived, per-run, and require no rotation.

---

### D4: GitHub Actions workflow with `--delete` flag on s3 sync

**Decision:** The deploy workflow uses `aws s3 sync ./site s3://range-motion.com --delete`. The `--delete` flag removes objects from the bucket that no longer exist in the local `./site` directory. This keeps the bucket clean and prevents stale files from being served after renames or deletions.

```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

permissions:
  id-token: write
  contents: read

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: aws-actions/configure-aws-credentials@v4
        with:
          role-to-assume: arn:aws:iam::<ACCOUNT_ID>:role/range-motion-deploy
          aws-region: us-east-1

      - name: Sync to S3
        run: aws s3 sync ./site s3://range-motion.com --delete

      - name: Invalidate CloudFront
        run: |
          aws cloudfront create-invalidation \
            --distribution-id <DISTRIBUTION_ID> \
            --paths "/*"
```

`permissions: id-token: write` is required — without it, GitHub will not issue an OIDC token for the workflow.

**Alternative considered:** `aws s3 cp --recursive` without `--delete`. Rejected — leaves orphaned files in the bucket after deletions or renames.

## Interfaces

### GitHub Actions Workflow

| Trigger | Branch | Action |
|---|---|---|
| `push` | `main` | Sync `./site` to S3, invalidate CloudFront |

No manual dispatch trigger is included in the initial implementation. Can be added later with `workflow_dispatch`.

## Migrations

### Creation Order

Steps must be executed in this order due to hard dependencies:

1. **ACM certificate** (us-east-1) — request and validate via Route 53 DNS validation. Must be in `Issued` state before CloudFront can use it.
2. **S3 bucket: `range-motion.com`** — enable static website hosting, disable block public access, apply public read bucket policy.
3. **S3 bucket: `www.range-motion.com`** — enable static website hosting with redirect to `range-motion.com`. No content, no policy needed.
4. **CloudFront distribution** — requires the ACM cert ARN and the S3 website endpoints from steps 2-3.
5. **Route 53 A records** — requires the CloudFront distribution domain name (`dXXXXX.cloudfront.net`). Create alias A records for both apex and www.
6. **IAM OIDC identity provider** — one-time per AWS account. Requires no other resource.
7. **IAM role `range-motion-deploy`** — requires the OIDC provider ARN (step 6) and the CloudFront distribution ID (step 4) for the permission policy.
8. **GitHub Actions workflow** — requires the role ARN (step 7) and distribution ID (step 4). Committed to the repository.

### Rollback

This is a greenfield deployment. There is no prior infrastructure to roll back to. If something is misconfigured:

- The site simply won't be reachable until corrected — no data loss risk.
- CloudFront distributions can be disabled (not deleted) while troubleshooting.
- S3 buckets can be emptied and reconfigured without data loss if the deploy hasn't run yet.

## Risks / Trade-offs

### CloudFront propagation delay

**Risk:** After creating or updating a CloudFront distribution, changes take 5–15 minutes to propagate globally. During this window the site may not be reachable or HTTPS may not work.

**Mitigation:** This is expected behavior and not actionable. Wait for the distribution status to show `Deployed` in the console before testing. Do not troubleshoot until propagation is complete.

### ACM certificate must be in us-east-1

**Risk:** CloudFront only accepts ACM certificates from the `us-east-1` region regardless of where the S3 bucket or other resources are. If the cert is created in the wrong region it will not appear in CloudFront's certificate picker.

**Mitigation:** The design explicitly requires the ACM request to be made in `us-east-1`. The tasks will call this out clearly.

### OIDC role ARN and distribution ID must be hardcoded in workflow

**Risk:** The workflow file contains the IAM role ARN and CloudFront distribution ID. These are not secrets but they are environment-specific values. If the distribution is recreated, the workflow file must be updated.

**Mitigation:** This is acceptable for a single-environment static site. Document the values clearly in the workflow file comments. If environments multiply in the future, migrate to GitHub Actions variables.

### `--delete` flag removes files irreversibly

**Risk:** `aws s3 sync --delete` removes files from S3 that don't exist locally. If a file is accidentally deleted from `./site` and merged to main, it will be deleted from production.

**Mitigation:** Standard git history and PR review process protects against accidental deletions. S3 versioning could be enabled as an additional safeguard if desired, but is not included in this scope.
