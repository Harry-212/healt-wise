const PHASES: { title: string; bullets: string[] }[] = [
  {
    title: "Weeks 1–2",
    bullets: [
      "Mild appetite suppression may begin.",
      "Early adjustment to daily injections and possible GI effects.",
    ],
  },
  {
    title: "Weeks 3–5",
    bullets: [
      "Noticeable reduction in hunger for many as dose increases.",
      "Improved portion control when titration is tolerated.",
    ],
  },
  {
    title: "Months 2–3",
    bullets: [
      "Gradual, more consistent weight change for some users.",
      "Cravings may feel easier to manage alongside habits.",
    ],
  },
  {
    title: "Months 4+",
    bullets: [
      "Sustained weight reduction for those who continue treatment and lifestyle support.",
      "More stable eating patterns when daily dosing is maintained.",
    ],
  },
];

export default function SaxendaExpectationPhases() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {PHASES.map((phase) => (
        <div
          key={phase.title}
          className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:p-5"
        >
          <h4 className="text-base font-bold text-slate-900">{phase.title}</h4>
          <ul className="mt-3 list-inside list-disc space-y-2 text-sm text-slate-600">
            {phase.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
