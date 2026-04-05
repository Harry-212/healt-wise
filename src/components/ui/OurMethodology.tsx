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

const METHOD_STEPS: {
  id: string;
  label: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    id: "pricing",
    icon: LineChart,
    label: "Pricing Transparency",
    desc: "We compare published prices by dosage and stage—true cost, not just headline prices—and flag hidden fees (consultation, delivery, maintenance).",
  },
  {
    id: "regulatory",
    icon: ShieldCheck,
    label: "GPhC Registration & Regulatory Compliance",
    desc: "Each pharmacy is verified on the GPhC register for UK authorisation. We prioritise strict standards and clear accountability.",
  },
  {
    id: "delivery",
    icon: Package,
    label: "Delivery & Cold-Chain Handling",
    desc: "Injections need cold-chain delivery. We assess packaging, shipping times, and compliance so medication arrives safely.",
  },
  {
    id: "clinical",
    icon: Stethoscope,
    label: "Clinical Safety & Prescribing Process",
    desc: "We review eligibility, consultations, and prescribing—checking that qualified professionals and proper medical checks sit behind every approval.",
  },
  {
    id: "support",
    icon: Headphones,
    label: "Ongoing Support & Treatment Management",
    desc: "We factor in follow-ups, guidance, and long-term care—especially for extended GLP-1 treatment.",
  },
];

const FOOTER_BLOCKS: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    icon: Scale,
    title: "Independent & unbiased approach",
    body: "We're independent. Commissions don't drive rankings—data, safety standards, and user value do, not promotional deals.",
  },
  {
    icon: RefreshCw,
    title: "Data accuracy & updates",
    body: "We aim to keep pricing and listings current; prices and availability still change—confirm details with the provider before you buy.",
  },
  {
    icon: AlertCircle,
    title: "Important medical information",
    body: "UK weight-loss prescription meds are POM: a licensed professional must approve. Eligibility (e.g. BMI, history) varies. This isn't medical advice—speak to a clinician before treatment.",
  },
];

export default function OurMethodology() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      className="w-full py-10 text-white md:py-16"
      style={{
        background:
          "linear-gradient(165deg, #1a4d3e 0%, #124236 38%, #0d352c 72%, #0a2a24 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-8 lg:px-10">
        <div className="mb-10 max-w-3xl">
          <span className="inline-block rounded-sm bg-brand-cta px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-900">
            Our Methodology
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-[2.5rem] lg:leading-[1.15]">
            Accurate, transparent, and independent comparisons
          </h2>
          <p className="mt-4 text-base leading-relaxed text-emerald-50/90 md:text-[17px]">
            Health Wise compares UK weight-loss treatments with no
            single-provider bias—we weigh pricing, safety, and patient
            experience so you can decide with confidence.
          </p>
          <h3 className="mt-8 text-base font-bold text-white md:text-lg">
            How we evaluate providers
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-emerald-100/80 md:text-base">
            Every listed provider gets the same structured review across cost,
            safety, and reliability.
          </p>
        </div>

        <div className="relative">
          <div className="relative z-10 hidden grid-cols-5 gap-3 md:grid lg:gap-4">
            <div className="absolute left-0 top-[52px] -z-10 h-[2px] w-full bg-white/15" />

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
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 transition-colors group-hover:bg-white/15">
                    <Icon
                      className={`h-4 w-4 transition-colors ${
                        isActive ? "text-brand-cta" : "text-emerald-200/80"
                      }`}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </div>
                  <div className="mb-3">
                    <span className="inline-block rounded-sm bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-200/90">
                      Step {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="relative mb-4 flex h-6 items-center">
                    <div
                      className={`relative z-10 h-3.5 w-3.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-brand-cta ring-4 ring-brand-cta/25"
                          : "bg-white/35 group-hover:bg-white/55"
                      }`}
                    />
                    {isActive && (
                      <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-brand-cta/90 transition-all duration-500" />
                    )}
                  </div>

                  <h4
                    className={`text-[13px] font-bold leading-snug transition-colors duration-300 lg:text-[15px] ${
                      isActive
                        ? "text-white"
                        : "text-white/65 group-hover:text-white/85"
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
                      <p className="text-[11px] leading-relaxed text-emerald-100/75 lg:text-xs">
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
                          ? "bg-brand-cta ring-4 ring-brand-cta/25"
                          : "bg-white/35"
                      }`}
                    />
                    {idx !== METHOD_STEPS.length - 1 && (
                      <div
                        className={`mb-[-8px] mt-2 flex-1 transition-colors duration-300 ${
                          isActive
                            ? "w-[2px] bg-brand-cta/80"
                            : "w-[2px] bg-white/12"
                        }`}
                      />
                    )}
                  </div>

                  <div className="min-w-0 pb-3">
                    <div className="mb-2 flex items-center gap-2">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Icon
                          className={`h-4 w-4 ${isActive ? "text-brand-cta" : "text-emerald-200/80"}`}
                          strokeWidth={1.75}
                          aria-hidden
                        />
                      </div>
                      <span className="rounded-sm bg-emerald-400/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-200/90">
                        Step {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h4
                      className={`text-[15px] font-bold transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/65"
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
                        <p className="text-sm leading-relaxed text-emerald-100/80">
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
                className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur-sm md:p-5"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <FIcon
                    className="h-5 w-5 text-brand-cta"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </div>
                <h4 className="text-sm font-bold text-white md:text-base">
                  {block.title}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-emerald-100/80 md:text-sm">
                  {block.body}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-emerald-100/70 md:text-sm">
            More on how we collect and update data—see the full safety guide.
          </p>
          <Link
            href="/methodology"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            Read full Guide
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
