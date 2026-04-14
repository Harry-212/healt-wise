import Image from "next/image";
import { STRESS_SYSTEM_IMAGE, STRESS_SYSTEM_PILLARS } from "@/lib/lifestyle/stress-content";

export function StressSystemBand() {
  return (
    <section>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50/80 shadow-sm shadow-slate-900/[0.04] sm:rounded-[2.25rem]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[260px] lg:min-h-[420px]">
            <Image
              src={STRESS_SYSTEM_IMAGE}
              alt="Calm morning routine — light, rest, and balance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Weight loss isn’t one habit — it&apos;s a system
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
              Stress management works best when combined with other core pillars of health. When these
              elements work together, your body becomes more resilient and responsive to change.
            </p>
            <ul className="mt-10 grid gap-8 sm:grid-cols-1">
              {STRESS_SYSTEM_PILLARS.map((pillar) => (
                <li key={pillar.title} className="border-b border-slate-200/80 pb-8 last:border-0 last:pb-0">
                  <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{pillar.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
