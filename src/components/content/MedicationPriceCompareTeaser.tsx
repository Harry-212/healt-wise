import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MedicationComparePricePreview from "@/components/content/MedicationComparePricePreview";

type Variant = "wegovy" | "mounjaro" | "saxenda";

const CONFIG: Record<
  Variant,
  {
    sectionId: string;
    title: string;
    lead: string;
    compareHref: string;
    compareLabel: string;
    hubHref: string;
    hubLabel: string;
    ring: string;
    bg: string;
    headingAccent: string;
    linkClass: string;
  }
> = {
  wegovy: {
    sectionId: "wegovy-price-uk",
    title: "UK Wegovy prices at a glance",
    lead:
      "Below is a small slice of our latest multi-pharmacy snapshot — enough to compare the pattern, not the whole market. Open the full table for every provider, dose, and filter.",
    compareHref: "/wegovy-price-comparison#wegovy-compare-table",
    compareLabel: "Full Wegovy comparison",
    hubHref: "/prices/cheapest-options-uk",
    hubLabel: "Cheapest GLP-1 options UK",
    ring: "ring-teal-200/80",
    bg: "from-teal-50/50 via-white to-white",
    headingAccent: "text-teal-800",
    linkClass: "text-teal-800 hover:text-teal-950",
  },
  mounjaro: {
    sectionId: "mounjaro-price-uk",
    title: "UK Mounjaro prices at a glance",
    lead:
      "Preview uses the same data as our comparison hub: a few providers and three pen strengths. The live table adds the full titration grid, monthly hints, and discount mode.",
    compareHref: "/mounjaro-price-comparison#mounjaro-compare-table",
    compareLabel: "Full Mounjaro comparison",
    hubHref: "/prices/cheapest-options-uk",
    hubLabel: "Cheapest GLP-1 options UK",
    ring: "ring-violet-200/80",
    bg: "from-violet-50/50 via-white to-white",
    headingAccent: "text-violet-800",
    linkClass: "text-violet-800 hover:text-violet-950",
  },
  saxenda: {
    sectionId: "saxenda-price-uk",
    title: "UK Saxenda pack prices at a glance",
    lead:
      "Every pack size (1, 3, 5 pens) is visible for our sample pharmacies. On the comparison page you get sort, filters, delivery, trust blocks, and the same styling as here.",
    compareHref: "/saxenda-price-comparison#saxenda-compare-table",
    compareLabel: "Full Saxenda comparison",
    hubHref: "/prices/cheapest-options-uk",
    hubLabel: "Cheapest GLP-1 options UK",
    ring: "ring-sky-200/80",
    bg: "from-sky-50/50 via-white to-white",
    headingAccent: "text-sky-800",
    linkClass: "text-sky-800 hover:text-sky-950",
  },
};

export default function MedicationPriceCompareTeaser({
  variant,
}: {
  variant: Variant;
}) {
  const c = CONFIG[variant];

  return (
    <section
      id={c.sectionId}
      className={`scroll-mt-28 rounded-2xl border border-slate-200/90 bg-linear-to-br p-5 shadow-sm ring-1 sm:p-6 md:p-8 ${c.ring} ${c.bg}`}
    >
      <header className="mb-6 max-w-3xl space-y-2">
        <h2
          className={`text-2xl font-bold tracking-tight text-slate-900 md:text-[1.65rem] ${c.headingAccent}`}
        >
          {c.title}
        </h2>
        <p className="text-slate-600 leading-relaxed">{c.lead}</p>
      </header>

      <MedicationComparePricePreview variant={variant} />

      <div className="mt-6 flex flex-col items-center gap-3 border-t border-slate-200/80 pt-6 sm:flex-row sm:justify-center">
        <Link
          href={c.compareHref}
          className={`inline-flex items-center gap-2 text-sm font-bold underline-offset-4 transition hover:underline ${c.linkClass}`}
        >
          {c.compareLabel}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        <span className="hidden text-slate-300 sm:inline" aria-hidden>
          ·
        </span>
        <Link
          href={c.hubHref}
          className={`text-sm font-semibold underline-offset-2 transition hover:underline ${c.linkClass}`}
        >
          {c.hubLabel}
        </Link>
      </div>
      <p className="mt-4 text-center text-xs leading-relaxed text-slate-500">
        Prescription-only — a qualified clinician must assess you before supply.
        Illustrative figures; confirm live checkout prices.
      </p>
    </section>
  );
}
