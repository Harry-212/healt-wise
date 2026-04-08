"use client";

import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

type Props = {
  children: ReactNode;
  fallback: ReactNode;
  /** Extra viewport margin before mounting (e.g. "200px"). */
  rootMargin?: string;
  className?: string;
};

/**
 * Mounts `children` only after the placeholder enters (or nears) the viewport.
 * Pair with `next/dynamic(..., { ssr: false })` to defer heavy client JS (Recharts, etc.).
 */
export function InViewDefer({
  children,
  fallback,
  rootMargin = "200px",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShow(true);
            observer.disconnect();
            return;
          }
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [show, rootMargin]);

  return (
    <div ref={ref} className={className}>
      {show ? children : fallback}
    </div>
  );
}
