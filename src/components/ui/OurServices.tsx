"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { homepageYellowCtaSolid } from "@/lib/ui/homepage-yellow-cta";
import {
  Zap,
  ShieldCheck,
  PoundSterling,
  BarChart2,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";

const TRACKER_HREF = "/tools/weight-loss-tracker";

/** Link label aligned with homepage Experience section bullet. */
const TRACKER_LINK_LABEL =
  "Use the Free Tracking and Monitor Your Progress on the HealthWise360";

const SERVICES = [
  {
    icon: PoundSterling,
    label: "Price Comparison",
    desc: (
      <>
        Compare real-time costs across all UK verified providers, with the
        confidence they have been verified, and you can also check them out on{" "}
        <a
          href="https://www.trustpilot.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-amber-800 underline decoration-amber-300/80 underline-offset-2 transition hover:text-amber-950"
        >
          Trustpilot
        </a>
        .
      </>
    ),
    accent: "bg-amber-50 text-amber-700",
    iconBg: "bg-amber-100",
  },
  {
    icon: BarChart2,
    label: "Cost Breakdown",
    desc: "All providers will show you a clear cost and any delivery charge.",
    accent: "bg-blue-50 text-blue-700",
    iconBg: "bg-blue-100",
  },
  {
    icon: ShieldCheck,
    label: "Verified Providers",
    desc: "We only work with GPhC-regulated pharmacies. We do not accept sponsorship or favour any provider.",
    accent: "bg-emerald-50 text-emerald-700",
    iconBg: "bg-emerald-100",
  },
  {
    icon: LayoutDashboard,
    label: "Progress Tracker",
    desc: "Log weight and milestones privately on your weight loss journey.",
    accent: "bg-violet-50 text-violet-700",
    iconBg: "bg-violet-100",
  },
  {
    icon: BookOpen,
    label: "Treatment Guides",
    desc: "All of our guides are clear and unbiased, to help you make decisions based on the options available for your weight loss treatment in the UK.",
    accent: "bg-teal-50 text-teal-700",
    iconBg: "bg-teal-100",
  },
] satisfies {
  icon: LucideIcon;
  label: string;
  desc: ReactNode;
  accent: string;
  iconBg: string;
}[];

const trackerCardCtaClass =
  "mt-2 inline-flex w-fit items-center justify-center rounded-lg border-2 border-emerald-600/55 bg-emerald-50/90 px-4 py-2 text-xs font-bold text-emerald-950 shadow-sm transition hover:border-emerald-700/70 hover:bg-emerald-100/90 active:scale-[0.98] sm:text-sm";

export default function OurServices() {
  return (
    <section className="w-full bg-white px-4 py-3 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1400px] overflow-x-clip rounded-2xl border border-slate-200/90 bg-linear-to-br from-emerald-50/50 via-white to-slate-50/80 shadow-sm ring-1 ring-slate-100">
        <div className="mx-auto max-w-[1200px] p-5 sm:p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left: copy */}
            <div>
              <span className="inline-block rounded-sm bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500">
                {SITE_BRAND_NAME}
              </span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-slate-900 md:text-4xl lg:text-[2.5rem]">
                The {SITE_BRAND_NAME} Experience
              </h2>
              <div className="mt-6 max-w-xl space-y-5 border-l-4 border-amber-400/90 pl-5 md:pl-6">
                <p className="text-xl font-semibold leading-snug tracking-tight text-slate-900 md:text-2xl md:leading-[1.35]">
                  100% independent comparison: we do not favour or promote any
                  pharmacy. It is left to you to select which provider you use,
                  and we will not influence your decision in any way.
                </p>
                <p className="text-base font-semibold leading-relaxed text-slate-800 md:text-lg">
                  Make the comparison before speaking to a prescriber
                </p>
                <div className="space-y-2 border-t border-slate-200/80 pt-4 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">
                  <p>GPhC verified UK pharmacies only</p>
                  <p>Check you are buying at a price that suits you</p>
                  <p>
                    <Link
                      href={TRACKER_HREF}
                      className="font-semibold text-slate-800 underline decoration-amber-400/80 underline-offset-2 transition hover:text-slate-950"
                    >
                      {TRACKER_LINK_LABEL}
                    </Link>
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href={HOME_COMPARE_HUB_HREF}
                  className={`${homepageYellowCtaSolid} group min-h-[56px] px-10 py-4 text-lg sm:min-h-[60px] sm:px-12 sm:py-4 sm:text-xl`}
                >
                  Compare here
                  <Zap
                    className="h-5 w-5 shrink-0 fill-slate-900 transition-transform duration-300 group-hover:scale-110 sm:h-6 sm:w-6"
                    aria-hidden
                  />
                </Link>
                <Link
                  href={HOME_COMPARE_HUB_HREF}
                  className="text-base font-bold text-amber-800 underline decoration-amber-300/80 underline-offset-4 hover:text-amber-950 hover:underline sm:text-lg"
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
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${svc.iconBg}`}
                      >
                        <Icon
                          className="h-5 w-5"
                          style={{ color: "inherit" }}
                          aria-hidden
                        />
                      </span>
                      <p className="text-sm font-bold text-slate-900">
                        {svc.label}
                      </p>
                    </div>
                    <p className="text-[13px] leading-relaxed text-slate-500">
                      {svc.desc}
                    </p>
                    {svc.label === "Progress Tracker" ? (
                      <Link href={TRACKER_HREF} className={trackerCardCtaClass}>
                        Track Now
                      </Link>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
