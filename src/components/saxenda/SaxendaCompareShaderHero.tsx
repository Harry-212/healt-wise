"use client";

import Link from "next/link";
import CompareHereLink from "@/components/ui/CompareHereLink";
import { Instrument_Serif } from "next/font/google";
import { ArrowRight } from "lucide-react";
import ComparePricePhotoHeroShell from "@/components/compare/ComparePricePhotoHeroShell";
import {
  COMPARE_HERO_NAV_INLINE_CLASS,
  COMPARE_HERO_NAV_LINK_CLASS,
  CompareHeroLivePill,
  compareHeroEligibilityClass,
  compareHeroFooterLinkClass,
} from "@/components/compare/compare-hero-ui";
import {
  COMPARE_SAXENDA_PRICE_HERO_IMAGE_ALT,
  COMPARE_SAXENDA_PRICE_HERO_IMAGE_SRC,
} from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function SaxendaCompareShaderHero() {
  return (
    <ComparePricePhotoHeroShell
      imageSrc={COMPARE_SAXENDA_PRICE_HERO_IMAGE_SRC}
      imageAlt={COMPARE_SAXENDA_PRICE_HERO_IMAGE_ALT}
    >
      <header className="relative z-20 flex shrink-0 items-center justify-between gap-4 px-4 pt-6 pb-2 md:px-10 lg:px-14">
        <Link
          href="/"
          className="text-sm font-medium text-white/85 transition hover:text-white"
        >
          {SITE_BRAND_NAME}
        </Link>
        <nav className={COMPARE_HERO_NAV_INLINE_CLASS}>
          <Link href="/what-is-saxenda" className={COMPARE_HERO_NAV_LINK_CLASS}>
            What is Saxenda
          </Link>
          <a
            href="#saxenda-compare-table"
            className={COMPARE_HERO_NAV_LINK_CLASS}
          >
            Matrix
          </a>
        </nav>
      </header>

      <main className="relative z-20 flex flex-1 flex-col justify-end px-4 pb-12 pt-6 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
        <div className="mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
          <CompareHeroLivePill sparkleClassName="text-sky-200" />

          <h1 className="mb-4 text-balance text-4xl leading-[1.08] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            <span
              className={`${instrumentSerif.className} text-sky-100/95 italic`}
            >
              Compare
            </span>{" "}
            <span className="font-bold text-white">Saxenda prices</span>
            <br />
            <span className="text-white">UK (2026)</span>
            <span className="mt-2 block text-2xl font-semibold tracking-tight text-white/90 md:text-3xl lg:text-[2rem]">
              Find the cheapest &amp; safest providers
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl text-pretty text-sm font-light leading-relaxed text-white/75 lg:mx-0 md:text-base">
            Compare illustrative Saxenda (liraglutide) pack prices across UK
            pharmacies: 1, 3, and 5 pens, £/mg, repeat pricing, delivery, and
            GPhC context — in one interactive table.
          </p>

          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
            <CompareHereLink href="#saxenda-compare-table" size="hero" />
            <Link
              href="/what-is-saxenda#eligibility-uk"
              className={compareHeroEligibilityClass("sky")}
            >
              Check eligibility
            </Link>
          </div>

          <p className="mx-auto mt-8 max-w-xl text-center text-[11px] leading-relaxed text-white/45 lg:mx-0 lg:text-left">
            Information only — not medical advice. Saxenda is prescription-only.
            Prices are illustrative; confirm live rates before you pay.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              href="/what-is-saxenda"
              className={compareHeroFooterLinkClass("sky")}
            >
              How Saxenda works
              <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </main>
    </ComparePricePhotoHeroShell>
  );
}
