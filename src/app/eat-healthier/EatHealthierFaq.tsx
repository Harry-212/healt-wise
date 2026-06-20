import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export const COMPLETE_NUTRITION_FAQS = [
  {
    q: "What makes Huel meals nutritionally complete?",
    a: "Each Huel meal is formulated to deliver balanced protein, carbohydrates, fats and fibre, plus all 26 essential vitamins and minerals in every serving — so you get a full meal's nutrition without assembling it yourself.",
  },
  {
    q: "When should I use Huel?",
    a: "Whenever you need a quick, balanced meal — at breakfast, lunch, on busy workdays, when travelling, or any time cooking from scratch is not practical. It works as a full meal or a reliable backup in a varied diet.",
  },
  {
    q: "Is Huel suitable for long-term use?",
    a: "Yes, when used as part of a varied, balanced diet. Many people use Huel regularly as a convenient meal option. As with any dietary change, listen to your body and consult a healthcare professional if you have specific medical needs.",
  },
] as const;

export const HEALTHY_EATING_FAQS = [
  {
    q: "What's the easiest way to start eating healthier?",
    a: "Start small rather than overhauling everything at once. Add one extra portion of vegetables, swap sugary drinks for water, and aim for one balanced meal a day — small wins build momentum.",
  },
  {
    q: "How can I eat well if I don't have time to cook?",
    a: "Batch prep when you can, keep ready-to-go balanced meals or shakes on hand, and choose convenience options that still deliver protein, fibre and micronutrients instead of empty calories.",
  },
  {
    q: "What does a balanced meal actually look like?",
    a: "A useful rule of thumb: lean protein, colourful vegetables, whole grains or starchy carbs, healthy fats, and enough fibre to keep you satisfied — without needing to be perfect every time.",
  },
  {
    q: "Do I have to cut out carbs or sugar to eat healthy?",
    a: "No. Quality and portion size matter more than banning food groups. Whole grains, fruit and vegetables provide useful carbs; focus on limiting added sugars and ultra-processed snacks rather than cutting carbs entirely.",
  },
  {
    q: "How do I make healthy eating a habit and not a chore?",
    a: "Build routines around meals you enjoy, keep healthy options visible and easy to grab, allow flexibility for treats, and measure progress by how you feel and your consistency — not perfect adherence every day.",
  },
  {
    q: "Can I eat processed food and still be healthy?",
    a: "Yes, in moderation. Not all processed food is equal — prioritise minimally processed options where you can, and balance convenient products with whole foods as part of an overall healthy pattern.",
  },
] as const;

export const EAT_HEALTHIER_FAQS = [
  ...COMPLETE_NUTRITION_FAQS,
  ...HEALTHY_EATING_FAQS,
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

export default function EatHealthierFaq() {
  return (
    <>
      <FaqBlock
        title={
          <>
            Complete Nutrition
            <br />
            FAQs
          </>
        }
        items={COMPLETE_NUTRITION_FAQS}
      />
      <FaqBlock
        title="Your Healthy Eating Questions, Answered"
        subtitle="Practical guidance on building better everyday eating habits."
        items={HEALTHY_EATING_FAQS}
      />
    </>
  );
}
