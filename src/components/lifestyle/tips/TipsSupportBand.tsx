import Image from "next/image";
import { TIPS_SUPPORT_IMAGE, TIPS_SUPPORT_PILLARS } from "@/lib/lifestyle/tips-content";

export function TipsSupportBand() {
  return (
    <section>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-100 bg-slate-50/80 shadow-sm shadow-slate-900/[0.04] sm:rounded-[2.25rem]">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <Image
              src={TIPS_SUPPORT_IMAGE}
              alt="Person in a calm stretching or yoga pose"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Support your body beyond dieting
            </h2>
            <ul className="mt-10 space-y-10">
              {TIPS_SUPPORT_PILLARS.map((pillar) => (
                <li key={pillar.title}>
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
