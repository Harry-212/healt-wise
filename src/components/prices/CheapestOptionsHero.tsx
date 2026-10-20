import { Check } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import ComparePricePhotoHeroShell from "@/components/compare/ComparePricePhotoHeroShell";
import {
  CHEAPEST_OPTIONS_UK_HERO_IMAGE_ALT,
  CHEAPEST_OPTIONS_UK_HERO_IMAGE_SRC,
} from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

export default function CheapestOptionsHero({
  answer,
  chips,
}: {
  /** Opening answer paragraph; rendered with id="hero-answer". */
  answer: string;
  chips: string[];
}) {
  return (
    <header className="w-full">
      <ComparePricePhotoHeroShell
        imageSrc={CHEAPEST_OPTIONS_UK_HERO_IMAGE_SRC}
        imageAlt={CHEAPEST_OPTIONS_UK_HERO_IMAGE_ALT}
        minHeightClass="min-h-[380px] sm:min-h-[420px] lg:min-h-[460px]"
        overlayVariant="darker"
      >
        <main className="relative z-20 flex flex-1 flex-col justify-center px-4 py-8 sm:px-6 sm:py-9 md:px-8 md:py-10">
          <div className="mx-auto w-full max-w-6xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {SITE_BRAND_NAME}
            </p>
            <h1 className="mt-2 max-w-4xl text-balance text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Cheapest Weight Loss Injections UK
            </h1>
            <p
              id="hero-answer"
              className="mt-3 max-w-3xl text-base leading-snug text-white/90 sm:text-lg"
            >
              {answer}
            </p>
            <ul className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <li className="flex-1 sm:flex-none">
                <CompareHereLink
                  href="/wegovy-price-comparison"
                  label="Compare Wegovy prices"
                  size="footer"
                  navAccent="emerald"
                  className="w-full sm:min-w-[260px]"
                />
              </li>
              <li className="flex-1 sm:flex-none">
                <CompareHereLink
                  href="/mounjaro-price-comparison"
                  label="Compare Mounjaro prices"
                  size="footer"
                  navAccent="violet"
                  className="w-full sm:min-w-[260px]"
                />
              </li>
            </ul>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold text-white/85 sm:text-sm">
              {chips.map((chip) => (
                <li key={chip} className="inline-flex items-center gap-1.5">
                  <Check
                    className="h-4 w-4 shrink-0 text-emerald-400"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </main>
      </ComparePricePhotoHeroShell>
      <p className="w-full border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-[11px] leading-snug text-slate-500">
        Numbers on this page are research snapshots, not live quotes.
      </p>
    </header>
  );
}
