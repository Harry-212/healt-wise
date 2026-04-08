import type { ReactNode } from "react";

/**
 * Fixed pixel height + min-w-0 so Recharts ResponsiveContainer never measures -1
 * inside flex/grid layouts (see Recharts console warning).
 */
export function RechartsShell({
  children,
  heightPx = 288,
  className = "",
}: {
  children: ReactNode;
  heightPx?: number;
  className?: string;
}) {
  return (
    <div
      className={`w-full min-w-0 shrink-0 ${className}`}
      style={{
        height: heightPx,
        minHeight: heightPx,
        width: "100%",
        minWidth: 280,
        maxWidth: "100%",
      }}
    >
      {children}
    </div>
  );
}
