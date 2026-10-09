import Link from "next/link";
import Image from "next/image";
import { Zap, Calculator, Activity, Scale, Check } from "lucide-react";
import {
  HOMEPAGE_HERO_LIFESTYLE_ALT,
  HOMEPAGE_HERO_LIFESTYLE_SRC,
} from "@/lib/site-assets";

const TOOL_CARDS = [
  {
    href: "/tools/bmi-calculator",
    label: "BMI Calculator",
    desc: "Check your BMI & calorie needs",
    Icon: Scale,
    color: "emerald",
    iconBg: "from-emerald-50 to-emerald-100/60",
    iconBorder: "border-emerald-100",
    iconDot: "bg-emerald-500/20",
    penBorder: "border-emerald-100",
    offset: "lg:-translate-y-2",
    prefetch: true,
  },
  {
    href: "/tools/weight-loss-tracker",
    label: "Progress Tracker",
    desc: "Log weight & milestones privately",
    Icon: Activity,
    color: "sky",
    iconBg: "from-sky-50 to-sky-100/60",
    iconBorder: "border-sky-100",
    iconDot: "bg-sky-500/20",
    penBorder: "border-sky-100",
    offset: "lg:translate-y-2",
    /** Pulls in recharts (~150KB) — don't prefetch from the homepage hero. */
    prefetch: false,
  },
  {
    href: "/tools/mounjaro-click-calculator",
    label: "Click Calculator",
    desc: "KwikPen dose & click guide",
    Icon: Calculator,
    color: "violet",
    iconBg: "from-violet-50 to-violet-100/60",
    iconBorder: "border-violet-100",
    iconDot: "bg-violet-500/20",
    penBorder: "border-violet-100",
    offset: "lg:-translate-y-2",
    prefetch: true,
  },
] as const;

export default function HeroNumanStyle() {
  return (
    <section
      className="relative w-full max-w-full overflow-x-hidden overflow-y-visible bg-[#f4f7f5] pt-5 pb-3 md:pt-6 md:pb-4 lg:pt-8 lg:pb-5"
      style={{ position: "relative", overflowX: "hidden" }}
    >
      <div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Image
          src={HOMEPAGE_HERO_LIFESTYLE_SRC}
          alt={HOMEPAGE_HERO_LIFESTYLE_ALT}
          title={HOMEPAGE_HERO_LIFESTYLE_ALT}
          fill
          priority
          fetchPriority="high"
          className="origin-top scale-105 object-cover object-[center_20%] sm:object-[center_15%]"
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div className="flex flex-col justify-between gap-5 md:gap-6 lg:flex-row lg:items-center">
          <div className="w-full min-w-0 lg:w-[60%] lg:max-w-none">
            <div className="relative w-full max-w-[min(100%,46rem)] rounded-2xl bg-white/95 p-4.5 shadow-lg ring-1 ring-slate-200/90 backdrop-blur-md sm:p-6 lg:max-w-[min(100%,52rem)] xl:max-w-4xl">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold tracking-wider text-emerald-800 uppercase ring-1 ring-emerald-200/70 sm:text-xs">
                INDEPENDENT UK PRICE INFORMATION
              </div>

              {/* H1 Title */}
              <h1 className="mt-2.5 text-2xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.45rem] lg:leading-[1.12]">
                Compare Mounjaro and Wegovy provider prices in the UK
              </h1>

              {/* Description & disclaimer */}
              <p className="mt-2.5 max-w-2xl text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                Compare checked listed prices, additional fees, pharmacy registration and provider support before speaking to a prescriber.
              </p>
              <p className="mt-1 text-xs text-slate-500 sm:text-[13px]">
                Healthwise360 is an independent comparison and information service. We do not prescribe or dispense medicines.
              </p>

              {/* Action buttons */}
              <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:items-center">
                <Link
                  href="/mounjaro-price-comparison"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-sm ring-1 ring-amber-300 transition duration-150 hover:bg-amber-300 hover:scale-[1.01] active:scale-[0.99] sm:text-base text-center"
                >
                  Compare Mounjaro prices
                </Link>
                <Link
                  href="/wegovy-price-comparison"
                  className="inline-flex items-center justify-center rounded-xl bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-sm ring-1 ring-amber-300 transition duration-150 hover:bg-amber-300 hover:scale-[1.01] active:scale-[0.99] sm:text-base text-center"
                >
                  Compare Wegovy prices
                </Link>
              </div>

              {/* Secondary link */}
              <div className="mt-3">
                <Link
                  href="/compare/wegovy-vs-mounjaro"
                  className="group inline-flex items-center text-sm font-semibold text-emerald-800 transition hover:text-emerald-950 sm:text-base"
                >
                  <span className="underline underline-offset-4 decoration-emerald-500/50 group-hover:decoration-emerald-700">
                    Compare Mounjaro and Wegovy side by side
                  </span>
                  <span
                    className="ml-1.5 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>

              {/* Trust checklist */}
              <div className="mt-4 border-t border-slate-200/80 pt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs font-semibold text-slate-700 sm:text-[13px]">
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>Prices checked on the dates shown</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>Independent comparison</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>Pharmacy information</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[40%]">
            <h2 className="sr-only">Free tools and calculators</h2>
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {TOOL_CARDS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  prefetch={tool.prefetch}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white/95 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${tool.offset}`}
                >
                  <div className="z-10 flex flex-col gap-0.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 sm:h-10 sm:w-10">
                      <tool.Icon
                        className="h-4 w-4 text-slate-700 sm:h-5 sm:w-5"
                        aria-hidden
                      />
                    </span>
                    <h3 className="mt-2 text-sm font-bold leading-tight text-slate-900 sm:text-base md:text-lg">
                      {tool.label}
                    </h3>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-600 sm:text-xs md:text-sm">
                      {tool.desc}
                    </p>
                  </div>
                  <div className="relative mt-2 h-10 w-full transition-transform duration-500 group-hover:scale-105 sm:h-12">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className={`flex h-5 w-4/5 items-center justify-start rounded bg-linear-to-br ${tool.iconBg} border ${tool.iconBorder} px-1.5 shadow-sm sm:h-7 sm:px-2`}
                      >
                        <div
                          className={`h-1 w-4 rounded-full ${tool.iconDot} sm:h-1.5 sm:w-6`}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-1.5 flex items-center text-slate-900">
                    <Zap
                      className="h-3.5 w-3.5 fill-slate-900 transition-transform duration-300 group-hover:scale-110 sm:h-4 sm:w-4"
                      aria-hidden
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
