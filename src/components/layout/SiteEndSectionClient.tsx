"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import BrandHoverText from "@/components/ui/BrandHoverText";
import type { RecommendedItem } from "@/lib/recommended-reading";
import { applyHomeKeepExploringOverrides } from "@/lib/home-keep-exploring-overrides";
import { HOMEPAGE_PRICE_HUB_LABELS } from "@/lib/text/homepage-brand-labels";
import {
  sanitizeBrandDisplayNames,
  textContainsBrandName,
} from "@/lib/text/sanitize-brand-display-names";
import { shouldServeImageDirect } from "@/lib/image-display";

function hashToSeed(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h) || 1;
}

function seededShuffle<T>(items: T[], seed: number): T[] {
  const a = [...items];
  let s = seed % 2147483647;
  const rnd = () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalizePath(p: string): string {
  if (!p) return "/";
  const x = p.split("?")[0]?.split("#")[0] ?? "/";
  return x.length > 1 && x.endsWith("/") ? x.slice(0, -1) : x || "/";
}

type Props = {
  pool: RecommendedItem[];
  dayKey: string;
};

const CARD_COUNT = 6;

const KEEP_EXPLORING_INTRO =
  "Most people benefit from reading independent guides alongside a clinician led plan. Prices and eligibility change often: confirm details on a regulated pharmacy site before you pay.";

const HOME_HUB_LINKS = [
  {
    href: HOMEPAGE_PRICE_HUB_LABELS.mounjaro.href,
    publicLabel: HOMEPAGE_PRICE_HUB_LABELS.mounjaro.publicLabel,
    brandLabel: HOMEPAGE_PRICE_HUB_LABELS.mounjaro.brandLabel,
  },
  {
    href: HOMEPAGE_PRICE_HUB_LABELS.wegovy.href,
    publicLabel: HOMEPAGE_PRICE_HUB_LABELS.wegovy.publicLabel,
    brandLabel: HOMEPAGE_PRICE_HUB_LABELS.wegovy.brandLabel,
  },
  { href: "/blog", publicLabel: "News & guides", brandLabel: null },
  {
    href: "/tools/bmi-calculator",
    publicLabel: "BMI calculator",
    brandLabel: null,
  },
  { href: "/about", publicLabel: "About us", brandLabel: null },
  { href: "/methodology", publicLabel: "Methodology", brandLabel: null },
] as const;

export default function SiteEndSectionClient({ pool, dayKey }: Props) {
  const pathname = usePathname();
  const carouselRef = useRef<HTMLDivElement>(null);
  const isHome = normalizePath(pathname ?? "") === "/";

  const picks = useMemo(() => {
    const path = normalizePath(pathname ?? "");
    const filtered =
      path && path !== "/"
        ? pool.filter((item) => normalizePath(item.href) !== path)
        : [...pool];
    const seed = hashToSeed(`${dayKey}|${path || "home"}|recommendations`);
    const shuffled = seededShuffle(filtered, seed);
    return shuffled.slice(0, CARD_COUNT);
  }, [pool, dayKey, pathname]);

  const scrollCarousel = (dir: -1 | 1) => {
    carouselRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section
      id="keep-exploring"
      className="border-t border-slate-200/90 bg-linear-to-b from-white to-slate-50/90"
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-800 ring-1 ring-emerald-200/80">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Recommended for you
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Keep exploring
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">
              {KEEP_EXPLORING_INTRO}
            </p>
            {isHome ? (
              <nav
                aria-label="Popular site pages"
                className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-sm"
              >
                {HOME_HUB_LINKS.map((link, i) => (
                  <span
                    key={link.href}
                    className="inline-flex items-center gap-3"
                  >
                    {i > 0 ? (
                      <span className="text-slate-300" aria-hidden>
                        ·
                      </span>
                    ) : null}
                    <Link
                      href={link.href}
                      className="font-semibold text-emerald-800 underline decoration-emerald-300/70 underline-offset-2 transition hover:text-emerald-950"
                    >
                      {link.brandLabel ? (
                        <BrandHoverText
                          publicLabel={link.publicLabel}
                          brandLabel={link.brandLabel}
                        />
                      ) : (
                        link.publicLabel
                      )}
                    </Link>
                  </span>
                ))}
              </nav>
            ) : null}
          </div>
          <div className="flex gap-2 sm:shrink-0">
            <button
              type="button"
              aria-label="Scroll recommendations left"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-800"
              onClick={() => scrollCarousel(-1)}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll recommendations right"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-800"
              onClick={() => scrollCarousel(1)}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          ref={carouselRef}
          data-carousel
          className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [scrollbar-width:thin] sm:mx-0 sm:px-0"
        >
          {picks.map((item, idx) => {
            const path = normalizePath(pathname ?? "");
            const onHome = path === "/";
            const shouldSanitize =
              onHome || path === "/prices/cheapest-options-uk";
            const display = onHome
              ? applyHomeKeepExploringOverrides(item)
              : item;
            const rawTitle = display.title;
            const title = sanitizeBrandDisplayNames(rawTitle, shouldSanitize);
            const description = sanitizeBrandDisplayNames(
              display.description,
              shouldSanitize,
            );
            const imageUrl = display.imageUrl;
            const showBrandTooltip =
              shouldSanitize && textContainsBrandName(rawTitle);
            return (
              <Link
                key={`${display.href}-${idx}`}
                href={display.href}
                className="group relative flex w-[min(280px,85vw)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-900/5 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={imageUrl}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="280px"
                    unoptimized={
                      shouldServeImageDirect(imageUrl) ||
                      imageUrl.includes("unsplash.com") ||
                      imageUrl.includes("ibb.co")
                    }
                  />
                  <span
                    className={`absolute left-3 top-3 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${
                      display.kind === "guide"
                        ? "bg-emerald-600 text-white"
                        : "bg-violet-600 text-white"
                    }`}
                  >
                    {display.kind === "guide" ? "Guide" : "Article"}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-slate-900 group-hover:text-emerald-800">
                    {showBrandTooltip ? (
                      <BrandHoverText
                        publicLabel={title}
                        brandLabel={rawTitle}
                      />
                    ) : (
                      title
                    )}
                  </h3>
                  <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-slate-500">
                    {description}
                  </p>
                  <span className="mt-3 text-xs font-semibold text-emerald-700">
                    Read →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
