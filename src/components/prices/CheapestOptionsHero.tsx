import CompareHereLink from "@/components/ui/CompareHereLink";
import ComparePricePhotoHeroShell from "@/components/compare/ComparePricePhotoHeroShell";
import {
  CHEAPEST_OPTIONS_UK_HERO_IMAGE_ALT,
  CHEAPEST_OPTIONS_UK_HERO_IMAGE_SRC,
} from "@/lib/site-assets";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

export default function CheapestOptionsHero() {
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
            <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-white/55">
              UK private · Mounjaro · Wegovy · Saxenda
            </p>
            <h1 className="mt-2 max-w-4xl text-balance text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
              Cheapest GLP-1 weight loss treatment in the UK — price snapshot
              &amp; comparisons
            </h1>
            <p className="mt-2.5 max-w-3xl text-base leading-snug text-white/75 sm:text-lg">
              Answers to common cost questions using our latest multi-pharmacy
              tables: illustrative listings only — confirm every figure at
              checkout and with your prescriber.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-snug text-white/85 md:text-base">
              Every dose step, pack size, filter, and provider row — the
              canonical place to compare{" "}
              <strong className="text-white">Mounjaro</strong>,{" "}
              <strong className="text-white">Wegovy</strong>, and{" "}
              <strong className="text-white">Saxenda</strong> side by side.
            </p>
            <ul className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <li className="flex-1 sm:flex-none">
                <CompareHereLink
                  href="/mounjaro-price-comparison"
                  label="Compare Mounjaro costs here"
                  size="footer"
                  navAccent="violet"
                  className="w-full sm:min-w-[260px]"
                />
              </li>
              <li className="flex-1 sm:flex-none">
                <CompareHereLink
                  href="/wegovy-price-comparison"
                  label="Compare Wegovy costs here"
                  size="footer"
                  navAccent="emerald"
                  className="w-full sm:min-w-[260px]"
                />
              </li>
              <li className="flex-1 sm:flex-none">
                <CompareHereLink
                  href="/saxenda-price-comparison"
                  label="Compare Saxenda costs here"
                  size="footer"
                  navAccent="sky"
                  className="w-full sm:min-w-[260px]"
                />
              </li>
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
