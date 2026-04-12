import { BadgeCheck, Building2, Stethoscope } from "lucide-react";

const SIGNALS = [
  {
    icon: BadgeCheck,
    title: "GPhC verified listings",
    body: "We point you to regulated pharmacy pathways you can double-check yourself.",
    iconClass: "text-emerald-600",
  },
  {
    icon: Building2,
    title: "UK pharmacy context",
    body: "Content is framed for UK rules, pricing bands, and how regulated supply works.",
    iconClass: "text-slate-600",
  },
  {
    icon: Stethoscope,
    title: "Editorial standards",
    body: "Guides are written for clarity—not hype—with sources and methodology in the open.",
    iconClass: "text-slate-600",
  },
] as const;

/** Compact trust row — or a card grid when `variant="footer"`. */
export default function TrustSignals({
  className = "",
  dense = false,
  variant = "default",
}: {
  className?: string;
  dense?: boolean;
  variant?: "default" | "footer";
}) {
  if (variant === "footer") {
    return (
      <div
        className={`rounded-2xl border border-slate-200/80 bg-white/70 p-5 shadow-sm ring-1 ring-slate-900/[0.04] backdrop-blur-sm sm:p-6 ${className}`}
      >
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:mb-5 sm:text-left">
          Why readers trust us
        </p>
        <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {SIGNALS.map((s) => (
            <li
              key={s.title}
              className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50/90 p-4 transition-colors hover:border-emerald-200/60 hover:bg-white"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200/80">
                <s.icon className={`h-5 w-5 ${s.iconClass}`} aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-slate-900">{s.title}</span>
                <span className="mt-1 block text-xs leading-relaxed text-slate-600">{s.body}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const item =
    "flex items-center gap-2 text-brand-secondary " +
    (dense ? "text-xs" : "text-sm");
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-6 gap-y-2 ${className}`}
    >
      <span className={item}>
        <BadgeCheck
          className="h-4 w-4 shrink-0 text-brand-success"
          aria-hidden
        />
        GPhC verified listings
      </span>
      <span className={item}>
        <Building2
          className="h-4 w-4 shrink-0 text-brand-secondary"
          aria-hidden
        />
        UK pharmacy regulated context
      </span>
      <span className={item}>
        <Stethoscope
          className="h-4 w-4 shrink-0 text-brand-secondary"
          aria-hidden
        />
        Doctor-reviewed guides
      </span>
    </div>
  );
}
