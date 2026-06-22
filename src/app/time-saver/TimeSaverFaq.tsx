import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export const EATING_ON_THE_GO_FAQS = [
  {
    q: "How can Huel help me eat well on-the-go?",
    a: "Huel ready-to-drink shakes, bars and instant pots are nutritionally complete — protein, carbs, fats, fibre and 26 vitamins and minerals in every serving. Grab one from the fridge or cupboard and you have a balanced meal in seconds, no kitchen required.",
  },
  {
    q: "Will I feel full on Huel?",
    a: "Yes. Huel meals are designed with protein and fibre — the two nutrients most linked to satiety. Options like Black Edition Ready-to-drink (35g protein) or Complete Nutrition Bars keep you fuller for longer than typical convenience snacks.",
  },
  {
    q: "When should I use Huel?",
    a: "Whenever you need a quick, balanced meal — rushing out the door, between meetings, on a commute, at the gym, or any time cooking is not practical. It works as a full meal replacement or a reliable backup in a varied diet.",
  },
] as const;

export const TIME_SAVING_FOOD_FAQS = [
  {
    q: "What's the easiest way to meal prep without cooking every day?",
    a: "Stock ready-to-go complete meals instead of batch-cooking everything. Keep shakes in the fridge, bars in your bag, and instant pots in the cupboard — you get the convenience of meal prep without hours in the kitchen.",
  },
  {
    q: "How can I eat healthy if I don't have time to cook?",
    a: "Choose convenience options that still deliver balanced nutrition. Ready-to-drink shakes and instant pots give you protein, fibre and micronutrients in seconds — not the empty calories of typical fast food.",
  },
  {
    q: "What meals are fast, balanced, and filling?",
    a: "Look for complete meals with at least 20g protein and meaningful fibre. Black Edition RTD, Lite RTD, Hot & Savoury Pots and Complete Nutrition Bars all fit the bill — each ready in under a minute.",
  },
  {
    q: "Is it okay to eat the same thing every day if I'm short on time?",
    a: "Rotating a small set of nutritionally complete meals you enjoy is fine for busy periods. Huel covers your macro and micronutrient bases, so repeating favourites does not mean missing essential nutrition.",
  },
  {
    q: "How can I build a routine around fast, healthy meals?",
    a: "Pick two or three go-to options for breakfast and lunch, keep them stocked, and repeat. Removing daily food decisions frees mental energy — and a consistent routine is easier to maintain than starting from scratch each day.",
  },
  {
    q: "Are meal replacement shakes a good alternative to meal prep?",
    a: "Yes, when they are nutritionally complete rather than just protein supplements. Huel shakes deliver a full meal's worth of nutrients in a bottle — a practical substitute for home-cooked prep when time is tight.",
  },
] as const;

export const TIME_SAVER_FAQS = [
  ...EATING_ON_THE_GO_FAQS,
  ...TIME_SAVING_FOOD_FAQS,
] as const;

type FaqItem = { q: string; a: string };

function FaqBlock({
  title,
  subtitle,
  items,
}: {
  title: ReactNode;
  subtitle?: string;
  items: readonly FaqItem[];
}) {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,360px)_1fr] lg:gap-12">
        <div>
          <h2 className="text-3xl font-black leading-[1.05] tracking-tight text-slate-900 md:text-4xl">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500 md:text-base">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="divide-y divide-slate-200">
          {items.map((item) => (
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

export default function TimeSaverFaq() {
  return (
    <>
      <FaqBlock title="Eating on-the-go FAQs" items={EATING_ON_THE_GO_FAQS} />
      <FaqBlock
        title="Your Time-Saving Food Questions, Answered"
        subtitle="Practical tips for eating well when every minute counts."
        items={TIME_SAVING_FOOD_FAQS}
      />
    </>
  );
}
