import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TEXT = "Compare Weight Loss Treatment UK";
const CTA = "Find the Best Price Today";
const HREF = "/compare/wegovy-vs-mounjaro";

// Repeat enough for a seamless loop across all viewport widths
const ITEMS = Array.from({ length: 8 }, (_, i) => ({ id: i }));

export default function AnnouncementBar() {
  return (
    <div className="w-full max-w-full overflow-x-clip border-b border-amber-300/60 bg-brand-cta py-2.5">
      <div className="flex w-full max-w-full select-none overflow-x-clip">
        {/* First copy */}
        <div className="hw-announce-marquee-track flex shrink-0 items-center gap-0">
          {ITEMS.map(({ id }) => (
            <Link
              key={id}
              href={HREF}
              className="flex shrink-0 items-center gap-3 px-8 text-sm font-semibold text-slate-900 transition-opacity hover:opacity-80"
            >
              <span>{TEXT}</span>
              <span className="h-1 w-1 shrink-0 rounded-full bg-slate-900/40" />
              <span className="font-black">{CTA}</span>
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </Link>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
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
              <ArrowRight className="h-3.5 w-3.5 shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
