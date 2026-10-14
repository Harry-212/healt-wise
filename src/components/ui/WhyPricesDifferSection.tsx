import HomeSectionCard from "@/components/ui/HomeSectionCard";

const REASONS = [
  { title: "Your dose.", desc: "Higher doses cost more." },
  { title: "First order offers.", desc: "A low first price can jump in month 2." },
  { title: "Delivery.", desc: "Pens must stay cold, and some pharmacies charge extra for this." },
  { title: "Consultation fees.", desc: "Most are free, but some pharmacies add one." },
  { title: "Subscriptions.", desc: "Some lock you into a monthly plan." },
  { title: "Bundles.", desc: "Buying 2 or 3 pens at once can lower the price of each pen." },
];

export default function WhyPricesDifferSection() {
  return (
    <HomeSectionCard>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        Why weight loss injection prices are so different
      </h2>
      <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-700 sm:text-lg">
        Weight loss jab prices in the UK can differ by more than £130 for the
        very same pen. These six things make the difference:
      </p>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-700">
        {REASONS.map((reason) => (
          <li key={reason.title}>
            <strong className="text-slate-900">{reason.title}</strong>{" "}
            {reason.desc}
          </li>
        ))}
      </ul>

      <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700">
        That is why it pays to check the full price with delivery, not just
        the headline price. Our weight loss jab price comparison makes it
        easy to compare weight loss jab prices fairly.
      </p>
    </HomeSectionCard>
  );
}
