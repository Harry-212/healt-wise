import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface DecisionCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  /** Optional step label, e.g. "1" */
  step?: string;
}

export default function DecisionCard({
  title,
  description,
  href,
  icon,
  step,
}: DecisionCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col items-start gap-5 overflow-hidden rounded-3xl border border-slate-200/90 bg-card p-7 shadow-sm ring-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-900/5 dark:border-slate-700/80 dark:hover:border-emerald-500/40 dark:hover:shadow-emerald-950/20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-transparent to-violet-50/60 dark:from-emerald-950/30 dark:to-violet-950/25" />
      </div>

      <div className="relative flex w-full items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-50 text-emerald-700 shadow-inner ring-1 ring-emerald-200/80 transition-all duration-300 group-hover:scale-105 group-hover:from-emerald-600 group-hover:to-emerald-700 group-hover:text-white group-hover:ring-emerald-500/50 dark:from-emerald-900/50 dark:to-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-800/50 dark:group-hover:from-emerald-500 dark:group-hover:to-emerald-600 dark:group-hover:text-white">
          {icon}
        </div>
        {step ? (
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-bold tracking-wide text-slate-500 uppercase dark:bg-slate-800 dark:text-slate-400">
            Step {step}
          </span>
        ) : null}
      </div>

      <div className="relative min-w-0">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 md:text-[15px]">
          {description}
        </p>
      </div>

      <div className="relative mt-auto flex items-center gap-2 pt-1 text-sm font-semibold text-emerald-700 transition-all group-hover:gap-3 dark:text-emerald-400">
        Continue
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
