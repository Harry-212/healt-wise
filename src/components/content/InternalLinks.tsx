import Link from "next/link";
import type { InternalLinkSet } from "@/lib/internal-linking";

export default function InternalLinks({
  title = "Related on Health Wise",
  links,
}: {
  title?: string;
  links: InternalLinkSet;
}) {
  return (
    <section
      className="rounded-xl border border-brand-border bg-brand-surface/60 p-6"
      aria-labelledby="internal-links-heading"
    >
      <h2
        id="internal-links-heading"
        className="text-lg font-semibold text-brand-primary"
      >
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-700">
        {links.compare.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="text-brand-secondary underline-offset-2 hover:underline"
            >
              Compare: {c.label}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href={links.price.href}
            className="text-brand-secondary underline-offset-2 hover:underline"
          >
            Prices: {links.price.label}
          </Link>
        </li>
        <li>
          <Link
            href={links.tool.href}
            className="text-brand-secondary underline-offset-2 hover:underline"
          >
            Tool: {links.tool.label}
          </Link>
        </li>
      </ul>
    </section>
  );
}
