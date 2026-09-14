import { ProjectCard } from "@/components/project-card";
import { projects } from "@/content/projects";
import { focusAreas, site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <p className="text-muted mb-4 font-mono text-sm">{site.role}</p>
        <h1 className="max-w-3xl text-4xl leading-[1.1] font-semibold tracking-tight text-balance sm:text-6xl">
          {site.tagline}
        </h1>
        <p className="text-muted mt-6 max-w-2xl text-lg leading-relaxed">
          {site.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-[var(--text)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition hover:opacity-85"
          >
            See the work
          </a>
          <a
            href={`mailto:${site.email}`}
            className="surface rounded-full border px-5 py-2.5 text-sm font-medium transition hover:opacity-80"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Projects */}
      <section
        id="work"
        className="scroll-mt-20 border-t"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-subtle)" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Selected work
              </h2>
              <p className="text-muted mt-2">
                Things I&apos;ve designed and built end to end.
              </p>
            </div>
            <span className="text-muted hidden font-mono text-sm sm:block">
              {projects.length.toString().padStart(2, "0")}
            </span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-20">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What I work on
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title}>
                <h3 className="font-medium">{area.title}</h3>
                <p className="text-muted mt-2 text-sm leading-relaxed">{area.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="border-t"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-subtle)" }}
      >
        <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-20">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let&apos;s build something
          </h2>
          <p className="text-muted mx-auto mt-3 max-w-md">
            Open to interesting problems, side projects, and good conversations
            about any of the above.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-7 inline-block rounded-full bg-[var(--text)] px-6 py-3 text-sm font-medium text-[var(--bg)] transition hover:opacity-85"
          >
            {site.email}
          </a>
        </div>
      </section>
    </>
  );
}
