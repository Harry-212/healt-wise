"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Search, Zap } from "lucide-react";
import { useState } from "react";
import { NAV_PANELS } from "@/lib/nav/nav-config";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";
import MobileNavDrawer from "@/components/layout/MobileNavDrawer";
import { useSupabaseAuth } from "@/components/providers/SupabaseAuthProvider";
import { greetingNameFromEmail } from "@/lib/auth/greeting-name";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { SITE_LOGO_SRC } from "@/lib/site-assets";

const MegaMenuDesktop = dynamic(
  () => import("@/components/layout/MegaMenuDesktop"),
  {
    loading: () => (
      <div
        className="hidden min-h-[2.75rem] min-w-[18rem] justify-self-center lg:block"
        aria-hidden
      />
    ),
  },
);

const SearchModal = dynamic(() => import("@/components/search/SearchModal"), {
  ssr: false,
});

function NavBarAuthCluster() {
  const { user, ready, signOut } = useSupabaseAuth();

  if (!isSupabaseConfigured()) {
    return (
      <div className="hidden shrink-0 items-center gap-2 xl:flex">
        <Link
          href="/my-hub/login"
          className="text-sm font-semibold text-brand-secondary hover:text-brand-primary"
        >
          Login
        </Link>
        <Link
          href="/my-hub/login?signup=1"
          className="rounded-lg bg-brand-cta px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:brightness-95"
        >
          Sign Up
        </Link>
      </div>
    );
  }

  if (!ready) {
    return (
      <div
        className="hidden h-9 w-32 shrink-0 animate-pulse rounded-lg bg-slate-200/80 xl:block"
        aria-hidden
      />
    );
  }

  if (user) {
    const name = user.email ? greetingNameFromEmail(user.email) : "there";
    return (
      <div className="hidden shrink-0 items-center gap-2 md:gap-3 xl:flex">
        <span
          className="max-w-[7.5rem] truncate text-sm font-semibold text-slate-800 xl:max-w-[11rem]"
          title={user.email ?? undefined}
        >
          Hi, {name}
        </span>
        <button
          type="button"
          onClick={() => void signOut()}
          className="relative z-20 cursor-pointer rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 hover:shadow active:scale-[0.98]"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="hidden shrink-0 items-center gap-2 xl:flex">
      <Link
        href="/my-hub/login"
        className="text-sm font-semibold text-brand-secondary hover:text-brand-primary"
      >
        Login
      </Link>
      <Link
        href="/my-hub/login?signup=1"
        className="rounded-lg bg-brand-cta px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:brightness-95"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/*
        Fixed (not sticky): `overflow-x: hidden` on html/body breaks sticky positioning
        in common browsers. Spacer below matches bar height + safe-area for notched devices.
      */}
      <header className="fixed inset-x-0 top-0 z-[90] w-full max-w-full overflow-x-clip overflow-y-visible border-b border-brand-border bg-brand-card/95 pt-[env(safe-area-inset-top,0px)] shadow-sm backdrop-blur supports-[backdrop-filter]:bg-brand-card/90">
        <div className="relative mx-auto flex h-16 max-w-[1400px] min-h-0 min-w-0 items-center gap-2 px-3 sm:h-24 md:h-28 sm:gap-3 sm:px-4 lg:grid lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-4 lg:px-6 xl:gap-6">
          <div className="flex min-w-0 shrink-0 justify-start lg:justify-self-start">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2 py-1"
            >
              <div className="relative flex items-center transition-opacity hover:opacity-90">
                <Image
                  src={SITE_LOGO_SRC}
                  alt={`${SITE_BRAND_NAME} logo`}
                  width={800}
                  height={250}
                  className="h-9 w-auto max-w-[118px] object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)] sm:h-14 sm:max-w-none md:h-[4.5rem]"
                  fetchPriority="low"
                />
              </div>
            </Link>
          </div>

          <nav
            className="hidden min-w-0 justify-self-center lg:flex lg:justify-center"
            aria-label="Main"
          >
            <MegaMenuDesktop panels={NAV_PANELS} />
          </nav>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-2 md:gap-3 lg:shrink-0 lg:flex-none lg:justify-self-end">
            <MobileNavDrawer panels={NAV_PANELS} />
            <Link
              href={HOME_COMPARE_HUB_HREF}
              className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/70 bg-emerald-100 px-3.5 py-2 text-xs font-semibold text-emerald-950 shadow-sm transition hover:border-emerald-400/80 hover:bg-emerald-200/70 active:bg-emerald-200/90 sm:inline-flex sm:justify-center sm:px-4 sm:text-sm"
            >
              <Zap className="h-3.5 w-3.5 shrink-0 fill-emerald-950" aria-hidden />
              Compare
            </Link>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-transparent text-slate-600 transition-colors hover:bg-brand-surface hover:text-brand-primary sm:h-11 sm:w-11 sm:rounded-full sm:border-0"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>
            <NavBarAuthCluster />
          </div>
        </div>
      </header>
      <div
        aria-hidden
        className="shrink-0 w-full [height:calc(4rem+env(safe-area-inset-top,0px))] sm:[height:calc(6rem+env(safe-area-inset-top,0px))] md:[height:calc(7rem+env(safe-area-inset-top,0px))]"
      />
      {searchOpen ? (
        <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      ) : null}
    </>
  );
}
