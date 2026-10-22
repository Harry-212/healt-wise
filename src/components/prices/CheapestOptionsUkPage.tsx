import type { ReactNode } from "react";
import Link from "next/link";
import TrustSignals from "@/components/trust/TrustSignals";
import {
  formatDose,
  formatGbp,
} from "@/lib/data/mounjaro-price-insights";
import {
  getCheapestOptionsPageData,
  type CheapestWinner,
} from "@/lib/data/cheapest-options-page-data";
import CheapestOptionsHero from "./CheapestOptionsHero";
import NotMedicalAdviceBanner from "./NotMedicalAdviceBanner";

const h2Class = "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
const h3Class = "text-xl font-bold text-slate-900";
const linkClass =
  "font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950";

function Section({
  id,
  children,
  tone = "white",
}: {
  id: string;
  children: ReactNode;
  tone?: "white" | "soft";
}) {
  return (
    <section
      id={id}
      className={`w-full scroll-mt-28 border-b border-slate-200/80 ${
        tone === "soft" ? "bg-slate-50/70" : "bg-white"
      }`}
    >
      <div className="mx-auto w-full max-w-4xl space-y-5 px-4 py-10 text-base leading-relaxed text-slate-700 sm:px-5 md:px-8 md:py-14">
        {children}
      </div>
    </section>
  );
}

function DataTable({
  head,
  rows,
  foot,
}: {
  head: string[];
  rows: string[][];
  foot?: string[];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full min-w-[480px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {head.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-slate-900">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-800">
          {rows.map((r) => (
            <tr key={r.join("|")}>
              {r.map((c, i) => (
                <td
                  key={i}
                  className={`px-4 py-3 ${i === 0 ? "font-medium text-slate-900" : ""}`}
                >
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        {foot && (
          <tfoot>
            <tr className="border-t border-slate-200 bg-slate-50 font-semibold text-slate-900">
              {foot.map((c, i) => (
                <td key={i} className="px-4 py-3">
                  {c}
                </td>
              ))}
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}

function WinnerName({ w }: { w: CheapestWinner }) {
  return w.linkProfile ? (
    <Link href={`/pharmacies/${w.id}`} className={linkClass}>
      {w.name}
    </Link>
  ) : (
    <strong className="text-slate-900">{w.name}</strong>
  );
}

function joinDoses(doses: string[]): string {
  if (doses.length <= 1) return doses.join("");
  return `${doses.slice(0, -1).join(", ")} and ${doses[doses.length - 1]}`;
}

export default function CheapestOptionsUkPage() {
  const d = getCheapestOptionsPageData();
  const { wStarter, wLong, mStarter, mTop } = d;
  const price = (n: number | undefined) => (n ? formatGbp(n) : "—");

  const wStarterLow = price(wStarter?.low);
  const mStarterLow = price(mStarter?.low);
  const wLongLow = price(wLong?.low);
  const mTopLow = price(mTop?.low);
  const wLongHigh = price(wLong?.high);
  const wCheaper = d.wegovyCheaperEveryMonth;
  const pharmacyFloor = `${Math.floor(Math.min(d.wegovyCount, d.mounjaroCount) / 10) * 10}+`;

  const heroAnswer = wCheaper
    ? `The cheapest weight loss injection in the UK right now is Wegovy, from ${wStarterLow} for a 0.25 mg starter pen at ${wStarter?.lowProvider}. The cheapest Mounjaro starter pen is ${mStarterLow}. We compare the cheapest weight loss injections in the UK at ${pharmacyFloor} GPhC registered pharmacies, so you can find the lowest price for your dose in one place.`
    : `At our latest check, a Wegovy 0.25 mg starter pen starts from ${wStarterLow} at ${wStarter?.lowProvider}, and a Mounjaro 2.5 mg starter pen starts from ${mStarterLow}. We compare the cheapest weight loss injections in the UK at ${pharmacyFloor} GPhC registered pharmacies, so you can find the lowest price for your dose in one place.`;

  const snapshotRows: string[][] = [
    ["Wegovy 0.25 mg (starter)", price(wStarter?.low), price(wStarter?.median)],
    ["Wegovy 2.4 mg (long term)", wLongLow, price(wLong?.median)],
    ["Mounjaro 2.5 mg (starter)", mStarterLow, price(mStarter?.median)],
    ["Mounjaro 15 mg (top dose)", mTopLow, price(mTop?.median)],
  ];

  const sixMonthRows: string[][] = d.wEst.rows.map((w, i) => {
    const m = d.mEst.rows[i];
    return [
      String(w.month),
      formatDose(w.dose),
      formatGbp(w.low),
      formatDose(m.dose),
      formatGbp(m.low),
    ];
  });

  return (
    <article className="w-full min-w-0 bg-white">
      {/* Section 1: Hero */}
      <CheapestOptionsHero
        answer={heroAnswer}
        chips={[
          `${pharmacyFloor} GPhC registered pharmacies`,
          "No paid rankings",
          `Prices checked ${d.wegovyUpdated}`,
        ]}
      />

      <div className="w-full border-b border-amber-200/60 bg-amber-50/35">
        <div className="mx-auto w-full max-w-6xl px-4 py-4 sm:px-5 md:px-8">
          <NotMedicalAdviceBanner />
        </div>
      </div>

      {/* Section 2: Snapshot */}
      <Section id="snapshot" tone="soft">
        <h2 className={h2Class}>Cheapest weight loss injections UK at a glance</h2>
        <p>
          Looking for cheap weight loss injections in the UK? Here are the
          cheapest UK weight loss injections at our latest check (
          {d.wegovyUpdated}). The lowest listed pen price is the cheapest
          pharmacy we found. Typical is what most pharmacies charge.
        </p>
        <DataTable
          head={["Medicine and dose", "Lowest", "Typical"]}
          rows={snapshotRows}
        />
        <p className="text-sm text-slate-600">
          Prices are for the pen only. Delivery is not always included. It
          depends on the pharmacy.
        </p>
        <Link href="/" className={linkClass}>
          See every dose and pharmacy →
        </Link>
      </Section>

      {/* Section 3: Which is cheapest */}
      <Section id="which-is-cheapest">
        <h2 className={h2Class}>
          Which weight loss injection is cheapest in the UK?
        </h2>
        {wCheaper ? (
          <p>
            Wegovy is the cheapest weight loss injection in the UK at every
            month of the first 6 in our price tables. The Wegovy starter pen
            costs from {wStarterLow}, against {mStarterLow} for Mounjaro. On
            the dose most people stay on, Wegovy 2.4 mg costs from {wLongLow},
            against {mTopLow} for Mounjaro 15 mg. These are different medicines
            and different doses, so this is a price comparison, not a like for
            like one.
          </p>
        ) : (
          <p>
            The Wegovy starter pen costs from {wStarterLow}, against{" "}
            {mStarterLow} for Mounjaro. On the long term doses, Wegovy 2.4 mg
            costs from {wLongLow} and Mounjaro 15 mg from {mTopLow}. Compare the
            dose you will be on.
          </p>
        )}
        <p>
          So, which is the cheapest injection for weight loss? Look at price
          alone and the table above answers it. But the cheapest weight loss
          injection is not always the best one for you. In a head to head trial,
          people lost more weight on Mounjaro. A prescriber can help you choose.
        </p>

        <h3 className={h3Class}>Cheapest GLP-1 injections UK</h3>
        <p>
          Both are GLP-1 medicines. Wegovy copies one gut hormone, GLP-1.
          Mounjaro copies two, GIP and GLP-1. Both are weekly injections, and
          both are prescription only. Here is our cheapest GLP-1 price
          comparison for the UK.
        </p>
        <DataTable
          head={["", "Wegovy", "Mounjaro"]}
          rows={[
            ["Medicine inside", "Semaglutide", "Tirzepatide"],
            ["Cheapest starter pen", wStarterLow, mStarterLow],
            [
              "Cheapest long term pen",
              `${wLongLow} (2.4 mg)`,
              `${mTopLow} (15 mg)`,
            ],
            [
              "Pharmacies we check",
              String(d.wegovyCount),
              String(d.mounjaroCount),
            ],
          ]}
        />
        <Link href="/compare/wegovy-vs-mounjaro" className={linkClass}>
          Read our full Mounjaro vs Wegovy comparison →
        </Link>
      </Section>

      {/* Section 4: Monthly cost */}
      <Section id="monthly-cost" tone="soft">
        <h2 className={h2Class}>Cheapest monthly weight loss injections UK</h2>
        <p>
          One pen lasts 4 weeks, so the price of one pen is your monthly cost.
          The cheapest weight loss injections per month in the UK start at{" "}
          {price(Math.min(wStarter?.low ?? Infinity, mStarter?.low ?? Infinity))}
          . But the price goes up as your dose goes up, so look at the first 6
          months, not just month 1.
        </p>
        <h3 className={h3Class}>What your first 6 months cost</h3>
        <DataTable
          head={[
            "Month",
            "Wegovy dose",
            "Wegovy lowest",
            "Mounjaro dose",
            "Mounjaro lowest",
          ]}
          rows={sixMonthRows}
          foot={[
            "6 month total",
            "",
            formatGbp(d.wEst.totalLow),
            "",
            formatGbp(d.mEst.totalLow),
          ]}
        />
        <p>
          At typical prices, the first 6 months cost about{" "}
          {formatGbp(Math.round(d.wEst.totalTypical))} for Wegovy and{" "}
          {formatGbp(Math.round(d.mEst.totalTypical))} for Mounjaro.
        </p>
        <p className="text-sm text-slate-600">
          This table assumes your dose goes up every 4 weeks. Your prescriber
          decides when, and many people stay on a lower dose for longer. The
          lowest prices can come from different pharmacies.
        </p>
        <h3 className={h3Class}>Cheapest weight loss injection starter dose UK</h3>
        <p>
          With weight loss injections, starter dose pens cost the least. The
          cheapest weight loss pen in the UK is the Wegovy 0.25 mg starter pen,
          from {wStarterLow}. A cheap starter pen is a good start, but check the
          price of the dose you will be on in month 3 and beyond. Your
          maintenance costs matter more over a year.
        </p>
      </Section>

      {/* Section 5: Where to buy */}
      <Section id="where-to-buy">
        <h2 className={h2Class}>
          Where is the cheapest place to buy weight loss injections in the UK?
        </h2>
        <p>
          The cheapest place to buy weight loss injections in the UK is a GPhC
          registered online pharmacy. At our latest check, these pharmacies had
          the most of the lowest prices:
        </p>
        <ul className="list-inside list-disc space-y-2">
          {d.wWinners.slice(0, 2).map((w) => (
            <li key={`w-${w.name}`}>
              <WinnerName w={w} />: cheapest for Wegovy {joinDoses(w.doses)}.
            </li>
          ))}
          {d.mWinners.slice(0, 2).map((w) => (
            <li key={`m-${w.name}`}>
              <WinnerName w={w} />: cheapest for Mounjaro {joinDoses(w.doses)}.
            </li>
          ))}
        </ul>
        <p>
          The cheapest place to get weight loss injections in the UK can change
          each month, so always look at the date next to the price. Use our price
          pages for your dose:
        </p>
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/wegovy-price-comparison" className={linkClass}>
            See every Wegovy dose →
          </Link>
          <Link href="/mounjaro-price-comparison" className={linkClass}>
            See every Mounjaro dose →
          </Link>
        </p>
      </Section>

      {/* Section 6: Buying online */}
      <Section id="buying-online" tone="soft">
        <h2 className={h2Class}>
          Cheapest weight loss injections online: what to check
        </h2>
        <p>
          The cheapest weight loss injections online are only a good deal if the
          pharmacy is safe. Cheap weight loss injections online should always
          come from a GPhC registered online pharmacy, with a health check by a
          qualified prescriber.
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            Find the GPhC number on the pharmacy&apos;s website. It is usually in
            the footer.
          </li>
          <li>
            Check it on the official GPhC register. The name and address should
            match.
          </li>
          <li>
            Expect a health form. Weight loss injections are a prescription only
            medicine. A real pharmacy will always ask about your weight, health
            and other medicines.
          </li>
        </ol>
        <h3 className={h3Class}>Is the cheapest weight loss jab safe?</h3>
        <p>
          Yes. Cheap weight loss jabs in the UK are safe if they come from GPhC
          verified pharmacies after a health check. Be careful if a site sells
          weight loss injections with no health questions, has no GPhC number,
          sells &quot;pens&quot; on social media, or charges far less than every
          pharmacy in our table.
        </p>
        <Link href="/pharmacy-safety-gphc-verification" className={linkClass}>
          Read our pharmacy safety guide →
        </Link>
      </Section>

      {/* Section 7: Hidden costs */}
      <Section id="hidden-costs">
        <h2 className={h2Class}>
          Why the cheapest pen is not always the cheapest overall
        </h2>
        <p>
          The lowest price weight loss injections in the UK can cost more once
          you add the extras. Check these before you pay:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Dosage strength.</strong> Higher doses cost more. Compare
            the dose you will be on.
          </li>
          <li>
            <strong>Consultation fee.</strong> Most are free, but a few
            pharmacies add one.
          </li>
          <li>
            <strong>Delivery fee.</strong> Pens are sent cold. Many pharmacies
            charge for this.
          </li>
          <li>
            <strong>Introductory offer.</strong> A low first price can go up in
            month 2.
          </li>
          <li>
            <strong>Subscriptions.</strong> Some pharmacies lock you into a
            monthly plan.
          </li>
          <li>
            <strong>Bundles.</strong> Buying 2 or 3 pens at once can lower the
            price per pen.
          </li>
        </ul>
        <p>
          The checkout price is what you really pay. A like for like comparison
          looks at the same dose and the total treatment cost, not just the
          headline price. The price spread between pharmacies is big: the same
          Wegovy 2.4 mg pen costs from {wLongLow} to {wLongHigh}.
        </p>
      </Section>

      {/* Section 8: Other options */}
      <Section id="other-options" tone="soft">
        <h2 className={h2Class}>Cheaper options you may see on Google</h2>
        <p>
          You may see other low cost weight loss injections in the UK and cheap
          weight loss medications online. Here is how they compare.
        </p>
        <ul className="list-inside list-disc space-y-3">
          <li>
            <strong>Daily injections (liraglutide, such as Nevolat or Saxenda).</strong>{" "}
            The pen price can look low, but you inject every day and one pen
            lasts about a week on the full dose. So the month can cost more than
            it looks.
          </li>
          <li>
            <strong>The Wegovy pill.</strong> A daily tablet with the same
            medicine as Wegovy. Check the current price before you compare it
            with the injection.{" "}
            <Link href="/blog/wegovy-pill-uk" className={linkClass}>
              Read our Wegovy pill guide →
            </Link>
          </li>
          <li>
            <strong>Orlistat tablets.</strong> A low cost tablet, not an
            injection. It works in a different way, and most people lose much
            less weight than on Wegovy or Mounjaro.
          </li>
          <li>
            <strong>Ozempic.</strong> Ozempic is licensed for type 2 diabetes,
            not weight loss. UK pharmacies should not sell it to you for weight
            loss.
          </li>
        </ul>
        <p>
          Affordable weight loss injections in the UK, like any cheap weight loss
          injection in the UK, still need a prescription. Cheap weight loss
          medication from a site with no health check is not safe.
        </p>
      </Section>

      {/* Section 9: NHS */}
      <Section id="nhs">
        <h2 className={h2Class}>
          Can you get weight loss injections cheaper on the NHS?
        </h2>
        <p>
          Yes, if you qualify. On the NHS, you pay a normal prescription charge
          in England, or nothing in Scotland, Wales and Northern Ireland. But
          only some people can get them right now.
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>Mounjaro:</strong> GPs in England can prescribe it for
            people with the greatest need, starting with a BMI of 40 or more and
            several weight related health problems.
          </li>
          <li>
            <strong>Wegovy:</strong> through specialist weight management
            services, usually for a BMI of 35 or more with a weight related
            health problem, for up to 2 years.
          </li>
        </ul>
        <p>
          Most people get private weight loss injections in the UK. The cheapest
          private weight loss injections in the UK are on our price pages. For
          the cheapest private weight loss treatment in the UK, compare prices
          for your dose before each order.
        </p>
      </Section>

      {/* Section 10: Our checks */}
      <Section id="how-we-check" tone="soft">
        <h2 className={h2Class}>How we find the cheapest prices</h2>
        <p>
          This cheapest weight loss injections UK comparison only uses
          pharmacies from our UK pharmacy listings that pass the same 5 checks.
          No pharmacy can pay to rank higher.
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>GPhC registration.</strong> We check each pharmacy on the
            official GPhC register.
          </li>
          <li>
            <strong>Safe prescribing.</strong> A prescriber must check your
            health before any pen is sent.
          </li>
          <li>
            <strong>Full price.</strong> We record the price of every dose in our
            multi pharmacy price tables.
          </li>
          <li>
            <strong>Delivery.</strong> We check cold packing, delivery times and
            tracking.
          </li>
          <li>
            <strong>Support.</strong> We look at dose advice and how easy it is
            to get help.
          </li>
        </ol>
        <p>
          We record the standard prices available on the date shown on this page.
          Prices, fees and offers can change after that date, so check the
          provider’s final price before proceeding. First-order codes are not
          included. Featured partners appear separately from the price tables
          and cannot change the price-based order.
        </p>
        <Link href="/methodology" className={linkClass}>
          Read how we check prices →
        </Link>
      </Section>

      {/* Section 11: FAQ */}
      <Section id="faq">
        <h2 className={h2Class}>FAQs</h2>
        <div className="divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          {d.faqs.map((item) => (
            <details key={item.question} className="group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-slate-900">
                  {item.question}
                </h3>
                <span className="text-slate-400 transition-transform group-open:rotate-180">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </Section>

      <div className="w-full border-b border-slate-200/80 bg-linear-to-br from-slate-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-5 md:px-8">
          <TrustSignals />
        </div>
      </div>
    </article>
  );
}
