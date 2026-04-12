"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Renders `fallback` until the wrapper nears the viewport, then `children`.
 * Avoids loading heavy subtrees (e.g. Recharts) until the user scrolls close.
 */
export default function DeferNearViewport({
  children,
  fallback,
  rootMargin = "280px 0px",
}: {
  children: ReactNode;
  fallback: ReactNode;
  rootMargin?: string;
}) {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (active) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { root: null, rootMargin, threshold: 0 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [active, rootMargin]);

  return (
    <div ref={ref} className="min-w-0">
      {active ? children : fallback}
    </div>
  );
}
