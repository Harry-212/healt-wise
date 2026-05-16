import CompareHereLink from "@/components/ui/CompareHereLink";

export default function CheapestOptionsHero() {
  return (
    <header className="w-full">
      <section className="bg-slate-900 px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-12 md:px-8 md:pb-16 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
            Health Wise
          </p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            UK private · Mounjaro · Wegovy · Saxenda
          </p>
          <h1 className="mt-3 max-w-4xl text-balance text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            Cheapest GLP-1 weight loss treatment in the UK — price snapshot &
            comparisons
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Answers to common cost questions using our latest multi-pharmacy
            tables: illustrative listings only — confirm every figure at checkout
            and with your prescriber.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-300 md:text-base">
            Every dose step, pack size, filter, and provider row — the canonical
            place to compare{" "}
            <strong className="text-white">Mounjaro</strong>,{" "}
            <strong className="text-white">Wegovy</strong>, and{" "}
            <strong className="text-white">Saxenda</strong> side by side.
          </p>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
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
      </section>
      <p className="w-full border-b border-slate-200 bg-slate-50 px-4 py-2.5 text-center text-[11px] leading-snug text-slate-500">
        Numbers on this page are research snapshots, not live quotes.
      </p>
    </header>
  );
}
