"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { Instrument_Serif } from "next/font/google";
import { Sparkles, Zap } from "lucide-react";
import ComparePricePhotoHeroShell from "@/components/compare/ComparePricePhotoHeroShell";
import {
  ShaderBackground,
  type HeroShaderVariant,
} from "@/components/ui/hero-shader";
import { useTodayUkParts } from "@/lib/hooks/useTodayLabel";

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

function HeroSubtitleLiveDateLine({
  contentMaxClass,
}: {
  contentMaxClass: string;
}) {
  const parts = useTodayUkParts(null);

  return (
    <p
      className={`${contentMaxClass} mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium tracking-tight text-white/90 md:text-base lg:justify-start`}
    >
      <span className="inline-flex items-center gap-2 text-emerald-200/95">
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
        </span>
        Live update
      </span>
      <span className="text-white/55" aria-hidden>
        ·
      </span>
      {parts ? (
        <time
          dateTime={parts.dateTime}
          className="text-white/95 tabular-nums"
        >
          {parts.display}
        </time>
      ) : (
        <span className="text-white/75">Loading date…</span>
      )}
      <span className="text-white/55" aria-hidden>
        ·
      </span>
      <span className="text-white/80">UK</span>
    </p>
  );
}

export default function CompareTreatmentsHero({
  variant,
  eyebrow,
  titleItalic,
  titleBold,
  subtitle,
  snapshotLabel,
  navLinks,
  wideDesktopHero = false,
  showSnapshotPill = true,
  primaryCtaLabel = "Explore Price Matrix",
  /** Optional full-bleed hero photo (e.g. triple-medicine compare); dark overlay improves text contrast. */
  heroPhotoSrc,
  heroPhotoAlt = "",
  showSubtitleLiveDate = false,
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
  showSnapshotPill?: boolean;
  /** Primary anchor CTA label (defaults to “Explore Price Matrix”). */
  primaryCtaLabel?: string;
  heroPhotoSrc?: string;
  heroPhotoAlt?: string;
  showSubtitleLiveDate?: boolean;
}) {
  const shaderMinH = wideDesktopHero
    ? "min-h-[min(82svh,580px)] sm:min-h-[min(80svh,640px)] md:min-h-[min(82svh,700px)] lg:min-h-[min(88svh,780px)] xl:min-h-[min(90svh,860px)]"
    : "min-h-[min(72svh,420px)] sm:min-h-[min(68svh,460px)] lg:min-h-[min(62svh,480px)]";

  const headerClass = wideDesktopHero
    ? "relative z-20 flex shrink-0 items-center justify-end gap-4 px-4 pt-5 pb-3 md:px-10 md:pt-6 lg:px-16 lg:pt-10 lg:pb-5 xl:px-20"
    : "relative z-20 flex shrink-0 items-center justify-end gap-4 px-4 pt-4 pb-2 md:px-10 lg:px-14";

  const mainClass = wideDesktopHero
    ? "relative z-20 flex flex-1 flex-col justify-start px-4 pt-4 pb-12 md:px-10 md:pt-6 md:pb-16 lg:px-16 lg:pt-8 lg:pb-24 xl:px-20"
    : "relative z-20 flex flex-1 flex-col justify-start px-4 pt-2 pb-10 md:px-10 md:pb-14 lg:px-14 lg:pb-16";

  const contentMaxClass = wideDesktopHero
    ? "mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-5xl xl:max-w-6xl lg:text-left"
    : "mx-auto w-full max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left";

  const navClass = wideDesktopHero
    ? "flex max-w-[min(100%,520px)] flex-wrap items-center justify-end gap-1 sm:gap-2 lg:max-w-[min(100%,44rem)]"
    : "flex max-w-[min(100%,520px)] flex-wrap items-center justify-end gap-1 sm:gap-2";

  const heroBody = (
    <>
      <header className={headerClass}>
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
          {showSnapshotPill ? (
            <GlassPill>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles
                  className={`h-3.5 w-3.5 shrink-0 ${sparkClass[variant]}`}
                  aria-hidden
                />
                {eyebrow} · {snapshotLabel}
              </span>
            </GlassPill>
          ) : null}

          <h1 className="mb-4 text-balance text-4xl leading-[1.08] font-bold tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] md:text-5xl lg:text-6xl">
            {titleItalic.trim() ? (
              <>
                <span
                  className={`${instrumentSerif.className} ${accentClass[variant]} italic`}
                >
                  {titleItalic}
                </span>{" "}
              </>
            ) : null}
            <span className="font-bold text-white">{titleBold}</span>
            {subtitle.trim() ? (
              <span className="mt-2 block max-w-3xl text-balance text-xl font-semibold tracking-tight text-white/95 sm:text-2xl md:text-3xl lg:text-[1.65rem] xl:max-w-4xl">
                {subtitle}
              </span>
            ) : null}
          </h1>

          {showSubtitleLiveDate ? (
            <HeroSubtitleLiveDateLine contentMaxClass={contentMaxClass} />
          ) : null}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <a
              href="#compare-med-tabs"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md transition hover:brightness-95"
            >
              {primaryCtaLabel}
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
    </>
  );

  if (heroPhotoSrc) {
    return (
      <ComparePricePhotoHeroShell
        imageSrc={heroPhotoSrc}
        imageAlt={heroPhotoAlt}
        minHeightClass={shaderMinH}
      >
        {heroBody}
      </ComparePricePhotoHeroShell>
    );
  }

  return (
    <section className="border-b border-slate-200/80">
      <ShaderBackground variant={variant} staticOnly minHeight={shaderMinH}>
        {heroBody}
      </ShaderBackground>
    </section>
  );
}
