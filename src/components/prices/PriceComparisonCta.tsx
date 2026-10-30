import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PriceCheckNotice from "@/components/prices/PriceCheckNotice";

/**
 * Internal call-to-action from a calculator or calculator article to a
 * Healthwise360 price-comparison page. Never links to a pharmacy. No hooks,
 * so it renders in server and client components; the click handlers are only
 * passed from client components.
 */
export default function PriceComparisonCta({
  heading,
  body,
  primary,
  secondary,
  lastChecked,
  darkMode = false,
}: {
  heading: string;
  body?: string;
  primary: { label: string; href: string; onClick?: () => void };
  secondary?: { label: string; href: string; onClick?: () => void };
  /** The price store's check label, the same value the comparison tables show. */
  lastChecked: string | null | undefined;
  darkMode?: boolean;
}) {
  const headingId = `cta-${primary.href.replace(/[^a-z0-9]+/gi, "-")}-${heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")}`;
  const focus =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700";

  return (
    <aside
      aria-labelledby={headingId}
      className={`my-8 rounded-2xl border-2 p-5 sm:p-6 ${
        darkMode
          ? "border-slate-700 bg-slate-900 text-slate-200"
          : "border-emerald-200 bg-emerald-50/60 text-slate-700"
      }`}
    >
      <p
        id={headingId}
        className={`text-lg font-bold ${darkMode ? "text-white" : "text-slate-900"}`}
      >
        {heading}
      </p>
      {body ? <p className="mt-2 text-sm leading-relaxed sm:text-base">{body}</p> : null}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <Link
          href={primary.href}
          onClick={primary.onClick}
          className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 text-base font-semibold text-white shadow-sm transition hover:bg-emerald-800 ${focus}`}
        >
          {primary.label}
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        {secondary ? (
          <Link
            href={secondary.href}
            onClick={secondary.onClick}
            className={`inline-flex min-h-12 items-center justify-center rounded-full px-2 text-base font-semibold underline-offset-2 hover:underline ${
              darkMode ? "text-emerald-300" : "text-emerald-800"
            } ${focus}`}
          >
            {secondary.label}
          </Link>
        ) : null}
      </div>
      <PriceCheckNotice
        lastChecked={lastChecked}
        className={`mt-4 text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}
      />
    </aside>
  );
}
