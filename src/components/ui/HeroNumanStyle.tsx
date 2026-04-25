import Link from "next/link";
import Image from "next/image";
import { Zap, Calculator, Activity, Scale } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";

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
  },
  {
    href: "/tools/weight-loss-tracker",
    label: "Progress Tracker",
    desc: "Log weight & milestones privately",
    Icon: Activity,
    color: "teal",
    iconBg: "from-teal-50 to-teal-100/60",
    iconBorder: "border-teal-100",
    iconDot: "bg-teal-500/20",
    penBorder: "border-teal-100",
    offset: "lg:translate-y-2",
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
  },
] as const;

export default function HeroNumanStyle() {
  return (
    <section
      className="relative w-full max-w-full overflow-x-hidden overflow-y-visible bg-[#f4f7f5] pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20"
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
          src="/comparing_weight_loss.jpeg"
          alt="Couple discussing weight loss treatments"
          fill
          priority
          quality={70}
          sizes="100vw"
          fetchPriority="high"
          className="object-cover object-[center_30%] sm:object-[center_top] md:object-[center_15%]"
        />
      </div>

      <div
        className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8"
        style={{ position: "relative", zIndex: 10 }}
      >
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="w-full min-w-0 lg:w-[58%] lg:max-w-none lg:pb-8">
            <div className="relative w-full max-w-[min(100%,44rem)] rounded-2xl bg-linear-to-br from-white/92 via-white/72 to-white/25 px-4 py-5 shadow-sm ring-1 ring-white/60 backdrop-blur-[2px] sm:px-6 sm:py-6 lg:max-w-[min(100%,52rem)] xl:max-w-[56rem]">
              <h1 className="text-[1.65rem] font-black leading-[1.08] tracking-tight text-slate-950 sm:text-3xl md:text-4xl md:leading-[1.1] lg:text-[3.1rem] lg:leading-[1.06] xl:text-[3.4rem]">
                Compare Weight Loss Treatments
                <br />
                Prices UK
                <br />
                Safely
              </h1>
              <p className="mt-4 max-w-2xl text-base font-medium text-slate-800 md:text-lg">
                The Weight Loss Treatment UK: Independent UK Comparison for
                Prices, Safety, and Support.
              </p>
            </div>

            <div className="mt-6 flex w-full sm:mt-7">
              <Link
                href={HOME_COMPARE_HUB_HREF}
                className="group relative inline-flex w-full min-h-[80px] max-w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-brand-cta px-8 py-6 text-2xl font-extrabold leading-tight tracking-tight text-slate-900 shadow-2xl ring-[3px] ring-amber-400/50 transition-all duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-amber-500/35 hover:ring-amber-400/80 active:scale-[0.98] sm:min-h-[92px] sm:w-auto sm:px-16 sm:py-6 sm:text-3xl md:min-h-[100px] md:px-20 md:py-7 md:text-[2.125rem]"
              >
                <span>Compare The Price</span>
                <Zap
                  className="h-7 w-7 shrink-0 fill-slate-900 transition-transform duration-300 group-hover:scale-110 sm:h-8 sm:w-8 md:h-9 md:w-9"
                  aria-hidden
                />
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-[42%]">
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {TOOL_CARDS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className={`group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white/95 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl ${tool.offset}`}
                >
                  <div className="z-10 flex flex-col gap-0.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 sm:h-10 sm:w-10">
                      <tool.Icon className="h-4 w-4 text-slate-700 sm:h-5 sm:w-5" aria-hidden />
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
                      <div className={`flex h-5 w-4/5 items-center justify-start rounded bg-gradient-to-br ${tool.iconBg} border ${tool.iconBorder} px-1.5 shadow-sm sm:h-7 sm:px-2`}>
                        <div className={`h-1 w-4 rounded-full ${tool.iconDot} sm:h-1.5 sm:w-6`} />
                      </div>
                    </div>
                  </div>
                  <div className="mt-1.5 flex items-center text-slate-900">
                    <Zap className="h-3.5 w-3.5 fill-slate-900 transition-transform duration-300 group-hover:scale-110 sm:h-4 sm:w-4" aria-hidden />
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
