import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TrustpilotColumnHeaderContent } from "@/components/compare/TrustpilotRatingPresentation";
import {
  doseLabel,
  formatPrice,
  PREVIEW_ROWS,
  ReviewsCell,
} from "@/components/content/previews/medication-compare-price-preview-ui";
import {
  pharmacyProfileHref,
  startingPrice as wegovyStartingPrice,
  WEGOVY_DOSE_KEYS,
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";

type WegovyPriceKey = keyof WegovyUkProviderCompare["prices"];

const WEGOVY_PREVIEW_KEYS: WegovyPriceKey[] = ["0.25mg", "1mg", "2.4mg"];

const COMPARE_HREF = "/wegovy-price-comparison#wegovy-compare-table";
const THEAD = "bg-teal-50/90 text-teal-950";

export default function MedicationComparePricePreviewWegovy() {
  const sorted = [...WEGOVY_UK_COMPARE_PROVIDERS].sort(
    (a, b) => wegovyStartingPrice(a) - wegovyStartingPrice(b),
  );
  const rows = sorted.slice(0, PREVIEW_ROWS);
  const more = Math.max(0, WEGOVY_UK_COMPARE_PROVIDERS.length - PREVIEW_ROWS);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <caption className="border-b border-slate-100 px-4 py-2 text-left text-xs text-slate-500">
            Snapshot preview — {WEGOVY_UK_COMPARE_LAST_UPDATED}. Three lowest
            starting-cost rows;{" "}
            <span className="font-semibold text-slate-700">
              {WEGOVY_DOSE_KEYS.length} dose columns
            </span>{" "}
            on the full page.
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
              <th
                scope="col"
                className="px-2 py-2.5 text-xs font-semibold uppercase tracking-wide"
              >
                From
              </th>
              {WEGOVY_PREVIEW_KEYS.map((k) => (
                <th
                  key={k}
                  scope="col"
                  className="px-2 py-2.5 text-center text-xs font-semibold uppercase tracking-wide"
                >
                  {doseLabel(k)}
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
                    className="font-semibold text-teal-800 underline decoration-teal-300/70 underline-offset-2 hover:decoration-teal-600"
                  >
                    {p.name}
                  </Link>
                </td>
                <td className="px-2 py-2.5">
                  <ReviewsCell rating={p.rating} />
                </td>
                <td className="px-2 py-2.5 tabular-nums font-medium">
                  {formatPrice(wegovyStartingPrice(p))}
                </td>
                {WEGOVY_PREVIEW_KEYS.map((k) => (
                  <td
                    key={k}
                    className="px-2 py-2.5 text-center tabular-nums text-slate-700"
                  >
                    {formatPrice(p.prices[k])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-linear-to-b from-slate-50/80 to-slate-100/90">
              <td
                colSpan={3 + WEGOVY_PREVIEW_KEYS.length}
                className="px-4 py-4 text-center"
              >
                <p className="mb-3 text-xs font-medium text-slate-600">
                  {more > 0 ? (
                    <>
                      <span className="text-slate-900">{more} more providers</span>{" "}
                      with every strength, delivery notes, filters, and discount mode
                      — not shown here on purpose.
                    </>
                  ) : (
                    <>
                      Full table adds sortable columns for every pen strength,
                      filters, and discount mode.
                    </>
                  )}
                </p>
                <Link
                  href={COMPARE_HREF}
                  className="inline-flex items-center gap-2 rounded-xl bg-teal-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-teal-700"
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
