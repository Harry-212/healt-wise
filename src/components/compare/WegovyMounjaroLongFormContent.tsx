import Link from "next/link";
import PriceVerificationDisclaimer from "@/components/ui/PriceVerificationDisclaimer";
import {
  ArrowRight,
  ClipboardList,
  ExternalLink,
  HelpCircle,
  Pill,
  Scale,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import type { HomePriceSnapshotRow } from "@/lib/data/home-price-summary";
import ComparisonCoverageNote from "@/components/compare/ComparisonCoverageNote";
import { getMounjaroCompareProviders } from "@/lib/data/compare-live";
import { getWegovyCompareProviders } from "@/lib/data/compare-live";
import { PROVIDERS } from "@/lib/data/providers";
import { wegovyPriceAmount, formatWegovyPriceCell } from "@/lib/data/wegovy-uk-compare-providers";
import { formatGbp } from "@/lib/data/wegovy-price-insights";

/**
 * Editorial long-form content for `/compare/wegovy-vs-mounjaro`.
 * Implements the 11 sections of the upgraded Wegovy vs Mounjaro Page Content specification.
 */

export interface WegovyMounjaroLongFormContentProps {
  priceRows: HomePriceSnapshotRow[];
  firstSixMonths: {
    wegovyLow: string;
    wegovyTypical: string;
    mounjaroLow: string;
    mounjaroTypical: string;
  };
  wegovy72Low: string;
  wegovy72Typical: string;
  wegovy72Listed: number;
  wegovyProviderCount: number;
  mounjaroProviderCount: number;
  pricesChecked: string;
}

export default function WegovyMounjaroLongFormContent({
  priceRows,
  firstSixMonths,
  wegovy72Low,
  wegovy72Typical,
  wegovy72Listed,
  wegovyProviderCount,
  mounjaroProviderCount,
  pricesChecked,
}: WegovyMounjaroLongFormContentProps) {
  const mounjaroProviders = getMounjaroCompareProviders();
  const wegovyProviders = getWegovyCompareProviders();

  // Starting, mid, top dose values for Table 0
  const wStartPriced = wegovyProviders.map((p) => wegovyPriceAmount(p.prices["0.25mg"])).filter((n): n is number => n != null && n > 0);
  const wMidPriced = wegovyProviders.map((p) => wegovyPriceAmount(p.prices["1mg"])).filter((n): n is number => n != null && n > 0);
  const wTopPriced = wegovyProviders.map((p) => wegovyPriceAmount(p.prices["2.4mg"])).filter((n): n is number => n != null && n > 0);

  const mStartPriced = mounjaroProviders.map((p) => p.prices["2.5mg"]).filter((n) => typeof n === "number" && n > 0);
  const mMidPriced = mounjaroProviders.map((p) => p.prices["7.5mg"]).filter((n) => typeof n === "number" && n > 0);
  const mTopPriced = mounjaroProviders.map((p) => p.prices["15mg"]).filter((n) => typeof n === "number" && n > 0);

  const table0Rows = [
    {
      label: "Starting dose (Wegovy 0.25 mg, Mounjaro 2.5 mg)",
      wLow: wStartPriced.length > 0 ? formatGbp(Math.min(...wStartPriced)) : "Not listed",
      wHigh: wStartPriced.length > 0 ? formatGbp(Math.max(...wStartPriced)) : "Not listed",
      mLow: mStartPriced.length > 0 ? formatGbp(Math.min(...mStartPriced)) : "Not listed",
      mHigh: mStartPriced.length > 0 ? formatGbp(Math.max(...mStartPriced)) : "Not listed",
    },
    {
      label: "Mid dose (Wegovy 1.0 mg, Mounjaro 7.5 mg)",
      wLow: wMidPriced.length > 0 ? formatGbp(Math.min(...wMidPriced)) : "Not listed",
      wHigh: wMidPriced.length > 0 ? formatGbp(Math.max(...wMidPriced)) : "Not listed",
      mLow: mMidPriced.length > 0 ? formatGbp(Math.min(...mMidPriced)) : "Not listed",
      mHigh: mMidPriced.length > 0 ? formatGbp(Math.max(...mMidPriced)) : "Not listed",
    },
    {
      label: "Usual top dose (Wegovy 2.4 mg, Mounjaro 15 mg)",
      wLow: wTopPriced.length > 0 ? formatGbp(Math.min(...wTopPriced)) : "Not listed",
      wHigh: wTopPriced.length > 0 ? formatGbp(Math.max(...wTopPriced)) : "Not listed",
      mLow: mTopPriced.length > 0 ? formatGbp(Math.min(...mTopPriced)) : "Not listed",
      mHigh: mTopPriced.length > 0 ? formatGbp(Math.max(...mTopPriced)) : "Not listed",
    },
  ];

  // Table 1: Partner first month breakdown
  const partnerFirstMonthRows = PROVIDERS.filter((p) => p.active).map((p) => {
    const w = wegovyProviders.find((x) => x.id === p.id);
    const m = mounjaroProviders.find((x) => x.id === p.id);
    const wVal = w?.prices["0.25mg"] ? formatWegovyPriceCell(w.prices["0.25mg"]) : "not offered";
    const mVal = m?.prices["2.5mg"] && m.prices["2.5mg"] > 0 ? formatGbp(m.prices["2.5mg"]) : "not offered";
    const deliv = p.standardDeliveryFee === 0 ? "Free delivery" : `Delivery ${formatGbp(p.standardDeliveryFee)}`;
    const consult = w?.consultationIncluded ? "Consultation included" : "Consultation fee applies";
    return {
      name: p.name,
      id: p.id,
      wegovyPrice: wVal,
      mounjaroPrice: mVal,
      included: `${consult}; ${deliv}`,
    };
  });

  // Table 2: 6 month titration steps, every price is the lowest listed standard
  // price at that dose, and the totals are summed from these same rows.
  const lowestAt = (values: Array<number | null | undefined>): number | null => {
    const priced = values.filter((n): n is number => typeof n === "number" && n > 0);
    return priced.length > 0 ? Math.min(...priced) : null;
  };
  const WEGOVY_STEPS = [
    ["0.25 mg", "0.25mg"],
    ["0.5 mg", "0.5mg"],
    ["1.0 mg", "1mg"],
    ["1.7 mg", "1.7mg"],
    ["2.4 mg", "2.4mg"],
    ["2.4 mg", "2.4mg"],
  ] as const;
  const MOUNJARO_STEPS = [
    ["2.5 mg", "2.5mg"],
    ["5 mg", "5mg"],
    ["7.5 mg", "7.5mg"],
    ["10 mg", "10mg"],
    ["12.5 mg", "12.5mg"],
    ["15 mg", "15mg"],
  ] as const;
  const titrationRaw = WEGOVY_STEPS.map(([wDose, wKey], i) => {
    const [mDose, mKey] = MOUNJARO_STEPS[i];
    return {
      month: String(i + 1),
      wDose,
      mDose,
      wValue: lowestAt(
        wegovyProviders.map((p) => wegovyPriceAmount(p.prices[wKey as keyof typeof p.prices])),
      ),
      mValue: lowestAt(
        mounjaroProviders.map((p) => p.prices[mKey as keyof typeof p.prices] as number),
      ),
    };
  });
  const titrationSchedule = titrationRaw.map((r) => ({
    month: r.month,
    wDose: r.wDose,
    mDose: r.mDose,
    wLow: r.wValue != null ? formatGbp(r.wValue) : "Not listed",
    mLow: r.mValue != null ? formatGbp(r.mValue) : "Not listed",
  }));
  const sumOrNull = (vals: Array<number | null>): number | null =>
    vals.every((v) => v != null)
      ? Math.round((vals as number[]).reduce((a, b) => a + b, 0) * 100) / 100
      : null;
  const wegovySixMonthTotal = sumOrNull(titrationRaw.map((r) => r.wValue));
  const mounjaroSixMonthTotal = sumOrNull(titrationRaw.map((r) => r.mValue));
  const wegovySixMonthLow =
    wegovySixMonthTotal != null ? formatGbp(wegovySixMonthTotal) : firstSixMonths.wegovyLow;
  const mounjaroSixMonthLow =
    mounjaroSixMonthTotal != null ? formatGbp(mounjaroSixMonthTotal) : firstSixMonths.mounjaroLow;

  // Table 3: Offers
  const partnerOffers = PROVIDERS.filter((p) => p.active).map((p) => {
    const w = wegovyProviders.find((x) => x.id === p.id);
    const wVal = w?.prices["0.25mg"] ? formatWegovyPriceCell(w.prices["0.25mg"]) : "not offered";
    const offer = p.offers[0];
    return {
      name: p.name,
      standardPrice: wVal,
      offerPrice: offer ? (offer.summary.includes("£") ? offer.summary : "Discount available") : "Standard retail price",
      condition: offer ? (offer.code ? `Code: ${offer.code} (${offer.label ?? "New customers"})` : offer.summary) : "None advertised",
    };
  });

  return (
    <>
      {/* ============================================================== */}
      {/* SECTION 2: WEGOVY VS MOUNJARO AT A GLANCE */}
      {/* ============================================================== */}
      <section
        id="quick-verdict"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Wegovy vs Mounjaro at a glance
            </h2>
            <div className="mt-6 space-y-3 rounded-2xl border border-slate-200/90 bg-slate-50/70 p-6 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                <strong className="font-semibold text-slate-900">Starting dose, lowest price we found:</strong>{" "}
                Wegovy 0.25 mg {table0Rows[0].wLow}; Mounjaro 2.5 mg {table0Rows[0].mLow}.
              </p>
              <p>
                <strong className="font-semibold text-slate-900">First month cost:</strong>{" "}
                Wegovy from {table0Rows[0].wLow}; Mounjaro from {table0Rows[0].mLow}.
              </p>
              <p>
                <strong className="font-semibold text-slate-900">Estimated 6 month cost:</strong>{" "}
                Wegovy {wegovySixMonthLow} to {firstSixMonths.wegovyTypical}; Mounjaro {mounjaroSixMonthLow} to {firstSixMonths.mounjaroTypical}. This is an estimate, see section 3.2.
              </p>
              <p className="text-xs text-slate-500 font-medium pt-2 border-t border-slate-200">
                Prices checked: {pricesChecked}.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/mounjaro-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Mounjaro prices by partner
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="/wegovy-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              >
                Wegovy prices by partner
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              We compare selected partner pharmacies, not the whole UK market. Lowest and highest prices come only from the partners in our comparison.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 3: WEGOVY VS MOUNJARO COST IN THE UK */}
      {/* ============================================================== */}
      <section
        id="cost"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Wegovy vs Mounjaro cost in the UK
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              The price you pay for the same month of treatment changes with the dose, and the two medicines step up at different points. Prices below are from selected partner pharmacies and were checked on {pricesChecked}.
            </p>
            <PriceVerificationDisclaimer variant="inline" checkDate={pricesChecked} className="mt-2 text-sm text-slate-500" />
            <p className="mt-2 text-sm text-slate-500">
              Full tables by partner:{" "}
              <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-800 underline hover:text-emerald-950">Mounjaro</Link> and{" "}
              <Link href="/wegovy-price-comparison" className="font-semibold text-teal-800 underline hover:text-teal-950">Wegovy</Link>.
            </p>
          </div>

          <ComparisonCoverageNote
            statistics="Lowest and highest"
            className="mt-8"
          />

          {/* TABLE 0: Comparison Table */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="border-b border-slate-200 bg-slate-50/80 px-5 py-3.5">
              <p className="text-sm font-bold text-slate-900 md:text-base">
                Wegovy vs Mounjaro prices at our latest check
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-140 border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold uppercase">
                    <th scope="col" className="px-4 py-3">Dose</th>
                    <th scope="col" className="px-4 py-3 text-teal-900">Wegovy lowest</th>
                    <th scope="col" className="px-4 py-3 text-teal-700">Wegovy highest</th>
                    <th scope="col" className="px-4 py-3 text-emerald-900">Mounjaro lowest</th>
                    <th scope="col" className="px-4 py-3 text-emerald-700">Mounjaro highest</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {table0Rows.map((row) => (
                    <tr key={row.label} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-semibold text-slate-900">{row.label}</td>
                      <td className="px-4 py-3 font-bold text-teal-800 tabular-nums">{row.wLow}</td>
                      <td className="px-4 py-3 text-slate-600 tabular-nums">{row.wHigh}</td>
                      <td className="px-4 py-3 font-bold text-emerald-800 tabular-nums">{row.mLow}</td>
                      <td className="px-4 py-3 text-slate-600 tabular-nums">{row.mHigh}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3.1 First month cost */}
          <div className="mt-12 max-w-3xl">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              First month cost
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Most people start on the lowest dose, so the first month is usually the cheapest month. Here is what the first month costs at each partner. If a partner only sells one of the two, the other cell says &quot;not offered&quot;.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-120 border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold uppercase">
                    <th className="px-4 py-3">Partner</th>
                    <th className="px-4 py-3 text-teal-900">Wegovy first month (0.25 mg)</th>
                    <th className="px-4 py-3 text-emerald-900">Mounjaro first month (2.5 mg)</th>
                    <th className="px-4 py-3">What is included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {partnerFirstMonthRows.map((r) => (
                    <tr key={r.id} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-medium text-slate-900">
                        <Link href={`/pharmacies/${r.id}`} className="underline hover:text-emerald-700">
                          {r.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3 tabular-nums font-semibold text-teal-800">{r.wegovyPrice}</td>
                      <td className="px-4 py-3 tabular-nums font-semibold text-emerald-800">{r.mounjaroPrice}</td>
                      <td className="px-4 py-3 text-xs text-slate-600">{r.included}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-slate-100 bg-slate-50/60 px-4 py-2.5 text-xs font-medium text-slate-500">
              Prices checked {pricesChecked}
            </p>
          </div>

          {/* 3.2 Estimated 6 month cost */}
          <div className="mt-12 max-w-3xl">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Estimated 6 month cost
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              This is an estimate, not a quote. It assumes you start on the lowest dose, move up one step every 4 weeks as the standard schedule allows, and that prices stay the same as on {pricesChecked}. Your own dose may differ, and your prescriber decides the plan.
            </p>
            <p className="mt-2 text-sm text-slate-500">
              See the dose ladders in detail on the{" "}
              <Link href="/wegovy-price-comparison" className="font-semibold text-teal-800 underline hover:text-teal-950">Wegovy price page</Link> and the{" "}
              <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-800 underline hover:text-emerald-950">Mounjaro price page</Link>.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-120 border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold uppercase">
                    <th className="px-4 py-3">Month</th>
                    <th className="px-4 py-3 text-teal-900">Wegovy dose</th>
                    <th className="px-4 py-3 text-teal-900">Wegovy lowest price</th>
                    <th className="px-4 py-3 text-emerald-900">Mounjaro dose</th>
                    <th className="px-4 py-3 text-emerald-900">Mounjaro lowest price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {titrationSchedule.map((s) => (
                    <tr key={s.month} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-semibold text-slate-900">Month {s.month}</td>
                      <td className="px-4 py-3 text-slate-700">{s.wDose}</td>
                      <td className="px-4 py-3 tabular-nums font-semibold text-teal-800">{s.wLow}</td>
                      <td className="px-4 py-3 text-slate-700">{s.mDose}</td>
                      <td className="px-4 py-3 tabular-nums font-semibold text-emerald-800">{s.mLow}</td>
                    </tr>
                  ))}
                  <tr className="bg-emerald-50/70 font-bold text-slate-900">
                    <td className="px-4 py-3.5">6 month total</td>
                    <td className="px-4 py-3.5">—</td>
                    <td className="px-4 py-3.5 text-teal-900 tabular-nums">{wegovySixMonthLow}</td>
                    <td className="px-4 py-3.5">—</td>
                    <td className="px-4 py-3.5 text-emerald-900 tabular-nums">{mounjaroSixMonthLow}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 3.3 Standard price and offer price */}
          <div className="mt-12 max-w-3xl">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 md:text-2xl">
              Standard price and offer price
            </h3>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Some partners show a lower price for new customers or when you use a code. We show the standard price first and the offer price next to it, so the comparison stays fair. Offers can change or end, so check the partner&apos;s own page before you order.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-120 border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold uppercase">
                    <th className="px-4 py-3">Partner</th>
                    <th className="px-4 py-3">Standard price (first month)</th>
                    <th className="px-4 py-3">Offer price</th>
                    <th className="px-4 py-3">Code or condition</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {partnerOffers.map((o) => (
                    <tr key={o.name} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-medium text-slate-900">{o.name}</td>
                      <td className="px-4 py-3 tabular-nums text-slate-800">{o.standardPrice}</td>
                      <td className="px-4 py-3 font-semibold text-emerald-800">{o.offerPrice}</td>
                      <td className="px-4 py-3 text-xs text-slate-600">{o.condition}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 4: WHAT EACH PRICE INCLUDES */}
      {/* ============================================================== */}
      <section
        id="what-included"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              What each price includes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Two prices that look the same may cover different things. Check these before you compare.
            </p>
            <p className="mt-3 font-semibold text-slate-900">
              Things that often change the final price:
            </p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
              <li>Whether the online consultation is free or charged.</li>
              <li>Delivery fees or delivery speed options.</li>
              <li>Whether the price is per pen (one month) or per dose.</li>
              <li>Whether a code or new customer offer applies.</li>
              <li>Whether the price changes when you move up a dose.</li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              Prices checked: {pricesChecked}. Always confirm the final price at the partner before you order.
            </p>
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-140 border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold uppercase">
                    <th className="px-4 py-3">Partner</th>
                    <th className="px-4 py-3">Medicine</th>
                    <th className="px-4 py-3">Pen or supply</th>
                    <th className="px-4 py-3">Consultation</th>
                    <th className="px-4 py-3">Delivery</th>
                    <th className="px-4 py-3">Dose changes</th>
                    <th className="px-4 py-3">Not included</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700 text-xs sm:text-sm">
                  {PROVIDERS.filter((p) => p.active).flatMap((p) => [
                    <tr key={`${p.id}-wegovy`} className="hover:bg-slate-50/80">
                      <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                      <td className="px-4 py-3 text-teal-800 font-semibold">Wegovy</td>
                      <td className="px-4 py-3">1 pen (4 weekly doses)</td>
                      <td className="px-4 py-3 text-emerald-700">Included</td>
                      <td className="px-4 py-3">{p.standardDeliveryFee === 0 ? "Free tracked" : `£${p.standardDeliveryFee.toFixed(2)} tracked`}</td>
                      <td className="px-4 py-3">Price steps up by dose</td>
                      <td className="px-4 py-3 text-slate-500">Optional express delivery</td>
                    </tr>,
                    <tr key={`${p.id}-mounjaro`} className="hover:bg-slate-50/80 bg-slate-50/30">
                      <td className="px-4 py-3 font-medium text-slate-900">{p.name}</td>
                      <td className="px-4 py-3 text-emerald-800 font-semibold">Mounjaro</td>
                      <td className="px-4 py-3">1 KwikPen (4 doses)</td>
                      <td className="px-4 py-3 text-emerald-700">Included</td>
                      <td className="px-4 py-3">{p.standardDeliveryFee === 0 ? "Free tracked" : `£${p.standardDeliveryFee.toFixed(2)} tracked`}</td>
                      <td className="px-4 py-3">Price steps up by dose</td>
                      <td className="px-4 py-3 text-slate-500">Optional express delivery</td>
                    </tr>,
                  ])}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 5: WHAT IS THE DIFFERENCE */}
      {/* ============================================================== */}
      <section
        id="difference"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Wegovy vs Mounjaro: what is the difference?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Both are prescription weekly injections for weight management. Wegovy contains semaglutide. Mounjaro contains tirzepatide. The doses are measured in mg, but the numbers do not match between the two, because they are different medicines. A 2.4 mg Wegovy dose and a 2.5 mg Mounjaro dose are not equivalent, so compare prices at the same step of the schedule, not at the same mg number.
            </p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              For a full explanation of each medicine, see{" "}
              <Link href="/what-is-mounjaro" className="font-semibold text-emerald-800 underline hover:text-emerald-950">
                What is Mounjaro?
              </Link>{" "}
              and{" "}
              <Link href="/what-is-wegovy" className="font-semibold text-teal-800 underline hover:text-teal-950">
                What is Wegovy?
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 6: PUBLISHED TRIAL FINDINGS */}
      {/* ============================================================== */}
      <section
        id="trial-findings"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Published trial findings
            </h2>
            <p className="mt-4 text-sm font-medium text-slate-500">
              This section reports published research. It is not Healthwise360 data and it says nothing about price.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              The main head to head study is SURMOUNT-5, published in the New England Journal of Medicine in 2025. It was a 72 week, open label trial of 751 adults with obesity, or overweight with a weight-related condition, and without diabetes. Each person took the maximum tolerated dose of either tirzepatide (Mounjaro) or semaglutide (Wegovy).
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              The trial was funded by Eli Lilly, which makes tirzepatide. Results from a trial group do not predict what any one person will lose. Your prescriber decides which medicine is suitable for you.
            </p>
          </div>

          {/* TABLE 5: Trial Results */}
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm max-w-3xl">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-slate-900 text-xs font-semibold uppercase">
                  <th className="px-4 py-3">Result at 72 weeks</th>
                  <th className="px-4 py-3 text-emerald-900">Tirzepatide (Mounjaro)</th>
                  <th className="px-4 py-3 text-teal-900">Semaglutide (Wegovy)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/80">
                  <td className="px-4 py-3 font-semibold text-slate-900">Average weight change</td>
                  <td className="px-4 py-3 font-bold text-emerald-800">20.2%</td>
                  <td className="px-4 py-3 font-bold text-teal-800">13.7%</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="px-4 py-3 font-semibold text-slate-900">Average weight lost</td>
                  <td className="px-4 py-3 font-bold text-emerald-800">22.8 kg</td>
                  <td className="px-4 py-3 font-bold text-teal-800">15.0 kg</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="px-4 py-3 font-semibold text-slate-900">Stopped treatment because of stomach side effects</td>
                  <td className="px-4 py-3">2.7%</td>
                  <td className="px-4 py-3">5.6%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-slate-500 max-w-3xl">
            Source: SURMOUNT-5 summary, American College of Cardiology. Original paper: Aronne LJ et al., NEJM, 2025, doi:10.1056/NEJMoa2416394.
          </p>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 7: HEALTHWISE360 PRICING RESEARCH */}
      {/* ============================================================== */}
      <section
        id="pricing-research"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Healthwise360 pricing research
            </h2>
            <p className="mt-4 text-sm font-medium text-slate-500">
              This section is our own price research. It is not clinical evidence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              On our {pricesChecked} check of selected UK partners, we found:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
              <li>The lowest Wegovy starting dose price was {table0Rows[0].wLow} and the highest was {table0Rows[0].wHigh}.</li>
              <li>The lowest Mounjaro starting dose price was {table0Rows[0].mLow} and the highest was {table0Rows[0].mHigh}.</li>
              <li>Over an estimated 6 months, the lowest total we found was {wegovySixMonthLow} for Wegovy and {mounjaroSixMonthLow} for Mounjaro (section 3.2).</li>
              <li>The price gap between the two is larger at the top dose than at the starting dose.</li>
              <li>Standard and offer prices are shown separately, so an offer does not change the totals above.</li>
            </ul>
            <p className="mt-4 text-sm text-slate-600">
              For price history, partner by partner detail and dose ladders, see the{" "}
              <Link href="/wegovy-price-comparison" className="font-semibold text-teal-800 underline hover:text-teal-950">Wegovy price comparison</Link>{" "}
              and the{" "}
              <Link href="/mounjaro-price-comparison" className="font-semibold text-emerald-800 underline hover:text-emerald-950">Mounjaro price comparison</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 8: SIDE EFFECTS AND THE NHS IN BRIEF */}
      {/* ============================================================== */}
      <section
        id="side-effects-nhs"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Side effects and the NHS in brief
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              <p>
                <strong className="font-semibold text-slate-900">Side effects:</strong> Both medicines most often cause stomach related side effects such as nausea, diarrhoea, vomiting and constipation, especially when you start or move up a dose. This is not a full list. Read the patient leaflet for Mounjaro and Wegovy, and our guides{" "}
                <Link href="/what-is-mounjaro" className="font-semibold text-emerald-800 underline hover:text-emerald-950">What is Mounjaro?</Link>{" "}
                and{" "}
                <Link href="/what-is-wegovy" className="font-semibold text-teal-800 underline hover:text-teal-950">What is Wegovy?</Link>.
              </p>
              <p>
                <strong className="font-semibold text-slate-900">Mounjaro and the contraceptive pill:</strong> Mounjaro can make oral contraceptive pills work less well for a time. Check the leaflet and ask your prescriber about extra contraception.
              </p>
              <p>
                <strong className="font-semibold text-slate-900">The NHS:</strong> Both medicines can be prescribed on the NHS only to people who meet set criteria, and access depends on where you live. See NICE guidance TA1026 (Mounjaro) and NHS England weight management injections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 9: WHICH ONE SUITS YOUR BUDGET */}
      {/* ============================================================== */}
      <section
        id="which-budget"
        className="scroll-mt-28 border-b border-slate-200/80 bg-slate-50/60 py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Which one suits your budget?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Use the tables above to decide, then confirm with a prescriber.
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-700 sm:text-base">
              <li>If the first month cost matters most, compare the starting dose prices in section 3.1.</li>
              <li>If you are planning ahead, use the 6 month estimate in section 3.2, because the price changes as the dose goes up.</li>
              <li>If you are comparing offers, check the standard price first, then the offer price in section 3.3.</li>
              <li>If you are unsure what is included, read section 4 before you choose a partner.</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              The cheaper medicine at one dose is not always cheaper at another, so check the dose you are likely to be on. Only a prescriber can decide which medicine is suitable for you. This page does not give medical advice.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link
                href="/wegovy-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              >
                Compare Wegovy prices
              </Link>
              <Link
                href="/mounjaro-price-comparison"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
              >
                Compare Mounjaro prices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SECTION 10: HOW WE COMPARE */}
      {/* ============================================================== */}
      <section
        id="methodology"
        className="scroll-mt-28 border-b border-slate-200/80 bg-white py-12 md:py-16"
      >
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              How we compare Wegovy and Mounjaro prices
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              We compare selected online partner pharmacies, not the whole UK market. We record each partner&apos;s standard price and any offer price separately, with the date we checked it ({pricesChecked}). Lowest and highest prices are calculated only from the partners in our comparison. Prices and offers can change, so check the partner&apos;s own page before you order.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.
            </p>
            <div className="mt-6">
              <Link
                href="/methodology"
                className="font-semibold text-emerald-800 underline hover:text-emerald-950"
              >
                How our comparison works →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* SOURCES */}
      {/* ============================================================== */}
      <section className="border-b border-slate-200/80 bg-slate-50/60 py-8">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <div className="max-w-3xl">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Sources
            </h3>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-xs text-slate-600 leading-relaxed sm:text-sm">
              <li>SURMOUNT-5 summary, American College of Cardiology</li>
              <li>Mounjaro patient leaflet (emc)</li>
              <li>Wegovy patient leaflet (emc)</li>
              <li>NICE TA1026: Tirzepatide for managing overweight and obesity</li>
              <li>NHS England: weight management injections guidance</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
