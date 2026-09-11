# Danish Faraz International University (DFIU) — Website

A premium, highly interactive website for **Danish Faraz International University**, a
**fictional demonstration institution** built with React, TypeScript, Vite, Tailwind CSS,
and Framer Motion. This is a fully self-contained frontend project with a backend-ready
service layer for a future Java Spring Boot API.

> **Important:** DFIU is not a real institution. All leadership names, biographies,
> statistics, research figures, and news items are demo content written for this project.
> The "Global Icons & Inspiration" section features real public figures purely as
> non-affiliated, illustrative examples — they are not faculty, staff, or partners of DFIU.

---

## 1. Installation

Requires **Node.js 18+** and npm.

```bash
npm install
```

## 2. Development

```bash
npm run dev
```

Visit the printed local URL (typically `http://localhost:5173`).

## 3. Production build

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The build output is written to `dist/`.

---

## 4. Project structure

```
src/
  animations/     Shared Framer Motion variants
  assets/         Image strategy notes (see assets/README.md)
  components/
    layout/       Navbar, mobile nav, footer, back-to-top, page loader
    sections/     Large page sections (Hero, GlobalNetworkMap, Admissions, etc.)
    ui/           Small reusable primitives (buttons, cards, badges, toasts)
  data/           Typed mock data (schools, global network, leadership, news, etc.)
  hooks/          useTheme, useCountUp/useInView, usePageMeta
  pages/          One component per route
  services/       Backend-ready service layer (see section 6)
  styles/         Tailwind entry + global CSS
public/           Static assets: favicon, manifest, robots.txt, sitemap.xml
```

Routing lives in `src/App.tsx` using React Router v6. Every route has a corresponding
page in `src/pages/`.

---

## 5. Environment variables

Copy `.env.example` to `.env` to customize:

| Variable | Purpose | Default |
|---|---|---|
| `VITE_DATA_MODE` | `mock` (default, no backend needed) or `live` | `mock` |
| `VITE_API_BASE_URL` | Base URL for a future Spring Boot REST API | `http://localhost:8080/api` |
| `VITE_WS_URL` | WebSocket/STOMP endpoint for real-time features | `ws://localhost:8080/ws` |
| `VITE_SITE_URL` | Public site URL for metadata | `https://www.dfiu.edu` |

**The site runs fully in `mock` mode with no environment setup required.**

---

## 6. Future Spring Boot integration

Every data-fetching call in the UI goes through `src/services/*.ts`, never directly
through `fetch`. Each service checks `VITE_DATA_MODE`:

- In **mock mode**, services resolve local data from `src/data/*.ts` with a small
  artificial delay (`mockDelay`), so the UI behaves like a real network call without
  needing a backend.
- In **live mode**, services call `apiGet` / `apiPost` from `src/services/apiClient.ts`,
  which hit `VITE_API_BASE_URL`. This is intended to be a **Java Spring Boot** REST API.

Suggested Spring Boot module mapping:

| Frontend service | Suggested Spring Boot controller |
|---|---|
| `authService.ts` | `AuthController` (`/auth/login`) — Spring Security + JWT |
| `studentService.ts` | `StudentController` (`/students/...`) |
| `applicationService.ts` | `ApplicationController` (`/applications`) |
| `eventService.ts` | `EventController` (`/events`, `/news`, `/newsletter/subscribe`) |
| `campusService.ts` | `CampusController` (`/campus/status`, `/campus/weather`, `/campus/centers`) |
| `researchService.ts` | `ResearchController` (`/research/areas`, `/research/stats`) |
| `notificationService.ts` | Real-time — see WebSocket section below |

A `MySQL` database is a natural fit behind these controllers (Spring Data JPA), given
the shape of the mock data models in `src/data/types.ts` — those interfaces can be used
directly as a guide for your JPA entities / DTOs.

### WebSocket / STOMP integration

`src/services/websocket.ts` exports `createLiveChannel`, an abstraction consumed by the
"Global Pulse" live feed and other real-time widgets. In `mock` mode it generates
clearly-labeled simulated events on an interval. In `live` mode it opens a real
`WebSocket` to `VITE_WS_URL`.

To back this with Spring Boot:

1. Add `spring-boot-starter-websocket` and configure a `/ws` STOMP endpoint.
2. Broadcast to topics such as `/topic/campus-feed`, `/topic/notifications`, and
   `/topic/application-counter`.
3. Optionally swap the raw `WebSocket` in `websocket.ts` for a STOMP client such as
   `@stomp/stompjs` — the `LiveChannel` interface (`subscribe` / `close`) is designed so
   components never need to change when you do this.

**No part of this project fakes a working backend connection.** If `VITE_DATA_MODE=live`
and the backend isn't running, network calls will simply fail like any real API call —
they do not silently fall back to mock data.

---

## 7. Image replacement

This project ships without binary photography (see `src/assets/README.md` for why) and
instead uses CSS gradients, glass panels, and inline SVG. To add real campus photography:

1. Place image files under `src/assets/images/`.
2. Import and use them as standard ES module imports:
   ```tsx
   import campusAerial from '@/assets/images/campus-aerial.jpg';
   // ...
   <img src={campusAerial} alt="Aerial view of the Main Campus" loading="lazy" />
   ```
3. Prefer `.webp`/`.avif` with a `.jpg` fallback, and keep hero images under ~300KB.

---

## 8. Design system

- **Palette:** deep navy / royal blue / electric cyan / gold accents (see
  `tailwind.config.ts` → `theme.extend.colors`).
- **Typography:** "Fraunces" (display/serif) for headings, "Sora" (sans) for body text,
  "IBM Plex Mono" for numeric/live-data readouts. Loaded via Google Fonts in `index.html`.
- **Motion:** Framer Motion for scroll reveals, page transitions, and micro-interactions.
  All animation respects `prefers-reduced-motion` (see `src/styles/index.css`).

---

## 9. Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`), heading hierarchy per page.
- Visible focus states (`:focus-visible` outline) throughout.
- A "Skip to main content" link for keyboard users (top of `src/App.tsx`).
- `aria-label`/`aria-expanded`/`role` attributes on interactive widgets (menus, modals,
  live regions, map markers).
- `prefers-reduced-motion` support disables non-essential animation.

---

## 10. Known limitations / notes from generation

This project was generated in a sandboxed environment **without network access**, which
has two consequences worth knowing about:

1. **`npm install` could not be run during generation.** All source files are complete,
   hand-written, and reviewed (including a manual TypeScript syntax pass), but the build
   has not been executed end-to-end in this environment. Please run `npm install && npm
   run build` after downloading to confirm a clean build, and open an issue/fix locally
   if any dependency version needs adjusting.
2. **No binary images were downloaded or generated.** Backgrounds and illustrations use
   CSS/SVG instead; see section 7 above for adding real photography.

---

## 11. Deployment

### Option A — GitHub Pages (recommended, fully automated)

This project ships with a GitHub Actions workflow at
`.github/workflows/deploy.yml` that builds and publishes the site automatically
on every push to `main`. It uses `HashRouter` and a relative Vite `base`, so it
works out of the box at **any** repo name/subpath — no configuration to edit.

Steps:

1. Push this project to a new GitHub repository.
2. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually from the **Actions** tab).
4. After the workflow finishes, your site is live at
   `https://<your-username>.github.io/<your-repo-name>/`.

Anyone with that link can open the site directly — no `npm install` required on
their end, since GitHub Pages serves the already-built static files.

### Option B — Netlify / Vercel

Connect the repo, set build command `npm run build`, publish directory `dist`.
Because the app uses `HashRouter`, no SPA rewrite rule is required, though
adding one doesn't hurt.

### Option C — Any static file host / S3 + CDN

Run `npm run build` and upload the contents of `dist/` as-is. `HashRouter` and
the relative `base: './'` in `vite.config.ts` mean the build works from any
subpath without a rewrite rule — this is deliberate, since most static hosts
(including GitHub Pages) can't rewrite arbitrary paths back to `index.html`.

> **Note on routing:** URLs will look like `.../#/admissions` rather than
> `.../admissions`. This is the trade-off `HashRouter` makes in exchange for
> requiring zero server configuration. If you deploy to a host that *does*
> support SPA rewrites (Netlify, Vercel, Cloudflare Pages, etc.) and prefer
> clean URLs, you can switch `HashRouter` back to `BrowserRouter` in
> `src/main.tsx` and add that host's rewrite-to-`index.html` rule.

