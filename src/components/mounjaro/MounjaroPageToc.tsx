import Link from "next/link";

const ITEMS: { href: string; label: string }[] = [
  { href: "#what-is-mounjaro", label: "What is Mounjaro?" },
  { href: "#mounjaro-facts-at-a-glance", label: "Facts at a glance" },
  { href: "#mounjaro-words-explained", label: "Words explained" },
  { href: "#how-mounjaro-works", label: "How it works" },
  { href: "#what-mounjaro-is-used-for", label: "What it is used for" },
  { href: "#tirzepatide-and-ingredients", label: "Tirzepatide & ingredients" },
  { href: "#doses-and-kwikpen", label: "Doses & KwikPen" },
  { href: "#how-long-it-takes", label: "How long it takes" },
  { href: "#who-can-take-it", label: "Who can take it" },
  { href: "#mounjaro-side-effects", label: "Side effects" },
  { href: "#compare-mounjaro-prices", label: "Compare prices" },
  { href: "#questions-to-ask", label: "Questions to ask" },
  { href: "#faq", label: "FAQ" },
];

export default function MounjaroPageToc() {
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
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm hover:border-violet-300 hover:text-violet-900"
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
                className="block rounded-lg px-2 py-1 hover:bg-violet-50 hover:text-violet-900"
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
