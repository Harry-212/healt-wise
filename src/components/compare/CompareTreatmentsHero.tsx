"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { ArrowRight, Sparkles } from "lucide-react";
import {
  ShaderBackground,
  type HeroShaderVariant,
} from "@/components/ui/hero-shader";

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

const accentClass: Record<HeroShaderVariant, string> = {
  teal: "text-teal-100/95",
  violet: "text-violet-100/95",
  blue: "text-sky-100/95",
};

const sparkClass: Record<HeroShaderVariant, string> = {
  teal: "text-amber-200",
  violet: "text-violet-200",
  blue: "text-sky-200",
};

export default function CompareTreatmentsHero({
  variant,
  eyebrow,
  titleItalic,
  titleBold,
  subtitle,
  snapshotLabel,
  navLinks,
}: {
  variant: HeroShaderVariant;
  eyebrow: string;
  titleItalic: string;
  titleBold: string;
  subtitle: string;
  snapshotLabel: string;
  navLinks: { href: string; label: string }[];
}) {
  return (
    <section className="border-b border-slate-200/80">
      <ShaderBackground
        variant={variant}
        staticOnly
        minHeight="min-h-[min(72svh,420px)] sm:min-h-[min(68svh,460px)] lg:min-h-[min(62svh,480px)]"
      >
        <header className="relative z-20 flex shrink-0 items-center justify-between gap-4 px-4 pt-4 pb-2 md:px-10 lg:px-14">
          <Link
            href="/"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Health Wise
          </Link>
          <nav className="flex max-w-[min(100%,520px)] flex-wrap items-center justify-end gap-1 sm:gap-2">
            {navLinks.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="rounded-full px-3 py-2 text-xs font-light text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </header>

        <main className="relative z-20 flex flex-1 flex-col justify-start px-4 pt-2 pb-10 md:px-10 md:pb-14 lg:px-14 lg:pb-16">
          <div className="mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <GlassPill>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles
                  className={`h-3.5 w-3.5 shrink-0 ${sparkClass[variant]}`}
                  aria-hidden
                />
                {eyebrow} · {snapshotLabel}
              </span>
            </GlassPill>

            <h1 className="mb-4 text-balance text-4xl leading-[1.08] font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
              <span
                className={`${instrumentSerif.className} ${accentClass[variant]} italic`}
              >
                {titleItalic}
              </span>{" "}
              <span className="font-bold text-white">{titleBold}</span>
              <span className="mt-2 block text-2xl font-semibold tracking-tight text-white/90 md:text-3xl lg:text-[2rem]">
                {subtitle}
              </span>
            </h1>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <a
                href="#compare-med-tabs"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition hover:brightness-95"
              >
                Explore price tables
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <Link
                href="/prices/cheapest-options-uk"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Cheapest options hub
                <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
              </Link>
            </div>
          </div>
        </main>
      </ShaderBackground>
    </section>
  );
}
