"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Calendar,
  GitCompare,
  Layers,
  Sparkles,
} from "lucide-react";

type MedKey = "mounjaro" | "wegovy" | "saxenda";

const ACCENT: Record<
  MedKey,
  { ring: string; chip: string; glow: string; bar: string }
> = {
  mounjaro: {
    ring: "ring-violet-200/90 hover:ring-violet-400/50",
    chip: "bg-violet-100 text-violet-900 ring-violet-200/80",
    glow: "from-violet-500/15 via-transparent to-transparent",
    bar: "bg-violet-500",
  },
  wegovy: {
    ring: "ring-teal-200/90 hover:ring-teal-400/50",
    chip: "bg-teal-100 text-teal-900 ring-teal-200/80",
    glow: "from-teal-500/15 via-transparent to-transparent",
    bar: "bg-teal-500",
  },
  saxenda: {
    ring: "ring-sky-200/90 hover:ring-sky-400/50",
    chip: "bg-sky-100 text-sky-900 ring-sky-200/80",
    glow: "from-sky-500/15 via-transparent to-transparent",
    bar: "bg-sky-500",
  },
};

const CARDS: {
  key: MedKey;
  brand: string;
  inn: string;
  tag: string;
  schedule: string;
  mechanism: string;
  detail: string;
  whatIs: string;
  priceHref: string;
}[] = [
  {
    key: "mounjaro",
    brand: "Mounjaro",
    inn: "Dual-pathway weekly pen (UK)",
    tag: "Dual GIP / GLP-1",
    schedule: "Once weekly (titrated strengths)",
    mechanism:
      "Adds a GIP pathway alongside GLP-1 — posology and licensing are prescriber-led.",
    detail:
      "Often discussed when people want a weekly injection with a different receptor profile to GLP-1-only options. Eligibility, titration, and monitoring follow product information and your clinician.",
    whatIs: "/what-is-mounjaro",
    priceHref: "/mounjaro-price-comparison",
  },
  {
    key: "wegovy",
    brand: "Wegovy",
    inn: "GLP-1 weekly pen (UK)",
    tag: "GLP-1 receptor agonist",
    schedule: "Once weekly (titrated strengths)",
    mechanism:
      "High-dose semaglutide formulation for weight management where prescribed.",
    detail:
      "Familiar to many UK patients exploring GLP-1 weight treatment. Compare total monthly cost including consultation and delivery before you commit — prices move with dose step-ups.",
    whatIs: "/what-is-wegovy",
    priceHref: "/wegovy-price-comparison",
  },
  {
    key: "saxenda",
    brand: "Saxenda",
    inn: "Daily injection pen (UK)",
    tag: "GLP-1 · daily pen",
    schedule: "Once daily (escalating dose schedule)",
    mechanism:
      "Shorter-acting GLP-1; packaging and pack economics differ from weekly pens.",
    detail:
      "Useful when comparing injection rhythm and pack sizes rather than headline pen price alone — daily schedules change how side effects and routines feel.",
    whatIs: "/what-is-saxenda",
    priceHref: "/saxenda-price-comparison",
  },
];

const MATRIX: { label: string; mounjaro: string; wegovy: string; saxenda: string }[] =
  [
    {
      label: "Brand",
      mounjaro: "Mounjaro",
      wegovy: "Wegovy",
      saxenda: "Saxenda",
    },
    {
      label: "Typical Injection Rhythm",
      mounjaro: "Weekly",
      wegovy: "Weekly",
      saxenda: "Daily",
    },
    {
      label: "Receptor Profile (Simplified)",
      mounjaro: "GIP + GLP-1",
      wegovy: "GLP-1",
      saxenda: "GLP-1",
    },
    {
      label: "Pricing Lens On Our Tables",
      mounjaro: "Per Pen By Strength",
      wegovy: "Per Pen By Strength",
      saxenda: "Often Per Pack Of Pens",
    },
  ];

export default function CompareTripleShowcase() {
  return (
    <section
      id="triple-comparison-overview"
      className="scroll-mt-28 border-b border-slate-200/80 bg-linear-to-b from-slate-50 via-white to-slate-50/80 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-200/80">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Overview
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Three Medicines At A Glance
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-base">
              Each card follows the same layout: brand, mechanism summary, and a
              short context note, then links to learn more. Use the matrix below
              for a side-by-side snapshot. Clinical choice always belongs with a
              registered prescriber — this is a structural comparison, not
              advice.
            </p>
          </div>
          <Link
            href="#compare-med-tabs"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 md:self-auto"
          >
            Jump To Price Tables
            <Zap className="h-4 w-4 fill-white" aria-hidden />
          </Link>
        </div>

        <div className="grid gap-4 lg:grid-cols-3 lg:items-stretch">
          {CARDS.map((c, i) => {
            const a = ACCENT[c.key];
            return (
              <motion.article
                key={c.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`relative flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-sm ring-1 ring-slate-900/5 transition ${a.ring}`}
              >
                <div
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b ${a.glow}`}
                  aria-hidden
                />

                <div className="relative flex flex-1 flex-col gap-3 p-5">
                  <div className="flex w-full items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`h-2 w-2 rounded-full ${a.bar}`}
                          aria-hidden
                        />
                        <h3 className="text-lg font-bold text-slate-900">
                          {c.brand}
                        </h3>
                      </div>
                      <p className="mt-0.5 text-sm font-medium text-slate-500">
                        {c.inn}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ${a.chip}`}
                  >
                    {c.tag}
                  </span>

                  <p className="text-sm leading-relaxed text-slate-600">
                    <span className="font-semibold text-slate-800">
                      {c.schedule}
                    </span>
                    <br />
                    {c.mechanism}
                  </p>

                  <div className="mt-1 border-t border-slate-100/90 pt-3">
                    <p className="text-sm leading-relaxed text-slate-600">
                      {c.detail}
                    </p>
                  </div>
                </div>

                <div className="relative shrink-0 border-t border-slate-100/90 px-5 pb-5 pt-4">
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href={c.whatIs}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-800 ring-1 ring-slate-200/80 transition hover:bg-slate-100"
                    >
                      <Layers className="h-3.5 w-3.5" aria-hidden />
                      What Is {c.brand}?
                    </Link>
                    <Link
                      href={c.priceHref}
                      className="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-brand-primary underline-offset-2 hover:underline"
                    >
                      Full Price Page
                      <Zap className="h-3.5 w-3.5 fill-brand-primary" aria-hidden />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-900/5">
          <div className="flex flex-col gap-2 border-b border-slate-100 bg-slate-50/90 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-slate-500" aria-hidden />
              <h3 className="text-base font-bold text-slate-900">
                Quick Comparison Matrix
              </h3>
            </div>
            <p className="text-xs text-slate-500 sm:text-right">
              Scroll Horizontally On Small Screens
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 bg-white">
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-white px-4 py-3 font-semibold text-slate-700"
                  >
                    Topic
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-3 font-semibold text-violet-900"
                  >
                    Mounjaro
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-teal-900">
                    Wegovy
                  </th>
                  <th scope="col" className="px-4 py-3 font-semibold text-sky-900">
                    Saxenda
                  </th>
                </tr>
              </thead>
              <tbody>
                {MATRIX.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <th
                      scope="row"
                      className="sticky left-0 bg-linear-to-r from-white to-white px-4 py-3.5 font-medium text-slate-700"
                    >
                      {row.label}
                    </th>
                    <td className="px-4 py-3.5 text-slate-600">{row.mounjaro}</td>
                    <td className="px-4 py-3.5 text-slate-600">{row.wegovy}</td>
                    <td className="px-4 py-3.5 text-slate-600">{row.saxenda}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-2xl border border-dashed border-slate-200/90 bg-slate-50/50 p-5 md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
                <GitCompare className="h-5 w-5 text-brand-primary" aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-slate-900">
                  Pairwise Deep Dives
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  For two-way price tables and longer context, open our dedicated
                  head-to-head hubs.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href="/compare/wegovy-vs-mounjaro"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-900"
              >
                Wegovy vs Mounjaro
                <Zap className="h-3.5 w-3.5 fill-slate-800" aria-hidden />
              </Link>
              <Link
                href="/compare/mounjaro-vs-saxenda"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-emerald-900"
              >
                Mounjaro vs Saxenda
                <Zap className="h-3.5 w-3.5 fill-slate-800" aria-hidden />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
