import Link from "next/link";
import { SLEEP_INTERNAL_LINKS } from "@/lib/lifestyle/sleep-content";

export function SleepInternalLinks() {
  return (
    <section aria-labelledby="sleep-links-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="sleep-links-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Related topics
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Cross-links for stress, diet, exercise, GLP-1 guides, tools, and comparisons—supporting the
          sleep + weight loss cluster.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {SLEEP_INTERNAL_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-12 items-center rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-indigo-200/80 hover:bg-indigo-50/50 hover:text-indigo-950"
              >
                {item.label}
                <span className="ml-auto text-slate-400" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
