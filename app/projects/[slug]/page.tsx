import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StatusBadge } from "@/components/status-badge";
import { getProject, projects } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: project.name, description: project.summary },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Header */}
      <header className="relative overflow-hidden">
        <span
          aria-hidden="true"
          className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`}
        />
        <div className="mx-auto max-w-3xl px-6 pt-14 pb-12 sm:pt-20">
          <Link
            href="/#work"
            className="text-muted inline-flex items-center gap-1.5 text-sm transition hover:opacity-70"
          >
            ← All work
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <StatusBadge status={project.status} />
            <span className="text-muted font-mono text-sm">{project.year}</span>
          </div>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="text-muted mt-2 text-lg">{project.subtitle}</p>

          {project.repo && (
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="surface rounded-full border px-4 py-2 text-sm font-medium transition hover:opacity-80"
              >
                Source ↗
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[var(--text)] px-4 py-2 text-sm font-medium text-[var(--bg)] transition hover:opacity-85"
                >
                  Live demo ↗
                </a>
              )}
            </div>
          )}
        </div>
      </header>

      {/* Overview */}
      <section className="mx-auto max-w-3xl px-6 pb-14">
        <div className="space-y-5 text-lg leading-relaxed">
          {project.overview.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "" : "text-muted"}>
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section
        className="border-y"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-subtle)" }}
      >
        <div className="mx-auto max-w-3xl px-6 py-14">
          <h2 className="text-sm font-medium tracking-wider uppercase">
            Notable details
          </h2>
          <div className="mt-8 space-y-8">
            {project.highlights.map((item) => (
              <div key={item.title}>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-muted mt-1.5 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="mx-auto max-w-3xl px-6 py-14">
        <h2 className="text-sm font-medium tracking-wider uppercase">Built with</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="surface rounded-lg border px-3 py-1.5 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Next project */}
      <nav
        className="border-t"
        style={{ borderColor: "var(--border)" }}
        aria-label="Next project"
      >
        <Link
          href={`/projects/${next.slug}`}
          className="group mx-auto flex max-w-3xl items-center justify-between gap-6 px-6 py-10 transition hover:opacity-70"
        >
          <div>
            <p className="text-muted text-sm">Next project</p>
            <p className="mt-1 text-xl font-semibold tracking-tight">{next.name}</p>
          </div>
          <span className="text-2xl transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </nav>
    </article>
  );
}
