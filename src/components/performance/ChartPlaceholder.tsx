/** Neutral loading shell for deferred charts / interactive blocks. */
export function ChartPlaceholder({
  minHeight,
  className = "",
}: {
  minHeight: string;
  className?: string;
}) {
  return (
    <div
      className={`flex animate-pulse items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 text-xs text-slate-400 ${className}`}
      style={{ minHeight }}
      aria-busy="true"
      aria-label="Loading"
    />
  );
}
