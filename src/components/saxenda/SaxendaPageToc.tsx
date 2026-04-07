import Link from "next/link";

const ITEMS: { href: string; label: string }[] = [
  { href: "#what-is-saxenda", label: "What is Saxenda?" },
  { href: "#how-saxenda-works", label: "How it works" },
  { href: "#saxenda-week-dose-timeline", label: "Dose timeline" },
  { href: "#saxenda-expect-over-time", label: "What to expect" },
  { href: "#weight-loss-results", label: "Trial results" },
  { href: "#dosage-plan", label: "Dosage plan" },
  { href: "#saxenda-price-uk", label: "Price UK" },
  { href: "#saxenda-vs-newer", label: "vs newer treatments" },
  { href: "#side-effects-safety", label: "Side effects" },
  { href: "#eligibility-uk", label: "Eligibility" },
  { href: "#how-to-get-saxenda-uk", label: "How to get in the UK" },
  { href: "#best-providers", label: "Providers" },
  { href: "#trust-verification", label: "Trust" },
  { href: "#faq", label: "FAQ" },
  { href: "#medical-review", label: "Review & references" },
];

export default function SaxendaPageToc() {
  return (
    <>
      <nav
        className="mb-8 flex flex-wrap gap-2 lg:hidden"
        aria-label="On this page (quick links)"
      >
        {ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-sky-300 hover:text-sky-900"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <nav
        className="sticky top-28 hidden h-fit w-52 shrink-0 rounded-2xl border border-brand-border bg-white/90 p-4 text-sm shadow-sm backdrop-blur-sm lg:block"
        aria-label="On this page"
      >
        <p className="mb-3 font-semibold text-slate-900">On this page</p>
        <ul className="flex flex-col gap-1.5 text-slate-600">
          {ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-2 py-1 hover:bg-sky-50 hover:text-sky-900"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
