"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import type { CompareFaqItem } from "@/lib/routes/compare-faqs";

export default function CompareFaqSection({ items }: { items: CompareFaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  if (!items.length) return null;

  return (
    <section
      id="compare-faq"
      className="scroll-mt-28 border-b border-slate-200/80 bg-linear-to-b from-slate-50/90 via-white to-slate-50/40 py-14 md:py-16"
      aria-labelledby="compare-faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-200/80">
              <HelpCircle className="h-3.5 w-3.5" aria-hidden />
              FAQ
            </p>
            <h2
              id="compare-faq-heading"
              className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
            >
              Frequently Asked Questions
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
              Quick answers about how these comparison tables work. This is not
              medical advice; always follow your prescriber and official patient
              information.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm ring-1 ring-slate-900/5 transition hover:border-emerald-200/80 hover:shadow-md"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`compare-faq-panel-${i}`}
                  id={`compare-faq-trigger-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 px-4 py-4 text-left transition md:px-5 md:py-4"
                >
                  <span className="text-base font-semibold leading-snug text-slate-900 md:text-[1.05rem]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-0.5 shrink-0 rounded-full bg-slate-100 p-1 text-slate-600"
                  >
                    <ChevronDown className="h-5 w-5" aria-hidden />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={`compare-faq-panel-${i}`}
                      role="region"
                      aria-labelledby={`compare-faq-trigger-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <p className="px-4 pb-4 pr-10 text-sm leading-relaxed text-slate-600 md:px-5 md:pb-5">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
