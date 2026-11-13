import type { Metadata } from "next";
import Link from "next/link";
import { dateModifiedWithPriceCheck } from "@/lib/data/price-check";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ComparisonCoverageNote from "@/components/compare/ComparisonCoverageNote";
import CompareHereLink from "@/components/ui/CompareHereLink";
import TrustBarMarquee from "@/components/trust/TrustBarMarquee";
import WegovyCompareShaderHero from "@/components/wegovy/WegovyCompareShaderHero";
import WegovyUkCompareTable from "@/components/wegovy/WegovyUkCompareTable";
import { buildAnnualCostEstimates } from "@/lib/data/annual-cost-estimates";
import { cheapestAcrossDoses } from "@/lib/data/mounjaro-price-insights";
import {
  WEGOVY_DOSE_KEYS,
  type WegovyUkProviderCompare,
  wegovyPriceAmount,
} from "@/lib/data/wegovy-uk-compare-providers";
import {
  buildWegovyPriceInsights,
  cheapestWegovyAtDose,
  formatDose,
  formatGbp,
  type WegovyCheapestAtDose,
} from "@/lib/data/wegovy-price-insights";
import { getWegovyCompareProviders } from "@/lib/data/compare-live";
import { getWegovyLastUpdatedLabel } from "@/lib/data/compare-store";
import { siteOrigin } from "@/lib/seo/site-origin";
import {
  buildWegovyCompareUkFaqItems,
  WEGOVY_COMPARE_UK_FAQ_ITEMS,
  wegovyCompareUkFaqJsonLd,
} from "@/lib/seo/wegovy-json-ld";
import { buildPageShareMetadata } from "@/lib/seo/share-metadata";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export const metadata: Metadata = {
  ...buildPageShareMetadata({
    canonicalPath: "/wegovy-price-comparison",
    title: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
    metaDescription:
      "Compare Wegovy pen prices from 0.25 mg to 7.2 mg across regulated UK pharmacies. See delivery costs, provider ratings and the date each price was last checked.",
    openGraphTitle: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
    openGraphDescription:
      "Compare Wegovy pen prices from 0.25 mg to 7.2 mg across regulated UK pharmacies. See delivery costs, provider ratings and the date each price was last checked.",
    imagePath: "/wegovy-health-wise.png",
    imageAlt: "Compare Wegovy prices UK — Healthwise360",
  }),
  title: {
    absolute: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
  },
};

const EXPLORE_LINKS = [
  {
    href: "/blog/weight-loss-treatment-london",
    title: "The complete guide to weight loss treatment in the UK",
    desc: "Independent overview of NHS options, registered private clinics and accredited online pharmacies.",
  },
  {
    href: "/compare/wegovy-vs-mounjaro",
    title: "Weight loss treatment price comparison UK: Mounjaro and Wegovy",
    desc: "Compare monthly costs, dosing ladders, clinical trial results and side effect profiles side by side.",
  },
  {
    href: "/blog/side-effects-of-wegovy-and-how-to-manage-them",
    title: "Side effects of Wegovy and how to manage them",
    desc: "Practical clinician advice on managing common side effects like nausea and titration adjustment.",
  },
  {
    href: "/helpful-guides/switching-wegovy-to-mounjaro-uk",
    title: "Switching from Wegovy to Mounjaro in the UK",
    desc: "What prescribers look for when transitioning between GLP-1 and dual GIP/GLP-1 treatments.",
  },
  {
    href: "/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust",
    title: "Easy to follow Wegovy injection instructions",
    desc: "Step-by-step guidance on pen preparation, injection sites, priming and safe needle disposal.",
  },
  {
    href: "/wegovy-faq",
    title: "Wegovy FAQ",
    desc: "Answers to common UK patient questions on dosages, missed pens, travel and repeat ordering.",
  },
] as const;

function compareWebPageJsonLd(providers: WegovyUkProviderCompare[]) {
  const base = siteOrigin();
  const pageUrl = `${base}/wegovy-price-comparison`;

  const webpage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    name: "Wegovy Price Comparison UK | Compare Pharmacy Prices",
    description:
      "Compare Wegovy pen prices from 0.25 mg to 7.2 mg across regulated UK pharmacies. See delivery costs, provider ratings and the date each price was last checked.",
    url: pageUrl,
    dateModified: dateModifiedWithPriceCheck("2026-11-11"),
    isPartOf: {
      "@id": `${base}/#website`,
    },
    publisher: {
      "@id": `${base}/#organization`,
    },
    inLanguage: "en-GB",
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
    mainEntity: {
      "@id": `${pageUrl}#providers`,
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${base}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Compare Wegovy prices",
        item: pageUrl,
      },
    ],
  };

  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#providers`,
    name: "Wegovy Providers",
    numberOfItems: providers.length,
    itemListElement: providers.map((provider, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Organization",
        name: provider.name,
        url: `${base}/pharmacies/${provider.id}`,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [webpage, breadcrumb, itemList],
  };
}

function differenceFromSecond(cheapestList: WegovyCheapestAtDose[]): number {
  if (cheapestList.length >= 2) {
    return Math.round((cheapestList[1].price - cheapestList[0].price) * 100) / 100;
  }
  return 0;
}

export default function CompareWegovyPricesUkPage() {
  const WEGOVY_UK_COMPARE_PROVIDERS = getWegovyCompareProviders();
  const wegovyLastUpdated = getWegovyLastUpdatedLabel();
  const pageUrl = `${siteOrigin()}/wegovy-price-comparison`;

  const insights = buildWegovyPriceInsights(WEGOVY_UK_COMPARE_PROVIDERS);
  const providerCount = WEGOVY_UK_COMPARE_PROVIDERS.length;

  const priceRows = WEGOVY_UK_COMPARE_PROVIDERS.map((p) =>
    Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<(typeof WEGOVY_DOSE_KEYS)[number], number | null>,
  );

  const nameRows = WEGOVY_UK_COMPARE_PROVIDERS.map((p) => ({
    id: p.id,
    name: p.name,
    prices: Object.fromEntries(
      WEGOVY_DOSE_KEYS.map((k) => [k, wegovyPriceAmount(p.prices[k])]),
    ) as Record<(typeof WEGOVY_DOSE_KEYS)[number], number | null>,
  }));
  const cheapestAcross = cheapestAcrossDoses(nameRows, WEGOVY_DOSE_KEYS);

  const cheapestByDose = Object.fromEntries(
    WEGOVY_DOSE_KEYS.map((k) => [
      k,
      cheapestWegovyAtDose(WEGOVY_UK_COMPARE_PROVIDERS, k, 3),
    ]),
  );

  const stat025 = insights?.doses.find((d) => d.dose === "0.25mg") ?? insights?.starter;
  const stat05 = insights?.doses.find((d) => d.dose === "0.5mg");
  const stat10 = insights?.doses.find((d) => d.dose === "1mg");
  const stat17 = insights?.doses.find((d) => d.dose === "1.7mg");
  const stat24 = insights?.doses.find((d) => d.dose === "2.4mg") ?? insights?.top;
  const stat72 = insights?.doses.find((d) => d.dose === "7.2mg");

  const diff05 = stat05 && stat025 ? Math.round((stat05.low - stat025.low) * 100) / 100 : 0;
  const diff10 = stat10 && stat05 ? Math.round((stat10.low - stat05.low) * 100) / 100 : 0;
  const diff17 = stat17 && stat10 ? Math.round((stat17.low - stat10.low) * 100) / 100 : 0;
  const diff24 = stat24 && stat17 ? Math.round((stat24.low - stat17.low) * 100) / 100 : 0;
  const diff72 = stat72 && stat24 ? Math.round((stat72.low - stat24.low) * 100) / 100 : 0;

  // Equal price check for first three doses
  const equalPartner = WEGOVY_UK_COMPARE_PROVIDERS.find((p) => {
    const p0 = wegovyPriceAmount(p.prices["0.25mg"]);
    const p1 = wegovyPriceAmount(p.prices["0.5mg"]);
    const p2 = wegovyPriceAmount(p.prices["1mg"]);
    return p0 != null && p0 > 0 && p0 === p1 && p1 === p2;
  });
  const equalPrice = equalPartner ? wegovyPriceAmount(equalPartner.prices["0.25mg"]) ?? 0 : 0;

  // 16 weeks and annual costs calculation
  const p025Low = stat025?.low ?? 0;
  const p05Low = stat05?.low ?? 0;
  const p10Low = stat10?.low ?? 0;
  const p17Low = stat17?.low ?? 0;
  const p24Low = stat24?.low ?? 0;

  const p025Med = stat025?.median ?? 0;
  const p05Med = stat05?.median ?? 0;
  const p10Med = stat10?.median ?? 0;
  const p17Med = stat17?.median ?? 0;
  const p24Med = stat24?.median ?? 0;

  const first16WeeksLow = Math.round((p025Low + p05Low + p10Low + p17Low) * 100) / 100;
  const first16WeeksTypical = Math.round((p025Med + p05Med + p10Med + p17Med) * 100) / 100;

  const firstYearLow = Math.round((first16WeeksLow + 9 * p24Low) * 100) / 100;
  const firstYearTypical = Math.round((first16WeeksTypical + 9 * p24Med) * 100) / 100;
  const subsequentYearLow = Math.round((13 * p24Low) * 100) / 100;

  const diff025Lead = differenceFromSecond(cheapestByDose["0.25mg"] ?? []);
  const diff24Lead = differenceFromSecond(cheapestByDose["2.4mg"] ?? []);

  const faqItems = insights && stat24
    ? buildWegovyCompareUkFaqItems({
        checkDate: wegovyLastUpdated,
        starterLow: formatGbp(insights.starter.low),
        starterWeekly: formatGbp(
          Math.round((insights.starter.low / 4) * 100) / 100,
        ),
        dose10Low: formatGbp(stat10?.low ?? 98.99),
        dose17Low: formatGbp(stat17?.low ?? 139.99),
        dose24Low: formatGbp(stat24.low),
        dose24High: formatGbp(stat24.high),
        dose24Typical: formatGbp(stat24.median),
        dose24Weekly: formatGbp(
          Math.round((stat24.low / 4) * 100) / 100,
        ),
        dose72Low: formatGbp(stat72?.low ?? 194.99),
        cheapestLeader: cheapestAcross?.leader ?? insights.starter.lowProvider,
        cheapestLeaderWins:
          cheapestAcross?.leaderWins ?? WEGOVY_DOSE_KEYS.length,
        cheapestTotalDoses:
          cheapestAcross?.totalDoses ?? WEGOVY_DOSE_KEYS.length,
      })
    : WEGOVY_COMPARE_UK_FAQ_ITEMS;

  const faqLd = wegovyCompareUkFaqJsonLd(faqItems, pageUrl);
  const webLd = compareWebPageJsonLd(WEGOVY_UK_COMPARE_PROVIDERS);

  // Maximum price across all doses for ladder bar scaling
  const maxDosePrice = Math.max(
    ...((insights?.doses.map((d) => d.low) ?? [200]))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />

      <article className="w-full">
        {/* Section 0: Hero & Header */}
        <WegovyCompareShaderHero
          lastUpdated={wegovyLastUpdated}
          cheapestPrice={insights?.starter.low}
          cheapestProvider={insights?.starter.lowProvider}
          providerCount={providerCount}
        />

        <section className="w-full border-b border-slate-200/80">
          <TrustBarMarquee />
        </section>

        {/* Section 1: Wegovy prices in the UK today */}
        <section
          id="wegovy-prices-today"
          className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Wegovy prices in the UK today
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Here are the lowest Wegovy prices in the UK in one table, one row for each dose, from the partners we checked on {wegovyLastUpdated}.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-500">
              Each pen holds four weekly doses, so the weekly figure is the pen price divided by four.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Dose</th>
                    <th className="px-4 py-3">Lowest listed price</th>
                    <th className="px-4 py-3">Partner</th>
                    <th className="px-4 py-3">Per week</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {insights?.doses.map((d) => (
                    <tr key={d.dose} className="hover:bg-slate-50/60">
                      <td className="px-4 py-3 font-semibold text-slate-900">
                        {formatDose(d.dose)}
                      </td>
                      <td className="px-4 py-3 font-bold text-emerald-800 tabular-nums">
                        {formatGbp(d.low)}
                      </td>
                      <td className="px-4 py-3 text-slate-700">
                        {d.lowProvider}
                      </td>
                      <td className="px-4 py-3 text-slate-600 tabular-nums">
                        {formatGbp(Math.round((d.low / 4) * 100) / 100)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 2: Where the Wegovy price steps up */}
        <section
          id="wegovy-price-steps-up"
          className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
        >
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Where the Wegovy price steps up
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Wegovy pens do not rise in equal steps. The patient leaflet sets out a dose schedule of 4 weeks at each of 0.25 mg, 0.5 mg, 1 mg and 1.7 mg, then 2.4 mg from week 17. The price follows a different pattern from the dose: at some partners the first three doses cost the same, and the largest jump comes at 1.7 mg.
            </p>

            {/* Visual price ladder bar chart */}
            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
                Wegovy price ladder (lowest listed price by dose)
              </h3>
              <div className="mt-5 space-y-4">
                {insights?.doses.map((d) => {
                  const pct = Math.max(15, Math.round((d.low / maxDosePrice) * 100));
                  return (
                    <div key={d.dose}>
                      <div className="flex justify-between text-xs font-semibold text-slate-700">
                        <span>{formatDose(d.dose)}</span>
                        <span className="tabular-nums font-bold text-slate-900">{formatGbp(d.low)}</span>
                      </div>
                      <div className="mt-1 h-3.5 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-teal-600 to-emerald-600 transition-all duration-500"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {equalPartner ? (
              <p className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-sm font-medium leading-relaxed text-emerald-950">
                On {wegovyLastUpdated}, at {equalPartner.name} the first three doses cost {formatGbp(equalPrice)} each. The step from 1 mg to 1.7 mg adds {formatGbp(diff17)} at the lowest listed price.
              </p>
            ) : null}

            {/* Step-up table */}
            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Step</th>
                    <th className="px-4 py-3">Lowest listed price</th>
                    <th className="px-4 py-3">Change from the dose before</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">0.25 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p025Low)}</td>
                    <td className="px-4 py-3 text-slate-400">—</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">0.5 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p05Low)}</td>
                    <td className="px-4 py-3 text-slate-700">{diff05 === 0 ? "Same price" : `+${formatGbp(diff05)}`}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">1 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p10Low)}</td>
                    <td className="px-4 py-3 text-slate-700">{diff10 === 0 ? "Same price" : `+${formatGbp(diff10)}`}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">1.7 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p17Low)}</td>
                    <td className="px-4 py-3 font-medium text-amber-700">+{formatGbp(diff17)} (largest jump)</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">2.4 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p24Low)}</td>
                    <td className="px-4 py-3 text-slate-700">+{formatGbp(diff24)}</td>
                  </tr>
                  {stat72 ? (
                    <tr className="hover:bg-slate-50/60">
                      <td className="px-4 py-3 font-semibold text-slate-900">7.2 mg</td>
                      <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(stat72.low)}</td>
                      <td className="px-4 py-3 text-slate-700">+{formatGbp(diff72)}</td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-xs italic text-slate-500">
              Your prescriber decides when you move to the next dose, so the table shows prices only. It does not tell you which dose to use.
            </p>
          </div>
        </section>

        {/* Section 3: Compare Wegovy prices at our partner pharmacies */}
        <section
          id="wegovy-compare-table"
          className="scroll-mt-28 border-b border-slate-200/80 bg-background py-12 md:py-16"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Compare Wegovy prices at our partner pharmacies
            </h2>
            <p className="mt-3 max-w-3xl text-slate-600">
              This table shows the standard price of every dose at {providerCount} partner pharmacies, with each pharmacy&apos;s rating, GPhC number and delivery charge. Where a partner does not list a dose, the table says Not listed.
            </p>
            <p className="mt-2 max-w-3xl text-sm text-slate-500">
              Prices checked {wegovyLastUpdated}.{" "}
              <Link href="/methodology" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                How our comparison works
              </Link>
            </p>

            <div className="mt-6 max-w-3xl">
              <p className="font-semibold text-slate-900">How to use it:</p>
              <ol className="mt-2 list-decimal space-y-1 pl-5 text-slate-600">
                <li>Pick your dose.</li>
                <li>Sort by price, from the lowest price up.</li>
                <li>Open a pharmacy&apos;s review.</li>
              </ol>
            </div>

            <ComparisonCoverageNote className="mt-6" freeToUse />

            <div className="mt-6">
              <WegovyUkCompareTable
                providers={WEGOVY_UK_COMPARE_PROVIDERS}
                lastUpdated={wegovyLastUpdated}
                showCostGuideLink
              />
            </div>

            <div className="mt-6 space-y-2 text-xs leading-relaxed text-slate-500">
              <p>
                Every price in the dose columns is the standard price. Offers, codes and first order discounts appear only in the last column and are never used to rank a partner.
              </p>
              <p>
                How we order providers: providers are listed A to Z by default. You can also sort by standard price, standard price plus delivery, the price at one dose, or Trustpilot score. Ties are broken A to Z. Order is never influenced by commission, affiliate status or discount codes.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Wegovy price by dose */}
        <section
          id="wegovy-price-by-dose"
          className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Wegovy price by dose
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Find your dose below to see the lowest, typical and highest listed price among our checked partners. Each Wegovy pen holds four weekly doses of one strength.
            </p>

            <div className="mt-8 space-y-8">
              {/* 4.1 0.25 mg */}
              {stat025 && (
                <div id="wegovy-0-25mg-price" className="scroll-mt-28">
                  <h3 className="text-lg font-bold text-slate-900">
                    Wegovy 0.25 mg price UK
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Among our checked partner listings, the lowest Wegovy 0.25 mg pen price is {formatGbp(stat025.low)} at {stat025.lowProvider}, or {formatGbp(Math.round((stat025.low / 4) * 100) / 100)} a week. The median price among our checked partner listings is {formatGbp(stat025.median)}, and the highest price is {formatGbp(stat025.high)}. The patient leaflet describes 0.25 mg as the starting dose, taken once a week for the first 4 weeks.
                  </p>
                  {cheapestByDose["0.25mg"] && cheapestByDose["0.25mg"].length > 0 && (
                    <p className="mt-2 text-sm text-slate-500">
                      <strong className="font-semibold text-slate-700">Three lowest-priced partner listings:</strong>{" "}
                      {cheapestByDose["0.25mg"].map((c, idx) => (
                        <span key={c.id}>
                          <Link href={`/pharmacies/${c.id}`} className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                            {c.name}
                          </Link>{" "}
                          ({formatGbp(c.price)}){idx < cheapestByDose["0.25mg"].length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              )}

              {/* 4.2 0.5 mg */}
              {stat05 && (
                <div id="wegovy-0-5mg-price" className="scroll-mt-28">
                  <h3 className="text-lg font-bold text-slate-900">
                    Wegovy 0.5 mg price UK
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Among our checked partner listings, the lowest Wegovy 0.5 mg pen price is {formatGbp(stat05.low)} at {stat05.lowProvider}, or {formatGbp(Math.round((stat05.low / 4) * 100) / 100)} a week. The median price among our checked partner listings is {formatGbp(stat05.median)}, and the highest price is {formatGbp(stat05.high)}. In the leaflet schedule, 0.5 mg covers weeks 5 to 8. At {stat05.lowProvider} it costs {formatGbp(stat05.low)}, the same as the 0.25 mg pen.
                  </p>
                  {cheapestByDose["0.5mg"] && cheapestByDose["0.5mg"].length > 0 && (
                    <p className="mt-2 text-sm text-slate-500">
                      <strong className="font-semibold text-slate-700">Three lowest-priced partner listings:</strong>{" "}
                      {cheapestByDose["0.5mg"].map((c, idx) => (
                        <span key={c.id}>
                          <Link href={`/pharmacies/${c.id}`} className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                            {c.name}
                          </Link>{" "}
                          ({formatGbp(c.price)}){idx < cheapestByDose["0.5mg"].length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              )}

              {/* 4.3 1 mg */}
              {stat10 && (
                <div id="wegovy-1mg-price" className="scroll-mt-28">
                  <h3 className="text-lg font-bold text-slate-900">
                    Wegovy 1 mg price UK
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Among our checked partner listings, the lowest Wegovy 1 mg pen price is {formatGbp(stat10.low)} at {stat10.lowProvider}, or {formatGbp(Math.round((stat10.low / 4) * 100) / 100)} a week. The median price among our checked partner listings is {formatGbp(stat10.median)}, and the highest price is {formatGbp(stat10.high)}. 1 mg covers weeks 9 to 12 in the leaflet schedule. Check the table for the partners that list this strength, as the price can match the 0.5 mg pen.
                  </p>
                  {cheapestByDose["1mg"] && cheapestByDose["1mg"].length > 0 && (
                    <p className="mt-2 text-sm text-slate-500">
                      <strong className="font-semibold text-slate-700">Three lowest-priced partner listings:</strong>{" "}
                      {cheapestByDose["1mg"].map((c, idx) => (
                        <span key={c.id}>
                          <Link href={`/pharmacies/${c.id}`} className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                            {c.name}
                          </Link>{" "}
                          ({formatGbp(c.price)}){idx < cheapestByDose["1mg"].length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              )}

              {/* 4.4 1.7 mg */}
              {stat17 && (
                <div id="wegovy-1-7mg-price" className="scroll-mt-28">
                  <h3 className="text-lg font-bold text-slate-900">
                    Wegovy 1.7 mg price UK
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Among our checked partner listings, the lowest Wegovy 1.7 mg pen price is {formatGbp(stat17.low)} at {stat17.lowProvider}, or {formatGbp(Math.round((stat17.low / 4) * 100) / 100)} a week. The median price among our checked partner listings is {formatGbp(stat17.median)}, and the highest price is {formatGbp(stat17.high)}. 1.7 mg covers weeks 13 to 16, and it is where the price steps up most. The lowest listed price is {formatGbp(diff17)} higher than at 1 mg.
                  </p>
                  {cheapestByDose["1.7mg"] && cheapestByDose["1.7mg"].length > 0 && (
                    <p className="mt-2 text-sm text-slate-500">
                      <strong className="font-semibold text-slate-700">Three lowest-priced partner listings:</strong>{" "}
                      {cheapestByDose["1.7mg"].map((c, idx) => (
                        <span key={c.id}>
                          <Link href={`/pharmacies/${c.id}`} className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                            {c.name}
                          </Link>{" "}
                          ({formatGbp(c.price)}){idx < cheapestByDose["1.7mg"].length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              )}

              {/* 4.5 2.4 mg */}
              {stat24 && (
                <div id="wegovy-2-4mg-price" className="scroll-mt-28">
                  <h3 className="text-lg font-bold text-slate-900">
                    Wegovy 2.4 mg price UK
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Among our checked partner listings, the lowest Wegovy 2.4 mg pen price is {formatGbp(stat24.low)} at {stat24.lowProvider}, or {formatGbp(Math.round((stat24.low / 4) * 100) / 100)} a week. The median price among our checked partner listings is {formatGbp(stat24.median)}, and the highest price is {formatGbp(stat24.high)}. The leaflet gives 2.4 mg once a week as the recommended dose, reached from week 17. The gap between the lowest and highest listed price at this dose is {formatGbp(stat24.high - stat24.low)}.
                  </p>
                  {cheapestByDose["2.4mg"] && cheapestByDose["2.4mg"].length > 0 && (
                    <p className="mt-2 text-sm text-slate-500">
                      <strong className="font-semibold text-slate-700">Three lowest-priced partner listings:</strong>{" "}
                      {cheapestByDose["2.4mg"].map((c, idx) => (
                        <span key={c.id}>
                          <Link href={`/pharmacies/${c.id}`} className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                            {c.name}
                          </Link>{" "}
                          ({formatGbp(c.price)}){idx < cheapestByDose["2.4mg"].length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              )}

              {/* 4.6 7.2 mg */}
              {stat72 && (
                <div id="wegovy-7-2mg-price" className="scroll-mt-28">
                  <h3 className="text-lg font-bold text-slate-900">
                    Wegovy 7.2 mg price UK
                  </h3>
                  <p className="mt-2 leading-relaxed text-slate-600">
                    Among our checked partner listings, the lowest Wegovy 7.2 mg pen price is {formatGbp(stat72.low)} at {stat72.lowProvider}, or {formatGbp(Math.round((stat72.low / 4) * 100) / 100)} a week. The median price among our checked partner listings is {formatGbp(stat72.median)}, and the highest price is {formatGbp(stat72.high)}. Only some partners list 7.2 mg so far. The product information says the 7.2 mg dose can be used for adults with obesity if needed, after at least 4 weeks on 2.4 mg, and that it is given as one injection or as three 2.4 mg injections depending on the pen. Your prescriber decides if it is right for you.
                  </p>
                  {cheapestByDose["7.2mg"] && cheapestByDose["7.2mg"].length > 0 && (
                    <p className="mt-2 text-sm text-slate-500">
                      <strong className="font-semibold text-slate-700">Three lowest-priced partner listings:</strong>{" "}
                      {cheapestByDose["7.2mg"].map((c, idx) => (
                        <span key={c.id}>
                          <Link href={`/pharmacies/${c.id}`} className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                            {c.name}
                          </Link>{" "}
                          ({formatGbp(c.price)}){idx < cheapestByDose["7.2mg"].length - 1 ? " · " : ""}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
              )}
            </div>

            <p className="mt-8 text-sm text-slate-600">
              Each pharmacy name links to its review in the table above. Need help with the pen? Try our{" "}
              <Link href="/tools/wegovy-click-calculator" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                Wegovy click calculator
              </Link>{" "}
              or read the{" "}
              <Link href="/blog/wegovy-click-calculator-uk" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                Wegovy click calculator guide
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 5: What each Wegovy price includes */}
        <section
          id="what-each-price-includes"
          className="border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              What each Wegovy price includes
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              The listed price is the price of the pen. Some partners add a consultation fee or a delivery charge, so the final total can be higher. Pens must stay cold on the way to you, which is why delivery is often charged on top.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Item</th>
                    <th className="px-4 py-3">What to check before you order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Pen</td>
                    <td className="px-4 py-3 text-slate-600">The dose, and the number of pens in the order</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Needles</td>
                    <td className="px-4 py-3 text-slate-600">
                      The Wegovy patient leaflet says each pack holds one pen and 4 disposable needles, so check that the partner sends them
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Consultation</td>
                    <td className="px-4 py-3 text-slate-600">Whether a health check fee is added, and whether it repeats</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Delivery</td>
                    <td className="px-4 py-3 text-slate-600">The cost, and whether the pen travels cold</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-semibold text-slate-900">Repeat orders</td>
                    <td className="px-4 py-3 text-slate-600">Whether the price changes on the next order</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6">
              <Link
                href="/methodology"
                className="font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                See how we check partners
              </Link>.
            </div>
          </div>
        </section>

        {/* Section 6: Standard prices and offers */}
        <section
          id="standard-prices-and-offers"
          className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Standard prices and offers
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our table shows the standard price, which is the price the pharmacy lists without a code or a first order discount. Some partners also advertise offers, codes or first order discounts. These appear only in the Offers column, because an offer can end or apply to a first order only, and a standard price is the one you can compare month to month.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              We have not independently confirmed the terms of offers, so check the provider&apos;s site for current offers.
            </p>
          </div>
        </section>

        {/* Section 7: How Wegovy prices have changed */}
        <section
          id="how-prices-have-changed"
          className="border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How Wegovy prices have changed
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We record the standard price at each partner at every completed price verification. The table shows the lowest listed price at each dose since our first check.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Prices can go up or down between checks. A lower price today does not mean it will stay lower.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Check date</th>
                    <th className="px-4 py-3">0.25 mg</th>
                    <th className="px-4 py-3">0.5 mg</th>
                    <th className="px-4 py-3">1 mg</th>
                    <th className="px-4 py-3">1.7 mg</th>
                    <th className="px-4 py-3">2.4 mg</th>
                    <th className="px-4 py-3">7.2 mg</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/60 font-semibold text-slate-900">
                    <td className="px-4 py-3 text-emerald-900">{wegovyLastUpdated}</td>
                    <td className="px-4 py-3 tabular-nums">{formatGbp(p025Low)}</td>
                    <td className="px-4 py-3 tabular-nums">{formatGbp(p05Low)}</td>
                    <td className="px-4 py-3 tabular-nums">{formatGbp(p10Low)}</td>
                    <td className="px-4 py-3 tabular-nums">{formatGbp(p17Low)}</td>
                    <td className="px-4 py-3 tabular-nums">{formatGbp(p24Low)}</td>
                    <td className="px-4 py-3 tabular-nums">{stat72 ? formatGbp(stat72.low) : "Not listed"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Section 8: What it costs to reach the 2.4 mg dose */}
        <section
          id="cost-to-reach-2-4mg"
          className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
        >
          <div className="mx-auto max-w-4xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              What it costs to reach the 2.4 mg dose
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              The leaflet schedule takes 16 weeks to reach 2.4 mg: 4 weeks each at 0.25 mg, 0.5 mg, 1 mg and 1.7 mg, then 2.4 mg from week 17. Your doctor decides the pace, and the schedule can be slower. This table adds up the pens on that schedule.
            </p>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
              <table className="w-full border-collapse text-left text-sm">
                <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Weeks</th>
                    <th className="px-4 py-3">Dose</th>
                    <th className="px-4 py-3">Lowest price</th>
                    <th className="px-4 py-3">Typical price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">1 to 4</td>
                    <td className="px-4 py-3 text-slate-700">0.25 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p025Low)}</td>
                    <td className="px-4 py-3 text-slate-600">{formatGbp(p025Med)}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">5 to 8</td>
                    <td className="px-4 py-3 text-slate-700">0.5 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p05Low)}</td>
                    <td className="px-4 py-3 text-slate-600">{formatGbp(p05Med)}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">9 to 12</td>
                    <td className="px-4 py-3 text-slate-700">1 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p10Low)}</td>
                    <td className="px-4 py-3 text-slate-600">{formatGbp(p10Med)}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">13 to 16</td>
                    <td className="px-4 py-3 text-slate-700">1.7 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p17Low)}</td>
                    <td className="px-4 py-3 text-slate-600">{formatGbp(p17Med)}</td>
                  </tr>
                  <tr className="bg-emerald-50/60 font-semibold text-emerald-950">
                    <td className="px-4 py-3">First 16 weeks</td>
                    <td className="px-4 py-3">—</td>
                    <td className="px-4 py-3 font-bold text-emerald-800">{formatGbp(first16WeeksLow)}</td>
                    <td className="px-4 py-3">{formatGbp(first16WeeksTypical)}</td>
                  </tr>
                  <tr className="hover:bg-slate-50/60">
                    <td className="px-4 py-3 font-medium text-slate-900">From week 17, each month</td>
                    <td className="px-4 py-3 text-slate-700">2.4 mg</td>
                    <td className="px-4 py-3 font-semibold text-emerald-800">{formatGbp(p24Low)}</td>
                    <td className="px-4 py-3 text-slate-600">{formatGbp(p24Med)}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 space-y-3 leading-relaxed text-slate-600">
              <p>
                On this schedule, the first year uses 4 pens on the way up and about 9 pens at 2.4 mg, which is {formatGbp(firstYearLow)} at the lowest listed prices and {formatGbp(firstYearTypical)} at typical prices. Each year after that, 13 pens at 2.4 mg cost {formatGbp(subsequentYearLow)} at the lowest listed prices. Delivery and any consultation fees are not included, and 7.2 mg is not included.
              </p>
              <p className="font-medium text-slate-900">
                The Wegovy monthly cost in the UK therefore starts at {formatGbp(p025Low)} and reaches {formatGbp(p24Low)} a month at 2.4 mg.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9: Which partner lists the lowest Wegovy price? */}
        <section
          id="cheapest-wegovy-partner"
          className="border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Which partner lists the lowest Wegovy price?
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              In our latest check, {cheapestAcross?.leader ?? stat025?.lowProvider} listed the lowest Wegovy price for {cheapestAcross?.leaderWins ?? 6} of the 6 doses. {stat025?.lowProvider} listed the lowest price for 0.25 mg{diff025Lead > 0 ? ` by ${formatGbp(diff025Lead)}` : ""}, and {stat24?.lowProvider} listed the lowest price for 2.4 mg{diff24Lead > 0 ? ` by ${formatGbp(diff24Lead)}` : ""}. The partner with the lowest price changes from month to month and from dose to dose, so look at the date next to the price and at the price for your own dose.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-slate-50/70 p-6">
              <h3 className="text-xl font-bold text-slate-900">
                What is the cheapest way to get Wegovy?
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700">
                <li>Compare the price at the dose you will be on, not only the 0.25 mg starter pen.</li>
                <li>Add the delivery charge, because pens must stay cold.</li>
                <li>Check that needles are sent with the pen.</li>
                <li>Look at the standard price first, and the Offers column second.</li>
                <li>Use the price history in section 7 to see whether a price has moved.</li>
                <li>You can move to another GPhC registered pharmacy. They will do a new health check first.</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/pharmacies"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800 underline hover:text-emerald-950"
                >
                  See our full lowest price options page for each treatment side by side
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 10: Can you get Wegovy on the NHS? */}
        <section
          id="wegovy-on-the-nhs"
          className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Can you get Wegovy on the NHS?
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Yes, but only for some people. On the NHS, Wegovy is given through specialist weight management services to people with a high BMI and a weight related health problem, for up to 2 years. Most people pay privately for now, at the prices in this comparison. Read the NHS England page on weight management injections and the NICE guidance on semaglutide, and ask your GP if you are unsure.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              This page compares private prices only. If NHS eligibility matters to you, your GP or a specialist weight management service is the place to start.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              Prefer an oral medication instead of weekly injections? Read our complete guide to{" "}
              <Link
                href="/what-is-wegovy-pill"
                className="font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                What is the Wegovy pill?
              </Link>
            </p>
          </div>
        </section>

        {/* Section 11: How we check every Wegovy pharmacy */}
        <section
          id="how-we-check-pharmacies"
          className="border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              How we check every Wegovy pharmacy
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Every partner in our table passes the same checks. No pharmacy can pay to rank higher.
            </p>
            <ul className="mt-4 list-disc space-y-2.5 pl-5 text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">GPhC registration</strong>, checked on the official{" "}
                <a
                  href="https://www.pharmacyregulation.org/registers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-emerald-800 underline hover:text-emerald-950"
                >
                  GPhC register
                </a>.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">A prescriber checks your health</strong> before any pen is sent.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">The standard price of every dose</strong> is recorded at every completed price verification.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Delivery:</strong> cold packing, delivery times and tracking.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Support:</strong> dose advice and how easy it is to get help.
              </li>
            </ul>
            <div className="mt-6 text-sm text-slate-600">
              <Link
                href="/methodology"
                className="font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                Read how we check prices
              </Link>{" "}
              · Prices checked {wegovyLastUpdated}.
            </div>
          </div>
        </section>

        {/* Section 12: Compare with other treatments */}
        <section
          id="compare-with-other-treatments"
          className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Compare with other treatments
            </h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              Looking at another treatment? See our{" "}
              <Link
                href="/mounjaro-price-comparison"
                className="font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                Mounjaro price comparison
              </Link>, the{" "}
              <Link
                href="/compare/wegovy-vs-mounjaro"
                className="font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                Wegovy vs Mounjaro comparison
              </Link>, or our guide to the{" "}
              <Link
                href="/what-is-wegovy-pill"
                className="font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                Wegovy pill
              </Link>.
            </p>
          </div>
        </section>

        {/* Section 13: Wegovy price comparison FAQs */}
        <section
          id="faq"
          className="border-b border-slate-200/80 bg-white py-12 md:py-16"
        >
          <div className="mx-auto max-w-3xl px-4 md:px-8">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Wegovy price comparison FAQs
            </h2>
            <div className="mt-8 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200/90 bg-white px-4 py-3 shadow-sm open:shadow-md"
                >
                  <summary className="cursor-pointer list-none text-base font-semibold text-slate-900 after:float-right after:text-slate-400 after:content-['+'] group-open:after:content-['−']">
                    <h3 className="inline text-base font-semibold text-slate-900">{item.question}</h3>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Section 14: Keep exploring */}
        <section
          id="keep-exploring"
          className="border-b border-slate-200/80 bg-slate-50/80 py-12 md:py-16"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                Keep exploring
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Most people benefit from reading independent guides alongside a clinician led plan. Prices and eligibility change often, so confirm details on a regulated pharmacy site before you pay.
              </p>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {EXPLORE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group rounded-2xl border border-emerald-100 bg-white p-5 transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-sm"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-emerald-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-emerald-800 group-hover:underline">
                    Read guide
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-900 py-14 text-white md:py-20">
          <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
            <h2 className="text-2xl font-bold md:text-3xl">
              Ready to compare and next-step your care?
            </h2>
            <p className="mt-4 text-slate-300">
              Use the table to shortlist providers, then confirm eligibility and live pricing on regulated sites.
            </p>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <CompareHereLink href="#wegovy-compare-table" size="footer" />
              <Link
                href="/what-is-wegovy#eligibility-uk"
                className="inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
              >
                Start your treatment journey
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
