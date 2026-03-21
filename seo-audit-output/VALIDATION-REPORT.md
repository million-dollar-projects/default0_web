# Sitemap Validation Report

Date: 2026-03-22
Project: Default0
Environment: local code audit

## Summary

Status: pass with one implementation fix applied

- Sitemap implementation exists at `app/sitemap.ts`
- robots configuration exists at `app/robots.ts`
- robots references `https://default0.com/sitemap.xml`
- Current sitemap size is safely below the 50,000 URL limit
- URLs are generated on `https://default0.com`
- Deprecated sitemap tags like `<priority>` and `<changefreq>` are not used

## Issue Found

Severity: High
Issue: static page `lastModified` values were generated with `new Date()` on every build
Impact: all static URLs looked freshly updated on each deployment, which makes `<lastmod>` low-trust and less useful to crawlers
Fix applied: static URLs now use the actual source file modification time; blog post URLs now use each `.mdx` file modification time

## Coverage Check

Included in sitemap:

- localized home pages: `/{locale}`
- localized blog index pages: `/{locale}/blog`
- localized feedback pages: `/{locale}/feedback`
- localized privacy pages: `/{locale}/privacy`
- localized blog detail pages: `/{locale}/blog/{slug}`

Intentionally excluded:

- `/`
Reason: root route redirects by `accept-language` and is not the canonical destination

- `/api/feedback`
Reason: API endpoint, not an indexable page

## Quality Notes

- No sitemap split is needed at current URL volume
- Current structure is reasonable for a small multilingual marketing site
- Blog URLs are locale-specific and align with the app router
- The sitemap only emits canonical HTTPS URLs based on `SITE_URL`

## Not Verified In This Local Audit

- Live HTTP 200 status for every sitemap URL
- Redirect chains on production
- Noindex conflicts from runtime headers or hosting config
- Whether the deployed `robots.txt` and `sitemap.xml` are reachable from the public host

## Recommendations

1. Keep using file-level modification times unless you later add an explicit `updated` frontmatter field.
2. If blog volume grows significantly, consider splitting sitemap output by content type.
3. When deploying, spot-check `/robots.txt` and `/sitemap.xml` on production to confirm live output matches local code.
