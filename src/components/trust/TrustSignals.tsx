import { BadgeCheck, Building2, Stethoscope } from "lucide-react";

/** Compact trust row for footers, templates, or below the homepage trust bar. */
export default function TrustSignals({
  className = "",
  dense = false,
}: {
  className?: string;
  dense?: boolean;
}) {
  const item =
    "flex items-center gap-2 text-brand-secondary " +
    (dense ? "text-xs" : "text-sm");
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${className}`}
    >
      <span className={item}>
        <BadgeCheck
          className="h-4 w-4 shrink-0 text-brand-success"
          aria-hidden
        />
        GPhC verified listings
      </span>
      <span className={item}>
        <Building2
          className="h-4 w-4 shrink-0 text-brand-secondary"
          aria-hidden
        />
        UK pharmacy regulated context
      </span>
      <span className={item}>
        <Stethoscope
          className="h-4 w-4 shrink-0 text-brand-secondary"
          aria-hidden
        />
        Doctor-reviewed guides
      </span>
    </div>
  );
}
