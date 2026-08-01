import type { Project } from "@/content/projects";

const styles: Record<Project["status"], string> = {
  Live: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400",
  "In progress": "bg-amber-500/10 text-amber-700 dark:text-amber-400",
  MVP: "bg-sky-500/10 text-sky-700 dark:text-sky-400",
  Prototype: "bg-violet-500/10 text-violet-700 dark:text-violet-400",
};

export function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
