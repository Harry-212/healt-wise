import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lifestyle tips | Health Wise",
  description:
    "Tips on nutrition, exercise, sleep, and stress to support your weight-loss journey alongside medical treatment.",
};

const sections = [
  { id: "tips", title: "Tips", body: "Practical habits that pair well with GLP-1 treatment—always follow your clinician’s advice." },
  { id: "nutrition", title: "Nutrition", body: "Focus on balanced meals, protein, and hydration; avoid extreme restriction without professional guidance." },
  { id: "exercise", title: "Exercise", body: "Regular movement supports health and weight management; choose activities you can sustain." },
  { id: "sleep", title: "Sleep", body: "Poor sleep affects appetite and energy; aim for a consistent sleep schedule where possible." },
  { id: "stress", title: "Stress", body: "Stress can influence eating patterns; consider mindfulness, boundaries, or support when needed." },
];

export default function LifestylePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-5 sm:py-10 md:px-6 md:py-12">
      <h1 className="text-balance text-2xl font-bold text-slate-900 sm:text-3xl">
        Lifestyle tips
      </h1>
      <p className="mt-3 text-slate-600">
        General wellness pointers—not a substitute for medical advice. See our{" "}
        <Link href="/blog" className="font-medium text-brand-primary hover:underline">
          blog
        </Link>{" "}
        for more.
      </p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="inline-flex min-h-10 touch-manipulation items-center rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:border-brand-primary/40 hover:text-brand-primary"
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-12 space-y-12">
        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-28 sm:scroll-mt-24">
            <h2 className="text-xl font-bold text-slate-900">{s.title}</h2>
            <p className="mt-2 leading-relaxed text-slate-600">{s.body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
