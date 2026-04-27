import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps } from "react";

export const COMPARE_HERE_LABEL = "Compare Here";

const coreClass =
  "inline-flex items-center justify-center gap-2 font-bold text-slate-900 shadow-sm transition bg-amber-400 hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500";

const sizeClass = {
  default: "rounded-2xl px-5 py-3 text-sm",
  sm: "rounded-xl px-4 py-2.5 text-sm",
  card: "rounded-lg px-3 py-2 text-xs",
  hero: "rounded-full px-8 py-3 text-sm",
  footer: "rounded-2xl px-6 py-3.5 text-sm shadow-lg",
} as const;

export type CompareHereSize = keyof typeof sizeClass;

export function compareHereButtonClass(
  size: CompareHereSize = "default",
  className = "",
) {
  return [coreClass, sizeClass[size], className].filter(Boolean).join(" ");
}

type Props = Omit<ComponentProps<typeof Link>, "className" | "children"> & {
  className?: string;
  size?: CompareHereSize;
  showArrow?: boolean;
};

export default function CompareHereLink({
  className = "",
  size = "default",
  showArrow = true,
  ...rest
}: Props) {
  return (
    <Link
      {...rest}
      className={compareHereButtonClass(size, className)}
    >
      {COMPARE_HERE_LABEL}
      {showArrow ? (
        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
      ) : null}
    </Link>
  );
}
