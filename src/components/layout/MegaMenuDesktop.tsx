"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import type { NavPanel } from "@/lib/nav/nav-config";
import { NavLinkIcon } from "@/lib/nav/nav-icons";

/* Match NavBar row: h-14 sm:h-20 md:h-24 */
const PANEL_TOP = "top-14 sm:top-20 md:top-24";

const scrollAreaClass =
  "min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:my-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/90 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400/90";

function panelShellWidth(menuWidth: NavPanel["menuWidth"]): string {
  if (menuWidth === "content") {
    return "w-max max-w-[min(100vw-1.5rem,22rem)]";
  }
  if (menuWidth === "content-md") {
    return "w-max max-w-[min(100vw-1.5rem,28rem)]";
  }
  return "w-[min(100vw-1.25rem,1200px)]";
}

function panelGridClass(panel: NavPanel, colCount: number): string {
  if (panel.menuWidth === "content" || panel.menuWidth === "content-md") {
    return "grid min-w-0 grid-cols-1 gap-2";
  }
  if (panel.id === "treatments") {
    return "grid min-w-0 grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-4";
  }
  if (colCount >= 5) {
    return "grid min-w-0 grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5";
  }
  if (colCount === 1) {
    return "grid min-w-0 grid-cols-1 gap-3 sm:max-w-md";
  }
  return "grid min-w-0 grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-4";
}

export default function MegaMenuDesktop({ panels }: { panels: NavPanel[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenId(null), 120);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  const openPanel = (id: string) => {
    cancelClose();
    setOpenId(id);
  };

  return (
    <ul className="relative flex min-w-0 flex-nowrap items-center justify-center gap-x-0.5 xl:gap-x-1">
      {panels.map((panel) => {
        if (panel.directHref) {
          return (
            <li key={panel.id} className="flex shrink-0">
              <Link
                href={panel.directHref}
                className="inline-flex h-10 items-center whitespace-nowrap rounded-lg px-3 text-[13px] font-semibold leading-none text-brand-secondary transition-colors hover:bg-brand-surface/80 hover:text-brand-cta xl:px-3.5"
              >
                {panel.label}
              </Link>
            </li>
          );
        }

        const cols = panel.columns ?? [];
        const gridClass = panelGridClass(panel, cols.length);
        const shellW = panelShellWidth(panel.menuWidth);

        return (
          <li
            key={panel.id}
            className="relative flex shrink-0"
            onMouseEnter={() => openPanel(panel.id)}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={`inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-lg px-3 text-[13px] font-semibold leading-none transition-colors xl:px-3.5 ${
                openId === panel.id
                  ? "text-brand-cta"
                  : "text-brand-secondary hover:bg-brand-surface/80 hover:text-brand-cta"
              }`}
              aria-expanded={openId === panel.id}
            >
              {panel.label}
              <ChevronDown
                className={`h-3.5 w-3.5 shrink-0 transition-transform ${openId === panel.id ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            <AnimatePresence>
              {openId === panel.id && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className={`fixed left-1/2 z-[100] ${shellW} -translate-x-1/2 px-1 ${PANEL_TOP}`}
                  onMouseEnter={cancelClose}
                  onMouseLeave={scheduleClose}
                >
                  <div className="flex max-h-[min(78vh,calc(100dvh-7rem))] flex-col overflow-hidden rounded-xl border border-brand-border bg-white shadow-lg">
                    <div className={scrollAreaClass}>
                      <div className={gridClass}>
                        {cols.map((col) => (
                          <div
                            key={col.title || col.links[0]?.href}
                            className="min-w-0"
                          >
                            {col.title ? (
                              <h3 className="mb-2 border-b border-brand-border pb-1.5 text-[11px] font-bold uppercase tracking-wide text-brand-secondary">
                                {col.title}
                              </h3>
                            ) : null}
                            <ul className="space-y-0.5">
                              {col.links.map((link) => (
                                <li key={link.href + link.label}>
                                  <Link
                                    href={link.href}
                                    className="group flex items-center gap-3 rounded-lg px-2 py-2 text-[13px] font-medium leading-snug text-brand-primary transition-all duration-200 hover:translate-x-0.5 hover:bg-brand-surface hover:text-brand-cta hover:shadow-sm"
                                  >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-surface/80 transition-colors group-hover:bg-brand-cta/15">
                                      <NavLinkIcon name={link.icon} />
                                    </span>
                                    <span className="min-w-0">{link.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
