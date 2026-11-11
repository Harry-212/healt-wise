import type { CheapestAcrossDoses } from "@/lib/data/mounjaro-price-insights";
import { formatGbp } from "@/lib/data/mounjaro-price-insights";

const CHEAPEST_WAY_STEPS = [
  {
    title: "Compare the dose you will be on.",
    desc: "A cheap starter pen can mean a costly 7.5 mg pen later.",
  },
  {
    title: "Add the delivery cost.",
    desc: "Pens must stay cold, and most pharmacies charge for this.",
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
    desc: "You can move to a cheaper GPhC pharmacy. They will do a new health check first.",
  },
];

/** Formats a price gap in pence as pounds (e.g. 1195 -> £11.95); under £1 stays in pence. */
function formatMargin(pence: number): string {
  return pence >= 100 ? `£${(pence / 100).toFixed(2)}` : `${pence}p`;
}

export default function MounjaroCheapestSection({
  cheapestAcross,
  cheapestStarterPrice,
}: {
  cheapestAcross: CheapestAcrossDoses | null;
  cheapestStarterPrice: number;
}) {
  return (
    <section className="border-b border-slate-200/80 bg-white py-12 md:py-16">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
          Which partner pharmacy lists the lowest Mounjaro price?
        </h2>
        {cheapestAcross ? (
          <p className="mt-4 leading-relaxed text-slate-600">
            In our latest check, {cheapestAcross.leader} listed the lowest
            Mounjaro price among our checked partner pharmacies for{" "}
            {cheapestAcross.leaderWins} of the {cheapestAcross.totalDoses}{" "}
            doses.{" "}
            {cheapestAcross.exceptions.map((ex, i) => (
              <span key={ex.dose}>
                {ex.provider} listed the lowest price for {ex.dose.replace("mg", " mg")},
                {ex.marginPence > 0
                  ? ` by just ${formatMargin(ex.marginPence)}`
                  : ""}
                .{i < cheapestAcross.exceptions.length - 1 ? " " : " "}
              </span>
            ))}
            Which partner lists the lowest Mounjaro price can change each month, so always
            look at the date next to the price. For the best value, check the price of the dose you will be on, not just
            the starter pen.
          </p>
        ) : null}

        <h3 className="mt-8 text-lg font-bold text-slate-900">
          What&apos;s the cheapest way to get Mounjaro?
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
          Cheap Mounjaro in the UK: when is a price too low?
        </h3>
        <p className="mt-2 leading-relaxed text-slate-600">
          The lowest listed price for a Mounjaro pen among our checked partner pharmacies is{" "}
          {formatGbp(cheapestStarterPrice)}. A low Mounjaro price is only a good deal if the pharmacy is safe. Only use a
          pharmacy that asks about your health and shows a GPhC number. The
          best place to buy Mounjaro in the UK is a GPhC registered pharmacy
          with a fair price for your dose. Be careful if a site sells
          Mounjaro with no health questions, has no GPhC number, or charges
          far less than the partner pharmacies in our table.
        </p>
      </div>
    </section>
  );
}
