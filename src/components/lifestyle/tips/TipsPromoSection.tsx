import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { TIPS_PROMO_BENEFITS, TIPS_PROMO_IMAGE } from "@/lib/lifestyle/tips-content";

export function TipsPromoSection() {
  return (
    <section>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:gap-14 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            A smarter way to lose weight
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-[17px]">
            For some people, lifestyle changes alone aren’t enough. Medical treatments like GLP-1
            medications can support weight loss by reducing appetite and improving metabolic function.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-[17px]">
            Combined with the right habits, they can help you achieve sustainable, long-term results.
          </p>
          <ul className="mt-8 space-y-3">
            {TIPS_PROMO_BENEFITS.map((line) => (
              <li key={line} className="flex gap-3 text-[15px] text-slate-700">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                  <Check className="h-3 w-3" strokeWidth={2.5} aria-hidden />
                </span>
                {line}
              </li>
            ))}
          </ul>
          <Link
            href="/tools/bmi-calculator"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-emerald-700 px-8 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Check your eligibility
          </Link>
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Informational only—not medical advice. Treatment access depends on clinical assessment and
            UK prescribing rules.
          </p>
        </div>
        <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-md shadow-slate-900/[0.06] sm:aspect-[5/4] lg:order-2">
          <Image
            src={TIPS_PROMO_IMAGE}
            alt="Healthcare professional consulting with a patient"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
