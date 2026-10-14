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

export default function CostSection() {
  return (
    <HomeSectionCard>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        How much do weight loss injections cost in the UK?
      </h2>
      <p id="cost-answer" className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
        In the UK, weight loss injections cost from about £83 a month for a
        Wegovy starter pen and £99 for a Mounjaro starter pen. The price
        rises as your dose goes up, to as much as £359.95 a month for a
        Mounjaro 15 mg pen. The same Mounjaro 2.5 mg pen costs £99 at one
        pharmacy and £229 at another, a £130 difference.
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
        Most pharmacies charge about £100 (Wegovy) to £154 (Mounjaro) for a
        starter pen, and about £200 (Wegovy 2.4 mg) to £299 (Mounjaro 15 mg)
        on the usual top dose.
      </p>
    </HomeSectionCard>
  );
}
