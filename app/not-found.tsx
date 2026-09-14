import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-32 text-center">
      <p className="text-muted font-mono text-sm">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">
        This page doesn&apos;t exist
      </h1>
      <p className="text-muted mt-3">
        The link may be out of date, or the page has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-85"
      >
        Back home
      </Link>
    </div>
  );
}
