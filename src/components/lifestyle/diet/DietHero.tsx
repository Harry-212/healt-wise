import Image from "next/image";
import Link from "next/link";
import { DIET_HERO_IMAGE } from "@/lib/lifestyle/diet-content";

export function DietHero() {
  return (
    <header className="border-b border-slate-200/80 bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:gap-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
        <div className="max-w-xl lg:max-w-none">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700/90">
            Science-backed diet strategies
          </p>
          <h1 className="mt-4 text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-[3.25rem] md:leading-[1.08] lg:text-[3.5rem]">
            Diet smarter for sustainable weight loss
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            Discover realistic, medically-informed diet approaches that help you lose weight without
            extreme restrictions.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/tools/bmi-calculator"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-slate-900 px-8 text-sm font-medium text-white shadow-sm shadow-slate-900/10 transition hover:bg-slate-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Start your plan
            </Link>
            <Link
              href="/compare/best-weight-loss-treatments-uk"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-medium text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              Explore treatments
            </Link>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-[2rem] bg-slate-100 shadow-lg shadow-slate-900/[0.06] sm:aspect-[5/4] lg:mx-0 lg:max-w-none">
          <Image
            src={DIET_HERO_IMAGE}
            alt="Balanced healthy meal prep and fresh ingredients"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            loading="eager"
          />
        </div>
      </div>
    </header>
  );
}
