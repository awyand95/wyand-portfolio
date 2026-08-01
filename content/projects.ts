export type Project = {
  slug: string;
  name: string;
  subtitle: string;
  /** One-line pitch used on cards. */
  summary: string;
  /** Longer prose for the detail page. */
  overview: string[];
  status: "Live" | "In progress" | "MVP" | "Prototype";
  year: string;
  stack: string[];
  highlights: { title: string; body: string }[];
  repo?: string;
  demo?: string;
  /** Tailwind gradient classes used for the card's accent. */
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "heyneedle",
    name: "Needle",
    subtitle: "AI-scored marketplace hunting",
    summary:
      "Describe what you're hunting for in plain English; Needle turns it into scoring criteria and rates every listing you capture.",
    overview: [
      "Buying used gear means checking the same marketplaces over and over, re-reading listings that were never going to work. Needle flips that around: you describe the thing you want once, and every listing gets scored against it automatically.",
      "Your description goes through Claude, which extracts structured criteria across five criterion types — hard requirements, ranges, preferences, and deal-breakers. From then on, any listing you capture gets scored against those criteria and ranked inside the hunt.",
      "The capture path is a Chrome MV3 extension called Needle Clipper. Server-side fetching gets blocked by the big marketplaces, but your own logged-in browser session sees everything, so the extension reads the page you're on and posts it to the API with a token you generate in Settings.",
    ],
    status: "MVP",
    year: "2026",
    stack: [
      "Next.js 14",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Tailwind CSS",
      "shadcn/ui",
      "NextAuth.js",
      "Claude API",
      "Chrome MV3",
    ],
    highlights: [
      {
        title: "LLM criteria extraction with a deterministic fallback",
        body: "Plain-English hunts become structured, scoreable criteria. Without an API key the app falls back to a deterministic mock covering all five criterion types, so the scoring pipeline stays testable offline.",
      },
      {
        title: "Browser extension as the capture layer",
        body: "A Chrome MV3 extension captures listings from Facebook Marketplace, Craigslist, or anywhere else, authenticating against a token-scoped extension API rather than scraping from the server.",
      },
      {
        title: "Per-user data isolation",
        body: "Every query is scoped to the authenticated user, with email/password credentials handled through NextAuth.",
      },
    ],
    repo: "https://github.com/awyand95/heyneedle",
    accent: "from-sky-400 to-indigo-500",
  },
  {
    slug: "diy-mechanic",
    name: "DIY Mechanic",
    subtitle: "Don't waste the trip",
    summary:
      "A repair assistant for people who fix things themselves because the nearest shop is hours away — diagnosis, exact part number, tools, and an honest DIY-or-pro call.",
    overview: [
      "When the nearest dealer is a two-hour drive, the expensive mistake isn't the repair — it's making the trip and coming home with the wrong part. DIY Mechanic is built around that specific failure.",
      "You describe what's broken. It gives back the likely diagnosis, the exact part with size, part number, and fitment, the tools the job actually needs, a realistic time and cost estimate, and a straight answer on whether this is worth doing yourself or worth paying someone.",
      "It's a PWA so it works from a garage or a trailhead, and it's being dogfooded first in the KTM / Husqvarna / GasGas powersports niche — narrow enough that the answers can be held to a real standard before the scope widens.",
    ],
    status: "In progress",
    year: "2026",
    stack: [
      "Next.js 16",
      "TypeScript",
      "PWA",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "Claude API",
      "Vercel",
    ],
    highlights: [
      {
        title: "Server-side-only LLM boundary",
        body: "Every Claude call runs server-side through a single client module — the API key never reaches the browser, and the boundary stays one auditable file.",
      },
      {
        title: "Retrieval over a real parts corpus",
        body: "Supabase Postgres with pgvector backs the retrieval layer, so fitment answers are grounded rather than recalled.",
      },
      {
        title: "Planned, then built",
        body: "PRD, epics, and an architecture spine came first; the build runs as 4 epics and 18 stories through a create-story → dev-story → code-review loop, one story at a time.",
      },
    ],
    repo: "https://github.com/awyand95/remote-diy-assistant",
    accent: "from-amber-400 to-orange-600",
  },
  {
    slug: "land-access-orchestration",
    name: "Land Access Orchestration",
    subtitle: "Stripe for private land access",
    summary:
      "A payments-and-access orchestration service: a saga engine that ties payment capture to physical gate entry, with TOTP device credentials and a pluggable adapter layer.",
    overview: [
      "Selling access to private land — a trailhead, a fishing stretch, a hunting lease — means a payment and a physical gate have to agree with each other. If money moves and the gate doesn't open, or the gate opens and money never moved, someone is unhappy and the fix is manual.",
      "This service treats that as the distributed transaction it actually is. A saga engine coordinates payment capture with credential issuance, and compensates in the right order when a step fails, so the system never settles into a state where those two halves disagree.",
      "Access credentials are TOTP-based, generated for the gate hardware rather than shared as static codes. An adapter layer keeps payment and hardware providers behind interfaces, and the API is contract-first: an OpenAPI document with a Swagger UI, backed by unit and integration suites that run against an in-process Postgres.",
    ],
    status: "Prototype",
    year: "2026",
    stack: [
      "TypeScript",
      "Node.js",
      "Stripe",
      "PostgreSQL",
      "PGlite",
      "Vitest",
      "OpenAPI",
    ],
    highlights: [
      {
        title: "Saga engine with compensation",
        body: "Payment capture and access provisioning are coordinated as one transaction with explicit compensating actions, rather than two hopeful writes.",
      },
      {
        title: "TOTP hardware credentials",
        body: "Gate devices get time-based one-time credentials instead of shared static codes, with secret handling isolated in a dedicated hardware module.",
      },
      {
        title: "Contract-first, tested against real Postgres",
        body: "An OpenAPI spec and Swagger UI define the surface; integration tests run against PGlite, so the database behavior under test is the real thing.",
      },
    ],
    repo: "https://github.com/awyand95/Stripe-for-Private-Land-Access",
    accent: "from-emerald-400 to-teal-600",
  },
  {
    slug: "ranch",
    name: "Ranch",
    subtitle: "A weekend, coordinated",
    summary:
      "An installable PWA for running a group trip off-grid — roster, tabs, receipts, photos, a tournament bracket, and push-to-talk.",
    overview: [
      "Group trips fall apart in the same places every time: who's actually coming, who paid for what, where the photos ended up, and whose turn it is in the bracket. Ranch puts all of it in one installable app instead of five group chats.",
      "It covers the roster and invites, drink tracking, a receipts and expense-splitting view, a shared photo feed, a tournament bracket, and a push-to-talk walkie channel for when everyone's spread out.",
      "Built as a PWA with web push, so it installs to a home screen and can still reach people when the app isn't open.",
    ],
    status: "Live",
    year: "2026",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Supabase",
      "Tailwind CSS 4",
      "Web Push",
      "Zod",
    ],
    highlights: [
      {
        title: "Installable, notification-capable PWA",
        body: "A web app manifest, service worker, and web-push subscriptions give it home-screen install and background notifications without an app store.",
      },
      {
        title: "Push-to-talk over the web",
        body: "A walkie channel for coordinating across a property where texting is slower than talking.",
      },
      {
        title: "Shared money, settled",
        body: "Receipts and drink tabs are tracked per person so the end-of-trip settle-up is arithmetic instead of an argument.",
      },
    ],
    repo: "https://github.com/awyand95/bachelor-party",
    accent: "from-rose-400 to-purple-600",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
