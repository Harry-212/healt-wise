import Link from "next/link";

/**
 * Coverage paragraph shown directly above each main price table (Task 125, HW-04).
 * `statistics` names the figures the table or the sections beneath it actually show,
 * so the sentence never mentions a column that is not there.
 */
export default function ComparisonCoverageNote({
  statistics = "Lowest, typical and highest",
  className = "",
}: {
  statistics?: "Lowest, typical and highest" | "Lowest and highest";
  className?: string;
}) {
  return (
    <p
      id="comparison-coverage"
      className={`max-w-3xl text-sm leading-relaxed text-slate-600 ${className}`.trim()}
    >
      <strong className="font-semibold text-slate-800">Comparison coverage:</strong>{" "}
      We compare selected partner pharmacies, rather than the whole UK market.{" "}
      {statistics} prices shown are calculated from the partner listings
      included in this comparison. Check the price-check date and any
      applicable conditions before ordering.{" "}
      <Link
        href="/methodology"
        className="font-semibold text-emerald-800 underline underline-offset-2 hover:text-emerald-950"
      >
        How our comparison works
      </Link>
    </p>
  );
}
