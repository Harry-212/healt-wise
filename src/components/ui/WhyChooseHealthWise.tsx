"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Zap,
  Scale,
  PoundSterling,
  ShieldCheck,
  Lock,
  LineChart,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { homepageYellowCtaSolid } from "@/lib/ui/homepage-yellow-cta";

const FEATURES: {
  id: string;
  title: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    id: "independent",
    title: "Independent and unbiased",
    desc: "We are not tied to any single provider. Our platform is designed to compare multiple options objectively, so you can see what truly offers the best value based on your needs.",
    icon: Scale,
  },
  {
    id: "pricing",
    title: "Real pricing, not just starting costs",
    desc: "We go beyond headline prices. Our comparisons include dosage based costs, monthly estimates, and potential hidden fees, so you understand the full financial commitment before you start.",
    icon: PoundSterling,
  },
  {
    id: "verified",
    title: "Verified UK providers",
    desc: "Every provider listed is checked against UK regulatory standards, including pharmacy registration and prescribing practices. We prioritise safety and reliability at every step.",
    icon: ShieldCheck,
  },
  {
    id: "decisions",
    title: "Built for better decisions",
    desc: "Our platform is designed to help you compare quickly and confidently. From side by side comparisons to clear breakdowns, everything is structured to support real decision making, not overwhelm you.",
    icon: Zap,
  },
  {
    id: "tracker",
    title: "Track your progress privately",
    desc: "With our built in tracking hub, you can monitor your weight loss journey, log your medication, and stay consistent in one private, secure space.",
    icon: Lock,
  },
  {
    id: "value",
    title: "Focused on long term value",
    desc: "Weight loss treatment is not just about getting started. We help you understand ongoing costs, maintenance plans, and long term considerations so you can plan ahead with confidence.",
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
      id="why-choose-healthwise360"
      className="w-full scroll-mt-4 bg-white px-4 py-6 sm:px-6 md:px-8 lg:px-10"
    >
      <div className="mx-auto max-w-[1400px] overflow-x-clip rounded-2xl border border-slate-200/90 bg-linear-to-br from-emerald-50/50 via-white to-slate-50/80 shadow-sm ring-1 ring-slate-100">
        <div className="flex flex-col lg:flex-row lg:items-stretch">
          <div className="order-2 flex min-w-0 flex-1 flex-col px-5 py-6 sm:px-8 sm:py-8 lg:order-1 lg:w-[56%] lg:max-w-[56%] lg:py-10">
            <h2 className="text-2xl font-black uppercase leading-[0.95] tracking-tight text-slate-950 sm:text-3xl md:text-[2.35rem]">
              Why choose
              <br />
              {SITE_BRAND_NAME}
            </h2>

            <div className="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 md:text-[15px]">
              <p>
                Choosing a weight loss treatment in the UK can be confusing.
                Prices vary, providers differ in quality, and not all
                information is transparent.
              </p>
              <p className="text-base font-bold text-slate-900">
                {SITE_BRAND_NAME} is built to simplify that decision.
              </p>
            </div>

            <ul
              className="mt-5 list-none space-y-2 border-t border-slate-200/80 pt-5 pl-0"
              style={{ listStyle: "none", paddingLeft: 0, marginLeft: 0 }}
            >
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
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
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

            <div className="mt-8 flex w-full min-w-0 flex-col gap-4 lg:mt-auto">
              <div className="w-full min-w-0 rounded-xl border border-brand-border/60 bg-white/95 px-4 py-4 shadow-sm sm:px-5 sm:py-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-brand-cta" aria-hidden />
                  <p className="min-w-0 text-sm font-semibold leading-relaxed text-brand-primary md:text-[15px]">
                    Our goal is simple: clarity, transparency, and confidence when
                    you compare treatment options. We do not promote specific
                    prescription products to the public.
                  </p>
                </div>
              </div>
              <Link
                href={HOME_COMPARE_HUB_HREF}
                className={`${homepageYellowCtaSolid} w-full min-h-[56px] px-10 py-4 text-lg sm:w-auto sm:min-h-[60px] sm:self-start sm:px-12 sm:text-xl`}
              >
                Compare here
                <Zap className="h-5 w-5 shrink-0 fill-slate-900 sm:h-6 sm:w-6" aria-hidden />
              </Link>
            </div>
          </div>

          <div className="order-1 flex w-full min-w-0 flex-col border-b border-slate-200/80 lg:order-2 lg:w-[44%] lg:max-w-[44%] lg:border-b-0">
            <div className="relative w-full overflow-hidden lg:rounded-tr-2xl">
              <div className="relative aspect-3/4 w-full">
                <Image
                  src="/uk-weight-loss-medical-expert-health-wise.jpg.webp"
                  alt="Professional context for regulated weight loss treatment information in the UK."
                  fill
                  sizes="(max-width: 1024px) 100vw, 44vw"
                  className="object-cover object-[center_25%]"
                  priority={false}
                />
              </div>
            </div>
            <p className="bg-slate-50/95 px-4 py-4 text-sm leading-relaxed text-slate-600 lg:rounded-br-2xl lg:px-6 lg:py-5">
              <span className="font-semibold text-slate-800">Note.</span>{" "}
              Illustrative image: {SITE_BRAND_NAME} publishes comparison
              information only. Treatment decisions belong with a registered UK
              prescriber.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
