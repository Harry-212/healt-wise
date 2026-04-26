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

export function NavLinkIcon({ name }: { name?: string }) {
  if (!name) return null;
  const Icon = NAV_LINK_ICONS[name];
  if (!Icon) return null;
  return (
    <Icon
      className="h-4 w-4 shrink-0 text-brand-primary/80 transition-colors group-hover:text-brand-cta"
      strokeWidth={1.75}
      aria-hidden
    />
  );
}
