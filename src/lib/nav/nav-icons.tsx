import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Apple,
  ArrowLeftRight,
  BadgePoundSterling,
  BookOpen,
  Brain,
  Calculator,
  ClipboardList,
  GitCompare,
  HeartPulse,
  LayoutDashboard,
  Moon,
  Pill,
  Scale,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Syringe,
  Wallet,
} from "lucide-react";
import type { NavAccent } from "@/lib/nav/nav-config";

/** Keys referenced from `NavLink.icon` in nav-config. */
export const NAV_LINK_ICONS: Record<string, LucideIcon> = {
  pill: Pill,
  syringe: Syringe,
  calculator: Calculator,
  compare: GitCompare,
  pound: BadgePoundSterling,
  book: BookOpen,
  sparkles: Sparkles,
  apple: Apple,
  activity: Activity,
  moon: Moon,
  brain: Brain,
  shield: ShieldCheck,
  stethoscope: Stethoscope,
  wallet: Wallet,
  scale: Scale,
  clipboard: ClipboardList,
  heart: HeartPulse,
  swap: ArrowLeftRight,
  dashboard: LayoutDashboard,
};

/**
 * Static class strings keyed by accent so Tailwind's JIT scanner can
 * preserve them. Picked to match the colour each medicine uses on its
 * own price-comparison page: Mounjaro=violet, Wegovy=emerald, Saxenda=sky.
 */
type NavAccentClasses = {
  /** Desktop link container: tinted bg + coloured text + hover. */
  container: string;
  /** Mobile link container (uses `active:` instead of `hover:`). */
  containerMobile: string;
  /** Applied to the icon itself (overrides the default brand colour). */
  icon: string;
};

export const NAV_LINK_ACCENT_CLASSES: Record<NavAccent, NavAccentClasses> = {
  violet: {
    container:
      "bg-violet-50 text-violet-900 ring-1 ring-inset ring-violet-200/70 hover:bg-violet-100 hover:text-violet-900 hover:ring-violet-300/70",
    containerMobile:
      "bg-violet-50 text-violet-900 ring-1 ring-inset ring-violet-200/70 active:bg-violet-100",
    icon: "text-violet-700 group-hover:text-violet-800",
  },
  emerald: {
    container:
      "bg-emerald-50 text-emerald-900 ring-1 ring-inset ring-emerald-200/70 hover:bg-emerald-100 hover:text-emerald-900 hover:ring-emerald-300/70",
    containerMobile:
      "bg-emerald-50 text-emerald-900 ring-1 ring-inset ring-emerald-200/70 active:bg-emerald-100",
    icon: "text-emerald-700 group-hover:text-emerald-800",
  },
  sky: {
    container:
      "bg-sky-50 text-sky-900 ring-1 ring-inset ring-sky-200/70 hover:bg-sky-100 hover:text-sky-900 hover:ring-sky-300/70",
    containerMobile:
      "bg-sky-50 text-sky-900 ring-1 ring-inset ring-sky-200/70 active:bg-sky-100",
    icon: "text-sky-700 group-hover:text-sky-800",
  },
};

export function NavLinkIcon({
  name,
  accent,
}: {
  name?: string;
  accent?: NavAccent;
}) {
  if (!name) return null;
  const Icon = NAV_LINK_ICONS[name];
  if (!Icon) return null;
  const accentIconClass = accent
    ? NAV_LINK_ACCENT_CLASSES[accent].icon
    : "text-brand-primary/80 group-hover:text-brand-cta";
  return (
    <Icon
      className={`h-4 w-4 shrink-0 transition-colors ${accentIconClass}`}
      strokeWidth={1.75}
      aria-hidden
    />
  );
}
