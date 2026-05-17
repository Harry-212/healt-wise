"use client";

import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { formatTodayUK } from "@/lib/hooks/useTodayLabel";

export type CompareHeroAccent = "violet" | "emerald" | "sky";

/** Header nav pills — bordered, clearly clickable; compact on mobile. */
export const COMPARE_HERO_NAV_LINK_CLASS =
  "inline-flex items-center justify-center rounded-full border border-white/45 bg-white/15 px-2.5 py-1.5 text-[10px] font-semibold leading-tight text-white shadow-sm ring-1 ring-inset ring-white/20 transition hover:border-white/75 hover:bg-white/25 hover:shadow-md hover:ring-white/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/80 whitespace-nowrap sm:px-3.5 sm:py-2 sm:text-xs md:px-4 md:py-2.5 md:text-sm";

/** 3+ links: even 2-column grid on mobile, flex row from `sm` up. */
export const COMPARE_HERO_NAV_GRID_CLASS =
  "grid w-full grid-cols-2 gap-1.5 sm:flex sm:w-auto sm:max-w-[min(100%,44rem)] sm:flex-wrap sm:items-center sm:justify-end sm:gap-2 [&>a:last-child:nth-child(odd)]:col-span-2 [&>a:last-child:nth-child(odd)]:w-[calc(50%-0.1875rem)] [&>a:last-child:nth-child(odd)]:justify-self-center";

/** 1–2 links beside brand: stay in one row on mobile. */
export const COMPARE_HERO_NAV_INLINE_CLASS =
  "flex shrink-0 flex-nowrap items-center justify-end gap-1.5 sm:gap-2";

const ELIGIBILITY_ACCENT: Record<CompareHeroAccent, string> = {
  violet:
    "bg-violet-600 hover:bg-violet-500 focus-visible:outline-violet-400",
  emerald:
    "bg-emerald-600 hover:bg-emerald-500 focus-visible:outline-emerald-400",
  sky: "bg-sky-600 hover:bg-sky-500 focus-visible:outline-sky-400",
};

const FOOTER_LINK_ACCENT: Record<CompareHeroAccent, string> = {
  violet: "text-violet-200/95",
  emerald: "text-emerald-200/95",
  sky: "text-sky-200/95",
};

export function compareHeroEligibilityClass(accent: CompareHeroAccent) {
  return `inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold text-white shadow-md transition focus-visible:outline-2 focus-visible:outline-offset-2 ${ELIGIBILITY_ACCENT[accent]}`;
}

export function compareHeroFooterLinkClass(accent: CompareHeroAccent) {
  return `inline-flex items-center gap-2.5 text-lg font-semibold underline-offset-4 transition hover:text-white hover:underline ${FOOTER_LINK_ACCENT[accent]}`;
}

export function GlassPill({ children }: { children: ReactNode }) {
  return (
    <div className="relative mb-4 inline-flex items-center rounded-full bg-white/15 px-3 py-1 ring-1 ring-white/25">
      <div className="pointer-events-none absolute top-0 right-1 left-1 h-px rounded-full bg-linear-to-r from-transparent via-white/25 to-transparent" />
      <span className="relative z-10 text-xs font-light text-white/90">
        {children}
      </span>
    </div>
  );
}

function todayUkParts() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return {
    display: formatTodayUK(d),
    dateTime: `${y}-${m}-${day}`,
  };
}

export function CompareHeroLivePill({
  sparkleClassName,
}: {
  sparkleClassName: string;
}) {
  const { display, dateTime } = todayUkParts();

  return (
    <GlassPill>
      <span className="inline-flex items-center gap-2">
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/75 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
        </span>
        <Sparkles
          className={`h-3.5 w-3.5 shrink-0 ${sparkleClassName}`}
          aria-hidden
        />
        <span>
          <span className="font-semibold text-white">Live</span>
          {" · "}
          <time dateTime={dateTime} className="text-white/90">
            {display}
          </time>
        </span>
      </span>
    </GlassPill>
  );
}
