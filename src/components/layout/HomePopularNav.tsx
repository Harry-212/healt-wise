import Link from "next/link";
import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";

const LINKS = [
  { href: "/wegovy-price-comparison", label: "Wegovy prices" },
  { href: "/mounjaro-price-comparison", label: "Mounjaro prices" },
  { href: "/saxenda-price-comparison", label: "Saxenda prices" },
  { href: "/blog", label: "Blog" },
  { href: HELPFUL_GUIDES_HUB_PATH, label: "Helpful guides" },
] as const;

/**
 * Crawlable first-hop links from the homepage to core hubs (helps search engines
 * understand site structure; does not control Google sitelinks directly).
 */
export default function HomePopularNav() {
  return (
    <nav
      aria-label="Popular comparisons, blog, and guides"
      className="w-full border-y border-slate-200/90 bg-slate-50/80 px-4 py-4 md:px-8"
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Popular on Health Wise
        </p>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-700">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-0.5 py-0.5 text-brand-secondary underline-offset-2 hover:text-brand-primary hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
