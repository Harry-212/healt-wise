"use client";

import { useCallback, useRef } from "react";

const PEN_IMAGE = "/mounjaro healt wise.png";

const RESET =
  "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";

export default function MounjaroPenTilt({
  className = "",
}: {
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;
    const r = wrap.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const ry = px * 18;
    const rx = -py * 14;
    const next = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015,1.015,1.015)`;
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      inner.style.transform = next;
    });
  }, []);

  const onLeave = useCallback(() => {
    if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    innerRef.current?.style.setProperty("transform", RESET);
  }, []);

  return (
    <div
      className={className}
      ref={wrapRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        ref={innerRef}
        className="mx-auto w-fit max-w-[min(100%,280px)] transform-3d will-change-transform"
        style={{ transform: RESET }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- transparency + pen product shot */}
        <img
          src={PEN_IMAGE}
          alt="Mounjaro KwikPen pre-filled injection device containing tirzepatide for subcutaneous use"
          decoding="async"
          draggable={false}
          className="h-auto max-h-[min(380px,55vh)] w-auto max-w-[280px] bg-transparent object-contain [background:none]"
        />
      </div>
    </div>
  );
}
