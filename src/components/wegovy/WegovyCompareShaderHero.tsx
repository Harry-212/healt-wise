"use client";

import Link from "next/link";
import CompareHereLink from "@/components/ui/CompareHereLink";
import { Instrument_Serif } from "next/font/google";
import ComparePricePhotoHeroShell from "@/components/compare/ComparePricePhotoHeroShell";
import {
  COMPARE_HERO_NAV_INLINE_CLASS,
  COMPARE_HERO_NAV_LINK_CLASS,
  CompareHeroPricesCheckedPill,
  compareHeroEligibilityClass,
} from "@/components/compare/compare-hero-ui";
import {
  COMPARE_WEGOVY_PRICE_HERO_IMAGE_ALT,
  COMPARE_WEGOVY_PRICE_HERO_IMAGE_SRC,
} from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { formatGbp } from "@/lib/data/wegovy-price-insights";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function WegovyCompareShaderHero({
  lastUpdated,
  cheapestPrice,
  cheapestProvider,
  providerCount,
}: {
  lastUpdated?: string;
  cheapestPrice?: number;
  cheapestProvider?: string;
  providerCount?: number;
}) {
  const displayPrice = cheapestPrice != null ? formatGbp(cheapestPrice) : "£72.89";
  const displayProvider = cheapestProvider || "our cheapest listed pharmacy";
  const displayCount = providerCount != null ? providerCount : 62;
  const displayDate = lastUpdated || "20 September 2026";

  return (
    <ComparePricePhotoHeroShell
      imageSrc={COMPARE_WEGOVY_PRICE_HERO_IMAGE_SRC}
      imageAlt={COMPARE_WEGOVY_PRICE_HERO_IMAGE_ALT}
    >
      <header className="relative z-20 flex shrink-0 items-center justify-between gap-4 px-4 pt-4 pb-1 md:px-10 lg:px-14">
        <Link
          href="/"
          className="text-sm font-medium text-white/85 transition hover:text-white"
        >
          {SITE_BRAND_NAME}
        </Link>
        <nav className={COMPARE_HERO_NAV_INLINE_CLASS}>
          <Link href="/what-is-wegovy" className={COMPARE_HERO_NAV_LINK_CLASS}>
            What is Wegovy
          </Link>
          <a
            href="#wegovy-compare-table"
            className={COMPARE_HERO_NAV_LINK_CLASS}
          >
            Matrix
          </a>
        </nav>
      </header>

      <main className="relative z-20 flex flex-1 flex-col justify-end px-4 pb-6 pt-4 md:px-10 md:pb-8 lg:px-14 lg:pb-10">
        <div className="mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
          <CompareHeroPricesCheckedPill
            sparkleClassName="text-teal-200"
            dateLabel={displayDate}
          />

          <h1 className="mb-3 text-balance text-4xl leading-[1.08] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span
              className={`${instrumentSerif.className} text-teal-100/95 italic`}
            >
              Wegovy
            </span>{" "}
            <span className="font-bold text-white">Price Comparison UK</span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-pretty text-sm font-light leading-relaxed text-white/75 lg:mx-0 md:text-base">
            The cheapest Wegovy in the UK is {displayPrice} for a 0.25 mg
            starter pen at {displayProvider}. We compare Wegovy prices at{" "}
            {displayCount} GPhC registered UK pharmacies, so you can find the
            best price for Wegovy in the UK at every dose in under a minute.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
            <CompareHereLink
              href="#wegovy-compare-table"
              size="hero"
              label="Compare Wegovy prices"
            />
            <Link
              href="#wegovy-price-by-dose"
              className={compareHeroEligibilityClass("emerald")}
            >
              See the price for my dose
            </Link>
          </div>

          <div className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/60 lg:mx-0 lg:justify-start sm:text-sm">
            <span>Prices checked {displayDate}</span>
            <span aria-hidden="true">·</span>
            <span>{displayCount} GPhC registered pharmacies</span>
            <span aria-hidden="true">·</span>
            <span>No paid rankings</span>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-center text-[11px] leading-relaxed text-white/45 lg:mx-0 lg:text-left">
            Information only — not medical advice. Wegovy is prescription-only.
            Provider prices were checked on the dates shown in the table.
            Prices and availability can change; confirm the final total and any
            additional charges with the provider.
          </p>
        </div>
      </main>
    </ComparePricePhotoHeroShell>
  );
}
