"use client";

import type { LucideIcon } from "lucide-react";
import {
  Zap,
  ShieldCheck,
  PoundSterling,
  Stethoscope,
  Package,
  Headphones,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

const METHOD_STEPS: {
  id: string;
  label: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    id: "gphc",
    icon: ShieldCheck,
    label: "GPhC registration",
    desc: "We check every pharmacy on the official General Pharmaceutical Council register.",
  },
  {
    id: "clinical",
    icon: Stethoscope,
    label: "Safe prescribing",
    desc: "A qualified prescriber must review your health before any medicine is sent.",
  },
  {
    id: "pricing",
    icon: PoundSterling,
    label: "Full price",
    desc: "We record the price of every dose, plus delivery and any extra fees.",
  },
  {
    id: "delivery",
    icon: Package,
    label: "Delivery",
    desc: "We check cold packaging, delivery times, and tracking.",
  },
  {
    id: "support",
    icon: Headphones,
    label: "Ongoing support",
    desc: "We look at follow-up help, dose advice, and how easy it is to get in touch.",
  },
];

export default function OurMethodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="how-we-compare"
      className="w-full scroll-mt-24 bg-white px-4 py-3 text-slate-800 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1400px] overflow-x-clip rounded-2xl border border-slate-200/90 bg-linear-to-br from-emerald-50/50 via-white to-slate-50/80 shadow-sm ring-1 ring-slate-100">
        <div className="mx-auto max-w-[1200px] p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="mb-8 border-b border-slate-200/80 pb-8 md:mb-10 md:pb-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-8">
              <div
                className="flex shrink-0 flex-col items-center justify-center gap-1 rounded-2xl bg-linear-to-b from-amber-50 via-white to-emerald-50/90 px-8 py-6 text-center ring-1 ring-amber-200/40 sm:w-28 sm:py-8"
                aria-hidden
              >
                <span className="text-5xl font-black leading-none text-brand-cta sm:text-[3.25rem]">
                  5
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800/75">
                  checks
                </span>
              </div>
              <div className="min-w-0 flex-1 space-y-3">
                <span className="inline-block rounded-md bg-emerald-600/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-900">
                  {SITE_BRAND_NAME}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-[2.15rem] lg:leading-tight">
                  How we compare weight loss injection prices in the UK
                </h2>
                <p className="max-w-3xl text-[15px] leading-relaxed text-slate-600 md:text-base">
                  Every pharmacy in our UK weight loss injections price
                  comparison passes the same 5 checks. No pharmacy can pay to
                  rank higher.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
          <div className="relative z-10 hidden grid-cols-5 gap-3 md:grid lg:gap-4">
            <div className="absolute left-0 top-[52px] -z-10 h-[2px] w-full bg-emerald-200/80" />

            {METHOD_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="group relative cursor-pointer pr-1 lg:pr-3"
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/90 shadow-sm ring-1 ring-emerald-100 transition-colors group-hover:bg-white">
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        isActive ? "text-emerald-700" : "text-emerald-500/80"
                      }`}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>
                  <div className="mb-3">
                    <span className="inline-block rounded-sm bg-emerald-600/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                      Check {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mb-4 flex h-6 items-center">
                    <div
                      className={`relative z-10 h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-brand-cta ring-4 ring-amber-300/40"
                          : "bg-emerald-300 group-hover:bg-emerald-400"
                      }`}
                    />
                    {isActive && (
                      <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-brand-cta/80 transition-all duration-500" />
                    )}
                  </div>

                  <h3
                    className={`text-[13px] font-bold leading-snug transition-colors duration-300 lg:text-[15px] ${
                      isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    {step.label}
                  </h3>

                  <div
                    className={`mt-2 grid overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[11px] leading-relaxed text-slate-600 lg:text-xs">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col space-y-4 md:hidden">
            {METHOD_STEPS.map((step, idx) => {
              const isActive = idx === activeStep;
              const Icon = step.icon;
              return (
                <div
                  key={step.id}
                  className="flex cursor-pointer gap-3"
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="relative flex flex-col items-center pt-1">
                    <div
                      className={`h-3.5 w-3.5 shrink-0 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-brand-cta ring-4 ring-amber-300/40"
                          : "bg-emerald-300"
                      }`}
                    />
                    {idx !== METHOD_STEPS.length - 1 && (
                      <div
                        className={`mb-[-8px] mt-2 flex-1 transition-colors duration-300 ${
                          isActive
                            ? "w-[2px] bg-brand-cta/80"
                            : "w-[2px] bg-emerald-200"
                        }`}
                      />
                    )}
                  </div>

                  <div className="min-w-0 pb-3">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-emerald-100">
                        <Icon
                          className={`h-4 w-4 ${isActive ? "text-emerald-700" : "text-emerald-500/80"}`}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </div>
                      <span className="rounded-sm bg-emerald-600/12 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-900">
                        Check {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3
                      className={`text-[15px] font-bold transition-colors duration-300 ${
                        isActive ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {step.label}
                    </h3>
                    <div
                      className={`mt-1.5 grid overflow-hidden transition-all duration-500 ease-in-out ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-relaxed text-slate-600">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
          <Link
            href="/methodology"
            className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full border-2 border-amber-500/50 bg-amber-300 px-8 py-3.5 text-base font-extrabold text-slate-900 shadow-lg transition hover:scale-[1.02] hover:bg-amber-400 active:scale-[0.98] sm:min-h-[56px] sm:px-10 sm:text-lg"
          >
            Read our full methodology
            <Zap className="h-5 w-5 fill-slate-900 transition-transform group-hover:scale-110 sm:h-6 sm:w-6" aria-hidden />
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
