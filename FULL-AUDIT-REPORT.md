# FULL SEO AUDIT REPORT — Default0

Audit date: 2026-03-17 (Asia/Tokyo)
Scope: Codebase-level audit for `/Users/yangzie/www/default0_app` with build verification. Live domain crawl could not be completed from this environment due TLS/DNS/network reachability issues to `https://default0.app` and `https://www.default0.com`.

## Executive Summary

- Overall SEO Health Score: **62 / 100**
- Business type detected: **B2C/B2B SaaS utility app (macOS software product landing + multilingual blog)**
- Indexed route model: Locale-based content (`en`, `zh-CN`, `ko`, `ja`, `de`, `es`) with blog, feedback, privacy pages.

### Top 5 Critical Issues

1. **No crawl/index control files present** (`robots.txt`, sitemap endpoint/file, `llms.txt`) causing discovery and AI crawler guidance gaps.
2. **Locale alternates (`hreflang`) are not emitted** in metadata, despite multilingual architecture.
3. **Blog listing and blog detail metadata lacks canonical + OG/Twitter enrichment** (only title/description used).
4. **Footer contains a non-resolving placeholder link (`#`) for “Changelog/更新日志/Registro…”** in every locale.
5. **Domain inconsistency signals** (`metadataBase` uses `default0.app` while update payload points to `www.default0.com`).

### Top 5 Quick Wins

1. Add `app/robots.ts` and `app/sitemap.ts` with locale URLs and blog URLs.
2. Add `alternates.languages` metadata (with `x-default`) for all locale-aware pages.
3. Expand blog metadata to include canonical, Open Graph, Twitter, and article URL.
4. Replace footer placeholder link with a real changelog URL or remove until ready.
5. Add `llms.txt` and lightweight E-E-A-T pages/sections (author/product owner identity, support policy).

---

## Scoring (Weighted)

| Category | Weight | Score | Weighted |
|---|---:|---:|---:|
| Technical SEO | 22% | 58 | 12.8 |
| Content Quality | 23% | 74 | 17.0 |
| On-Page SEO | 20% | 62 | 12.4 |
| Schema / Structured Data | 10% | 55 | 5.5 |
| Performance (CWV proxy) | 10% | 68 | 6.8 |
| AI Search Readiness | 10% | 45 | 4.5 |
| Images | 5% | 52 | 2.6 |
| **Total** | **100%** |  | **61.6 ≈ 62** |

---

## Technical SEO

### Findings

- Canonical exists on main locale pages and legal/feedback pages:
  - `app/layout.tsx`
  - `app/[locale]/page.tsx`
  - `app/[locale]/feedback/page.tsx`
  - `app/[locale]/privacy/page.tsx`
- Missing technical SEO files/routes:
  - No `app/robots.ts`
  - No `app/sitemap.ts`
  - No `public/robots.txt`
  - No `public/sitemap.xml`
  - No `public/llms.txt`
- Missing `hreflang` language alternates in metadata for multilingual URLs.
- Build succeeded (`pnpm -s run build`) with SSG for locale pages, but blog routes are dynamic (`ƒ`) and not statically enumerated.

### Risk

- Crawlers may still index via links, but discovery efficiency and language targeting are significantly weaker.

---

## Content Quality

### Findings

- Strong multilingual coverage: 6 locales with localized landing copy and 12 blog posts (`content/blog/*.mdx`).
- Topic cluster is coherent and product-intent aligned (“mute on unlock”, “mute on output change”).
- Thinness risk: blog corpus is still small per locale (currently 2 posts/locale).
- Trust signals can be stronger (author pages, update cadence page, richer support docs).

### Risk

- Good topical relevance, but authority depth and breadth are still early-stage.

---

## On-Page SEO

### Findings

- Home/locale pages: good title/description generation.
- Blog list/detail pages:
  - Metadata currently only includes `title` and `description`.
  - Canonical and social metadata not explicitly provided.
- Heading structure on landing/blog templates is generally clean (`h1` + sectioned `h2/h3`).
- Internal linking is mostly healthy, but footer has placeholder dead-end link (`#`) for changelog in all locales:
  - `components/site-chrome.tsx` (`getHref`, index 2)

### Risk

- Missing canonical + OG/Twitter on blog pages can reduce social preview quality and create canonical ambiguity.

---

## Schema / Structured Data

### Findings

- `SoftwareApplication` JSON-LD is implemented on locale landing page:
  - `app/[locale]/page.tsx`
- Missing schema coverage for:
  - Blog list (`CollectionPage`/`Blog`)
  - Blog detail (`BlogPosting` with `datePublished`, `inLanguage`, `headline`, `description`)
  - Organization/WebSite schema at root (optional but recommended)

### Risk

- Limited rich result eligibility and lower machine-readable understanding of article pages.

---

## Performance (CWV Proxy)

### Findings

- `next/image` is used for hero image with responsive sizes and modern formats enabled in config.
- Build output indicates moderate JS payload on key pages (first load shared JS ~87.1KB; locale page first load ~137KB).
- Large PNG assets exist in `public/home/*.png` and `public/hero-mock.png` (~4.6MB each). WebP variants also exist and are much smaller (~77–84KB).

### Risk

- If PNG variants are referenced or crawled, they can hurt transfer cost and caching footprint.

---

## Images

### Findings

- Hero image alt text is localized through `heroImageAltByLocale` and used correctly in `components/landing-page.tsx`.
- No obvious missing `alt` on rendered images detected in templates.
- Redundant heavy bitmap files exist alongside optimized versions in `public/home/`.

### Recommendation

- Keep WebP as primary, remove or archive unneeded 4.6MB PNG variants if not required.

---

## AI Search Readiness (GEO)

### Findings

- Positive: clear product positioning, multilingual explanatory content, and JSON-LD on key landing page.
- Gaps:
  - No `llms.txt`
  - Limited entity trust blocks (team/company proof, source citations, changelog URL)
  - No explicit answer blocks/Q&A structure on blog pages beyond markdown headings

### Risk

- Lower citation/readability confidence in AI-generated answer surfaces.

---

## Evidence References

- `app/layout.tsx`
- `app/[locale]/page.tsx`
- `app/[locale]/blog/page.tsx`
- `app/[locale]/blog/[slug]/page.tsx`
- `app/[locale]/feedback/page.tsx`
- `app/[locale]/privacy/page.tsx`
- `components/site-chrome.tsx`
- `components/landing-page.tsx`
- `next.config.mjs`
- `content/blog/*.mdx`
- `public/version.json`

---

## Conclusion

The project has a strong multilingual content base and good foundational metadata patterns, but it is currently held back by technical discoverability gaps (`robots`, sitemap, hreflang), incomplete metadata on blog routes, and weak AI-crawler guidance. Closing those gaps can move this site from **62** into the high-70s quickly.
