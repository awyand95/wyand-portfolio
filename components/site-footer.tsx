import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="text-muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition hover:opacity-70"
          >
            GitHub
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-muted transition hover:opacity-70"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
