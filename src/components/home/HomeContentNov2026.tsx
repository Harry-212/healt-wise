import Link from "next/link";
import React from "react";
import { ExternalLink } from "lucide-react";
import { PRICE_CHECK_DATE_LONG } from "@/lib/data/price-check";

const MJ_GLANCE_PRICES = [
  { strength: "2.5mg", price: "£119.99" },
  { strength: "5mg", price: "£149.99" },
  { strength: "7.5mg", price: "£205.99" },
  { strength: "10mg", price: "£232.99" },
  { strength: "12.5mg", price: "£251.99" },
  { strength: "15mg", price: "£272.99" },
];

const WEGOVY_GLANCE_PRICES = [
  { strength: "0.25mg", price: "£64.99" },
  { strength: "0.5mg", price: "£80.99" },
  { strength: "1mg", price: "£80.99" },
  { strength: "1.7mg", price: "£136.99" },
  { strength: "2.4mg", price: "£159.00" },
  { strength: "7.2mg", price: "£194.99" },
];

const PARTNER_CARDS_HOMEPAGE = [
  {
    name: "DoseDirect",
    gphc: "9012841",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012841",
    mjFrom: "£144.99",
    wgFrom: "£99.99",
    delivery: "Included",
    included: "Consultation, delivery, same day dispatch before 1pm, tracked cold chain packaging",
    href: "/go/dosedirect",
  },
  {
    name: "i-Prescribe",
    gphc: "9012850",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012850",
    mjFrom: "£160.00",
    wgFrom: "£129.99",
    delivery: "Delivery charge shown before you pay",
    included: "Consultation",
    href: "/go/iprescribe",
  },
  {
    name: "Pharmacy + Me",
    gphc: "9012604",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012604",
    mjFrom: "£132.99",
    wgFrom: "£80.99",
    delivery: "£4.99 (Royal Mail Tracked 24)",
    included: "Consultation",
    href: "/go/pharmacy-plus-me",
  },
  {
    name: "Reach Online Pharmacy",
    gphc: "1093332",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/1093332",
    mjFrom: "£154.99",
    wgFrom: "£94.99",
    delivery: "£4.99 standard, £5.99 tracked, £9.99 next day",
    included: "Consultation, needles and sharps container",
    href: "/go/reach",
  },
  {
    name: "SheMed",
    gphc: "9012578",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9012578",
    mjFrom: "£229.00",
    wgFrom: "£139.00",
    delivery: "Free standard delivery",
    included: "Consultation, blood screening, delivery",
    href: "/go/shemed",
  },
  {
    name: "Solira",
    gphc: "9013213",
    gphcUrl: "https://www.pharmacyregulation.org/registers/pharmacy/registrationnumber/9013213",
    mjFrom: "£119.99",
    wgFrom: "£64.99",
    delivery: "£3.99 for pens",
    included: "Consultation",
    href: "/go/solira",
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

const FULL_PARTNER_TABLE = [
  {
    partner: "DoseDirect",
    firstOrder: "Mounjaro from £144.99, Wegovy from £99.99",
    repeatOrder: "Same pen price; not separately stated",
    fee: "Included",
    delivery: "Included",
    included: "Consultation, delivery, same day dispatch before 1pm, tracked cold chain packaging",
  },
  {
    partner: "i-Prescribe",
    firstOrder: "Mounjaro from £160.00, Wegovy from £129.99",
    repeatOrder: "Same pen price; not separately stated",
    fee: "Included",
    delivery: "Delivery charge shown before you pay",
    included: "Consultation",
  },
  {
    partner: "Pharmacy + Me",
    firstOrder: "Mounjaro from £132.99, Wegovy from £80.99",
    repeatOrder: "Same pen price; not separately stated",
    fee: "Included",
    delivery: "£4.99 (Royal Mail Tracked 24)",
    included: "Consultation",
  },
  {
    partner: "Reach Online Pharmacy",
    firstOrder: "Mounjaro from £154.99, Wegovy from £94.99",
    repeatOrder: "Same pen price; not separately stated",
    fee: "Included",
    delivery: "£4.99 standard, £5.99 tracked, £9.99 next day",
    included: "Consultation, needles and sharps container",
  },
  {
    partner: "SheMed",
    firstOrder: "Mounjaro from £229.00, Wegovy from £139.00",
    repeatOrder: "Same pen price; not separately stated",
    fee: "Included",
    delivery: "Free standard delivery",
    included: "Consultation, blood screening, delivery",
  },
  {
    partner: "Solira",
    firstOrder: "Mounjaro from £119.99, Wegovy from £64.99",
    repeatOrder: "Same pen price; not separately stated",
    fee: "Included",
    delivery: "£3.99 for pens",
    included: "Consultation",
  },
];

export default function HomeContentNov2026() {
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
            weight loss injections UK pharmacies charge rises when your prescriber moves you up a strength. How
            much are weight loss injections UK buyers pay in the end? Add the pen, the consultation and the delivery,
            and compare that total.
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
                {MJ_GLANCE_PRICES.map((row) => (
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
                {WEGOVY_GLANCE_PRICES.map((row) => (
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
          {PARTNER_CARDS_HOMEPAGE.map((p) => (
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
                <Link
                  href={p.href}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white shadow-sm hover:bg-slate-800 transition"
                >
                  Visit partner
                </Link>
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
              <Link href="/blog/what-is-wegovy-pill" className="font-semibold text-teal-600 underline">
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
            Weight loss price comparison UK: other ways people search
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            People ask the same question in different words: weight loss jab prices UK, weight loss jabs price
            comparison, weight loss treatment prices UK, weight loss medication price comparison UK or GLP 1 price
            comparison UK. They all mean what a prescription weight loss injection costs, pharmacy by pharmacy.
            Our weight loss price comparison UK tables and cards answer all of them, and a weight loss injection
            price checker UK shoppers can use should show the date, the delivery charge and the complete cost.
            Each partner is an online pharmacy for weight loss injection supply, and a prescriber assesses you first.
            Use the weight loss injections cost comparison UK list above, and the weight loss injections UK price
            comparison tables in section 4, to check the total before you order.
          </p>

          <h3 className="text-lg font-bold text-slate-900 pt-2">
            Compare weight loss injection prices UK: a short way to do it
          </h3>
          <p className="text-sm text-slate-700 leading-relaxed">
            To compare weight loss injection prices UK partners list, start with the strength you were prescribed, read
            the lowest checked price, then open the partner card and compare weight loss injections prices UK
            delivery and consultation charges. A UK weight loss injections price comparison, or a weight loss injection
            price comparison UK buyers can trust, is one that shows its date and its method.
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
              {FULL_PARTNER_TABLE.map((r) => (
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
            Healthwise360 does not prescribe or sell medicines. We may earn a commission when you use a link to a
            partner, at no extra cost to you. That does not change the price you pay. Read our affiliate disclosure and
            how we compare in full.
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
            href="/affiliate-disclosure"
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
