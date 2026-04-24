"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { Zap, Sparkles } from "lucide-react";
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
  wideDesktopHero = false,
}: {
  variant: HeroShaderVariant;
  eyebrow: string;
  titleItalic: string;
  titleBold: string;
  subtitle: string;
  snapshotLabel: string;
  navLinks: { href: string; label: string }[];
  /** Wider text column + extra vertical rhythm on large screens (triple compare hub). */
  wideDesktopHero?: boolean;
}) {
  const shaderMinH = wideDesktopHero
    ? "min-h-[min(72svh,440px)] sm:min-h-[min(70svh,480px)] lg:min-h-[min(72svh,600px)]"
    : "min-h-[min(72svh,420px)] sm:min-h-[min(68svh,460px)] lg:min-h-[min(62svh,480px)]";

  const headerClass = wideDesktopHero
    ? "relative z-20 flex shrink-0 items-center justify-between gap-4 px-4 pt-5 pb-3 md:px-10 md:pt-6 lg:px-16 lg:pt-10 lg:pb-5 xl:px-20"
    : "relative z-20 flex shrink-0 items-center justify-between gap-4 px-4 pt-4 pb-2 md:px-10 lg:px-14";

  const mainClass = wideDesktopHero
    ? "relative z-20 flex flex-1 flex-col justify-start px-4 pt-4 pb-12 md:px-10 md:pt-6 md:pb-16 lg:px-16 lg:pt-8 lg:pb-24 xl:px-20"
    : "relative z-20 flex flex-1 flex-col justify-start px-4 pt-2 pb-10 md:px-10 md:pb-14 lg:px-14 lg:pb-16";

  const contentMaxClass = wideDesktopHero
    ? "mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-5xl xl:max-w-6xl lg:text-left"
    : "mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left";

  const navClass = wideDesktopHero
    ? "flex max-w-[min(100%,520px)] flex-wrap items-center justify-end gap-1 sm:gap-2 lg:max-w-[min(100%,44rem)]"
    : "flex max-w-[min(100%,520px)] flex-wrap items-center justify-end gap-1 sm:gap-2";

  return (
    <section className="border-b border-slate-200/80">
      <ShaderBackground variant={variant} staticOnly minHeight={shaderMinH}>
        <header className={headerClass}>
          <Link
            href="/"
            className="text-sm font-medium text-white/85 transition hover:text-white"
          >
            Health Wise
          </Link>
          <nav className={navClass}>
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

        <main className={mainClass}>
          <div className={contentMaxClass}>
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
                Explore Price Tables
                <Zap className="h-4 w-4 fill-slate-900" aria-hidden />
              </a>
              <Link
                href="/prices/cheapest-options-uk"
                className="inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Cheapest Options Hub
                <Zap className="h-4 w-4 fill-white opacity-90" aria-hidden />
              </Link>
            </div>
          </div>
        </main>
      </ShaderBackground>
    </section>
  );
}
