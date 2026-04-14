export function StressAcuteChronicCompare() {
  return (
    <section aria-labelledby="stress-types-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 id="stress-types-heading" className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Not all stress is the same
        </h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.04] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Acute stress</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Short-term and situational</h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                Triggers “fight or flight” response
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                May temporarily suppress appetite
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Examples</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Job interview</li>
              <li>Public speaking</li>
              <li>Arguments</li>
            </ul>
          </article>
          <article className="rounded-2xl border border-amber-100/80 bg-amber-50/30 p-6 shadow-sm shadow-slate-900/[0.04] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-900/80">Chronic stress</p>
            <h3 className="mt-2 text-xl font-semibold text-slate-900">Long-term and ongoing</h3>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-600">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden />
                Leads to sustained cortisol release
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-600" aria-hidden />
                Increases cravings and fat storage
              </li>
            </ul>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-slate-500">Examples</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-600">
              <li>Financial pressure</li>
              <li>Relationship issues</li>
              <li>Work burnout</li>
            </ul>
          </article>
        </div>
        <p className="mt-8 rounded-xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-center text-sm font-medium text-slate-800">
          Chronic stress is where weight-gain risks increase significantly.
        </p>
      </div>
    </section>
  );
}
