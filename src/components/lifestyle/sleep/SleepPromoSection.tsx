import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { SLEEP_PROMO_BENEFITS, SLEEP_PROMO_IMAGE } from "@/lib/lifestyle/sleep-content";

export function SleepPromoSection() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Support your sleep. Transform your results.
          </h2>
          <p className="mt-4 text-base font-medium text-slate-800 sm:text-[17px]">
            A structured approach to weight loss that supports your body—day and night.
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-[17px]">
            Better nights make daytime choices easier: appetite, mood, training, and adherence all
            benefit when sleep is protected alongside nutrition and movement.
          </p>
          <ul className="mt-8 space-y-3">
            {SLEEP_PROMO_BENEFITS.map((line) => (
              <li key={line} className="flex gap-3 text-[15px] text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-indigo-900">
                  <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                </span>
                {line}
              </li>
            ))}
          </ul>
          <Link
            href="/tools/bmi-calculator"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-indigo-700 px-8 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Get started
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Educational content only. Medical weight loss pathways require assessment and UK
            prescribing rules.
          </p>
        </div>
        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-md shadow-slate-900/[0.06] sm:aspect-[5/4] lg:order-2">
          <Image
            src={SLEEP_PROMO_IMAGE}
            alt="Wellness tracking on a phone — habits and progress"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
