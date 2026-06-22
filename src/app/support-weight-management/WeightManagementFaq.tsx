import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export const WEIGHT_MANAGEMENT_FAQS = [
  {
    q: "How can Huel help me manage my weight?",
    a: "Huel meals are portion-controlled and nutritionally complete, making it easier to maintain a calorie deficit without guessing. Lower-calorie options like Diet (200 kcal) and Lite Ready-to-drink (190 kcal) support weight management while still delivering protein, fibre and essential nutrients.",
  },
  {
    q: "Will I feel full on Huel?",
    a: "Yes. Huel meals are designed with protein and fibre — the two nutrients most linked to satiety. Higher-protein options like Black Edition (40g protein) tend to keep you fuller for longer, which can help reduce snacking between meals.",
  },
  {
    q: "Is it healthy to replace meals with Huel?",
    a: "Replacing one or two meals a day with Huel can be a practical part of a balanced diet, especially when whole-food options are not available. Huel is formulated to meet nutritional guidelines — but variety from whole foods remains important for long-term health.",
  },
] as const;

export const WEIGHT_MANAGEMENT_QUESTIONS_FAQS = [
  {
    q: "What should I eat if I want to manage my weight but don't have time to cook?",
    a: "Ready-to-drink shakes, instant pots and complete powders are built for exactly this. Choose lower-calorie options when you want a deficit, and keep a few portions on hand so a busy day does not derail your plan.",
  },
  {
    q: "What's the best way to stay consistent with weight management?",
    a: "Consistency beats perfection. Set realistic daily targets, plan your easiest meals in advance, and use convenient nutritionally complete options on your busiest days so you always have a reliable fallback.",
  },
  {
    q: "How do I stay on track when life gets busy?",
    a: "Reduce decision fatigue by keeping go-to meals ready — shakes in the fridge, powder at your desk, or pots in the cupboard. The fewer choices you have to make when rushed, the easier it is to stick to your plan.",
  },
  {
    q: "What's the easiest way to eat healthier and manage my weight?",
    a: "Start with one reliable balanced meal a day — breakfast or lunch — using a complete meal you can prepare in seconds. Once that habit is set, build from there rather than trying to change everything at once.",
  },
  {
    q: "How can I manage my weight without constantly counting calories?",
    a: "Use pre-portioned complete meals with known calorie counts instead of tracking every ingredient. Options like Diet (200 kcal per meal) or Lite RTD (190 kcal per bottle) take the maths out of portion control.",
  },
  {
    q: "How can I avoid decision fatigue when trying to manage my weight?",
    a: "Limit your daily food decisions by rotating a small set of meals you enjoy and trust. Complete nutrition products remove the need to plan, shop and cook for every meal — freeing mental energy for the rest of your day.",
  },
] as const;

export const SUPPORT_WEIGHT_MANAGEMENT_FAQS = [
  ...WEIGHT_MANAGEMENT_FAQS,
  ...WEIGHT_MANAGEMENT_QUESTIONS_FAQS,
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

export default function WeightManagementFaq() {
  return (
    <>
      <FaqBlock title="Weight Management FAQs" items={WEIGHT_MANAGEMENT_FAQS} />
      <FaqBlock
        title="Your Weight Management Questions, Answered"
        subtitle="Practical guidance for staying consistent when life gets busy."
        items={WEIGHT_MANAGEMENT_QUESTIONS_FAQS}
      />
    </>
  );
}
