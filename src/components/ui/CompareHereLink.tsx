import Link from "next/link";
import { Zap } from "lucide-react";
import type { ComponentProps } from "react";
import type { NavAccent } from "@/lib/nav/nav-config";
import { NAV_LINK_ACCENT_CLASSES } from "@/lib/nav/nav-icons";

export const COMPARE_HERE_LABEL = "Compare Here";

const coreClass =
  "inline-flex items-center justify-center gap-2 font-bold text-slate-900 shadow-sm transition bg-amber-400 hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500";

const navAccentCore = (accent: NavAccent) =>
  `group inline-flex items-center justify-center gap-2 font-extrabold shadow-sm transition hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${NAV_LINK_ACCENT_CLASSES[accent].container}`;

const sizeClass = {
  default: "rounded-2xl px-5 py-3 text-sm",
  sm: "rounded-xl px-4 py-2.5 text-sm",
  card: "rounded-lg px-3 py-2 text-xs",
  hero: "rounded-full px-8 py-3 text-sm",
  footer: "rounded-2xl px-9 py-4 text-base shadow-lg",
} as const;

export type CompareHereSize = keyof typeof sizeClass;

export function compareHereButtonClass(
  size: CompareHereSize = "default",
  className = "",
  navAccent?: NavAccent,
) {
  if (navAccent) {
    return [navAccentCore(navAccent), sizeClass[size], className]
      .filter(Boolean)
      .join(" ");
  }
  return [coreClass, sizeClass[size], className].filter(Boolean).join(" ");
}

type Props = Omit<ComponentProps<typeof Link>, "className" | "children"> & {
  className?: string;
  size?: CompareHereSize;
  showArrow?: boolean;
  label?: string;
  /** Match mega menu Pricing row colours (violet / emerald / sky). */
  navAccent?: NavAccent;
};

export default function CompareHereLink({
  className = "",
  size = "default",
  showArrow = true,
  label = COMPARE_HERE_LABEL,
  navAccent,
  ...rest
}: Props) {
  const iconClass =
    size === "footer" ? "h-5 w-5 shrink-0" : "h-4 w-4 shrink-0";
  const accentIconClass = navAccent
    ? NAV_LINK_ACCENT_CLASSES[navAccent].icon
    : "";

  return (
    <Link
      {...rest}
      className={compareHereButtonClass(size, className, navAccent)}
    >
      {label}
      {showArrow ? (
        <Zap
          className={`${iconClass} ${accentIconClass}`}
          strokeWidth={1.75}
          aria-hidden
        />
      ) : null}
    </Link>
  );
}
