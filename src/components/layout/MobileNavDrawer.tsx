"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronRight, Zap } from "lucide-react";
import type { NavPanel } from "@/lib/nav/nav-config";
import { NavLinkIcon, NAV_LINK_ACCENT_CLASSES } from "@/lib/nav/nav-icons";
import { useSupabaseAuth } from "@/components/providers/SupabaseAuthProvider";
import { greetingNameFromEmail } from "@/lib/auth/greeting-name";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_LOGO_SRC } from "@/lib/site-assets";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";

export default function MobileNavDrawer({ panels }: { panels: NavPanel[] }) {
  const { user, ready, signOut } = useSupabaseAuth();
  const [open, setOpen] = useState(false);
  const [acc, setAcc] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => setMounted(true), []);

  const close = () => {
    setOpen(false);
    setAcc(null);
  };

  // iOS-friendly scroll lock when sheet is open
  useEffect(() => {
    if (!open) return;
    const scrollY = window.scrollY;
    const prev = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
    };
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = prev.position;
      document.body.style.top = prev.top;
      document.body.style.left = prev.left;
      document.body.style.right = prev.right;
      document.body.style.width = prev.width;
      document.body.style.overflow = prev.overflow;
      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const sheet = (
    <>
      <div
        role="presentation"
        aria-hidden={!open}
        onClick={close}
        className={`fixed inset-0 z-300 bg-black/45 transition-opacity duration-200 ease-out lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        style={{ touchAction: "none" }}
      />

      <div
        className={`fixed inset-y-0 right-0 z-310 flex w-[min(100vw,20rem)] max-w-full flex-col bg-white shadow-2xl transition-transform duration-200 ease-out will-change-transform lg:hidden sm:w-[min(100vw,22rem)] ${
          open ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Menu"
        style={{
          height: "100dvh",
          maxHeight: "100dvh",
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-4">
          <Link href="/" onClick={close} className="min-w-0">
            <Image
              src={SITE_LOGO_SRC}
              alt={SITE_BRAND_NAME}
              width={160}
              height={48}
              className="h-10 w-auto max-w-[11rem] object-contain object-left"
            />
          </Link>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-800 active:bg-slate-200"
            aria-label="Close menu"
            onClick={close}
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>
        </div>

        <div className="shrink-0 border-b border-slate-200 px-3 py-2">
          <Link
            href={HOME_COMPARE_HUB_HREF}
            onClick={close}
            className="flex min-h-11 items-center justify-center gap-2 rounded-xl border border-emerald-300/70 bg-emerald-100 text-sm font-semibold text-emerald-950 shadow-sm transition hover:border-emerald-400/80 hover:bg-emerald-200/70 active:bg-emerald-200/90"
          >
            <Zap className="h-4 w-4 shrink-0 fill-emerald-950" aria-hidden />
            Compare
          </Link>
        </div>

        <nav
          className="min-h-0 flex-1 overflow-y-auto overscroll-y-contain px-3 py-2 [-webkit-overflow-scrolling:touch]"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1 pb-4">
            {panels.map((panel) => {
              if (panel.directHref) {
                return (
                  <li key={panel.id}>
                    <Link
                      href={panel.directHref}
                      onClick={close}
                      className="flex min-h-12 items-center justify-between gap-2 rounded-xl px-4 py-3 text-[15px] font-semibold text-slate-900 active:bg-slate-100"
                    >
                      {panel.label}
                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400" aria-hidden />
                    </Link>
                  </li>
                );
              }

              const expanded = acc === panel.id;
              return (
                <li key={panel.id} className="rounded-xl border border-slate-200 bg-slate-50/80">
                  <button
                    type="button"
                    className="flex min-h-12 w-full items-center justify-between gap-2 px-4 py-3 text-left text-[15px] font-semibold text-slate-900 active:bg-slate-100/80"
                    onClick={() => setAcc(expanded ? null : panel.id)}
                    aria-expanded={expanded}
                  >
                    {panel.label}
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                        expanded ? "rotate-90" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  {expanded ? (
                    <div className="border-t border-slate-200 bg-white px-2 py-2">
                      {(panel.columns ?? []).map((col) => (
                        <div key={col.title || "links"} className="py-1">
                          {col.title ? (
                            <p className="px-3 pb-1 pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                              {col.title}
                            </p>
                          ) : null}
                          <ul>
                            {col.links.map((l) => {
                              const accent = l.accent
                                ? NAV_LINK_ACCENT_CLASSES[l.accent]
                                : null;
                              const containerClass = accent
                                ? accent.containerMobile
                                : "text-slate-800 active:bg-slate-50";
                              const badgeClass = accent ? "bg-white/70" : "bg-slate-100";
                              return (
                                <li key={l.href + l.label}>
                                  <Link
                                    href={l.href}
                                    onClick={close}
                                    className={`group flex min-h-11 items-center gap-3 rounded-lg px-3 py-2.5 text-[14px] font-medium ${containerClass}`}
                                  >
                                    <span
                                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${badgeClass}`}
                                    >
                                      <NavLinkIcon name={l.icon} accent={l.accent} />
                                    </span>
                                    <span className="min-w-0 flex-1 leading-snug">{l.label}</span>
                                    <ChevronRight className="h-4 w-4 shrink-0 text-slate-300" aria-hidden />
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </nav>

        <div
          className="shrink-0 border-t border-slate-200 bg-white px-3 py-3"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="flex flex-col gap-2">
            {!isSupabaseConfigured() ? (
              <>
                <Link
                  href="/my-hub/login"
                  onClick={close}
                  className="flex min-h-12 items-center justify-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 active:bg-slate-50"
                >
                  Log in
                </Link>
                <Link
                  href="/my-hub/login?signup=1"
                  onClick={close}
                  className="flex min-h-12 items-center justify-center rounded-xl bg-brand-cta text-sm font-bold text-slate-900 shadow-sm active:brightness-95"
                >
                  Sign up
                </Link>
              </>
            ) : !ready ? (
              <div className="min-h-12 animate-pulse rounded-xl bg-slate-100" aria-hidden />
            ) : user ? (
              <>
                <p className="px-2 py-1 text-center text-sm font-semibold leading-snug text-slate-900">
                  Hi, {user.email ? greetingNameFromEmail(user.email) : "there"}
                </p>
                <Link
                  href="/tools/weight-loss-tracker"
                  onClick={close}
                  className="flex min-h-12 items-center justify-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 active:bg-slate-50"
                >
                  Weight tracker
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    void signOut();
                    close();
                  }}
                  className="flex min-h-12 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-sm active:bg-slate-800"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/my-hub/login"
                  onClick={close}
                  className="flex min-h-12 items-center justify-center rounded-xl border border-slate-200 text-sm font-semibold text-slate-800 active:bg-slate-50"
                >
                  Log in
                </Link>
                <Link
                  href="/my-hub/login?signup=1"
                  onClick={close}
                  className="flex min-h-12 items-center justify-center rounded-xl bg-brand-cta text-sm font-bold text-slate-900 shadow-sm active:brightness-95"
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <button
        type="button"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 shadow-sm active:bg-slate-50 lg:hidden"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Menu className="h-5 w-5" strokeWidth={2} />
      </button>

      {mounted ? createPortal(sheet, document.body) : null}
    </>
  );
}
