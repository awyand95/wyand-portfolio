import Link from "next/link";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ borderColor: "var(--border)", backgroundColor: "color-mix(in srgb, var(--bg) 80%, transparent)" }}>
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="font-semibold tracking-tight whitespace-nowrap transition hover:opacity-70"
        >
          {site.name}
        </Link>

        <nav className="flex items-center gap-4 text-sm sm:gap-6">
          <Link href="/#work" className="text-muted transition hover:opacity-70">
            Work
          </Link>
          {/* Hidden on the narrowest screens so the brand and nav never collide. */}
          <Link
            href="/#about"
            className="text-muted hidden transition hover:opacity-70 min-[420px]:inline"
          >
            About
          </Link>
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition hover:opacity-70"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
