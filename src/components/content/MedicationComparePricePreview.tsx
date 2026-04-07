import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import {
  MOUNJARO_DOSE_KEYS,
  MOUNJARO_UK_COMPARE_LAST_UPDATED,
  MOUNJARO_UK_COMPARE_PROVIDERS,
  startingPrice as mounjaroStartingPrice,
  type MounjaroUkProviderCompare,
} from "@/lib/data/mounjaro-uk-compare-providers";
import {
  SAXENDA_UK_COMPARE_LAST_UPDATED,
  SAXENDA_UK_COMPARE_PROVIDERS,
  SAXENDA_PACK_KEYS,
  type SaxendaPackKey,
} from "@/lib/data/saxenda-uk-compare-providers";
import {
  pharmacyProfileHref,
  startingPrice as wegovyStartingPrice,
  WEGOVY_DOSE_KEYS,
  WEGOVY_UK_COMPARE_LAST_UPDATED,
  WEGOVY_UK_COMPARE_PROVIDERS,
  type WegovyUkProviderCompare,
} from "@/lib/data/wegovy-uk-compare-providers";

// re-use price key typing for preview column literals
type WegovyPriceKey = keyof WegovyUkProviderCompare["prices"];

const PREVIEW_ROWS = 3;

function doseLabel(key: string): string {
  return key.replace("mg", " mg");
}

function formatPrice(n: number) {
  return `£${n}`;
}

type Variant = "wegovy" | "mounjaro" | "saxenda";

/** Representative dose columns — full ladder on compare page. */
const WEGOVY_PREVIEW_KEYS: WegovyPriceKey[] = ["0.25mg", "1mg", "2.4mg"];

type MounjaroPriceKey = keyof MounjaroUkProviderCompare["prices"];

const MOUNJARO_PREVIEW_KEYS: MounjaroPriceKey[] = ["2.5mg", "7.5mg", "15mg"];

function ReviewsCell({
  rating,
  reviewCount,
}: {
  rating: number;
  reviewCount?: number;
}) {
  return (
    <span className="inline-flex flex-wrap items-center gap-1.5 tabular-nums">
      <Star
        className="h-3.5 w-3.5 shrink-0 fill-amber-400 text-amber-400"
        aria-hidden
      />
      <span className="font-semibold text-slate-900">{rating.toFixed(1)}</span>
      {reviewCount != null ? (
        <span className="text-xs text-slate-500">
          ({reviewCount.toLocaleString("en-GB")})
        </span>
      ) : null}
    </span>
  );
}

function WegovyPreview({
  compareHref,
  theadClass,
}: {
  compareHref: string;
  theadClass: string;
}) {
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
            <span className="font-semibold text-slate-700">{WEGOVY_DOSE_KEYS.length} dose columns</span> on
            the full page.
          </caption>
          <thead>
            <tr className={`border-b border-slate-200/90 ${theadClass}`}>
              <th scope="col" className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide">
                Provider
              </th>
              <th scope="col" className="px-2 py-2.5 text-xs font-semibold uppercase tracking-wide">
                Reviews
              </th>
              <th scope="col" className="px-2 py-2.5 text-xs font-semibold uppercase tracking-wide">
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
              <tr key={p.id} className="border-b border-slate-100/90 last:border-0">
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
                      <span className="text-slate-900">{more} more providers</span> with
                      every strength, delivery notes, filters, and discount mode — not
                      shown here on purpose.
                    </>
                  ) : (
                    <>
                      Full table adds sortable columns for every pen strength,
                      filters, and discount mode.
                    </>
                  )}
                </p>
                <Link
                  href={compareHref}
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

function MounjaroPreview({
  compareHref,
  theadClass,
}: {
  compareHref: string;
  theadClass: string;
}) {
  const sorted = [...MOUNJARO_UK_COMPARE_PROVIDERS].sort(
    (a, b) => mounjaroStartingPrice(a) - mounjaroStartingPrice(b),
  );
  const rows = sorted.slice(0, PREVIEW_ROWS);
  const more = Math.max(0, MOUNJARO_UK_COMPARE_PROVIDERS.length - PREVIEW_ROWS);

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <caption className="border-b border-slate-100 px-4 py-2 text-left text-xs text-slate-500">
            Snapshot preview — {MOUNJARO_UK_COMPARE_LAST_UPDATED}. Three sample rows
            by starting pen price;{" "}
            <span className="font-semibold text-slate-700">{MOUNJARO_DOSE_KEYS.length} strengths</span> on the
            full page.
          </caption>
          <thead>
            <tr className={`border-b border-slate-200/90 ${theadClass}`}>
              <th scope="col" className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide">
                Provider
              </th>
              <th scope="col" className="px-2 py-2.5 text-xs font-semibold uppercase tracking-wide">
                Reviews
              </th>
              <th scope="col" className="px-2 py-2.5 text-xs font-semibold uppercase tracking-wide">
                From
              </th>
              {MOUNJARO_PREVIEW_KEYS.map((k) => (
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
              <tr key={p.id} className="border-b border-slate-100/90 last:border-0">
                <td className="px-3 py-2.5">
                  <Link
                    href={pharmacyProfileHref(p.id)}
                    className="font-semibold text-violet-800 underline decoration-violet-300/70 underline-offset-2 hover:decoration-violet-600"
                  >
                    {p.name}
                  </Link>
                </td>
                <td className="px-2 py-2.5">
                  <ReviewsCell rating={p.rating} />
                </td>
                <td className="px-2 py-2.5 tabular-nums font-medium">
                  {formatPrice(mounjaroStartingPrice(p))}
                </td>
                {MOUNJARO_PREVIEW_KEYS.map((k) => (
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
                colSpan={3 + MOUNJARO_PREVIEW_KEYS.length}
                className="px-4 py-4 text-center"
              >
                <p className="mb-3 text-xs font-medium text-slate-600">
                  {more > 0 ? (
                    <>
                      <span className="text-slate-900">{more} more providers</span> and
                      the complete strength grid — explore on the comparison page.
                    </>
                  ) : (
                    <>
                      See every strength, monthly estimate, and filters on the full
                      table.
                    </>
                  )}
                </p>
                <Link
                  href={compareHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-violet-700"
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

function SaxendaPreview({
  compareHref,
  theadClass,
}: {
  compareHref: string;
  theadClass: string;
}) {
  const sorted = [...SAXENDA_UK_COMPARE_PROVIDERS].sort(
    (a, b) => a.packs["1"].packPrice - b.packs["1"].packPrice,
  );
  const rows = sorted.slice(0, PREVIEW_ROWS);
  const more = Math.max(0, SAXENDA_UK_COMPARE_PROVIDERS.length - PREVIEW_ROWS);
  const packLabels: Record<SaxendaPackKey, string> = {
    "1": "1 pen",
    "3": "3 pens",
    "5": "5 pens",
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
          <caption className="border-b border-slate-100 px-4 py-2 text-left text-xs text-slate-500">
            Snapshot preview — {SAXENDA_UK_COMPARE_LAST_UPDATED}. All three pack sizes
            shown; full page adds delivery, trust, filters, and discount mode.
          </caption>
          <thead>
            <tr className={`border-b border-slate-200/90 ${theadClass}`}>
              <th scope="col" className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide">
                Provider
              </th>
              <th scope="col" className="px-2 py-2.5 text-xs font-semibold uppercase tracking-wide">
                Reviews
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
              <tr key={p.id} className="border-b border-slate-100/90 last:border-0">
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
                        <span className="font-medium">{formatPrice(cell.packPrice)}</span>
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
                  href={compareHref}
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

export default function MedicationComparePricePreview({
  variant,
}: {
  variant: Variant;
}) {
  const href =
    variant === "wegovy"
      ? "/wegovy-price-comparison#wegovy-compare-table"
      : variant === "mounjaro"
        ? "/mounjaro-price-comparison#mounjaro-compare-table"
        : "/saxenda-price-comparison#saxenda-compare-table";

  const thead =
    variant === "wegovy"
      ? "bg-teal-50/90 text-teal-950"
      : variant === "mounjaro"
        ? "bg-violet-50/90 text-violet-950"
        : "bg-sky-50/90 text-sky-950";

  if (variant === "wegovy") {
    return <WegovyPreview compareHref={href} theadClass={thead} />;
  }
  if (variant === "mounjaro") {
    return <MounjaroPreview compareHref={href} theadClass={thead} />;
  }
  return <SaxendaPreview compareHref={href} theadClass={thead} />;
}
