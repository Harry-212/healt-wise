import HomeSectionCard from "@/components/ui/HomeSectionCard";

const FACTORS = [
  {
    title: "The medicine.",
    desc: "Mounjaro and Wegovy have different prices at every dose.",
  },
  {
    title: "Your dose.",
    desc: "Each pen lasts 4 weeks. Most people move up a dose every 4 weeks, and higher doses cost more.",
  },
  {
    title: "The pharmacy.",
    desc: "Prices, delivery fees, and offers are different at every pharmacy.",
  },
];

export interface CostSectionProps {
  wegovyStarterLow?: string;
  mounjaroStarterLow?: string;
  mounjaroTopHigh?: string;
  mounjaroStarterHigh?: string;
  mounjaroStarterDiff?: string;
}

export default function CostSection({
  wegovyStarterLow = "£72.89",
  mounjaroStarterLow = "£119.69",
  mounjaroTopHigh = "£359.95",
  mounjaroStarterHigh = "£179",
  mounjaroStarterDiff = "£59.31",
}: CostSectionProps) {
  return (
    <HomeSectionCard>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        How much do weight loss injections cost in the UK?
      </h2>
      <p id="cost-answer" className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
        Among our checked partner pharmacies, weight loss injections are listed from about {wegovyStarterLow} a month for a
        Wegovy starter pen and {mounjaroStarterLow} for a Mounjaro starter pen. The price
        rises as your dose goes up, to as much as {mounjaroTopHigh} a month for a
        Mounjaro 15 mg pen. The same Mounjaro 2.5 mg pen costs {mounjaroStarterLow} at one
        partner pharmacy and {mounjaroStarterHigh} at another, a {mounjaroStarterDiff} difference.
      </p>

      <p className="mt-5 text-base font-semibold text-slate-900">
        The cost of weight loss injections in the UK depends on three things:
      </p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
        {FACTORS.map((factor) => (
          <li key={factor.title}>
            <strong className="text-slate-900">{factor.title}</strong>{" "}
            {factor.desc}
          </li>
        ))}
      </ul>

      <h3 className="mt-8 text-lg font-bold text-slate-900">
        How much are weight loss injections in the UK each month?
      </h3>
      <p className="mt-2 max-w-3xl text-base leading-relaxed text-slate-700">
        Among our checked partner pharmacies, starter pens are listed from{" "}
        {wegovyStarterLow} (Wegovy) and {mounjaroStarterLow} (Mounjaro). The
        highest listed Mounjaro 15 mg price is {mounjaroTopHigh}.
      </p>
    </HomeSectionCard>
  );
}
