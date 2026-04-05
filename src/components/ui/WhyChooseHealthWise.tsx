"use client";

import Image from "next/image";
import {
  Scale,
  PoundSterling,
  ShieldCheck,
  Zap,
  Lock,
  LineChart,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

const FEATURES: {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    id: "independent",
    title: "Independent and Unbiased",
    desc: "We are not tied to any single provider. Our platform is designed to compare multiple options objectively, so you can see what truly offers the best value based on your needs.",
    icon: Scale,
  },
  {
    id: "pricing",
    title: "Real Pricing, Not Just Starting Costs",
    desc: "We go beyond headline prices. Our comparisons include dosage-based costs, monthly estimates, and potential hidden fees—so you understand the full financial commitment before you start.",
    icon: PoundSterling,
  },
  {
    id: "verified",
    title: "Verified UK Providers",
    desc: "Every provider listed is checked against UK regulatory standards, including pharmacy registration and prescribing practices. We prioritise safety and reliability at every step.",
    icon: ShieldCheck,
  },
  {
    id: "decisions",
    title: "Built for Better Decisions",
    desc: "Our platform is designed to help you compare quickly and confidently. From side-by-side comparisons to clear breakdowns, everything is structured to support real decision-making—not overwhelm you.",
    icon: Zap,
  },
  {
    id: "tracker",
    title: "Track Your Progress Privately",
    desc: "With our built-in tracking hub, you can monitor your weight loss journey, log your medication, and stay consistent—all in one private, secure space.",
    icon: Lock,
  },
  {
    id: "value",
    title: "Focused on Long-Term Value",
    desc: "Weight loss treatment is not just about getting started. We help you understand ongoing costs, maintenance plans, and long-term considerations so you can plan ahead with confidence.",
    icon: LineChart,
  },
];

export default function WhyChooseHealthWise() {
  const [openId, setOpenId] = useState<string | null>(FEATURES[0]?.id ?? null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="why-choose-health-wise"
      className="w-full scroll-mt-4 bg-white px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1400px] overflow-hidden rounded-2xl border border-slate-200/90 bg-linear-to-br from-emerald-50/50 via-white to-slate-50/80 shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-col lg:flex-row">
          {/* Kiri: semua teks + accordion — tinggi natural tanpa scroll */}
          <div className="order-2 flex flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8 lg:order-1 lg:w-[56%] lg:py-10">
            <h2 className="text-2xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 sm:text-3xl md:text-[2.35rem]">
              Why Choose
              <br />
              Health Wise
            </h2>

            <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 md:text-[15px]">
              <p>
                Choosing a weight loss treatment in the UK can be confusing.
                Prices vary, providers differ in quality, and not all
                information is transparent.
              </p>
              <p className="font-semibold text-brand-primary">
                Health Wise is built to simplify that decision.
              </p>
            </div>

            <ul className="mt-5 space-y-2 border-t border-slate-200/80 pt-5">
              {FEATURES.map((feat) => {
                const Icon = feat.icon;
                const isOpen = openId === feat.id;
                return (
                  <li key={feat.id}>
                    <button
                      type="button"
                      onClick={() => toggle(feat.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-start gap-3 rounded-xl px-2 py-2.5 text-left transition-colors hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary/40"
                    >
                      <span
                        className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 ${
                          isOpen
                            ? "bg-brand-primary text-white shadow-md"
                            : "bg-emerald-100/80 text-brand-primary"
                        }`}
                      >
                        <Icon className="h-4 w-4" strokeWidth={2} />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center justify-between gap-2">
                          <span className="text-sm font-bold text-slate-900 md:text-[15px]">
                            {feat.title}
                          </span>
                          <ChevronDown
                            className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                        <div
                          className={`grid overflow-hidden transition-all duration-200 ease-out ${
                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                        >
                          <div className="min-h-0">
                            <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-[13px]">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex shrink-0 items-start gap-2 rounded-xl border border-brand-border/60 bg-white/90 px-4 py-4 shadow-sm lg:mt-auto">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-cta" />
              <p className="text-xs font-semibold leading-snug text-brand-primary md:text-[13px]">
                Our goal is simple: clarity, transparency, and confidence to
                choose the right treatment—without guesswork.
              </p>
            </div>
          </div>

          {/* Kanan: foto — portrait full visible on mobile, full-stretch on desktop */}
          <div className="relative order-1 w-full shrink-0 lg:order-2 lg:h-auto lg:w-[44%] lg:min-h-[600px]">
            {/* Mobile: use aspect ratio so full portrait is visible */}
            <div className="relative aspect-3/4 w-full lg:hidden">
              <Image
                src="/uk-weight-loss-medical-expert-health-wise.jpg.jpeg"
                alt="Reviewed by a UK-based medical professional specialising in weight loss treatments."
                fill
                sizes="100vw"
                className="object-cover object-[center_10%]"
                priority={false}
              />
            </div>
            {/* Desktop: fill the flex column */}
            <div className="relative hidden h-full min-h-[600px] lg:block">
              <Image
                src="/uk-weight-loss-medical-expert-health-wise.jpg.jpeg"
                alt="Reviewed by a UK-based medical professional specialising in weight loss treatments."
                fill
                sizes="44vw"
                className="object-cover object-[center_15%]"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
