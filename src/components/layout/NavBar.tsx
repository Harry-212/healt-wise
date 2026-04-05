"use client";

import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import { NAV_PANELS } from "@/lib/nav/nav-config";
import MegaMenuDesktop from "@/components/layout/MegaMenuDesktop";
import MobileNavDrawer from "@/components/layout/MobileNavDrawer";
import SearchModal from "@/components/search/SearchModal";

export default function NavBar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[90] w-full max-w-full overflow-x-clip overflow-y-visible border-b border-brand-border bg-brand-card/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-brand-card/90">
        <div className="relative mx-auto flex h-14 max-w-[1400px] min-h-0 min-w-0 items-center gap-2 px-3 sm:h-20 md:h-24 sm:gap-3 sm:px-4 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-3 lg:px-6">
          <div className="flex min-w-0 flex-1 justify-start lg:flex-none lg:justify-self-start">
            <Link
              href="/"
              className="group flex min-w-0 items-center gap-2 py-1"
            >
              <div className="relative flex items-center transition-opacity hover:opacity-90">
                <Image
                  src="/logo_hd_transparent.png"
                  alt="Health Wise Logo"
                  width={800}
                  height={250}
                  className="h-11 w-auto max-w-[140px] object-contain object-left drop-shadow-[0_2px_10px_rgba(0,0,0,0.08)] sm:h-20 sm:max-w-none md:h-24"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav
            className="hidden min-w-0 justify-self-center lg:block"
            aria-label="Main"
          >
            <MegaMenuDesktop panels={NAV_PANELS} />
          </nav>

          <div className="flex min-w-0 flex-1 items-center justify-end gap-1.5 sm:gap-2 md:gap-3 lg:flex-none lg:justify-self-end">
            <MobileNavDrawer panels={NAV_PANELS} />
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-transparent text-slate-600 transition-colors hover:bg-brand-surface hover:text-brand-primary sm:h-11 sm:w-11 sm:rounded-full sm:border-0"
              aria-label="Open search"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link
              href="/my-hub/login"
              className="hidden text-sm font-semibold text-brand-secondary hover:text-brand-primary sm:inline"
            >
              Login
            </Link>
            <Link
              href="/my-hub/login?signup=1"
              className="hidden rounded-lg bg-brand-cta px-4 py-2 text-sm font-bold text-slate-900 shadow-sm transition hover:brightness-95 sm:inline"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
