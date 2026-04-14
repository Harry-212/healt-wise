import { EXERCISE_FAQ } from "@/lib/lifestyle/exercise-content";

export function ExerciseFaqSection() {
  return (
    <section aria-labelledby="exercise-faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 id="exercise-faq-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-base text-slate-600">
          Volume, intensity, cardio vs strength, and how exercise fits with diet and treatment.
        </p>
        <div className="mt-10 divide-y divide-slate-200/90 rounded-2xl border border-slate-100 bg-white px-2 shadow-sm shadow-slate-900/[0.03] sm:px-0">
          {EXERCISE_FAQ.map((item) => (
            <details
              key={item.q}
              className="group px-4 py-1 sm:px-6 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-slate-900 transition hover:text-emerald-900">
                <span>{item.q}</span>
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition group-open:rotate-45 group-open:border-emerald-200 group-open:bg-emerald-50 group-open:text-emerald-800"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <div className="pb-5 pr-10 text-[15px] leading-relaxed text-slate-600">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
