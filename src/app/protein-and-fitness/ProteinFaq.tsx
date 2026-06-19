import { ChevronDown } from "lucide-react";

export const PROTEIN_FAQS = [
  {
    q: "How much protein do I actually need?",
    a: "It is recommended that healthy adults consume at least 0.8g of protein per kg of body weight per day, and more if you are active or building muscle. Each high-protein meal gives you a big step toward your goal.",
  },
  {
    q: "When's the best time to eat protein?",
    a: "Spreading protein evenly across your meals works best for most people. Many find a protein-rich breakfast and a serving after exercise especially helpful for recovery and staying full.",
  },
  {
    q: "Do I need protein powders or supplements?",
    a: "Not necessarily — you can hit your protein target with whole foods. Powders, shakes and bars are simply a convenient way to top up when you are busy or struggle to eat enough in a day.",
  },
  {
    q: "How can I get more protein if I'm short on time?",
    a: "Ready-to-drink shakes, bars and complete powders are designed for exactly this. They give you a balanced, high-protein meal in seconds with no prep or cooking required.",
  },
  {
    q: "Will getting more protein help me feel full?",
    a: "Yes. Protein is the most satiating macronutrient, so higher-protein meals tend to keep you fuller for longer and can help reduce snacking between meals.",
  },
  {
    q: "Why choose a high-protein meal or snack bar over a regular protein shake?",
    a: "A standard protein shake mostly gives you protein. A high-protein complete meal or bar delivers protein alongside carbs, fats, fibre and 26+ vitamins and minerals — a complete meal, not just a supplement.",
  },
  {
    q: "How much protein does Huel contain?",
    a: "It depends on the product. For example, Black Edition provides 40g of protein per meal, while ready-to-drink shakes and bars range from around 15g to 35g. Check each product for its exact amount.",
  },
  {
    q: "Is Huel good for post-workout recovery?",
    a: "Yes. Its plant-based protein supports muscle repair after training, and because it also contains carbohydrates it helps replenish energy too — convenient when you want recovery nutrition fast.",
  },
] as const;

export default function ProteinFaq() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
        <div>
          <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-4xl">
            Your Protein Questions, Answered
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500 md:text-base">
            Everything you need to know about protein, fitness and fuelling your
            goals.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {PROTEIN_FAQS.map((item) => (
            <details key={item.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden sm:text-base">
                {item.q}
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 group-open:rotate-180"
                  aria-hidden
                />
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
