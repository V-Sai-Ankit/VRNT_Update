# Production Readiness — VRNT Public Website

Branch: `production-homepage-redesign` · Baseline: `1e604ea` (main)
This document was produced alongside the redesign, verified against the
actual working tree at each step (not written from memory afterward).

## 1. Original problems (independently reproduced, not assumed)

Every finding below was directly reproduced against the baseline commit before
any code was changed — via `tsc`, `npm run build`, `npm audit`, and Playwright
screenshots/route checks at 1440/1024/768/390/360px.

| # | Finding | Confirmed how |
|---|---|---|
| 1–8 | Fixed sidebar + auto-opening announcement drawer broke desktop and mobile layout, obstructed content, used hardcoded pixel offsets and escalating z-index (`z-[1100]`–`z-[1400]`) kept in sync by hand across 5+ files | Read `App.tsx`, `NotificationSidebar.tsx`, `Navbar.tsx`; screenshotted the live drawer-open-by-default state |
| 5 | Announcement drawer opened by default | `App.tsx: useState(true)` for `isDrawerOpen` |
| 6 | Mobile "LOGIN HERE" rendered one letter per line | Reproduced in a screenshot; root cause was `flex-col` wrapping 10 individual `<span>` elements |
| 9 | Navigation manually duplicated (not data-driven) | Two near-identical ~70-line JSX blocks in `App.tsx` for mobile vs desktop nav |
| 10 | Both React Router and Wouter present | `react-router-dom` was the live router; `wouter` was imported only by files unreachable from the router (confirmed via `grep`) |
| 11 | Substantial Replit/server/DB scaffolding | `server/routes.ts` was a literal empty stub (`// put application routes here`); `vercel.json` only did static rewrites, never invoked the server |
| 12 | `npm run check` failed with 30+ TS errors | Reproduced: **33 errors**, mostly from an entire orphaned `client/src/pages/*` tree using named imports (`{ Navbar }`) against default-exported components |
| 13 | Incorrect named imports for default-exported components | 18 mismatches found in the dead `pages/` tree |
| 14 | `NotificationSidebar.tsx` unsafe action union typing | Confirmed: no discriminated union, `act.targetPath!` non-null assertions with no actual type narrowing |
| 15 | Production build succeeded despite failing type-check | Reproduced |
| 16 | Main bundle ~603 KB before gzip, chunk-size warning | Reproduced: 602.62 KB / 171.39 KB gzip, Rollup warning present |
| 17 | Multiple dependency vulnerabilities | `npm audit`: 18 vulnerabilities (2 low, 5 moderate, 11 high) |
| 18 | SEO metadata generic/incomplete | No `<meta name="description">`, no `og:image`/`twitter:image`, no `robots.txt`/`sitemap.xml` |
| 21 | Backend exposes no real API routes | Confirmed by reading `server/routes.ts` in full |
| 22 | README described the site as a prototype | Confirmed |

**Findings beyond the original list, discovered during the audit:**
- The live homepage (`App.tsx`'s `/` route) rendered only `Hero` + `VedaVruksham` — the file literally named `client/src/pages/home.tsx` was completely disconnected from the router.
- The `*` catch-all route re-rendered the homepage for **any** unmatched URL (HTTP 200, no real 404) instead of the `not-found.tsx` page that already existed but was never wired up.
- Two duplicate presentations of "Maha Periyava's Message" existed in the live component tree (image version in `VedaVruksham.tsx`, text version in `Mission.tsx`) that would have collided if naively assembled onto a fuller homepage.
- `/news`'s six headlines mostly pointed at `link: "#"` (dead links).
- `sonner`'s `toast()` was called in `Donate.tsx` with no `<Toaster/>` ever mounted — the copy-to-clipboard feedback was silently doing nothing.
- ~50 of 53 shadcn/ui component files had zero reachable references from any route.

## 2. Changes made

**Architecture**
- Single router (`react-router-dom`); `wouter` removed.
- Centralized, typed navigation model (`lib/navigation.ts`) and announcement model with a discriminated-union `Action` type (`lib/announcements.ts`) — both header, footer, and mobile menu read from the same source instead of duplicating markup.
- Route-level code splitting via `React.lazy` + `Suspense` for every route.
- Removed the Express/Drizzle/Passport/PostgreSQL backend scaffold, `shared/schema.ts`, `drizzle.config.ts`, `script/build.ts`, and Replit-specific tooling (`.replit`, three `@replit/vite-plugin-*` packages, a dead meta-images plugin) — approved by the owner during the audit phase. `npm run build` is now plain `vite build`; `npm run dev` is plain `vite`.
- Deleted the ~16-file orphaned `client/src/pages/*` tree and 3 orphaned `components/sections/*` files that were never reachable from the router; restored their **unique** content instead of just discarding it (see below), and deleted only the files that were pure duplicates of already-live content.
- Deleted ~50 unused `components/ui/*` shadcn files (verified zero reachable references via a full-tree grep before deletion); the 5 still in use (`button`, `card`, `sheet`, `navigation-menu`, `sonner`) were kept and lightly cleaned up (Button's dead Replit-only utility classes removed, Card's shadow/border tokenized).

**Header, navigation, footer**
- Replaced the fixed sidebar with a conventional sticky header: logo/name, a Radix `NavigationMenu` with grouped dropdowns (About / Vedas / Programs / Media / Contact) instead of one long flat list, a prominent Donate button, and a distinct Login link.
- Replaced the sidebar+drawer mobile nav with a Radix `Dialog`/`Sheet` slide-over: built-in focus trap, Escape-to-close, background scroll lock, closes automatically on navigation. This is also what fixed the vertical "LOGIN HERE" bug — the collapsed-rail variant that caused it no longer exists.
- Rebuilt the footer with a real site-map (from the same nav data), contact address, and the login link.
- Added a skip-to-content link and an `id="main-content"` landmark.

**Homepage**
- Rebuilt around the previously-dead root route with the requested hierarchy: hero (mission statement + two CTAs + a founder portrait), one non-blocking announcement teaser card (not an overlay), mission/activities/pariksha/heritage teasers linking to full pages, one canonical Veda Vruksham + Maha Periyava's Message section, a donate CTA, and a contact summary.
- New teaser components (`components/home/*`) were written specifically to avoid the duplication risk described above — they excerpt and link rather than embedding full page components.

**Internal pages**
- Every remaining page (Mission, Activities, Trustees, the three Vedas sub-articles, Pariksha + its Varshika/Poorthy/Sanskrit sub-views, Donate, Contact, Mahotsav, History, Gallery, ParikshaResult, initiatives) now shares the same header/footer/container/typography/card conventions, has a real `<h1>`, and a page-specific `<title>`/meta description.
- Trustees.tsx previously showed a thinner duplicate roster (name/role only); it now renders the fuller `SITE_CONTENT.trustees` data (phone/email/address, gracefully omitted where absent) — one data source instead of two disagreeing ones.
- Gallery's auto-rotating carousel now respects `prefers-reduced-motion` and pauses on hover/focus.
- Restored previously-orphaned but genuinely unique content instead of deleting it outright: the full Vedas About/Rakshanam/Vyasa text (previously three unreachable pages with broken external-domain image URLs) is merged into `components/sections/Vedas.tsx`'s self-contained accordion; `/news` now maps every headline to its real destination instead of a dead `#` link.
- Mounted `<Toaster/>` so Donate's copy-to-clipboard feedback is now actually visible.

**No religious, historical, or mission-statement text was rewritten, shortened, or translated.** Every restyle preserved copy verbatim — only container, typography, and color classes changed. The one exception is the homepage, which deliberately uses short excerpts with "read more" links rather than the full page text, to avoid the duplication problem described in finding set 3.

**Design system** (`client/src/index.css`)
- HSL color tokens: deep maroon `--primary`, deep navy `--secondary`, temple gold `--accent` (plus `--accent-strong`/`--accent-soft` — see Accessibility below), warm parchment `--background`, `--surface` for cards, `--success`/`--warning`/`--destructive`.
- A registered z-index scale (`z-header`/`z-dropdown`/`z-overlay`/`z-drawer`/`z-toast`) instead of arbitrary per-component numbers.
- `max-w-content`/`max-w-wide` container tokens, `shadow-soft`/`shadow-lifted` (replacing hard "comic" offset shadows like `shadow-[4px_4px_0_#222]` everywhere they appeared), a `prefers-reduced-motion` global rule, and a visible `:focus-visible` ring on every interactive element.
- Trimmed the loaded Google Fonts to two families/weights actually used (Cormorant Garamond, Lato) — the previous `index.html` loaded four families including two (Martel, Roboto) that were never referenced by the CSS.

**SEO**
- Per-route `<title>`/meta description via a small dependency-free `Helmet` component (`lib/seo.tsx`) — no new npm dependency for this.
- `meta description`, canonical link, `og:image`/`twitter:image` (previously absent despite the image file already existing), NGO structured data built only from facts already present in the repo (name, founding year, address).
- `robots.txt` and `sitemap.xml` added.

**Dependencies & security**
- `package.json` trimmed to what a full repo-wide import grep confirmed is actually used: React, react-router-dom, framer-motion, lucide-react, sonner, three Radix primitives, class-variance-authority, clsx, tailwind-merge, plus Vite/Tailwind/TypeScript/Vitest tooling. `npm install` removed 229 packages.
- `npm audit fix` (non-breaking only — **not** `--force`): 18 vulnerabilities → **0**.
- Added baseline security headers to `vercel.json` (`X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`). A full Content-Security-Policy was deliberately **not** added — the site embeds a Google Maps iframe and YouTube iframes, and a CSP needs to be built and tested against those specifically rather than guessed at; see "Items requiring owner validation."

## 3. Routes tested

All 18 routes, checked for HTTP 200, a real `<h1>`, a unique page title, and zero browser console errors:

`/`, `/mission`, `/initiatives`, `/activities`, `/vedas`, `/vedas/maha-periyavas-message`, `/pariksha`, `/gallery`, `/history`, `/trustees`, `/donate`, `/contact`, `/mahotsav`, `/pariksha-result`, `/announcements`, `/announcements/:id` (tested with `poorthy-sept`), `/news`, and an unmatched URL (now correctly renders the 404 page — previously silently rendered the homepage).

Also checked: direct-load of every client-side route (not just client-side navigation), which was the original failure mode for the catch-all bug.

## 4. Responsive widths tested

1440px, 1024px, 768px, 390px, and 360px — homepage screenshotted at all five; 11 internal pages screenshotted at 1440px and 390px. No horizontal overflow (`scrollWidth > clientWidth`) at any width, on any page tested.

## 5. Accessibility checks performed

- **Computed exact WCAG contrast ratios** for the whole color palette (not eyeballed) — this caught a real defect introduced during the redesign itself: gold `text-accent` on the parchment background measured 2.4:1, well under the 4.5:1 AA minimum for normal text. Fixed with two purpose-built tokens (`accent-strong` for text on light backgrounds, `accent-soft` for text on the dark maroon/navy panels where the base `--accent` was already correct) rather than one blanket change, since a single fix would have made text unreadable in the other context. Verified final ratios: body text 15:1, primary-on-background 7.75:1, button text 6.3–8:1, `accent-strong` on parchment 5.5–7.2:1, `accent-soft` on maroon/navy 4.3–8.8:1.
- Semantic landmarks: `<header>`, `<main id="main-content">`, `<footer>`, `<nav aria-label>`.
- Logical heading order: every route now has exactly one `<h1>`, with `<h2>`/`<h3>` nested correctly beneath it (previously most pages had no `<h1>` at all, or used `<h2>`/`<h3>` for the page title).
- Keyboard navigation: header dropdowns (Radix NavigationMenu) and the mobile menu (Radix Dialog) are keyboard-operable out of the box; Pariksha's YouTube hover-preview cards were given `onFocus`/`onBlur` handlers mirroring the hover behavior so they work without a mouse.
- Visible `:focus-visible` ring defined globally.
- Skip-to-content link, first in tab order.
- Mobile menu: focus trap, Escape closes it, background scroll locked while open, closes automatically on navigation — all verified with an automated Playwright test, not just visual inspection.
- Alt text: every `<img>` reviewed and given specific alt text (previously several were generic or missing); decorative icons marked `aria-hidden="true"`.
- Touch targets: interactive elements sized to a `min-h-9`/`min-h-11` minimum (36–44px).
- `prefers-reduced-motion` respected globally in CSS, and specifically in Gallery's auto-advancing carousel (which also pauses on hover/focus).
- External links use `target="_blank" rel="noopener noreferrer"`.
- No content hidden behind fixed elements — the whole fixed-sidebar/drawer architecture that caused this was removed.

## 6. Performance improvements

| Metric | Before | After |
|---|---|---|
| Main JS bundle | 602.62 KB (171.39 KB gzip), Rollup chunk-size warning | 369.31 KB (117.62 KB gzip) largest chunk, no warning — every route now code-splits into its own chunk |
| CSS bundle | 138.96 KB (22.31 KB gzip) | 65.60 KB (10.97 KB gzip) — after deleting ~50 unused ui component styles |
| `tsc --noEmit` errors | 33 | 0 |
| `npm audit` vulnerabilities | 18 (2 low, 5 moderate, 11 high) | 0 |
| npm packages | (pre-trim baseline) | 229 packages removed by `npm install` |
| Google Fonts loaded | 4 families, many weights | 2 families, minimal weights |

Also: every `<img>` on every touched page has `loading="lazy"` (except deliberately above-the-fold images like the hero portrait); route-level code splitting means a visitor to any single page downloads only that page's JS, not the whole site.

**Not done — flagged, not silently skipped:** the raw image assets themselves were not re-compressed or converted to a modern format (WebP/AVIF). Several are large (the Navbar-era logo was 1.68 MB; some Poorthy gallery photos are 2–4.6 MB). This needs an image-optimization pass (e.g. `sharp` as a one-time build-time script, or a Vercel image pipeline) — see "Known limitations."

## 7. Dependency / security changes

See "Dependencies & security" above. Full before/after dependency list is in the git history of `package.json` on this branch (commit "Phase 2/3: restyle all internal pages, remove backend scaffold and dead deps").

## 8. Known limitations

- **Image optimization not done.** Large raw images (some multi-MB) are shipped as-is. Recommend a follow-up pass with `sharp` or a Vercel image-optimization integration.
- **No CSP.** Deliberately not added without the ability to test it against the live Google Maps/YouTube embeds and Google Fonts — see "Items requiring owner validation."
- **`/news` and `/announcements` overlap conceptually.** Investigating the original `SITE_CONTENT.news` data showed it was a weaker, mostly-duplicate version of what `/announcements` already covers properly (most of its links were dead `#` placeholders). `/news` now correctly routes every headline to its real destination, but the owner may want to fold News and Announcements into one concept going forward, or drop News from primary navigation once confirmed.
- **Dark-mode tokens removed.** The original `index.css` had an unused `.dark` theme block (no toggle existed anywhere in the app). It was not carried forward, since the site has one deliberate light theme; this is a simplification, not a missing feature — flag if dark mode was actually planned.
- **`framer-motion` remains a dependency** (used by Pariksha, Donate, Mahotsav, Gallery, History, and the three exam sub-pages for entrance animation). It's a real, verified live usage, not dead weight, but it is a meaningfully sized package if bundle size becomes a future concern.
- **No CI pipeline configured.** `npm run check`, `npm run build`, and `npm run test` all pass locally and are documented in the README, but there is no GitHub Actions/Vercel-integrated gate gating merges on these — recommend adding one.

## 9. Items requiring owner validation

1. **Production domain.** Metadata (canonical URL, `og:url`/`og:image`, structured data, `sitemap.xml`) assumes `https://www.vrnt.org` — this was inferred from two hardcoded (now-deleted) references to `vrnt.org` already present in the old codebase, **not independently verified** against the actual Vercel production domain. Confirm and correct if different before launch.
2. **`/news` vs `/announcements`.** See "Known limitations" — confirm whether these should stay separate or merge.
3. **Trustees contact data.** `Trustees.tsx` now surfaces phone/email/address for each trustee from `SITE_CONTENT.trustees` — confirm this level of detail is still meant to be public (it was already in the codebase, just not rendered by the live page before this change).
4. **The assumed production domain also appears in `client/index.html`'s structured data `logo` URL** — same caveat as #1.
5. **Golden Jubilee homepage image** (`/history/Golden jublee.jpg`) is actually a scanned invitation/circular, not a photograph — alt text was written to reflect that; confirm it's the intended homepage image for "Our Heritage."
6. **CSP.** If the owner wants a Content-Security-Policy, it needs to be built and tested specifically against: Google Fonts (`fonts.googleapis.com`/`fonts.gstatic.com`), the Google Maps iframe embed on `/contact`, YouTube iframe embeds on `/pariksha` and `/history`, and the external Google Forms/Photos links (which don't need CSP allowances since they're plain links, not embeds).

## 10. Vercel deployment checklist

- [ ] Confirm production domain matches what's assumed in metadata (see item 1 above); update `client/index.html` and `client/public/sitemap.xml`/`robots.txt` if not `vrnt.org`.
- [ ] Vercel project settings: build command `npm run build` (unchanged), output directory `dist` (unchanged), install command `npm ci`.
- [ ] No environment variables required — this repo holds no secrets and no backend.
- [ ] `vercel.json` already handles the SPA rewrite, asset caching, and the new security headers — no changes needed unless the domain changes.
- [ ] After deploy: spot-check the external Login button opens `https://vrnt-app.onrender.com/#/login` in a new tab from both desktop and mobile.
- [ ] After deploy: verify direct-load of a client-side route (e.g. `https://<domain>/mission` typed directly into the address bar) works — this was the original catch-all bug's failure mode.
- [ ] Submit `sitemap.xml` to Google Search Console once the domain is confirmed.

## 11. Rollback guidance

- This work is entirely on the local branch `production-homepage-redesign`; `main` is untouched at `1e604ea`.
- Nothing has been pushed to GitHub or deployed to Vercel — the live production site is unaffected until this branch is explicitly merged and deployed.
- To roll back after merging: `git revert` the two commits on this branch (`Phase 1: ...` and `Phase 2/3: ...`), or simply redeploy from the `main` branch's existing Vercel deployment history, which requires no code changes since production was never touched.
- Every commit on this branch is a coherent, working checkpoint (`tsc` clean, build succeeds) — if a partial rollback is ever needed, either commit can be reverted independently, though the Phase 2/3 commit depends on Phase 1's design tokens and layout components.
