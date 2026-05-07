"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Zap } from "lucide-react";
import { HOME_COMPARE_HUB_HREF } from "@/lib/routes/home-compare-hub";

const TEXT = "Compare Weight Loss Treatment UK";
const CTA = "Find the Best Price Today";

const ITEMS = Array.from({ length: 8 }, (_, i) => ({ id: i }));

export default function AnnouncementBar() {
  const pathname = usePathname();
  const isBlogArticle =
    typeof pathname === "string" &&
    pathname.startsWith("/blog/") &&
    pathname.split("/").filter(Boolean).length >= 2;
  const isHelpfulGuideArticle =
    typeof pathname === "string" &&
    pathname.startsWith("/helpful-guides/") &&
    pathname.split("/").filter(Boolean).length >= 2;

  if (
    pathname?.startsWith("/pharmacies") ||
    isBlogArticle ||
    isHelpfulGuideArticle
  ) {
    return null;
  }

  return (
    <div className="w-full max-w-full overflow-x-clip border-b border-amber-300/60 bg-brand-cta py-2.5">
      <div className="flex w-full max-w-full select-none overflow-x-clip">
        <div className="hw-announce-marquee-track flex shrink-0 items-center gap-0">
          {ITEMS.map(({ id }) => (
            <Link
              key={id}
              href={HOME_COMPARE_HUB_HREF}
              className="flex shrink-0 items-center gap-3 px-8 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-80"
            >
              <span>{TEXT}</span>
              <span className="h-1 w-1 shrink-0 rounded-full bg-slate-900/40" />
              <span className="font-black">{CTA}</span>
              <Zap className="h-3.5 w-3.5 shrink-0 fill-slate-900" aria-hidden />
            </Link>
          ))}
        </div>
        <div
          aria-hidden
          className="hw-announce-marquee-track flex shrink-0 items-center gap-0"
        >
          {ITEMS.map(({ id }) => (
            <div
              key={id}
              className="flex shrink-0 items-center gap-3 px-8 text-sm font-semibold text-slate-900"
            >
              <span>{TEXT}</span>
              <span className="h-1 w-1 shrink-0 rounded-full bg-slate-900/40" />
              <span className="font-black">{CTA}</span>
              <Zap className="h-3.5 w-3.5 shrink-0 fill-slate-900" aria-hidden />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
