import Image from "next/image";

/** Pharmacy / care context — Unsplash licence: unsplash.com/licence */
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=2000&q=80";

const CREDIT_HREF = "https://unsplash.com/";

export default function CheapestOptionsHero() {
  return (
    <header className="relative w-full overflow-hidden border-b border-slate-800/20 shadow-lg">
      <div className="relative aspect-[5/4] min-h-[220px] w-full sm:aspect-[2.2/1] md:min-h-[280px] lg:aspect-[2.8/1] lg:min-h-[320px]">
        <Image
          src={HERO_IMAGE}
          alt="Pharmacy context — decorative hero for UK GLP-1 price guide"
          fill
          priority
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-slate-950/92 via-slate-900/55 to-slate-800/25"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end px-5 pb-8 pt-10 sm:px-8 md:pb-12 md:pl-10 md:pr-10 lg:mx-auto lg:max-w-6xl lg:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal-200/95 sm:text-xs">
            UK private · Wegovy · Mounjaro · Saxenda
          </p>
          <h1 className="mt-3 max-w-4xl text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.35rem]">
            Cheapest GLP-1 weight loss injections in the UK — price snapshot &
            comparisons
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/88 sm:text-base">
            Answers to common cost questions using our latest multi-pharmacy
            tables: illustrative listings only — confirm every figure at checkout
            and with your prescriber.
          </p>
        </div>
      </div>
      <p className="w-full bg-slate-900 px-4 py-2.5 text-center text-[11px] leading-snug text-slate-400">
        Photo:{" "}
        <a
          href={CREDIT_HREF}
          className="text-teal-300/90 underline underline-offset-2 hover:text-teal-200"
          rel="noopener noreferrer"
          target="_blank"
        >
          Unsplash
        </a>
        · Numbers on this page are research snapshots, not live quotes.
      </p>
    </header>
  );
}
