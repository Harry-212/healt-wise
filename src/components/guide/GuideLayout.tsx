import Image from "next/image";
import Link from "next/link";
import { GUIDE_IMAGES } from "@/lib/guide-images";
import {
  HELPFUL_GUIDES_HUB_PATH,
  helpfulGuidePath,
} from "@/lib/helpful-guide-slugs";
import { siteOrigin } from "@/lib/seo/site-origin";
import GuideTocSidebar from "./GuideTocSidebar";
import { GuideSharePanel } from "./GuideSharePanel";

/** Splits a title at the first ":" so the subtitle starts on a new line. */
function SplitTitle({ text }: { text: string }) {
  const idx = text.indexOf(":");
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx + 1)}
      <br />
      {text.slice(idx + 1).trimStart()}
    </>
  );
}

export type TocEntry = { id: string; label: string };

type Props = {
  slug?: string;
  category: string;
  categorySlug: string;
  title: string;
  description: string;
  readTime: string;
  lastUpdated: string;
  toc: TocEntry[];
  children: React.ReactNode;
  schemaJson?: Record<string, unknown>;
};

export function GuideLayout({
  slug,
  category,
  title,
  description,
  readTime,
  lastUpdated,
  toc,
  children,
  schemaJson,
}: Props) {
  const thumbnail = slug ? GUIDE_IMAGES[slug] : undefined;
  const shareUrl = slug ? `${siteOrigin()}${helpfulGuidePath(slug)}` : "";
  const faqIdx = toc.findIndex((e) => e.id === "faq");
  const tocMobile = faqIdx > 0 ? toc.slice(0, faqIdx) : toc;
  return (
    <>
      {schemaJson && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      )}

      {/* ── Page shell ── */}
      <div className="mx-auto max-w-7xl px-4 pb-24 pt-8 sm:px-6 sm:pt-10 md:pt-14 lg:px-8">
        {/* Breadcrumb — full width */}
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-1 text-xs text-slate-400"
        >
          <Link href="/" className="transition-colors hover:text-slate-700">
            Home
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={HELPFUL_GUIDES_HUB_PATH}
            className="transition-colors hover:text-slate-700"
          >
            Helpful Guides
          </Link>
          <span aria-hidden>/</span>
          <Link
            href={`${HELPFUL_GUIDES_HUB_PATH}?category=${encodeURIComponent(category)}`}
            className="transition-colors hover:text-slate-700"
          >
            {category}
          </Link>
        </nav>

        {/* ── 2-column layout: TOC left | article right ── */}
        <div className="mt-6 flex flex-col gap-10 xl:flex-row xl:gap-14">

          {/* ── Left: desktop sticky TOC sidebar ── */}
          {toc.length > 0 && (
            <GuideTocSidebar key={slug ?? "toc"} toc={toc} />
          )}

          {/* ── Right: article header + body ── */}
          <div className="min-w-0 flex-1">
            {/* Article header */}
            <header className="border-b border-slate-200 pb-8">
              <Link
                href={`${HELPFUL_GUIDES_HUB_PATH}?category=${encodeURIComponent(category)}`}
                className="inline-block rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
              >
                {category}
              </Link>
              <h1 className="mt-3 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl">
                <SplitTitle text={title} />
              </h1>
              <p className="mt-3 text-base leading-relaxed text-slate-500">
                {description}
              </p>
              <p className="mt-3 text-xs text-slate-400">
                {readTime}&nbsp;&middot;&nbsp;Last updated {lastUpdated}
              </p>

              {/* Hero thumbnail */}
              {thumbnail && (
                <div className="relative mx-auto mt-5 h-52 w-full max-w-2xl overflow-hidden rounded-xl border border-slate-200/70 bg-slate-100 shadow-sm ring-1 ring-slate-900/5 sm:mt-6 sm:h-56 sm:max-w-3xl md:h-60">
                  <Image
                    src={thumbnail}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 672px"
                    quality={85}
                  />
                </div>
              )}
              {/* Marks end of hero for reading chrome (desktop TOC reveal). */}
              <div
                id="guide-article-hero-end"
                aria-hidden
                className="pointer-events-none h-0 w-full overflow-hidden"
              />
            </header>

            {/* Mobile / tablet ToC (collapsible) — hidden on xl+ */}
            {toc.length > 0 && (
              <details className="group mb-8 mt-6 rounded-2xl border border-slate-200 bg-slate-50 xl:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-100 text-emerald-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-bold text-slate-800">
                      In this guide
                    </span>
                    <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700">
                      {tocMobile.length}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <ol className="divide-y divide-slate-100 px-5 pb-3">
                  {tocMobile.map((entry, i) => (
                    <li key={entry.id}>
                      <a
                        href={`#${entry.id}`}
                        className="flex items-center gap-3 py-3 text-sm text-slate-600 transition-colors hover:text-emerald-700"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[10px] font-bold text-slate-500">
                          {i + 1}
                        </span>
                        {entry.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {/* Article body */}
            <article className="mt-8 min-w-0 space-y-10 text-slate-700">
              {children}
            </article>

            {slug && shareUrl ? (
              <div className="mt-8 sm:mt-10">
                <GuideSharePanel
                  url={shareUrl}
                  title={title}
                  description={description}
                />
              </div>
            ) : null}

            {/* Back link */}
            <div className="mt-8">
              <Link
                href={HELPFUL_GUIDES_HUB_PATH}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors hover:text-slate-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to all guides
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── Reusable article section primitives ─────────────────────────────────── */

export function GuideSection({
  id,
  heading,
  children,
  darkMode,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
  /** When set (e.g. blog article night theme), section titles stay light for contrast on dark backgrounds. */
  darkMode?: boolean;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <h2
        className={`text-xl font-semibold ${darkMode ? "text-white" : "text-slate-900"}`}
      >
        {heading}
      </h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function GuideSubSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-6">
      <h3 className="text-base font-semibold text-slate-800">{heading}</h3>
      <div className="mt-3 space-y-3">{children}</div>
    </div>
  );
}

export function GuideParagraph({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-slate-700">{children}</p>;
}

export function GuideBulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-2 leading-relaxed text-slate-700 before:absolute before:-left-3 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500 before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function GuideNumberedList({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li key={i} className="list-decimal leading-relaxed text-slate-700">
          {item}
        </li>
      ))}
    </ol>
  );
}

export function GuideKeyTakeaways({ items }: { items: string[] }) {
  return (
    <aside className="rounded-xl border border-emerald-200 bg-emerald-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
        Key Takeaways
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-emerald-900"
          >
            <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function GuideDisclaimer({ children }: { children: React.ReactNode }) {
  return (
    <aside className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
      <span className="font-semibold">Disclaimer: </span>
      {children}
    </aside>
  );
}

export function GuideFaq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="scroll-mt-28">
      <h2 className="text-xl font-semibold text-slate-900">
        Frequently Asked Questions
      </h2>
      <dl className="mt-5 divide-y divide-slate-200">
        {items.map((item, i) => (
          <details key={i} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-slate-900 marker:hidden [&::-webkit-details-marker]:hidden">
              {item.q}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 shrink-0 text-slate-400 transition-transform group-open:rotate-180"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </summary>
            <p className="mt-3 pr-8 text-sm leading-relaxed text-slate-600">
              {item.a}
            </p>
          </details>
        ))}
      </dl>
    </section>
  );
}

/* ─── Rich bullet list (accepts ReactNode per item, e.g. with links) ──────── */
export function GuideBulletListRich({
  items,
}: {
  items: React.ReactNode[];
}) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-2 leading-relaxed text-slate-700 before:absolute before:-left-3 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-emerald-500 before:content-['']"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ─── Inline internal link (use inside GuideParagraph / list items) ──────── */
export function IL({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="font-medium text-emerald-700 underline underline-offset-2 decoration-emerald-300 transition-colors hover:text-emerald-900 hover:decoration-emerald-500"
    >
      {children}
    </Link>
  );
}

/* ─── External link (opens in new tab, shows out-arrow icon) ─────────────── */
export function EL({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 font-medium text-slate-700 underline underline-offset-2 decoration-slate-300 transition-colors hover:text-slate-900 hover:decoration-slate-500"
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="mb-0.5 h-3 w-3 shrink-0 text-slate-400"
        aria-label="(opens in new tab)"
      >
        <path
          fillRule="evenodd"
          d="M4.75 2a.75.75 0 0 0 0 1.5h5.69L3.22 10.72a.75.75 0 1 0 1.06 1.06L11.5 4.56v5.69a.75.75 0 0 0 1.5 0V2.75A.75.75 0 0 0 12.25 2H4.75Z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}

/* ─── References / Sources section ───────────────────────────────────────── */
export type ReferenceItem = {
  label: string;
  description: string;
  href: string;
  external?: boolean;
};

export function GuideReferences({ items }: { items: ReferenceItem[] }) {
  return (
    <section id="references" className="scroll-mt-28">
      <h2 className="text-xl font-semibold text-slate-900">
        Sources &amp; Further Reading
      </h2>
      <p className="mt-2 text-sm text-slate-500">
        This guide references the following official and authoritative sources.
      </p>
      <ol className="mt-5 space-y-3">
        {items.map((ref, i) => (
          <li
            key={i}
            className="flex gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:border-slate-200 hover:bg-white"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-600">
              {i + 1}
            </span>
            <div className="min-w-0">
              <a
                href={ref.href}
                target={ref.external !== false ? "_blank" : undefined}
                rel={ref.external !== false ? "noopener noreferrer" : undefined}
                className="text-sm font-semibold text-slate-900 underline-offset-2 hover:underline"
              >
                {ref.label}
                {ref.external !== false && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="mb-0.5 ml-1 inline h-3 w-3 text-slate-400"
                    aria-hidden
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.75 2a.75.75 0 0 0 0 1.5h5.69L3.22 10.72a.75.75 0 1 0 1.06 1.06L11.5 4.56v5.69a.75.75 0 0 0 1.5 0V2.75A.75.75 0 0 0 12.25 2H4.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </a>
              <p className="mt-0.5 text-xs text-slate-500">{ref.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ─── Related Guides cross-link cards ───────────────────────────────────── */
export type RelatedGuide = {
  href: string;
  category: string;
  title: string;
  description: string;
};

export function GuideRelatedGuides({ guides }: { guides: RelatedGuide[] }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
        Related Guides
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="group flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-sm"
          >
            <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">
              {g.category}
            </span>
            <span className="text-sm font-semibold leading-snug text-slate-800 group-hover:text-emerald-800">
              {g.title}
            </span>
            <span className="mt-1 text-xs text-slate-500 line-clamp-2">
              {g.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─── Comparison table ────────────────────────────────────────────────────── */
export type TableRow = { cells: React.ReactNode[]; highlight?: boolean };

export function GuideTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: TableRow[];
}) {
  return (
    <div className="w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain rounded-xl border border-slate-200 [-webkit-overflow-scrolling:touch]">
      <table className="w-full min-w-max border-collapse text-left text-xs sm:text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-2 py-2 text-left text-[10px] font-bold uppercase tracking-wide text-slate-500 first:pl-3 last:pr-3 sm:px-4 sm:py-3 sm:text-xs sm:first:pl-4 sm:last:pr-4"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 bg-white">
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={
                row.highlight
                  ? "bg-emerald-50/70 font-semibold"
                  : "hover:bg-slate-50/60"
              }
            >
              {row.cells.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-2 py-2 align-top text-slate-700 first:pl-3 last:pr-3 sm:px-4 sm:py-3 sm:first:pl-4 sm:last:pr-4 ${ci === 0 ? "font-medium text-slate-900" : ""}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Stat highlight cards ────────────────────────────────────────────────── */
export function GuideStatCards({
  stats,
}: {
  stats: { value: string; label: string; sub?: string }[];
}) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {stats.map((s, i) => (
        <div
          key={i}
          className="flex flex-col gap-1 rounded-xl border border-slate-100 bg-slate-50 p-4 text-center"
        >
          <span className="text-2xl font-bold text-emerald-700">{s.value}</span>
          <span className="text-xs font-medium text-slate-700">{s.label}</span>
          {s.sub && <span className="text-[11px] text-slate-400">{s.sub}</span>}
        </div>
      ))}
    </div>
  );
}

/* ─── Info / callout box ──────────────────────────────────────────────────── */
export function GuideCallout({
  variant = "info",
  children,
}: {
  variant?: "info" | "warning" | "tip";
  children: React.ReactNode;
}) {
  const styles = {
    info: "border-blue-200 bg-blue-50 text-blue-900",
    warning: "border-amber-200 bg-amber-50 text-amber-900",
    tip: "border-emerald-200 bg-emerald-50 text-emerald-900",
  };
  return (
    <div className={`rounded-xl border p-4 text-sm leading-relaxed ${styles[variant]}`}>
      {children}
    </div>
  );
}

/* ─── Pros / Cons block ───────────────────────────────────────────────────── */
export function GuideProsConsBlock({
  pros,
  cons,
}: {
  pros: string[];
  cons: string[];
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-emerald-700">
          Pros
        </p>
        <ul className="space-y-2">
          {pros.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-emerald-900">
              <span className="mt-0.5 text-emerald-500">✓</span>
              {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl border border-amber-200 bg-amber-50/50 p-5">
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-amber-700">
          Considerations
        </p>
        <ul className="space-y-2">
          {cons.map((c, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-amber-900">
              <span className="mt-0.5 text-amber-500">→</span>
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ─── Temperature zone visual (for storage guide) ────────────────────────── */
export function GuideTempZones({
  zones,
}: {
  zones: { range: string; label: string; status: "safe" | "caution" | "danger" }[];
}) {
  const colours = {
    safe: "border-emerald-300 bg-emerald-50 text-emerald-800",
    caution: "border-amber-300 bg-amber-50 text-amber-800",
    danger: "border-red-300 bg-red-50 text-red-800",
  };
  const icons = { safe: "✓", caution: "!", danger: "✗" };
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      {zones.map((z, i) => (
        <div
          key={i}
          className={`flex flex-1 items-center gap-3 rounded-xl border p-4 ${colours[z.status]}`}
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-current text-base font-bold">
            {icons[z.status]}
          </span>
          <div>
            <p className="text-base font-bold">{z.range}</p>
            <p className="text-xs font-medium opacity-80">{z.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
