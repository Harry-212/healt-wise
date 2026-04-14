export function SleepKeyInsight() {
  return (
    <section aria-labelledby="sleep-insight-heading">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p id="sleep-insight-heading" className="sr-only">
          Key research insight on sleep duration and weight
        </p>
        <blockquote className="rounded-2xl border border-indigo-100/90 bg-gradient-to-b from-indigo-50/80 to-white px-6 py-10 shadow-sm shadow-indigo-900/[0.04] sm:px-10 sm:py-12">
          <p className="text-xl font-semibold leading-snug text-slate-900 sm:text-2xl sm:leading-tight">
            People who sleep less than 5 hours per night are significantly more likely to gain weight.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Short sleep is consistently linked in observational research with higher obesity risk—often
            alongside appetite changes, lower activity, and disrupted rhythms. Individual risk varies;
            aim for consistent, adequate sleep as part of any weight plan.
          </p>
        </blockquote>
      </div>
    </section>
  );
}
