"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type RechartsDims = { width: number; height: number };

/** Extra left/bottom space on narrow widths so £ ticks and legend do not clip. */
export function rechartsOuterMargins(width: number): {
  top: number;
  right: number;
  left: number;
  bottom: number;
} {
  const narrow = width < 420;
  return {
    top: 8,
    right: narrow ? 4 : 12,
    left: narrow ? 40 : 4,
    bottom: narrow ? 36 : 4,
  };
}

/**
 * Measures a fixed-height box and passes pixel width/height into children.
 * Use explicit `width`/`height` on BarChart/LineChart — do not use ResponsiveContainer
 * (it reports -1 during SSR/prerender and some flex layouts).
 */
export function RechartsShell({
  children,
  heightPx = 288,
  className = "",
}: {
  children: (dims: RechartsDims) => ReactNode;
  heightPx?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<RechartsDims | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const read = () => {
      const r = el.getBoundingClientRect();
      const width = Math.max(1, Math.round(r.width));
      const height = Math.max(1, Math.round(r.height));
      setDims((prev) =>
        prev && prev.width === width && prev.height === height
          ? prev
          : { width, height },
      );
    };

    read();

    if (typeof ResizeObserver === "undefined") {
      return;
    }

    const ro = new ResizeObserver(() => {
      read();
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [heightPx]);

  return (
    <div
      ref={ref}
      className={`w-full min-w-0 shrink-0 ${className}`}
      style={{
        height: heightPx,
        minHeight: heightPx,
        width: "100%",
        maxWidth: "100%",
      }}
    >
      {dims != null ? children(dims) : null}
    </div>
  );
}
