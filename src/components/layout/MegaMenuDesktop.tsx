'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { NavPanel } from '@/lib/nav/nav-config';
import { NavLinkIcon, NAV_LINK_ACCENT_CLASSES } from '@/lib/nav/nav-icons';

/* Match NavBar row exactly: h-16 sm:h-24 md:h-28 */
const PANEL_TOP = 'top-16 sm:top-24 md:top-28';

const scrollAreaClass =
  'min-h-0 flex-1 overflow-y-auto overscroll-contain p-4 sm:p-5 [scrollbar-gutter:stable] [scrollbar-width:thin] [scrollbar-color:rgb(203_213_225)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:my-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300/90 hover:[&::-webkit-scrollbar-thumb]:bg-slate-400/90';

function panelShellWidth(menuWidth: NavPanel['menuWidth']): string {
  if (menuWidth === 'content') {
    return 'w-max max-w-[min(100vw-1.5rem,22rem)]';
  }
  if (menuWidth === 'content-md') {
    return 'w-max max-w-[min(100vw-1.5rem,28rem)]';
  }
  return 'w-[min(100vw-1.25rem,1200px)]';
}

function panelGridClass(panel: NavPanel, colCount: number): string {
  if (panel.menuWidth === 'content' || panel.menuWidth === 'content-md') {
    return 'grid min-w-0 grid-cols-1 gap-2';
  }
  if (panel.id === 'treatments') {
    return 'grid min-w-0 grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-4';
  }
  if (colCount >= 5) {
    return 'grid min-w-0 grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-5';
  }
  if (colCount === 1) {
    return 'grid min-w-0 grid-cols-1 gap-3 sm:max-w-md';
  }
  return 'grid min-w-0 grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-2 lg:grid-cols-4';
}

export default function MegaMenuDesktop({ panels }: { panels: NavPanel[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLUListElement>(null);
  const isTouch = useRef(false);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  const closeNow = useCallback(() => {
    cancelClose();
    setOpenId(null);
  }, [cancelClose]);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpenId(null), 300);
  }, [cancelClose]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  /* Close when clicking/touching outside the nav */
  useEffect(() => {
    if (!openId) return;
    const handler = (e: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeNow();
      }
    };
    document.addEventListener('pointerdown', handler, true);
    return () => {
      document.removeEventListener('pointerdown', handler, true);
    };
  }, [openId, closeNow]);

  const openPanel = (id: string) => {
    cancelClose();
    setOpenId(id);
  };

  const handleButtonClick = (id: string) => {
    /* On touch, toggle. On mouse pointer already handled by hover. */
    if (isTouch.current) {
      if (openId === id) {
        closeNow();
      } else {
        openPanel(id);
      }
    }
  };

  return (
    <ul ref={navRef} className="relative flex min-w-0 flex-nowrap items-center justify-center gap-x-0.5 xl:gap-x-1">
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
        const isOpen = openId === panel.id;

        return (
          <li
            key={panel.id}
            className="relative flex shrink-0"
            onPointerEnter={() => {
              if (!isTouch.current) openPanel(panel.id);
            }}
            onPointerLeave={() => {
              if (!isTouch.current) scheduleClose();
            }}
          >
            <button
              type="button"
              onPointerDown={(e) => {
                isTouch.current = e.pointerType === 'touch' || e.pointerType === 'pen';
              }}
              onClick={() => handleButtonClick(panel.id)}
              className={`inline-flex h-10 items-center gap-1 whitespace-nowrap rounded-lg px-3 text-[13px] font-semibold leading-none transition-colors xl:px-3.5 ${
                isOpen ? 'text-brand-cta' : 'text-brand-secondary hover:bg-brand-surface/80 hover:text-brand-cta'
              }`}
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              {panel.label}
              <ChevronDown className={`h-3.5 w-3.5 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden />
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className={`fixed left-1/2 z-[1000] ${shellW} -translate-x-1/2 px-1 ${PANEL_TOP}`}
                  style={{ willChange: 'transform' }}
                  onPointerEnter={() => {
                    if (!isTouch.current) cancelClose();
                  }}
                  onPointerLeave={() => {
                    if (!isTouch.current) scheduleClose();
                  }}
                >
                  <div className="flex max-h-[min(78vh,calc(100dvh-7rem))] flex-col overflow-hidden rounded-xl border border-brand-border bg-white shadow-xl shadow-slate-200/60">
                    <div className={scrollAreaClass}>
                      <div className={gridClass}>
                        {cols.map((col) => (
                          <div key={col.title || col.links[0]?.href} className="min-w-0">
                            {col.title ? <h3 className="mb-2 border-b border-brand-border pb-1.5 text-[11px] font-bold uppercase tracking-wide text-brand-secondary">{col.title}</h3> : null}
                            <ul className="space-y-0.5">
                              {col.links.map((link) => {
                                const accent = link.accent
                                  ? NAV_LINK_ACCENT_CLASSES[link.accent]
                                  : null;
                                const containerClass = accent
                                  ? `${accent.container} hover:shadow-sm`
                                  : 'text-brand-primary hover:bg-brand-surface hover:text-brand-cta hover:shadow-sm';
                                const badgeClass = accent
                                  ? 'bg-white/70 group-hover:bg-white'
                                  : 'bg-brand-surface/80 group-hover:bg-brand-cta/15';
                                return (
                                  <li key={link.href + link.label}>
                                    <Link
                                      href={link.href}
                                      onClick={closeNow}
                                      className={`group flex items-center gap-3 rounded-lg px-2 py-2 text-[13px] font-medium leading-snug transition-all duration-200 hover:translate-x-0.5 ${containerClass}`}
                                    >
                                      <span
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${badgeClass}`}
                                      >
                                        <NavLinkIcon name={link.icon} accent={link.accent} />
                                      </span>
                                      <span className="min-w-0">{link.label}</span>
                                    </Link>
                                  </li>
                                );
                              })}
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
