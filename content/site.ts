export const site = {
  name: "Alec Wyand",
  role: "Software Engineer",
  tagline: "I build things I find genuinely interesting.",
  intro:
    "Platform and product engineer working across APIs, integrations, and cloud infrastructure. " +
    "Outside of work I build whatever has my attention: AI-powered tools, games, and the occasional side project for friends.",
  email: "awyand95@gmail.com",
  github: "https://github.com/awyand95",
  location: "United States",
} as const;

export const focusAreas = [
  {
    title: "Product engineering",
    body: "End-to-end builds in Next.js and TypeScript — data model, auth, UI, and the deploy pipeline behind them.",
  },
  {
    title: "APIs & integrations",
    body: "Contract-first services, third-party connectors, and the unglamorous reliability work that keeps them running.",
  },
  {
    title: "Applied LLMs",
    body: "Claude-backed features with server-side key boundaries, deterministic fallbacks, and testable outputs.",
  },
] as const;
