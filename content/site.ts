export const site = {
  name: "Austin Wyand",
  role: "Software Engineer",
  tagline: "I build tools that solve problems I actually have.",
  intro:
    "Platform and product engineer working across APIs, integrations, and cloud infrastructure. " +
    "Outside of work I ship small, opinionated products — usually because I got tired of doing something manually.",
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
