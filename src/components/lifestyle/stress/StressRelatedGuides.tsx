import Link from "next/link";
import { STRESS_RELATED } from "@/lib/lifestyle/stress-content";

export function StressRelatedGuides() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Explore more weight loss insights
        </h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
          {STRESS_RELATED.map((card) => (
            <article
              key={card.href}
              className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.04] transition hover:-translate-y-0.5 hover:border-slate-200/90 hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-slate-500">
                <span className="text-emerald-800/90">{card.category}</span>
                <span className="text-slate-300" aria-hidden>
                  ·
                </span>
                <span>{card.readTime} read</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-900">{card.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{card.excerpt}</p>
              <Link
                href={card.href}
                className="group mt-6 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800 transition hover:text-emerald-900"
              >
                Read more
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
