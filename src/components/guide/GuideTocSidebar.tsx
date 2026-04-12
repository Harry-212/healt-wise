"use client";

import { useEffect, useRef, useState } from "react";
import type { TocEntry } from "./GuideLayout";
import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";

export default function GuideTocSidebar({ toc }: { toc: TocEntry[] }) {
  const [active, setActive] = useState<string>(toc[0]?.id ?? "");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const headings = toc
      .map((entry) => document.getElementById(entry.id))
      .filter(Boolean) as HTMLElement[];

    if (!headings.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        // pick the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top,
          );
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-10% 0px -60% 0px", threshold: 0 },
    );

    headings.forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, [toc]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 112;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
  };

  const progressPct =
    toc.length
      ? Math.round(
          ((toc.findIndex((t) => t.id === active) + 1) / toc.length) * 100,
        )
      : 0;

  return (
    /* KEY FIX: sticky + self-start on the element itself */
    <aside className="sticky top-28 hidden w-64 shrink-0 self-start xl:block">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/4">
        {/* Header */}
        <div className="flex items-center justify-between gap-2 border-b border-slate-100 px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-emerald-600"
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">
              In this guide
            </p>
          </div>
          {/* Progress percentage */}
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold tabular-nums text-emerald-600">
            {progressPct}%
          </span>
        </div>

        {/* Thin progress bar */}
        <div className="h-0.5 w-full bg-slate-100">
          <div
            className="h-full bg-emerald-500 transition-all duration-700 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {/* ToC list — scrollable if content is very tall */}
        <nav
          className="max-h-[calc(100dvh-16rem)] overflow-y-auto overscroll-contain px-2 py-3 [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent]"
          aria-label="Table of contents"
        >
          <ol className="space-y-px">
            {toc.map((entry, i) => {
              const isActive = active === entry.id;
              return (
                <li key={entry.id}>
                  <button
                    type="button"
                    onClick={() => scrollTo(entry.id)}
                    className={`group relative flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-all duration-200 ${
                      isActive
                        ? "bg-emerald-50"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    {/* Left active bar */}
                    <span
                      className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-200 ${
                        isActive
                          ? "h-8 bg-emerald-500"
                          : "h-0 bg-transparent group-hover:h-5 group-hover:bg-slate-300"
                      }`}
                    />

                    {/* Step number */}
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-200 ${
                        isActive
                          ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                          : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                      }`}
                    >
                      {i + 1}
                    </span>

                    {/* Label */}
                    <span
                      className={`flex-1 text-[13px] leading-snug transition-colors ${
                        isActive
                          ? "font-semibold text-emerald-800"
                          : "font-medium text-slate-500 group-hover:text-slate-900"
                      }`}
                    >
                      {entry.label}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>

        {/* Footer */}
        <div className="border-t border-slate-100 px-5 py-3">
          <a
            href={HELPFUL_GUIDES_HUB_PATH}
            className="flex items-center gap-1.5 text-[12px] font-medium text-slate-400 transition-colors hover:text-slate-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
            All guides
          </a>
        </div>
      </div>
    </aside>
  );
}
