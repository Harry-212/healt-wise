"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Pill, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import type { CompareMedicationTab } from "@/lib/routes/compare-page-layout";
import WegovyUkCompareTable from "@/components/wegovy/WegovyUkCompareTable";
import MounjaroUkCompareTable from "@/components/mounjaro/MounjaroUkCompareTable";
import SaxendaUkCompareTable from "@/components/saxenda/SaxendaUkCompareTable";
import WegovyCompareChartsSection from "@/components/compare/WegovyCompareChartsSection";
import MounjaroCompareChartsSection from "@/components/compare/MounjaroCompareChartsSection";
import SaxendaCompareChartsSection from "@/components/compare/SaxendaCompareChartsSection";
import {
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
  estimatedMonthlyCost as wegovyMonthly,
  startingPrice as wegovyStarting,
} from "@/lib/data/wegovy-uk-compare-providers";
import {
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS,
  estimatedMonthlyCost as mounjaroMonthly,
  startingPrice as mounjaroStarting,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  SAXENDA_UK_COMPARE_PROVIDERS,
  headlinePackPrice,
} from "@/lib/data/saxenda-uk-compare-providers";

const TAB_LABEL: Record<CompareMedicationTab, string> = {
  wegovy: "Wegovy",
  mounjaro: "Mounjaro",
  saxenda: "Saxenda",
};

const FULL_PAGE: Record<CompareMedicationTab, string> = {
  wegovy: "/wegovy-price-comparison",
  mounjaro: "/mounjaro-price-comparison",
  saxenda: "/saxenda-price-comparison",
};

const WHAT_IS: Record<CompareMedicationTab, string> = {
  wegovy: "/what-is-wegovy",
  mounjaro: "/what-is-mounjaro",
  saxenda: "/what-is-saxenda",
};

function SnapshotStrip({ med }: { med: CompareMedicationTab }) {
  if (med === "wegovy") {
    const cheapest = WEGOVY_UK_COMPARE_PROVIDERS.reduce((a, b) =>
      wegovyStarting(a) <= wegovyStarting(b) ? a : b,
    );
    const bestValue =
      WEGOVY_UK_COMPARE_PROVIDERS.find((p) => p.badges?.includes("bestValue")) ??
      WEGOVY_UK_COMPARE_PROVIDERS[0];
    return (
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-teal-200/80 bg-linear-to-br from-teal-50/90 to-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
            Lowest starting pen
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900">{cheapest.name}</p>
          <p className="mt-2 tabular-nums text-sm text-slate-600">
            From £{wegovyStarting(cheapest)} · est. £{wegovyMonthly(cheapest)}/mo
          </p>
        </div>
        <div className="rounded-2xl border border-teal-200/60 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-teal-800">
            Balance pick
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900">{bestValue.name}</p>
          <p className="mt-2 tabular-nums text-sm text-slate-600">
            From £{wegovyStarting(bestValue)} · est. £{wegovyMonthly(bestValue)}/mo
          </p>
        </div>
      </div>
    );
  }
  if (med === "mounjaro") {
    const cheapest = MOUNJARO_UK_COMPARE_PROVIDERS.reduce((a, b) =>
      mounjaroStarting(a) <= mounjaroStarting(b) ? a : b,
    );
    const bestValue =
      MOUNJARO_UK_COMPARE_PROVIDERS.find((p) => p.badges?.includes("bestValue")) ??
      MOUNJARO_UK_COMPARE_PROVIDERS[0];
    return (
      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-violet-200/80 bg-linear-to-br from-violet-50/90 to-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-800">
            Lowest starting pen
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900">{cheapest.name}</p>
          <p className="mt-2 tabular-nums text-sm text-slate-600">
            From £{mounjaroStarting(cheapest)} · est. £{mounjaroMonthly(cheapest)}/mo
          </p>
        </div>
        <div className="rounded-2xl border border-violet-200/60 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-wide text-violet-800">
            Balance pick
          </p>
          <p className="mt-1 text-lg font-bold text-slate-900">{bestValue.name}</p>
          <p className="mt-2 tabular-nums text-sm text-slate-600">
            From £{mounjaroStarting(bestValue)} · est. £
            {mounjaroMonthly(bestValue)}/mo
          </p>
        </div>
      </div>
    );
  }
  const cheapest = SAXENDA_UK_COMPARE_PROVIDERS.reduce((a, b) =>
    headlinePackPrice(a, "1") <= headlinePackPrice(b, "1") ? a : b,
  );
  const bestValue =
    SAXENDA_UK_COMPARE_PROVIDERS.find((p) => p.promoNote) ??
    SAXENDA_UK_COMPARE_PROVIDERS.reduce((a, b) => (a.rating >= b.rating ? a : b));
  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-sky-200/80 bg-linear-to-br from-sky-50/90 to-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">
          Lowest 1-pen pack
        </p>
        <p className="mt-1 text-lg font-bold text-slate-900">{cheapest.name}</p>
        <p className="mt-2 tabular-nums text-sm text-slate-600">
          £{headlinePackPrice(cheapest, "1")} (1 pen headline)
        </p>
      </div>
      <div className="rounded-2xl border border-sky-200/60 bg-white p-5 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wide text-sky-900">
          Balance pick
        </p>
        <p className="mt-1 text-lg font-bold text-slate-900">{bestValue.name}</p>
        <p className="mt-2 tabular-nums text-sm text-slate-600">
          From £{headlinePackPrice(bestValue, "1")} (1 pen)
        </p>
      </div>
    </div>
  );
}

function MedPanel({ med }: { med: CompareMedicationTab }) {
  const last =
    med === "wegovy"
      ? WEGOVY_UK_COMPARE_LAST_UPDATED
      : med === "mounjaro"
        ? MOUNJARO_UK_COMPARE_LAST_UPDATED
        : SAXENDA_UK_COMPARE_LAST_UPDATED;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-0"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            {TAB_LABEL[med]} — advanced UK table
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
            Same interactive table as our dedicated {TAB_LABEL[med]} price page:
            column sort, filters, discount preview, and GPhC context. Data label:{" "}
            <span className="font-semibold text-slate-800">{last}</span>.
          </p>
        </div>
        <Link
          href={FULL_PAGE[med]}
          className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
        >
          Open full {TAB_LABEL[med]} page
          <ArrowRight className="h-4 w-4 text-brand-primary" aria-hidden />
        </Link>
      </div>

      <SnapshotStrip med={med} />

      <div className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        {med === "wegovy" && (
          <WegovyUkCompareTable providers={WEGOVY_UK_COMPARE_PROVIDERS} />
        )}
        {med === "mounjaro" && (
          <MounjaroUkCompareTable providers={MOUNJARO_UK_COMPARE_PROVIDERS} />
        )}
        {med === "saxenda" && (
          <SaxendaUkCompareTable providers={SAXENDA_UK_COMPARE_PROVIDERS} />
        )}
      </div>

      <section className="mt-12 rounded-2xl border border-slate-200/80 bg-slate-50/50 px-4 py-10 md:px-8 md:py-12">
        <div className="mb-8 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-amber-500" aria-hidden />
          <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
            Price distribution charts
          </h3>
        </div>
        {med === "wegovy" && (
          <WegovyCompareChartsSection providers={WEGOVY_UK_COMPARE_PROVIDERS} />
        )}
        {med === "mounjaro" && (
          <MounjaroCompareChartsSection providers={MOUNJARO_UK_COMPARE_PROVIDERS} />
        )}
        {med === "saxenda" && (
          <SaxendaCompareChartsSection providers={SAXENDA_UK_COMPARE_PROVIDERS} />
        )}
      </section>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href={WHAT_IS[med]}
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary underline-offset-2 hover:underline"
        >
          <Pill className="h-4 w-4" aria-hidden />
          What is {TAB_LABEL[med]}?
        </Link>
        <Link
          href={FULL_PAGE[med]}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 underline-offset-2 hover:underline"
        >
          Dedicated price comparison
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
    </motion.div>
  );
}

export default function CompareMedPriceTabs({
  medications,
}: {
  medications: CompareMedicationTab[];
}) {
  const [active, setActive] = useState<CompareMedicationTab>(medications[0]!);

  const tabRing = useMemo(
    () =>
      ({
        wegovy: "ring-teal-500/25 data-[on=true]:bg-teal-50/90 data-[on=true]:text-teal-950",
        mounjaro:
          "ring-violet-500/25 data-[on=true]:bg-violet-50/90 data-[on=true]:text-violet-950",
        saxenda: "ring-sky-500/25 data-[on=true]:bg-sky-50/90 data-[on=true]:text-sky-950",
      }) satisfies Record<CompareMedicationTab, string>,
    [],
  );

  return (
    <section
      id="compare-med-tabs"
      className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-primary">
              Live-style data
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">
              Pharmacy price comparison
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Tap a brand to load its full comparison workspace. Tables support sort,
              filters, and discount preview — identical behaviour to our standalone
              compare pages.
            </p>
          </div>
        </div>

        <div
          className="mb-10 flex flex-wrap gap-2 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-1.5 shadow-inner"
          role="tablist"
          aria-label="Medication price tables"
        >
          {medications.map((m) => (
            <button
              key={m}
              type="button"
              role="tab"
              aria-selected={active === m}
              data-on={active === m ? "true" : "false"}
              onClick={() => setActive(m)}
              className={`relative min-h-[44px] rounded-xl px-4 py-2.5 text-sm font-semibold ring-1 ring-transparent transition ${tabRing[m]} ${
                active === m
                  ? "shadow-sm"
                  : "text-slate-600 hover:bg-white/70 hover:text-slate-900"
              }`}
            >
              {active === m ? (
                <motion.span
                  layoutId="compare-tab-glow"
                  className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-brand-primary/20"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              ) : null}
              <span className="relative z-10">{TAB_LABEL[m]}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <MedPanel key={active} med={active} />
        </AnimatePresence>
      </div>
    </section>
  );
}
