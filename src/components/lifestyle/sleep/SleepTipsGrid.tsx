import type { LucideIcon } from "lucide-react";
import { Coffee, Smartphone, SunMoon, Clock, Dumbbell, AlarmClock } from "lucide-react";
import { SLEEP_TIP_CARDS } from "@/lib/lifestyle/sleep-content";

const ICONS: LucideIcon[] = [Coffee, Smartphone, SunMoon, Clock, Dumbbell, AlarmClock];

export function SleepTipsGrid() {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          6 practical ways to improve your sleep
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SLEEP_TIP_CARDS.map((item, i) => {
            const Icon = ICONS[i] ?? AlarmClock;
            return (
              <article
                key={item.title}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm shadow-slate-900/[0.04] transition hover:-translate-y-0.5 hover:border-indigo-100 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition group-hover:bg-indigo-50 group-hover:text-indigo-900">
                  <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-[15px]">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
