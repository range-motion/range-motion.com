## 1. ACM Certificate

- [ ] 1.1 In AWS Console, switch region to **us-east-1** (required for CloudFront)
- [ ] 1.2 Navigate to Certificate Manager → Request certificate → Request public certificate
- [ ] 1.3 Add domains: `range-motion.com` and `www.range-motion.com`
- [ ] 1.4 Select DNS validation
- [ ] 1.5 Click "Create records in Route 53" to auto-create the CNAME validation records
- [ ] 1.6 Wait for certificate status to change to **Issued** (typically 1–5 minutes)
- [ ] 1.7 Copy and save the certificate ARN for use in step 3

## 2. S3 Buckets

- [ ] 2.1 Create bucket `range-motion.com` in your preferred region
- [ ] 2.2 Uncheck "Block all public access" on the bucket and confirm
- [ ] 2.3 Enable static website hosting on `range-motion.com` with index document `index.html`
- [ ] 2.4 Add bucket policy to `range-motion.com` allowing public `s3:GetObject`:
  ```json
  {
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::range-motion.com/*"
    }]
  }
  ```
- [ ] 2.5 Copy and save the S3 website endpoint URL for `range-motion.com` (shown in Static website hosting panel)
- [ ] 2.6 Create bucket `www.range-motion.com` in the same region
- [ ] 2.7 Enable static website hosting on `www.range-motion.com` → select "Redirect requests" → enter `range-motion.com` as the target host, protocol `https`
- [ ] 2.8 Copy and save the S3 website endpoint URL for `www.range-motion.com`

## 3. CloudFront Distribution

- [ ] 3.1 Navigate to CloudFront → Create distribution
- [ ] 3.2 Set Origin domain to the S3 **website** endpoint for `range-motion.com` (type it manually — do not pick from the S3 dropdown)
- [ ] 3.3 Set Origin protocol to **HTTP only**
- [ ] 3.4 Set Viewer protocol policy to **Redirect HTTP to HTTPS**
- [ ] 3.5 Set Default root object to `index.html`
- [ ] 3.6 Under Alternate domain names (CNAMEs), add `range-motion.com` and `www.range-motion.com`
- [ ] 3.7 Under Custom SSL certificate, select the ACM cert from step 1.7
- [ ] 3.8 Create the distribution and wait for status to show **Deployed** (5–15 minutes)
- [ ] 3.9 Copy and save the CloudFront distribution domain name (`dXXXXX.cloudfront.net`) and distribution ID

## 4. Route 53 DNS Records

- [ ] 4.1 Navigate to Route 53 → Hosted zones → select `range-motion.com`
- [ ] 4.2 Create A record for `range-motion.com` → Alias → Alias to CloudFront distribution → select the distribution from step 3.9
- [ ] 4.3 Create A record for `www.range-motion.com` → Alias → Alias to CloudFront distribution → select the same distribution
- [ ] 4.4 Verify records appear in the hosted zone

## 5. IAM OIDC Identity Provider

- [ ] 5.1 Navigate to IAM → Identity providers → Add provider
- [ ] 5.2 Select OpenID Connect
- [ ] 5.3 Set Provider URL to `https://token.actions.githubusercontent.com`
- [ ] 5.4 Click **Get thumbprint**
- [ ] 5.5 Set Audience to `sts.amazonaws.com`
- [ ] 5.6 Click Add provider
- [ ] 5.7 Copy and save the provider ARN

## 6. IAM Role

- [ ] 6.1 Navigate to IAM → Roles → Create role
- [ ] 6.2 Select "Web identity" as the trusted entity type
- [ ] 6.3 Select `token.actions.githubusercontent.com` as the identity provider
- [ ] 6.4 Set Audience to `sts.amazonaws.com`
- [ ] 6.5 Complete role creation wizard, name the role `range-motion-deploy`
- [ ] 6.6 Edit the trust policy to add the `StringLike` condition scoping it to your repo's main branch:
  ```json
  "Condition": {
    "StringEquals": {
      "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
    },
    "StringLike": {
      "token.actions.githubusercontent.com:sub": "repo:<YOUR_ORG>/range-motion.com:ref:refs/heads/main"
    }
  }
  ```
- [ ] 6.7 Attach an inline permission policy with S3 sync permissions on `range-motion.com` bucket and CloudFront invalidation on the distribution from step 3.9 (see design.md D3 for full policy JSON)
- [ ] 6.8 Copy and save the role ARN

## 7. GitHub Actions Workflow

- [x] 7.1 Create `.github/workflows/deploy.yml` using the template in design.md D4
- [x] 7.2 Replace `<ACCOUNT_ID>` in the role ARN with your actual AWS account ID
- [x] 7.3 Replace `<DISTRIBUTION_ID>` with the CloudFront distribution ID from step 3.9
- [x] 7.4 Replace `<ORG>` in the trust policy with your GitHub org or username
- [ ] 7.5 Commit and push to main
- [ ] 7.6 Confirm the workflow runs successfully in GitHub Actions tab
- [ ] 7.7 Verify https://range-motion.com loads the site
- [ ] 7.8 Verify https://www.range-motion.com redirects to https://range-motion.com
