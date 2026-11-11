import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";
import { getProvider } from "@/lib/data/providers";
import {
  MOUNJARO_DOSE_KEYS,
  MOUNJARO_UK_COMPARE_PROVIDERS,
  type MounjaroDoseColumnKey,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  WEGOVY_DOSE_KEYS,
  WEGOVY_UK_COMPARE_PROVIDERS,
  wegovyPriceAmount,
  type WegovyDoseColumnKey,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";

function getMounjaroLowest(dose: MounjaroDoseColumnKey, providers: MounjaroUkProviderCompare[]): string {
  const nums = providers.flatMap((p) => {
    const v = p.prices[dose];
    return typeof v === "number" && v > 0 ? [v] : [];
  });
  return nums.length ? `£${Math.min(...nums).toFixed(2)}` : "TBC";
}

function getWegovyLowest(dose: WegovyDoseColumnKey, providers: WegovyUkProviderCompare[]): string {
  const nums = providers.flatMap((p) => {
    const v = wegovyPriceAmount(p.prices[dose]);
    return v != null && v > 0 ? [v] : [];
  });
  return nums.length ? `£${Math.min(...nums).toFixed(2)}` : "TBC";
}

function getProviderMounjaroFrom(providerId: string, providers: MounjaroUkProviderCompare[]): string {
  const p = providers.find((x) => x.id === providerId);
  if (!p) return "";
  const nums = MOUNJARO_DOSE_KEYS.flatMap((k) => {
    const v = p.prices[k];
    return typeof v === "number" && v > 0 ? [v] : [];
  });
  return nums.length ? `£${Math.min(...nums).toFixed(2)}` : "";
}

function getProviderWegovyFrom(providerId: string, providers: WegovyUkProviderCompare[]): string {
  const p = providers.find((x) => x.id === providerId);
  if (!p) return "";
  const nums = WEGOVY_DOSE_KEYS.flatMap((k) => {
    const v = wegovyPriceAmount(p.prices[k]);
    return v != null && v > 0 ? [v] : [];
  });
  return nums.length ? `£${Math.min(...nums).toFixed(2)}` : "";
}

const PARTNER_STATIC_META = [
  {
    name: "DoseDirect",
    gphc: "9012841",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012841",
    delivery: "Included",
    included: "Consultation, delivery, same day dispatch before 1pm, tracked cold chain packaging",
    repeatOrder: "Same pen price; not separately stated",
    providerId: "dosedirect",
  },
  {
    name: "i-Prescribe",
    gphc: "9012850",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012850",
    delivery: "£4.99 Tracked 48, £5.99 Tracked 24",
    included: "Consultation",
    repeatOrder: "Same pen price; not separately stated",
    providerId: "i-prescribe",
  },
  {
    name: "Pharmacy + Me",
    gphc: "9012604",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012604",
    delivery: "£4.99 (Royal Mail Tracked 24)",
    included: "Consultation",
    repeatOrder: "Same pen price; not separately stated",
    providerId: "pharmacy-me",
  },
  {
    name: "Reach Online Pharmacy",
    gphc: "1093332",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/1093332",
    delivery: "£4.99 Tracked 48, £5.99 Tracked 24, £9.99 next day before 1pm",
    included: "Consultation, needles and sharps container",
    repeatOrder: "Same pen price; not separately stated",
    providerId: "reach-online-pharmacy",
  },
  {
    name: "SheMed",
    gphc: "9012578",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012578",
    delivery: "Free standard delivery",
    included: "Consultation, blood screening, delivery",
    repeatOrder: "Same pen price; not separately stated",
    providerId: "shemed",
  },
  {
    name: "Solira",
    gphc: "9013213",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9013213",
    delivery: "£3.99 for pens, £2.99 for tablets",
    included: "Consultation",
    repeatOrder: "Same pen price; not separately stated",
    providerId: "solira",
  },
];

const COST_FACTORS = [
  { cost: "Pen price", check: "The price for your strength, and whether a discount applies once or every month" },
  { cost: "First order price", check: "Whether a lower first price is a one off offer" },
  { cost: "Repeat order price", check: "The price from your second order onwards" },
  { cost: "Consultation fee", check: "Whether it is included, charged once or charged every time" },
  { cost: "Delivery charge", check: "Whether it is free, how it is sent and how long it takes" },
  { cost: "Extras", check: "Whether needles and a sharps bin are included" },
];

type Props = {
  mounjaroProviders?: MounjaroUkProviderCompare[];
  wegovyProviders?: WegovyUkProviderCompare[];
};

export default function HomeContentNov2026({
  mounjaroProviders = MOUNJARO_UK_COMPARE_PROVIDERS,
  wegovyProviders = WEGOVY_UK_COMPARE_PROVIDERS,
}: Props) {
  const mjGlancePrices = MOUNJARO_DOSE_KEYS.map((dose) => ({
    strength: dose,
    price: getMounjaroLowest(dose, mounjaroProviders),
  }));

  const wegovyGlancePrices = WEGOVY_DOSE_KEYS.map((dose) => ({
    strength: dose,
    price: getWegovyLowest(dose, wegovyProviders),
  }));

  const partnerCards = PARTNER_STATIC_META.map((p) => ({
    ...p,
    mjFrom: getProviderMounjaroFrom(p.providerId, mounjaroProviders),
    wgFrom: getProviderWegovyFrom(p.providerId, wegovyProviders),
  }));

  const fullPartnerTable = PARTNER_STATIC_META.map((p) => {
    const mjFrom = getProviderMounjaroFrom(p.providerId, mounjaroProviders);
    const wgFrom = getProviderWegovyFrom(p.providerId, wegovyProviders);
    return {
      partner: p.name,
      firstOrder: `Mounjaro from ${mjFrom}, Wegovy from ${wgFrom}`,
      repeatOrder: p.repeatOrder,
      fee: "Included",
      delivery: p.delivery,
      included: p.included,
    };
  });
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 space-y-16 py-12">
      {/* SECTION 3: Answer block */}
      <section id="cost-answer-block" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          How much do weight loss injections cost in the UK?
        </h2>
        <div className="mt-4 space-y-4 text-slate-700 leading-relaxed text-base sm:text-lg">
          <p>
            The cost of weight loss injections depends on the medicine, the strength of the pen and the pharmacy.
            Weight loss injections prices are quoted for one pen, which holds four weekly doses, so a pen is a four
            week supply. The table below shows the lowest checked price among our selected provider partners for
            each strength on the date shown.
          </p>
          <p>
            How much do weight loss injections cost per month? It is the price of the pen for the strength you are on,
            plus any consultation fee and delivery charge. Treatment starts on the lowest strength, and the cost of
            weight loss injections UK pharmacies charge rises when your prescriber moves you up a strength. What do
            you pay in the end? Add the pen, the consultation and the delivery, and compare that total.
          </p>
        </div>
      </section>

      {/* SECTION 4: Price at a glance */}
      <section id="price-at-a-glance" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Weight loss injection prices at a glance
        </h2>
        <p className="mt-2 text-slate-600">
          The lowest checked price among our partners for one pen of each strength. Each pen holds four weekly doses.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mounjaro Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="bg-emerald-50/80 px-4 py-3 border-b border-slate-200">
              <h3 className="font-bold text-slate-900">Mounjaro (tirzepatide)</h3>
            </div>
            <table className="w-full text-left text-sm divide-y divide-slate-200">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Strength</th>
                  <th className="px-4 py-3 font-semibold">Lowest checked price among our partners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {mjGlancePrices.map((row) => (
                  <tr key={row.strength} className="hover:bg-slate-50/50">
                    <td className="px-4 py-2.5 font-medium text-slate-900">{row.strength}</td>
                    <td className="px-4 py-2.5 text-emerald-700 font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Wegovy Table */}
          <div className="rounded-xl border border-slate-200 overflow-hidden">
            <div className="bg-teal-50/80 px-4 py-3 border-b border-slate-200">
              <h3 className="font-bold text-slate-900">Wegovy (semaglutide)</h3>
            </div>
            <table className="w-full text-left text-sm divide-y divide-slate-200">
              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="px-4 py-3 font-semibold">Strength</th>
                  <th className="px-4 py-3 font-semibold">Lowest checked price among our partners</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {wegovyGlancePrices.map((row) => (
                  <tr key={row.strength} className="hover:bg-slate-50/50">
                    <td className="px-4 py-2.5 font-medium text-slate-900">{row.strength}</td>
                    <td className="px-4 py-2.5 text-teal-700 font-semibold">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-slate-500">
          Prices checked on {PRICE_CHECK_DATE_LONG}. Weight loss injection prices change, so check the date before you order.
        </p>
      </section>

      {/* SECTION 5: Compare weight loss injections in the UK */}
      <section id="compare-partners" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Compare weight loss injections in the UK
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed max-w-4xl">
          Compare weight loss injection prices across our selected provider partners. Each one is a GPhC
          registered pharmacy, and each card shows the pen price for both medicines, the delivery charge and what
          the service includes, so a weight loss injections comparison UK shoppers can trust is easy to read. Use it
          with the full cost list in section 7, because the lowest pen price is not always the lowest total.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerCards.map((p) => (
            <div key={p.name} className="flex flex-col justify-between rounded-xl border border-slate-200 p-5 bg-slate-50/50 hover:border-slate-300 transition">
              <div>
                <h3 className="text-lg font-bold text-slate-900">{p.name}</h3>
                <p className="mt-1 text-xs text-slate-500">
                  GPhC number{" "}
                  <a href={p.gphcUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-600 underline">
                    {p.gphc}
                  </a>
                </p>
                <div className="mt-3 space-y-1 text-sm text-slate-700">
                  <p className="font-medium text-slate-900">
                    Mounjaro from <span className="text-emerald-700 font-bold">{p.mjFrom}</span>, Wegovy from <span className="text-teal-700 font-bold">{p.wgFrom}</span>
                  </p>
                  <p className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">Delivery charge:</span> {p.delivery}
                  </p>
                  <p className="text-xs text-slate-600">
                    <span className="font-semibold text-slate-800">What is included:</span> {p.included}
                  </p>
                </div>
              </div>
              <div className="mt-5">
                <a
                  href={getProvider(p.providerId)?.affiliate.outboundUrl ?? "/pharmacies"}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-pharmacy={p.name}
                  data-provider-id={p.providerId}
                  data-hw-provider={p.name}
                  data-hw-provider-id={p.providerId}
                  data-hw-medication="Mounjaro and Wegovy"
                  data-hw-dose=""
                  data-hw-total-pence={0}
                  data-hw-monetised="true"
                  data-hw-placement="homepage-partner-card"
                  className="hw360-cta inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition"
                >
                  Visit partner
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/pharmacies"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 transition"
          >
            See our selected partners
          </Link>
        </div>
      </section>

      {/* SECTION 6: Mounjaro and Wegovy in short */}
      <section id="medicines-in-short" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Weight loss jab price comparison: Mounjaro and Wegovy
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Most people who ask for a weight loss jab price comparison are looking at two medicines. Both are once
          weekly injections that need a prescription, and both are given with a reduced calorie diet and more
          physical activity. A prescriber decides which one is suitable.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
            <h3 className="text-lg font-bold text-slate-900">Mounjaro</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Mounjaro contains tirzepatide, which acts on two gut hormone receptors, GIP and GLP-1. Doses start at
              2.5mg and rise in steps, with at least four weeks on each strength. In the UK it is licensed for weight
              management in adults with a BMI of 30 or more, or 27 to under 30 with at least one weight related health
              problem. Read{" "}
              <Link href="/what-is-mounjaro" className="font-semibold text-emerald-600 underline">
                what is Mounjaro
              </Link>{" "}
              and the{" "}
              <Link href="/helpful-guides/mounjaro-side-effects-uk" className="font-semibold text-emerald-600 underline">
                Mounjaro side effects guide
              </Link>
              .
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
            <h3 className="text-lg font-bold text-slate-900">Wegovy</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Wegovy contains semaglutide, which acts on the GLP-1 receptor. Doses start at 0.25mg and rise over
              several steps. It is licensed for weight management in adults with the same BMI ranges. The two
              medicines must not be used together. Read{" "}
              <Link href="/what-is-wegovy" className="font-semibold text-teal-600 underline">
                what is Wegovy
              </Link>
              , or{" "}
              <Link href="/compare/wegovy-vs-mounjaro" className="font-semibold text-teal-600 underline">
                compare Wegovy vs Mounjaro side by side
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7: What else you pay for */}
      <section id="what-else-you-pay" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Weight loss treatment price comparison: what else you pay for
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          A weight loss treatment price comparison is only fair if it counts everything you pay. The pen price you see
          first is usually part of the bill. Use this list to compare weight loss medication prices UK pharmacies show
          like for like.
        </p>

        {/* Factors Table */}
        <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full text-left text-sm divide-y divide-slate-200">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-4 py-3 font-semibold">Cost</th>
                <th className="px-4 py-3 font-semibold">What to check</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {COST_FACTORS.map((f) => (
                <tr key={f.cost} className="hover:bg-slate-50/50">
                  <td className="px-4 py-2.5 font-medium text-slate-900 whitespace-nowrap">{f.cost}</td>
                  <td className="px-4 py-2.5 text-slate-700">{f.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm font-medium text-slate-800">
          Compare the total for the strength you need, not the headline pen price, and read the partner's own page
          before you order.
        </p>

        <div className="mt-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">
            How to compare weight loss injection prices
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            Start with the strength you were prescribed and read the lowest checked price. Then open the partner card
            and compare the delivery and consultation charges. A price comparison you can trust shows its date and its
            method, and each partner is a registered pharmacy that supplies only after a prescriber has assessed you.
          </p>
        </div>

        {/* Full Partner Table */}
        <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-left text-xs sm:text-sm divide-y divide-slate-200">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="px-3 py-3 font-semibold">Partner</th>
                <th className="px-3 py-3 font-semibold">First order price</th>
                <th className="px-3 py-3 font-semibold">Repeat order price</th>
                <th className="px-3 py-3 font-semibold">Consultation</th>
                <th className="px-3 py-3 font-semibold">Delivery</th>
                <th className="px-3 py-3 font-semibold">What is included</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {fullPartnerTable.map((r) => (
                <tr key={r.partner} className="hover:bg-slate-50/50">
                  <td className="px-3 py-3 font-bold text-slate-900 whitespace-nowrap">{r.partner}</td>
                  <td className="px-3 py-3 text-slate-700">{r.firstOrder}</td>
                  <td className="px-3 py-3 text-slate-700">{r.repeatOrder}</td>
                  <td className="px-3 py-3 text-emerald-600 font-medium whitespace-nowrap">{r.fee}</td>
                  <td className="px-3 py-3 text-slate-700 whitespace-nowrap">{r.delivery}</td>
                  <td className="px-3 py-3 text-slate-600">{r.included}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SECTION 8: How we choose partners and check prices */}
      <section id="how-we-choose" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          How we choose our partners and check prices
        </h2>
        <div className="mt-4 space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base">
          <p>
            Healthwise360 compares selected provider partners. A partner is a GPhC registered pharmacy that we
            work with directly, so we can confirm its retail prices with the pharmacy itself. We show the price for one
            pen before any discount code, and we list delivery separately, so you can see what you pay beyond the
            medicine.
          </p>
          <p>
            Every price on this page was checked on {PRICE_CHECK_DATE_LONG}, and the date is shown next to each table. Our
            partners may change, so the list can grow or change over time.
          </p>
          <p>
            Healthwise360 does not prescribe or sell medicines. Healthwise360 may earn commission when visitors use some partner links. Commercial relationships do not determine the ordering of providers in our price-sorted comparison tables. Providers cannot pay for a higher ranking. Promotional prices and discount codes are displayed separately from standard retail prices.
            Read our affiliate disclosure and how we compare in full.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            href="/methodology"
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            How we compare
          </Link>
          <Link
            href="/methodology#affiliate-links"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Read our affiliate disclosure
          </Link>
        </div>
      </section>

      {/* SECTION 9: Are weight loss injections safe to buy online? */}
      <section id="safety-checks" className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Are weight loss injections safe to buy online?
        </h2>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Weight loss injections are prescription only medicines. They are safe to buy online only from a registered
          pharmacy, after a clinical assessment by a prescriber. Check these in order.
        </p>
        <ul className="mt-4 list-disc space-y-2.5 pl-6 text-sm sm:text-base text-slate-700">
          <li>A prescription is needed. A seller offering these medicines with no prescription is not operating lawfully.</li>
          <li>Look the pharmacy up on the GPhC register before you pay. Every partner shows its registration number.</li>
          <li>Compare the complete cost, including the consultation fee and the delivery charge.</li>
          <li>Leave the choice of medicine and dose to your prescriber, never to the price.</li>
          <li>Check the date next to the price. A price from last month may no longer be the price.</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="https://www.pharmacyregulation.org/registers/pharmacy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition"
          >
            Check a pharmacy on the GPhC register
            <ExternalLink className="h-4 w-4" />
          </a>
          <Link
            href="/pharmacy-safety-gphc-verification"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
          >
            Read the pharmacy safety guide
          </Link>
        </div>
      </section>
    </div>
  );
}
