"use client";

import Link from "next/link";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import {
  Zap,
  ShieldCheck,
  PoundSterling,
  BarChart2,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";

const SERVICES = [
  {
    icon: PoundSterling,
    label: "Price comparison",
    desc: "Compare real costs by dosage across all verified UK providers — updated regularly.",
    accent: "bg-amber-50 text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    icon: ShieldCheck,
    label: "Verified providers",
    desc: "Only GPhC regulated pharmacies make our list. Safety checked, not sponsored.",
    accent: "bg-emerald-50 text-emerald-700",
    iconBg: "bg-emerald-100",
  },
  {
    icon: BarChart2,
    label: "Cost breakdown",
    desc: "See starting price, hidden fees, delivery, and long-term programme costs in one place.",
    accent: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: LayoutDashboard,
    label: "Progress tracker",
    desc: "Log weight, medication, and milestones privately in My Hub — no data shared.",
    accent: "bg-violet-50 text-violet-700",
    iconBg: "bg-violet-100",
  },
  {
    icon: BookOpen,
    label: "Treatment guides",
    desc: "Clear, unbiased guides on weight loss treatment options available in the UK.",
    accent: "bg-teal-50 text-teal-700",
    iconBg: "bg-teal-100",
  },
];

export default function OurServices() {
  return (
    <section className="w-full bg-white px-4 py-10 md:px-8 md:py-14 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left: copy */}
          <div>
            <span className="inline-block rounded-sm bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500">
              The {SITE_BRAND_NAME} experience
            </span>
            <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-[2.5rem]">
              Smarter, safer weight loss decisions
            </h2>
            <p className="mt-5 max-w-xl text-3xl font-black leading-[1.15] tracking-tight text-slate-950 md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Independent comparisons. No pharmacy favours.
            </p>
            <p className="mt-5 max-w-lg text-lg font-semibold leading-snug text-slate-700 md:text-xl">
              Compare price, safety, and support before you speak to a prescriber.
            </p>
            <ul className="mt-8 space-y-2.5">
              {[
                "Dosage level pricing and hidden fees surfaced",
                "GPhC verified UK pharmacies only",
                "Private tracking in My Hub",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={HOME_COMPARE_HUB_HREF}
                className="group inline-flex min-h-[56px] items-center gap-3 rounded-full bg-brand-primary px-10 py-4 text-lg font-extrabold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:brightness-110 active:scale-[0.98] sm:min-h-[60px] sm:px-12 sm:py-4 sm:text-xl"
              >
                Compare here
                <Zap className="h-5 w-5 shrink-0 fill-white transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6" aria-hidden />
              </Link>
              <Link
                href={HOME_COMPARE_HUB_HREF}
                className="text-base font-bold text-brand-primary underline-offset-4 hover:underline sm:text-lg"
              >
                See comparisons
              </Link>
            </div>
          </div>

          {/* Right: modern service cards grid */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-4">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.label}
                  className={`group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-200 hover:bg-white hover:shadow-md ${
                    i === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${svc.iconBg}`}>
                      <Icon className="h-5 w-5" style={{ color: "inherit" }} aria-hidden />
                    </span>
                    <p className="text-sm font-bold text-slate-900">{svc.label}</p>
                  </div>
                  <p className="text-[13px] leading-relaxed text-slate-500">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
