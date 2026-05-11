"use client";

import Link from "next/link";
import CompareHereLink from "@/components/ui/CompareHereLink";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, ChevronRight, Pill, Sparkles, Syringe } from "lucide-react";
import { useState } from "react";
import { useTodayLabel } from "@/lib/hooks/useTodayLabel";
import type { CompareMedicationTab } from "@/lib/routes/compare-page-layout";
import WegovyUkCompareTable from "@/components/wegovy/WegovyUkCompareTable";
import MounjaroUkCompareTable from "@/components/mounjaro/MounjaroUkCompareTable";
import SaxendaUkCompareTable from "@/components/saxenda/SaxendaUkCompareTable";
import WegovyCompareChartsSection from "@/components/compare/WegovyCompareChartsSection";
import MounjaroCompareChartsSection from "@/components/compare/MounjaroCompareChartsSection";
import SaxendaCompareChartsSection from "@/components/compare/SaxendaCompareChartsSection";
import { WEGOVY_UK_COMPARE_PROVIDERS } from "@/lib/data/wegovy-uk-compare-providers";
import { MOUNJARO_UK_COMPARE_PROVIDERS } from "@/lib/data/mounjaro-uk-compare-providers";
import { SAXENDA_UK_COMPARE_PROVIDERS } from "@/lib/data/saxenda-uk-compare-providers";

/** UK brand names — used in triple-compare tab UI */
const TAB_LABEL: Record<CompareMedicationTab, string> = {
  mounjaro: "Mounjaro",
  wegovy: "Wegovy",
  saxenda: "Saxenda",
};

const TAB_ACCENTS: Record<
  CompareMedicationTab,
  {
    active: string;
    idle: string;
    iconIdle: string;
    iconActive: string;
  }
> = {
  mounjaro: {
    active:
      "bg-linear-to-br from-violet-600 via-violet-700 to-violet-900 text-white shadow-[0_8px_30px_-6px_rgba(109,40,217,0.55)] ring-2 ring-violet-300/80",
    idle:
      "bg-white text-violet-950 ring-2 ring-violet-200/90 hover:ring-violet-400 hover:shadow-[0_6px_24px_-8px_rgba(109,40,217,0.35)] hover:-translate-y-0.5 active:translate-y-0",
    iconIdle: "bg-violet-100 text-violet-700",
    iconActive: "bg-white/20 text-white",
  },
  wegovy: {
    active:
      "bg-linear-to-br from-teal-500 via-teal-600 to-teal-800 text-white shadow-[0_8px_30px_-6px_rgba(13,148,136,0.5)] ring-2 ring-teal-200/90",
    idle:
      "bg-white text-teal-950 ring-2 ring-teal-200/90 hover:ring-teal-400 hover:shadow-[0_6px_24px_-8px_rgba(13,148,136,0.3)] hover:-translate-y-0.5 active:translate-y-0",
    iconIdle: "bg-teal-100 text-teal-700",
    iconActive: "bg-white/20 text-white",
  },
  saxenda: {
    active:
      "bg-linear-to-br from-sky-500 via-sky-600 to-sky-800 text-white shadow-[0_8px_30px_-6px_rgba(2,132,199,0.5)] ring-2 ring-sky-200/90",
    idle:
      "bg-white text-sky-950 ring-2 ring-sky-200/90 hover:ring-sky-400 hover:shadow-[0_6px_24px_-8px_rgba(2,132,199,0.3)] hover:-translate-y-0.5 active:translate-y-0",
    iconIdle: "bg-sky-100 text-sky-800",
    iconActive: "bg-white/20 text-white",
  },
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

function MedPanel({ med }: { med: CompareMedicationTab }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      className="min-w-0 space-y-0"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            <span className="text-brand-primary">{TAB_LABEL[med]}</span>
            <span className="text-slate-900"> Advanced UK Pharmacy Matrix</span>
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-slate-600 md:text-base">
            The same sortable matrix as our dedicated price page for this
            medicine: column sort, filters, discount preview, and GPhC context.
          </p>
        </div>
        <CompareHereLink href={FULL_PAGE[med]} size="sm" className="shrink-0" />
      </div>

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

      <section className="mt-12 min-w-0 rounded-2xl border border-slate-200/80 bg-slate-50/50 px-3 py-8 sm:px-4 md:px-8 md:py-12">
        <div className="mb-6 flex min-w-0 flex-col gap-2 sm:mb-8 sm:flex-row sm:items-center sm:gap-3">
          <Sparkles className="h-5 w-5 shrink-0 text-amber-500" aria-hidden />
          <h3 className="min-w-0 text-lg font-bold leading-snug text-slate-900 sm:text-xl md:text-2xl">
            Price Distribution Charts
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
          What Is {TAB_LABEL[med]}?
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
  const liveDateLabel = useTodayLabel();

  return (
    <section
      id="compare-med-tabs"
      className="scroll-mt-28 min-w-0 border-b border-slate-200/80 bg-linear-to-b from-slate-50/50 to-background py-12 md:py-16"
    >
      <div className="mx-auto min-w-0 max-w-7xl px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-bold tracking-wide text-brand-primary">
              Live Information
            </p>
            <p className="mt-2 inline-flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-800">
              <Calendar
                className="h-4 w-4 shrink-0 text-amber-600"
                aria-hidden
              />
              <span className="text-amber-700 tabular-nums">
                {liveDateLabel ?? "…"}
              </span>
              <span className="font-normal text-slate-500">
                — live UK calendar date
              </span>
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Pharmacy Price Comparison
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
              Select your chosen medication and use filters, to navigate to your
              chosen supplier
            </p>
          </div>
        </div>

        <div
          className="mb-10 min-w-0 rounded-2xl border-2 border-slate-200/90 bg-linear-to-br from-white via-slate-50/80 to-slate-100/60 p-3 shadow-[0_12px_40px_-12px_rgba(15,23,42,0.15)] ring-1 ring-slate-900/5 md:p-4"
          role="tablist"
          aria-label="Choose medicine price matrix"
        >
          <p className="mb-3 px-1 text-sm font-semibold text-slate-800">
            Select A Medicine To View Live Matrix
          </p>
          <div className="flex min-w-0 flex-col gap-2 sm:flex-row sm:flex-wrap">
            {medications.map((m) => {
              const on = active === m;
              const acc = TAB_ACCENTS[m];
              return (
                <motion.button
                  key={m}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls={`compare-panel-${m}`}
                  id={`compare-tab-${m}`}
                  data-on={on ? "true" : "false"}
                  onClick={() => setActive(m)}
                  whileHover={{ scale: on ? 1 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 420, damping: 28 }}
                  className={`group relative flex min-h-[48px] w-full items-center justify-start gap-2.5 rounded-2xl px-3 py-2.5 text-left text-[15px] font-bold tracking-tight transition sm:min-h-[52px] sm:w-auto sm:min-w-[160px] sm:flex-1 sm:max-w-none sm:justify-center sm:gap-3 sm:px-4 sm:py-3 sm:text-base ${
                    on ? acc.active : acc.idle
                  } `}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl sm:h-10 sm:w-10 ${on ? acc.iconActive : acc.iconIdle}`}
                  >
                    <Syringe className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden />
                  </span>
                  <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="leading-tight">{TAB_LABEL[m]}</span>
                    {!on ? (
                      <span className="text-[11px] font-semibold opacity-80">
                        Tap To Open
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-white/90">
                        Selected
                        <ChevronRight className="h-3.5 w-3.5" aria-hidden />
                      </span>
                    )}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <div
            key={active}
            id={`compare-panel-${active}`}
            role="tabpanel"
            aria-labelledby={`compare-tab-${active}`}
            className="min-w-0"
          >
            <MedPanel med={active} />
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}
