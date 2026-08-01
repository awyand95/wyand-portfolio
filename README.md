# wyand-portfolio

My personal portfolio — a showcase of the apps and tools I've built.

Built with **Next.js 15** (App Router), **TypeScript**, and **Tailwind CSS 4**,
statically exported so it can be hosted anywhere.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build      # static export to ./out
npm run typecheck  # tsc --noEmit
```

## Adding or editing a project

All content lives in `content/` — no component changes needed for routine updates.

- **`content/projects.ts`** — the project list. Add an entry to the `projects`
  array and a page is generated at `/projects/<slug>` automatically, along with
  a card on the home page and the "next project" link at the bottom of each
  detail page.
- **`content/site.ts`** — name, role, tagline, intro, email, and the "What I
  work on" blurbs.

Each project takes:

| Field | Purpose |
| --- | --- |
| `slug` | URL segment; must be unique |
| `name` / `subtitle` | Title and one-line descriptor |
| `summary` | Short pitch shown on the home page card |
| `overview` | Array of paragraphs for the detail page |
| `status` | `Live`, `In progress`, `MVP`, or `Prototype` |
| `year` | Displayed next to the status badge |
| `stack` | Tech list; the card shows the first four |
| `highlights` | `{ title, body }` entries under "Notable details" |
| `repo` / `demo` | Optional links; buttons only render when set |
| `accent` | Tailwind gradient classes for the card's top border |

## Structure

```
app/
  layout.tsx              # shell, metadata, no-flash theme script
  page.tsx                # home: hero, work grid, about, contact
  projects/[slug]/page.tsx  # generated project detail pages
  not-found.tsx
  globals.css             # Tailwind v4 + theme tokens
components/               # header, footer, cards, theme toggle
content/                  # site copy and project data
```

## Theming

Light and dark are driven by CSS custom properties in `app/globals.css`. The
site follows the OS preference by default; the header toggle overrides it and
persists the choice to `localStorage`. An inline script in `app/layout.tsx`
applies the saved theme before first paint so there's no flash.

## Deploying

The build produces a fully static site in `out/`.

- **Vercel** — import the repo; the defaults work as-is.
- **GitHub Pages / S3 / Netlify** — run `npm run build` and serve `out/`.
