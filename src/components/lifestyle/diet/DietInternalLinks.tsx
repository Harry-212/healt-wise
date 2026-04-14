import Link from "next/link";
import { DIET_INTERNAL_LINKS } from "@/lib/lifestyle/diet-content";

export function DietInternalLinks() {
  return (
    <section aria-labelledby="diet-links-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="diet-links-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Explore related topics
        </h2>
        <p className="mt-3 max-w-2xl text-base text-slate-600">
          Deep dives on treatments, nutrition, pricing, and tools—curated to support this diet pillar.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {DIET_INTERNAL_LINKS.map((item) => (
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
