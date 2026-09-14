import Link from "next/link";
import type { Project } from "@/content/projects";
import { StatusBadge } from "./status-badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="surface group relative flex flex-col overflow-hidden rounded-2xl border p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/40"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${project.accent}`}
      />

      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight">{project.name}</h3>
          <p className="text-muted mt-0.5 text-sm">{project.subtitle}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      <p className="text-muted mt-4 grow text-sm leading-relaxed">{project.summary}</p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md border px-2 py-0.5 text-xs"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="text-muted px-1 py-0.5 text-xs">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium">
        View project
        <span className="transition-transform duration-200 group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
