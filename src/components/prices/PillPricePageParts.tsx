import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import type { PillFaq } from "@/lib/seo/pill-price-json-ld";

export const pillH2Class = "text-2xl font-bold tracking-tight text-slate-900 md:text-3xl";
export const pillH3Class = "text-lg font-bold text-slate-900 sm:text-xl";
export const pillLinkClass =
  "font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-4 hover:text-emerald-950";

export const pillButtonClass =
  "inline-flex min-h-[44px] items-center justify-center rounded-full px-5 text-sm font-semibold transition";

export function TrustTile({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value?: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <Icon aria-hidden className="h-6 w-6 shrink-0 text-emerald-700" />
      <p className="text-sm leading-snug text-slate-700">
        {value ? <span className="block text-lg font-bold text-slate-950">{value}</span> : null}
        {label}
      </p>
    </div>
  );
}

export function CheapestCard({
  dose,
  overall,
  pharmacy,
  seeAllLink = false,
}: {
  dose: string;
  overall: string;
  pharmacy: string;
  seeAllLink?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className={pillH3Class}>{dose}</p>
      <dl className="mt-3 space-y-3 text-sm">
        <div>
          <dt className="text-slate-600">Lowest listed price</dt>
          <dd className="font-bold text-slate-950">{overall}</dd>
        </div>
        <div>
          <dt className="text-slate-600">Lowest on a pharmacy&apos;s own website</dt>
          <dd className="font-bold text-slate-950">{pharmacy}</dd>
        </div>
      </dl>
      {seeAllLink ? (
        <a href="#price-table" className={`${pillLinkClass} mt-4 inline-flex min-h-[44px] items-center text-sm`}>
          See all doses
        </a>
      ) : null}
    </div>
  );
}

export function IncludedCallout({ included, extra }: { included: ReactNode; extra: ReactNode }) {
  return (
    <div className="grid gap-4 rounded-2xl border border-sky-200 bg-sky-50/70 p-5 text-sm leading-relaxed text-slate-800 sm:grid-cols-2 sm:text-base">
      <p>
        <strong className="text-slate-950">In the listed price:</strong> {included}
      </p>
      <p>
        <strong className="text-slate-950">Check at checkout:</strong> {extra}
      </p>
    </div>
  );
}

export function FaqAccordion({
  faqs,
  renderAnswer,
}: {
  faqs: PillFaq[];
  renderAnswer?: (faq: PillFaq) => ReactNode;
}) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <details
          key={faq.question}
          open={i === 0}
          className="group rounded-2xl border border-slate-200 bg-white shadow-sm"
        >
          <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 [&::-webkit-details-marker]:hidden">
            <h3 className={pillH3Class}>{faq.question}</h3>
            <ChevronDown
              aria-hidden
              className="h-5 w-5 shrink-0 text-slate-500 transition group-open:rotate-180"
            />
          </summary>
          <p className="px-4 pb-4 text-slate-800">
            {renderAnswer ? renderAnswer(faq) : faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
