"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  LineChart,
  ShieldCheck,
  Package,
  Stethoscope,
  Headphones,
  Scale,
  RefreshCw,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
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
    label: "GPhC and pharmacy regulation",
    desc: "We check pharmacies against the General Pharmaceutical Council (GPhC) register so listed supply routes meet UK regulatory expectations.",
  },
  {
    id: "clinical",
    icon: Stethoscope,
    label: "Clinical safety and prescribing",
    desc: "We review eligibility, consultations, and prescribing pathways so approvals involve qualified professionals and appropriate clinical checks.",
  },
  {
    id: "delivery",
    icon: Package,
    label: "Delivery",
    desc: "We assess packaging, cold chain handling where needed, shipping times, and courier practices so treatment reaches you reliably.",
  },
  {
    id: "support",
    icon: Headphones,
    label: "Ongoing support",
    desc: "We factor in follow up access, guidance, and longer term care arrangements as part of a rounded view of each provider.",
  },
  {
    id: "pricing",
    icon: LineChart,
    label: "Price transparency",
    desc: "We compare published prices by dosage and programme stage, flag hidden fees, and highlight total cost where possible.",
  },
];

const FOOTER_BLOCKS: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    icon: Scale,
    title: "Independent and unbiased",
    body: "We are independent. Commissions do not drive rankings: data, safety standards, and user value do, not promotional deals.",
  },
  {
    icon: RefreshCw,
    title: "Data accuracy and updates",
    body: "We aim to keep pricing and listings current; prices and availability still change. Confirm details with the provider before you buy.",
  },
  {
    icon: AlertCircle,
    title: "Important information",
    body: "UK prescription weight loss medicines are POM: a licensed professional must approve supply. Eligibility varies. This is not medical advice. Speak to a clinician before treatment.",
  },
];

export default function OurMethodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="w-full bg-linear-to-br from-emerald-50/95 via-teal-50/60 to-emerald-100/85 py-10 text-slate-800 md:py-16">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <div className="mb-10 md:mb-12">
          <div className="overflow-hidden rounded-3xl border border-emerald-200/70 bg-white/85 shadow-md shadow-emerald-900/6 ring-1 ring-emerald-100/90 backdrop-blur-sm">
            <div className="flex flex-col gap-6 p-6 sm:flex-row sm:items-stretch sm:gap-8 sm:p-8">
              <div
                className="flex shrink-0 flex-col items-center justify-center gap-1 rounded-2xl bg-linear-to-b from-amber-50 via-white to-emerald-50/90 px-8 py-6 text-center ring-1 ring-amber-200/40 sm:w-28 sm:py-8"
                aria-hidden
              >
                <span className="text-5xl font-black leading-none text-brand-cta sm:text-[3.25rem]">
                  5
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-800/75">
                  steps
                </span>
              </div>
              <div className="min-w-0 flex-1 space-y-3">
                <span className="inline-block rounded-md bg-emerald-600/12 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-emerald-900">
                  {SITE_BRAND_NAME}
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl lg:text-[2.15rem] lg:leading-tight">
                  How we evaluate providers
                </h2>
                <p className="max-w-3xl text-[15px] leading-relaxed text-slate-600 md:text-base">
                  {SITE_BRAND_NAME} compares UK weight loss treatment options
                  fairly, with no preferred pharmacy. We balance pricing, safety, and
                  patient experience so you can choose with confidence. Every
                  listing is scored on the same five pillars:{" "}
                  <span className="font-semibold text-slate-800">
                    regulation
                  </span>
                  ,{" "}
                  <span className="font-semibold text-slate-800">
                    clinical prescribing
                  </span>
                  ,{" "}
                  <span className="font-semibold text-slate-800">delivery</span>
                  ,{" "}
                  <span className="font-semibold text-slate-800">
                    ongoing support
                  </span>
                  , and{" "}
                  <span className="font-semibold text-slate-800">
                    price transparency
                  </span>
                  .
                </p>
              </div>
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
                      Step {String(idx + 1).padStart(2, "0")}
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

                  <h4
                    className={`text-[13px] font-bold leading-snug transition-colors duration-300 lg:text-[15px] ${
                      isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"
                    }`}
                  >
                    {step.label}
                  </h4>

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
                        Step {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4
                      className={`text-[15px] font-bold transition-colors duration-300 ${
                        isActive ? "text-slate-900" : "text-slate-600"
                      }`}
                    >
                      {step.label}
                    </h4>
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

        <div className="mt-12 grid gap-3 md:mt-14 md:grid-cols-3 md:gap-4">
          {FOOTER_BLOCKS.map((block) => {
            const FIcon = block.icon;
            return (
              <div
                key={block.title}
                className="rounded-2xl border border-emerald-100/90 bg-white/90 p-5 shadow-sm backdrop-blur-sm md:p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  <FIcon
                    className="h-5 w-5 text-emerald-700"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h4 className="text-sm font-bold text-slate-900 md:text-base">
                  {block.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">
                  {block.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600 md:text-sm">
            More on how we collect and update data: see the full safety guide.
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:justify-end">
            <Link
              href={HOME_COMPARE_HUB_HREF}
              className="inline-flex min-h-[52px] shrink-0 items-center justify-center gap-3 rounded-full border-2 border-emerald-200 bg-white px-8 py-3.5 text-base font-extrabold text-emerald-900 shadow-md transition-colors hover:bg-emerald-50 sm:min-h-[56px] sm:px-10 sm:py-4 sm:text-lg"
            >
              Compare here
              <ArrowRight className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
            </Link>
            <Link
              href="/methodology"
              className="group inline-flex min-h-[52px] shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-700 px-8 py-3.5 text-base font-bold text-white transition-colors hover:bg-emerald-800 sm:min-h-[56px] sm:px-10 sm:text-lg"
            >
              Read full guide
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
