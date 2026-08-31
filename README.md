# Veda Rakshana Nidhi Trust — Public Website

The production frontend for Veda Rakshana Nidhi Trust (VRNT), a public charitable
trust founded in 1963 dedicated to preserving the Vedic oral tradition. This is a
static, client-rendered React site deployed on Vercel.

## Tech Stack

- **React 19 + TypeScript** — UI
- **Vite 7** — build tool and dev server
- **Tailwind CSS v4** — styling, via a small token-based design system (`client/src/index.css`)
- **react-router-dom v7** — client-side routing (the only routing library in the project)
- **Radix UI primitives** (`react-dialog`, `react-navigation-menu`, `react-slot`) — accessible header dropdown and mobile menu
- **lucide-react** — icons
- **framer-motion** — used by a handful of pages for entrance animation (respects `prefers-reduced-motion`)

This is a pure static frontend. There is **no backend, database, or authentication
in this repository** — see "External login" below.

## Prerequisites

- Node.js 20.x (or newer)
- npm 10.x (ships with Node 20)

## Installation

```powershell
npm ci
```

## Local development (Windows PowerShell)

```powershell
npm run dev
```

This starts the Vite dev server at `http://localhost:5000`. Edits to files under
`client/src` hot-reload in the browser.

## Type checking

```powershell
npm run check
```

Runs `tsc --noEmit` across `client/src`. This must report zero errors before
committing.

## Production build

```powershell
npm run build
```

Builds the static site to `dist/` via `vite build`.

## Preview a production build locally

```powershell
npm run preview
```

Serves the contents of `dist/` at `http://localhost:5000`, exactly as Vercel
would serve it (minus Vercel's own headers/rewrites — see `vercel.json`).

## Tests

```powershell
npm run test
```

Runs the Vitest suite: route rendering (including the 404 route), navigation
data, the external login URL/target/rel, announcement action rendering,
mobile-menu open/Escape/scroll-lock, and a header contrast/focus-visible
regression suite — see `client/src/**/*.test.tsx`.

## Image optimization

```powershell
npm run optimize-images
```

A one-time development script (`scripts/optimize-images.mjs`, uses `sharp` as
a devDependency only — never shipped to the browser). It finds every image
referenced anywhere in `client/src`, and generates a sibling `.webp` next to
each original at a size/quality appropriate to how large that image is ever
actually displayed (see the comment at the top of the script for the exact
rules). **Original files are never modified or deleted** — only run this
again after adding new images that need optimized versions; it's not part of
`npm run build` and doesn't need to run on every change.

## Project structure

```
client/
  index.html          — HTML shell, meta tags, structured data
  public/              — static assets served as-is (images, PDFs, robots.txt, sitemap.xml)
  src/
    App.tsx            — route table + top-level layout (Header, Footer, skip link)
    main.tsx            — React root + BrowserRouter
    index.css           — design tokens (colors, spacing, shadows, z-index scale)
    components/
      layout/           — Header, Footer, MobileNav, SkipLink (shared across all routes)
      home/              — homepage-only section components (teasers, hero, etc.)
      sections/          — full page content components (one per route, e.g. Mission, Donate)
      ui/                — a small set of Radix-based primitives actually in use (button, card, sheet, navigation-menu)
    pages/               — standalone route components that don't fit "sections" (AnnouncementsPage, NewsPage, etc.)
    lib/
      navigation.ts      — the single source of truth for the nav menu + the external login URL
      announcements.ts   — typed announcement data (discriminated-union actions)
      constants.ts        — site content (trustees, support schemes, bank details, etc.)
      seo.tsx             — a tiny dependency-free per-page <title>/meta-description helper
```

## External login integration

This public site does **not** implement authentication. The "Login" action in
the header and mobile menu opens the Trust's existing member/admin application
in a new tab:

```
https://vrnt-app.onrender.com/#/login
```

The URL lives in one place, `client/src/lib/navigation.ts` (`LOGIN_URL`). Do not
change it without the Trust's explicit approval, and do not add any
authentication provider (Supabase, Firebase, Auth0, etc.) to this repository —
that behaviour belongs entirely to the separate application above.

## Deployment (Vercel)

The project deploys to Vercel as a static site. `vercel.json` defines:

- A SPA rewrite (`/((?!assets/|poorthy/|.*\..*).*) → /index.html`) so client-side
  routes work on direct load/refresh.
- Long-lived immutable caching for fingerprinted assets under `/assets/*` and `/poorthy/*`.
- No-cache headers on `/index.html` so deploys are picked up immediately.
- A baseline set of security headers (`X-Content-Type-Options`, `Referrer-Policy`,
  `X-Frame-Options`, `Permissions-Policy`).

Vercel's build command should be `npm run build`, output directory `dist`. No
environment variables are required — this repository holds no secrets.

See `PRODUCTION_READINESS.md` for the full pre-deploy checklist.
