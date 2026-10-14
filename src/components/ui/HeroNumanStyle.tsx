import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import {
  HOMEPAGE_HERO_LIFESTYLE_ALT,
  HOMEPAGE_HERO_LIFESTYLE_SRC,
} from "@/lib/site-assets";

export default function HeroNumanStyle() {
  return (
    <section
      className="relative w-full max-w-full overflow-x-hidden overflow-y-visible bg-[#f4f7f5] pt-4 pb-2 md:pt-5 md:pb-3 lg:pt-6 lg:pb-4"
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
          <div className="w-full min-w-0">
            <div className="relative w-full max-w-[min(100%,46rem)] rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-slate-200/90 backdrop-blur-md sm:p-5 lg:max-w-[min(100%,52rem)] xl:max-w-4xl">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold tracking-wider text-emerald-800 uppercase ring-1 ring-emerald-200/70 sm:text-xs">
                INDEPENDENT UK PRICE INFORMATION
              </div>

              {/* H1 Title */}
              <h1 className="mt-2.5 text-2xl font-black leading-[1.12] tracking-tight text-slate-950 sm:text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.45rem] lg:leading-[1.12]">
                Weight Loss Injections Price Comparison UK
              </h1>

              {/* Description & disclaimer */}
              <p
                id="hero-answer"
                className="mt-2.5 max-w-2xl text-sm font-medium leading-relaxed text-slate-700 sm:text-base"
              >
                A Wegovy starter pen costs from £83, and a Mounjaro starter
                pen from £99. We check weight loss injection prices at 60+
                GPhC registered UK pharmacies, so you can see the real price
                of every dose before you pay.
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
                  <span>Prices checked 20 September 2026</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>GPhC registered pharmacies only</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>No paid rankings</span>
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-emerald-600 shrink-0" strokeWidth={2.5} />
                  <span>Price for every dose</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
