import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrustpilotColumnHeaderContent } from "@/components/compare/TrustpilotRatingPresentation";
import {
  formatPrice,
  PREVIEW_ROWS,
  ReviewsCell,
} from "@/components/content/previews/medication-compare-price-preview-ui";
import {
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  SAXENDA_UK_COMPARE_PROVIDERS,
  SAXENDA_PACK_KEYS,
  type SaxendaPackKey,
} from "@/lib/data/saxenda-uk-compare-providers";
import { pharmacyProfileHref } from "@/lib/data/wegovy-uk-compare-providers";

const COMPARE_HREF = "/saxenda-price-comparison#saxenda-compare-table";
const THEAD = "bg-sky-50/90 text-sky-950";

const packLabels: Record<SaxendaPackKey, string> = {
  "1": "1 pen",
  "3": "3 pens",
  "5": "5 pens",
};

export default function MedicationComparePricePreviewSaxenda() {
  const sorted = [...SAXENDA_UK_COMPARE_PROVIDERS].sort(
    (a, b) => a.packs["1"].packPrice - b.packs["1"].packPrice,
  );
  const rows = sorted.slice(0, PREVIEW_ROWS);
  const more = Math.max(0, SAXENDA_UK_COMPARE_PROVIDERS.length - PREVIEW_ROWS);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <caption className="border-b border-slate-100 px-4 py-2 text-left text-xs text-slate-500">
            Snapshot preview — {SAXENDA_UK_COMPARE_LAST_UPDATED}. All three pack sizes
            shown; full page adds delivery, trust, filters, and discount mode.
          </caption>
          <thead>
            <tr className={`border-b border-slate-200/90 ${THEAD}`}>
              <th
                scope="col"
                className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide"
              >
                Provider
              </th>
              <th
                scope="col"
                className="px-2 py-2.5 text-xs font-semibold uppercase tracking-wide"
                title="Trustpilot rating"
              >
                <TrustpilotColumnHeaderContent />
              </th>
              {SAXENDA_PACK_KEYS.map((k) => (
                <th
                  key={k}
                  scope="col"
                  className="px-2 py-2.5 text-center text-xs font-semibold uppercase tracking-wide"
                >
                  {packLabels[k]}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-slate-800">
            {rows.map((p) => (
              <tr
                key={p.id}
                className="border-b border-slate-100/90 last:border-0"
              >
                <td className="px-3 py-2.5">
                  <Link
                    href={pharmacyProfileHref(p.id)}
                    className="font-semibold text-sky-900 underline decoration-sky-300/70 underline-offset-2 hover:decoration-sky-600"
                  >
                    {p.name}
                  </Link>
                  {p.promoNote ? (
                    <span className="mt-0.5 block text-[11px] font-medium text-amber-800">
                      {p.promoNote}
                    </span>
                  ) : null}
                </td>
                <td className="px-2 py-2.5">
                  <ReviewsCell rating={p.rating} reviewCount={p.reviewCount} />
                </td>
                {SAXENDA_PACK_KEYS.map((k) => {
                  const cell = p.packs[k];
                  return (
                    <td
                      key={k}
                      className="px-2 py-2.5 text-center tabular-nums text-sm text-slate-800"
                    >
                      <div className="flex flex-col gap-0.5">
                        <span className="font-medium">
                          {formatPrice(cell.packPrice)}
                        </span>
                        <span className="text-[11px] text-slate-500">
                          £{cell.pricePerMg.toFixed(2)}/mg
                        </span>
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-linear-to-b from-slate-50/80 to-slate-100/90">
              <td
                colSpan={2 + SAXENDA_PACK_KEYS.length}
                className="px-4 py-4 text-center"
              >
                <p className="mb-3 text-xs font-medium text-slate-600">
                  {more > 0 ? (
                    <>
                      <span className="text-slate-900">{more} more rows</span> on the
                      live hub plus sortable columns and safety details.
                    </>
                  ) : (
                    <>
                      Interactive table: sort, filter, and discount preview on the
                      comparison page.
                    </>
                  )}
                </p>
                <Link
                  href={COMPARE_HREF}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-sky-700"
                >
                  Open full comparison table
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
