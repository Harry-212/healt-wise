import type { ReactNode } from "react";
import Link from "next/link";
import { BarChart3, BookOpen, HelpCircle, Link2, Sparkles } from "lucide-react";
import CompareHereLink from "@/components/ui/CompareHereLink";
import TrustSignals from "@/components/trust/TrustSignals";
import { CHEAPEST_OPTIONS_FAQS } from "@/lib/seo/cheapest-options-page-seo";
import { getCheapestOptionsMarketSummary } from "@/lib/data/cheapest-options-market-summary";
import { CheapestOptionsEntryPricesChart } from "./CheapestOptionsEntryPricesChart";
import CheapestOptionsHero from "./CheapestOptionsHero";
import NotMedicalAdviceBanner from "./NotMedicalAdviceBanner";

function SectionInner({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-5 sm:py-12 md:px-8 md:py-16 lg:py-20">
      {children}
    </div>
  );
}

function SectionLabel({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: ReactNode;
}) {
  return (
    <p className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-teal-700/90">
      <Icon className="h-4 w-4 shrink-0" aria-hidden />
      {children}
    </p>
  );
}

export default function CheapestOptionsUkPage() {
  const s = getCheapestOptionsMarketSummary();

  return (
    <article className="w-full min-w-0 bg-white">
      <CheapestOptionsHero />

      <div className="w-full border-b border-amber-200/60 bg-amber-50/35">
        <SectionInner>
          <NotMedicalAdviceBanner />
        </SectionInner>
      </div>

      <section
        id="overview"
        className="w-full border-b border-slate-200/80 bg-linear-to-b from-slate-50/90 to-white"
        aria-labelledby="overview-heading"
      >
        <SectionInner>
          <SectionLabel icon={Sparkles}>Price intelligence</SectionLabel>
          <h2
            id="overview-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
          >
            What “cheapest GLP-1 in the UK” really means in 2026
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-[1.05rem]">
            People searching{" "}
            <strong className="font-semibold text-slate-800">
              cheapest Wegovy UK
            </strong>
            ,{" "}
            <strong className="font-semibold text-slate-800">
              Mounjaro price UK
            </strong>
            , or{" "}
            <strong className="font-semibold text-slate-800">
              Saxenda cost private
            </strong>{" "}
            usually want two things: a ballpark for private listings and a way
            to compare pharmacies fairly. This hub summarises patterns from our
            latest comparison tables —{" "}
            <strong className="text-slate-800">not checkout totals</strong> and{" "}
            <strong className="text-slate-800">not treatment advice</strong>.
          </p>
          <p className="mt-3 text-sm text-slate-500">{s.snapshotNote}</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {(
              [
                {
                  title: "Wegovy UK listings",
                  count: s.providerCounts.wegovy,
                  hint: "Lowest 0.25 mg pen in table",
                  amount: s.wegovy.min025,
                  who: s.wegovy.providerAtLowest025,
                  accent: "ring-teal-200/80 shadow-teal-900/5",
                  bar: "bg-teal-500",
                },
                {
                  title: "Mounjaro UK listings",
                  count: s.providerCounts.mounjaro,
                  hint: "Lowest 2.5 mg pen in table",
                  amount: s.mounjaro.min25,
                  who: s.mounjaro.providerAtLowest25,
                  accent: "ring-violet-200/80 shadow-violet-900/5",
                  bar: "bg-violet-500",
                },
                {
                  title: "Saxenda UK sample",
                  count: s.providerCounts.saxenda,
                  hint: "Lowest 1-pen pack in table",
                  amount: s.saxenda.minPack1,
                  who: s.saxenda.providerAtLowestPack1,
                  accent: "ring-sky-200/80 shadow-sky-900/5",
                  bar: "bg-sky-500",
                },
              ] as const
            ).map((card) => (
              <div
                key={card.title}
                className={`relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-5 shadow-md ring-1 ${card.accent}`}
              >
                <div
                  className={`absolute left-0 top-0 h-1 w-full ${card.bar}`}
                  aria-hidden
                />
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  {card.title}
                </p>
                <p className="mt-2 text-3xl font-bold tabular-nums text-slate-900">
                  {card.count}
                  <span className="text-lg font-semibold text-slate-400">
                    {" "}
                    pharmacies
                  </span>
                </p>
                <p className="mt-3 text-sm text-slate-600">
                  {card.hint}:{" "}
                  <strong className="text-slate-900">£{card.amount}</strong>
                </p>
                <p className="mt-1 truncate text-xs text-slate-500" title={card.who}>
                  {card.who}
                </p>
              </div>
            ))}
          </div>
        </SectionInner>
      </section>

      <section
        id="summary"
        className="w-full border-b border-slate-200/80 bg-white"
        aria-labelledby="summary-heading"
      >
        <SectionInner>
          <SectionLabel icon={BarChart3}>Market Summary</SectionLabel>
          <h2
            id="summary-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 md:text-[1.65rem]"
          >
            Key takeaways from our UK GLP-1 price data
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-1 md:gap-5">
            <li className="flex gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 md:p-6">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-sm font-bold text-teal-800"
                aria-hidden
              >
                1
              </span>
              <div>
                <p className="font-semibold text-slate-900">
                  Large spreads between pharmacies are normal
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  In our Wegovy snapshot, listed 2.4 mg pens reach about{" "}
                  <strong className="text-slate-800">£{s.wegovy.max024}</strong>{" "}
                  at the top of the range, while 0.25 mg starter pens bottom out
                  around{" "}
                  <strong className="text-slate-800">£{s.wegovy.min025}</strong>.
                  That gap is why like-for-like comparison matters.
                </p>
              </div>
            </li>
            <li className="flex gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 md:p-6">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-800"
                aria-hidden
              >
                2
              </span>
              <div>
                <p className="font-semibold text-slate-900">
                  Mounjaro vs Wegovy — don’t compare headline pens in isolation
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Mounjaro listings in this dataset run from about{" "}
                  <strong className="text-slate-800">£{s.mounjaro.min25}</strong>{" "}
                  (2.5 mg) up to{" "}
                  <strong className="text-slate-800">£{s.mounjaro.max15}</strong>{" "}
                  (15 mg, highest cells). Different molecule, titration, and
                  bundle rules mean only a clinician can say what fits you.
                </p>
              </div>
            </li>
            <li className="flex gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/50 p-5 md:p-6">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-sm font-bold text-sky-800"
                aria-hidden
              >
                3
              </span>
              <div>
                <p className="font-semibold text-slate-900">
                  Saxenda: daily pen — pack size changes £ per day
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Our small Saxenda sample lists 1-pen packs from about{" "}
                  <strong className="text-slate-800">£{s.saxenda.minPack1}</strong>{" "}
                  to{" "}
                  <strong className="text-slate-800">£{s.saxenda.maxPack1}</strong>.
                  Multi-pen packs often reduce stress cost; see the full Saxenda
                  grid for £/mg-style columns.
                </p>
              </div>
            </li>
          </ul>
        </SectionInner>
      </section>

      <section
        id="snapshot-chart"
        className="w-full border-b border-slate-200/80 bg-slate-100/60"
        aria-labelledby="chart-heading"
      >
        <SectionInner>
          <SectionLabel icon={BarChart3}>Visual snapshot</SectionLabel>
          <h2
            id="chart-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 md:text-[1.65rem]"
          >
            Lowest listed “entry” order by brand (illustrative)
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            This chart answers:{" "}
            <em>
              “What is the cheapest cell we currently list for each medicine?”
            </em>{" "}
            It does <strong>not</strong> rank which drug is cheaper for your
            care plan.
          </p>
          <div className="mt-8">
            <CheapestOptionsEntryPricesChart data={s.entryPriceChart} />
          </div>
        </SectionInner>
      </section>

      <section
        id="faq"
        className="w-full border-b border-slate-200/80 bg-white"
        aria-labelledby="faq-heading"
      >
        <SectionInner>
          <SectionLabel icon={HelpCircle}>FAQ</SectionLabel>
          <h2
            id="faq-heading"
            className="text-2xl font-bold tracking-tight text-slate-900 md:text-[1.65rem]"
          >
            Questions people ask about cheapest GLP-1 prices in the UK
          </h2>
          <p className="mt-3 max-w-3xl text-slate-600">
            Straight answers for search topics such as private{" "}
            <strong className="text-slate-800">semaglutide</strong>,{" "}
            <strong className="text-slate-800">tirzepatide</strong>, and{" "}
            <strong className="text-slate-800">Saxenda pens</strong> — with the
            same clinical caveat: prescribing is not decided on price alone.
          </p>
          <div className="mt-8 space-y-3">
            {CHEAPEST_OPTIONS_FAQS.map((item, i) => (
              <details
                key={i}
                className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/40 shadow-sm open:border-teal-200/80 open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 text-left font-semibold text-slate-900 transition hover:bg-white/80 md:px-6 md:py-5 [&::-webkit-details-marker]:hidden">
                  <span className="pr-2">{item.question}</span>
                  <span className="shrink-0 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-bold tabular-nums text-slate-500 group-open:border-teal-200 group-open:text-teal-800">
                    <span className="group-open:hidden">Show</span>
                    <span className="hidden group-open:inline">Hide</span>
                  </span>
                </summary>
                <div className="border-t border-slate-100 px-5 pb-5 pt-1 text-sm leading-relaxed text-slate-600 md:px-6 md:pb-6">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </SectionInner>
      </section>

      <div className="w-full border-b border-slate-200/80 bg-linear-to-br from-slate-50 to-white">
        <SectionInner>
          <TrustSignals />
        </SectionInner>
      </div>

      <section
        id="methodology"
        className="w-full border-b border-slate-200/80 bg-white"
        aria-labelledby="methodology-heading"
      >
        <SectionInner>
          <SectionLabel icon={BookOpen}>Methodology</SectionLabel>
          <h2
            id="methodology-heading"
            className="text-2xl font-bold tracking-tight text-slate-900"
          >
            How we build these UK price snapshots
          </h2>
          <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
            We align provider rows where possible, spell out whether consult and
            delivery are included, and link to GPhC checks. For edge cases and
            refresh cadence, read{" "}
            <Link
              href="/methodology"
              className="font-semibold text-brand-primary underline underline-offset-2"
            >
              the methodology hub
            </Link>
            .
          </p>
        </SectionInner>
      </section>

      <section
        id="compare"
        className="w-full bg-slate-900 text-white"
        aria-labelledby="compare-heading"
      >
        <SectionInner>
          <SectionLabel icon={Link2}>
            <span className="text-teal-300">Compare Here</span>
          </SectionLabel>
          <h2
            id="compare-heading"
            className="text-2xl font-bold tracking-tight md:text-[1.65rem]"
          >
            Open the dedicated UK comparison pages
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
            Every dose step, pack size, filter, and provider row — the canonical
            place to compare{" "}
            <strong className="text-white">Wegovy</strong>,{" "}
            <strong className="text-white">Mounjaro</strong>, and{" "}
            <strong className="text-white">Saxenda</strong> side by side.
          </p>
          <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <li className="flex-1 sm:flex-none">
              <CompareHereLink
                href="/mounjaro-price-comparison"
                label="Compare Mounjaro costs here"
                size="footer"
                className="w-full sm:min-w-[260px]"
              />
            </li>
            <li className="flex-1 sm:flex-none">
              <CompareHereLink
                href="/wegovy-price-comparison"
                label="Compare Wegovy costs here"
                size="footer"
                className="w-full sm:min-w-[260px]"
              />
            </li>
            <li className="flex-1 sm:flex-none">
              <CompareHereLink
                href="/saxenda-price-comparison"
                label="Compare Saxenda costs here"
                size="footer"
                className="w-full sm:min-w-[260px]"
              />
            </li>
          </ul>
        </SectionInner>
      </section>
    </article>
  );
}
