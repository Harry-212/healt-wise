import type { CheapestAcrossDoses } from "@/lib/data/mounjaro-price-insights";
import { formatGbp } from "@/lib/data/wegovy-price-insights";

const CHEAPEST_WAY_STEPS = [
  {
    title: "Compare the dose you will be on.",
    desc: "A cheap starter pen can mean a costly 2.4 mg pen later.",
  },
  {
    title: "Add the delivery cost.",
    desc: "Pens must stay cold, and many pharmacies charge for this.",
  },
  {
    title: "Check the month 2 price.",
    desc: "A low first order price can jump in month 2.",
  },
  {
    title: "Ask about 2 or 3 pen bundles.",
    desc: "Some pharmacies charge less per pen.",
  },
  {
    title: "Switch if it saves you money.",
    desc: "You can move to a cheaper GPhC pharmacy for cheaper Wegovy. They will do a new health check first.",
  },
];

export default function WegovyCheapestSection({
  cheapestAcross,
  starterLow = 72.89,
}: {
  cheapestAcross?: CheapestAcrossDoses | null;
  starterLow?: number;
}) {
  return (
    <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Where is the cheapest Wegovy in the UK?
        </h2>
        {cheapestAcross ? (
          <p className="mt-4 leading-relaxed text-slate-600">
            In our latest check, {cheapestAcross.leader} was the cheapest place
            to buy Wegovy in the UK for {cheapestAcross.leaderWins} of the{" "}
            {cheapestAcross.totalDoses} doses.{" "}
            {cheapestAcross.exceptions.map((ex, i) => (
              <span key={ex.dose}>
                {ex.provider} was cheapest for {ex.dose.replace("mg", " mg")}
                {ex.marginPence > 0 ? `, by just ${ex.marginPence}p` : ""}.
                {i < cheapestAcross.exceptions.length - 1 ? " " : " "}
              </span>
            ))}
            Always look at the date next to the price, as this can change each
            month.
          </p>
        ) : (
          <p className="mt-4 leading-relaxed text-slate-600">
            The cheapest place to get Wegovy depends on your dose. Always look
            at the date next to the price, as this can change each month.
          </p>
        )}

        <h3 className="mt-8 text-lg font-bold text-slate-900">
          What&apos;s the cheapest way to get Wegovy?
        </h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-slate-700">
          {CHEAPEST_WAY_STEPS.map((step) => (
            <li key={step.title}>
              <strong className="text-slate-900">{step.title}</strong>{" "}
              {step.desc}
            </li>
          ))}
        </ul>

        <h3 className="mt-8 text-lg font-bold text-slate-900">
          Cheap Wegovy online: when is a price too low?
        </h3>
        <p className="mt-2 leading-relaxed text-slate-600">
          The lowest Wegovy price we found is {formatGbp(starterLow)}. The
          cheapest Wegovy online in the UK is only a good deal if the pharmacy
          is safe. Only use a pharmacy that asks about your health and shows a
          GPhC number. The best place to buy Wegovy in the UK is a GPhC
          registered pharmacy with a fair price for your dose. Be careful if a
          site sells Wegovy with no health questions, has no GPhC number, or
          charges far less than every pharmacy in our table.
        </p>
      </div>
    </section>
  );
}

