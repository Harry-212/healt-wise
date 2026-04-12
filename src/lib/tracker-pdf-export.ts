import type { GoalSettings, TrackerEntry, TrackerMetrics, WeightUnit } from "@/lib/tracker-store";
import { formatWeight, sortEntriesByDate } from "@/lib/tracker-store";

export type TrackerPdfExportInput = {
  entries: TrackerEntry[];
  goals: GoalSettings;
  unit: WeightUnit;
  metrics: TrackerMetrics;
  userEmail?: string | null;
};

export async function exportWeightTrackerPdf(input: TrackerPdfExportInput): Promise<void> {
  const [{ default: jsPDF }, { default: autoTable }] = await Promise.all([
    import("jspdf"),
    import("jspdf-autotable"),
  ]);

  const sorted = sortEntriesByDate(input.entries);
  const { goals, unit, metrics } = input;
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 14;
  let y = margin;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Health Wise — Weight loss tracker", margin, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(80, 80, 80);
  const generated = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  doc.text(`Generated: ${generated}`, margin, y);
  y += 5;
  if (input.userEmail) {
    doc.text(`Account: ${input.userEmail}`, margin, y);
    y += 5;
  }
  doc.text(`Display unit: ${unit === "stone" ? "stone" : unit}`, margin, y);
  y += 5;
  if (goals.goalWeightKg != null) {
    doc.text(`Goal weight: ${formatWeight(goals.goalWeightKg, unit)}`, margin, y);
    y += 5;
  }
  doc.setTextColor(0, 0, 0);
  y += 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Summary", margin, y);
  y += 6;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  const summaryLines: string[] = [];
  if (metrics.startWeightKg != null) {
    summaryLines.push(`Start weight: ${formatWeight(metrics.startWeightKg, unit)}`);
  }
  if (metrics.currentWeightKg != null) {
    summaryLines.push(`Latest weight: ${formatWeight(metrics.currentWeightKg, unit)}`);
  }
  if (metrics.totalLossKg != null && sorted.length > 1) {
    const sign = metrics.totalLossKg >= 0 ? "−" : "+";
    summaryLines.push(`Change (first → latest): ${sign}${Math.abs(metrics.totalLossKg).toFixed(1)} kg`);
  }
  if (metrics.weeklyAvgLossKg != null && sorted.length > 1) {
    summaryLines.push(`Avg per week: ${metrics.weeklyAvgLossKg.toFixed(2)} kg/week`);
  }
  if (metrics.progressPct != null) {
    summaryLines.push(`Goal progress: ${metrics.progressPct.toFixed(0)}%`);
  }
  for (const line of summaryLines) {
    doc.text(line, margin, y);
    y += 4.5;
  }
  y += 4;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Weigh-ins", margin, y);
  y += 2;

  const head = [["Date", "Weight", "Medication", "Dose", "Supplier", "Notes"]];
  const body = sorted.map((e) => {
    const w = formatWeight(e.weightKg, unit);
    const notes = e.notes.length > 80 ? `${e.notes.slice(0, 77)}…` : e.notes;
    return [e.date, w, e.medication, e.dose, e.supplier || "—", notes || "—"];
  });

  autoTable(doc, {
    startY: y,
    head,
    body,
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [15, 23, 42], textColor: 255 },
    margin: { left: margin, right: margin },
    tableWidth: pageW - margin * 2,
  });

  const fn = `health-wise-weight-tracker-${new Date().toISOString().slice(0, 10)}.pdf`;
  doc.save(fn);
}
