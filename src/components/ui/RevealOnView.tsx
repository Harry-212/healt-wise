"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Lightweight scroll-in reveal (IntersectionObserver + CSS transitions) so
 * site-wide chrome like the footer doesn't pull framer-motion into every page.
 * Descendants with `hw-reveal-item` / `hw-reveal-pop` animate in once the block
 * enters view; stagger items with the `--hw-reveal-i` custom property. See
 * globals.css. The attribute is set on the DOM directly, so no re-render.
 */
export default function RevealOnView({
  children,
  className,
  rootMargin = "0px 0px -100px 0px",
}: {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          el.setAttribute("data-revealed", "");
          observer.disconnect();
        }
      },
      { rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
