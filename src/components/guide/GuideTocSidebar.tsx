"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import type { TocEntry } from "./GuideLayout";
import { HELPFUL_GUIDES_HUB_PATH } from "@/lib/helpful-guide-slugs";

/** Band from viewport top — last section whose top is at or above this line becomes active. */
const ACTIVE_SECTION_TOP_PX = 148;

/** Matches Tailwind `top-28` (NavBar clearance). */
const TOC_FIXED_TOP_PX = 112;

type TocCoords = { left: number; width: number };

export default function GuideTocSidebar({ toc }: { toc: TocEntry[] }) {
  const anchorRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<TocCoords | null>(null);
  const [active, setActive] = useState<string>(toc[0]?.id ?? "");

  const syncCoords = () => {
    const el = anchorRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setCoords({ left: r.left, width: r.width > 0 ? r.width : 256 });
  };

  useLayoutEffect(() => {
    syncCoords();
    const el = anchorRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => syncCoords());
    ro.observe(el);
    window.addEventListener("resize", syncCoords);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", syncCoords);
    };
  }, []);

  useEffect(() => {
    if (!toc.length) return;

    const computeActive = () => {
      const doc = document.documentElement;
      const nearBottom =
        window.innerHeight + window.scrollY >= doc.scrollHeight - 100;
      if (nearBottom) {
        setActive(toc[toc.length - 1]!.id);
        return;
      }

      let current = toc[0]!.id;
      for (let i = toc.length - 1; i >= 0; i--) {
        const id = toc[i]!.id;
        const section = document.getElementById(id);
        if (!section) continue;
        if (section.getBoundingClientRect().top <= ACTIVE_SECTION_TOP_PX) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    let ticking = false;
    const onScrollOrResize = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        syncCoords();
        computeActive();
        ticking = false;
      });
    };

    computeActive();
    syncCoords();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
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
    <div
      ref={anchorRef}
      className="relative hidden w-64 shrink-0 self-start xl:block"
    >
      <aside
        className="fixed z-[30] max-h-[calc(100dvh-8rem)] w-64"
        style={{
          top: TOC_FIXED_TOP_PX,
          left: coords?.left ?? 0,
          width: coords?.width ?? 256,
          visibility: coords ? "visible" : "hidden",
        }}
        aria-label="Table of contents"
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-900/4">
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
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold tabular-nums text-emerald-600">
              {progressPct}%
            </span>
          </div>

          <div className="h-0.5 w-full bg-slate-100">
            <div
              className="h-full bg-emerald-500 transition-all duration-700 ease-out"
              style={{ width: `${progressPct}%` }}
            />
          </div>

          <nav
            className="max-h-[calc(100dvh-16rem)] overflow-y-auto overscroll-contain px-2 py-3 [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent]"
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
                      <span
                        className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 rounded-full transition-all duration-200 ${
                          isActive
                            ? "h-8 bg-emerald-500"
                            : "h-0 bg-transparent group-hover:h-5 group-hover:bg-slate-300"
                        }`}
                      />

                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-200 ${
                          isActive
                            ? "bg-emerald-600 text-white shadow-sm shadow-emerald-200"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                        }`}
                      >
                        {i + 1}
                      </span>

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
    </div>
  );
}
