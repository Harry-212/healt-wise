import Link from "next/link";
import { STRESS_INTERNAL_LINKS } from "@/lib/lifestyle/stress-content";

export function StressInternalLinks() {
  return (
    <section aria-labelledby="stress-links-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="stress-links-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Related topics
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Cross-links for diet, exercise, tips, GLP-1 education, safety, and tools—supporting topical
          authority around stress, cravings, and weight.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STRESS_INTERNAL_LINKS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex min-h-12 items-center rounded-xl border border-slate-100 bg-white px-4 py-3 text-sm font-medium text-slate-800 shadow-sm transition hover:border-emerald-200/80 hover:bg-emerald-50/40 hover:text-emerald-900"
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
