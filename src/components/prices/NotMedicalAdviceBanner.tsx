import { AlertTriangle } from "lucide-react";

export default function NotMedicalAdviceBanner() {
  return (
    <aside
      className="rounded-2xl border border-amber-200/90 bg-amber-50/90 p-4 shadow-sm md:p-5"
      role="note"
    >
      <div className="flex gap-3">
        <AlertTriangle
          className="mt-0.5 h-5 w-5 shrink-0 text-amber-700"
          aria-hidden
        />
        <div className="min-w-0 space-y-2 text-sm leading-relaxed text-amber-950">
          <p className="font-semibold text-amber-950">
            This website does not diagnose conditions or prescribe treatment.
          </p>
          <p className="text-amber-950/90">
            Health Wise publishes educational price snapshots and comparisons
            only. GLP-1 medicines are prescription-only in the UK: a qualified
            prescriber must assess your history, risks, and eligibility.
            Nothing here replaces that conversation or your pharmacist&apos;s
            advice.
          </p>
        </div>
      </div>
    </aside>
  );
}
