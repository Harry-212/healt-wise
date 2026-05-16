"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import CompareHereLink from "@/components/ui/CompareHereLink";
import { Instrument_Serif } from "next/font/google";
import { ArrowRight, BadgeCheck, Scale, Sparkles } from "lucide-react";
import ComparePricePhotoHeroShell from "@/components/compare/ComparePricePhotoHeroShell";
import {
  COMPARE_WEGOVY_PRICE_HERO_IMAGE_ALT,
  COMPARE_WEGOVY_PRICE_HERO_IMAGE_SRC,
} from "@/lib/site-assets";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function GlassPill({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/25">
      <div className="pointer-events-none absolute top-0 right-1 left-1 h-px rounded-full bg-linear-to-r from-transparent via-white/25 to-transparent" />
      <span className="relative z-10 text-xs font-light text-white/90">
        {children}
      </span>
    </div>
  );
}

export default function WegovyCompareShaderHero({
  lastUpdated,
}: {
  lastUpdated: string;
}) {
  return (
    <ComparePricePhotoHeroShell
      imageSrc={COMPARE_WEGOVY_PRICE_HERO_IMAGE_SRC}
      imageAlt={COMPARE_WEGOVY_PRICE_HERO_IMAGE_ALT}
    >
        <header className="relative z-20 flex shrink-0 items-center justify-between gap-4 px-4 pt-6 pb-2 md:px-10 lg:px-14">
          <Link
            href="/"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Health Wise
          </Link>
          <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
            <Link
              href="/what-is-wegovy"
              className="rounded-full px-3 py-2 text-xs font-light text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              What is Wegovy
            </Link>
            <a
              href="#wegovy-compare-table"
              className="rounded-full px-3 py-2 text-xs font-light text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              Table
            </a>
          </nav>
        </header>

        <main className="relative z-20 flex flex-1 flex-col justify-end px-4 pb-12 pt-6 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
          <div className="mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <GlassPill>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles
                  className="h-3.5 w-3.5 shrink-0 text-amber-200"
                  aria-hidden
                />
                UK pharmacy comparison · {lastUpdated}
              </span>
            </GlassPill>

            <h1 className="mb-4 text-balance text-4xl leading-[1.08] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span
                className={`${instrumentSerif.className} text-teal-100/95 italic`}
              >
                Compare
              </span>{" "}
              <span className="font-bold text-white">Wegovy prices</span>
              <br />
              <span className="text-white">UK (2026)</span>
              <span className="mt-2 block text-2xl font-semibold tracking-tight text-white/90 md:text-3xl lg:text-[2rem]">
                Find the cheapest &amp; safest providers
              </span>
            </h1>

            <p className="mx-auto mb-6 max-w-2xl text-pretty text-sm font-light leading-relaxed text-white/75 lg:mx-0 md:text-base">
              Compare real Wegovy prices across UK pharmacies. See starting pen
              costs, estimated monthly spend, and every dose column in one
              interactive table — with regulated context and independent
              methodology.
            </p>

            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <CompareHereLink href="#wegovy-compare-table" size="hero" />
              <Link
                href="/what-is-wegovy#eligibility-uk"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-transparent px-8 py-3 text-xs font-normal text-white transition hover:border-white/55 hover:bg-white/10"
              >
                Check eligibility
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-light text-white/70 lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <BadgeCheck
                  className="h-5 w-5 shrink-0 text-emerald-300"
                  aria-hidden
                />
                UK pharmacy context
              </span>
              <span className="inline-flex items-center gap-2">
                <Sparkles
                  className="h-5 w-5 shrink-0 text-amber-200/90"
                  aria-hidden
                />
                Updated monthly (snapshot)
              </span>
              <span className="inline-flex items-center gap-2">
                <Scale className="h-5 w-5 shrink-0 text-white/50" aria-hidden />
                Independent comparison
              </span>
            </div>

            <p className="mx-auto mt-8 max-w-xl text-center text-[11px] leading-relaxed text-white/45 lg:mx-0 lg:text-left">
              Information only — not medical advice. Wegovy is
              prescription-only. Prices are illustrative; confirm live rates
              before you pay.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                href="/what-is-wegovy"
                className="inline-flex items-center gap-2 text-xs font-medium text-teal-200/90 underline-offset-4 transition hover:text-white hover:underline"
              >
                How Wegovy works
                <ArrowRight className="h-3.5 w-3.5" aria-hidden />
              </Link>
            </div>
          </div>
        </main>
    </ComparePricePhotoHeroShell>
  );
}
