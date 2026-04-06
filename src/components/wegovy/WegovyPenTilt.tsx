"use client";

import { useCallback, useRef, useState } from "react";

/** File: `public/wegovy healt wise.png` — use PNG with alpha; no CSS “frame”. */
const PEN_IMAGE = "/wegovy healt wise.png";

/**
 * Transparent PNG: native &lt;img&gt; avoids Next/Image fill-box + optimizer quirks.
 * Pointer tilt (CSS perspective). No WebGL.
 */
export default function WegovyPenTilt({
  className = "",
}: {
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
  );

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = wrapRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const ry = px * 18;
    const rx = -py * 14;
    setTransform(
      `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.015,1.015,1.015)`,
    );
  }, []);

  const onLeave = useCallback(() => {
    setTransform(
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
    );
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
        className="mx-auto w-fit max-w-[min(100%,280px)] transform-3d transition-[transform] duration-200 ease-out will-change-transform"
        style={{ transform }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- transparency + no layout box artefact */}
        <img
          src={PEN_IMAGE}
          alt="Wegovy pre-filled injection pen containing semaglutide"
          decoding="async"
          draggable={false}
          className="h-auto max-h-[min(380px,55vh)] w-auto max-w-[280px] bg-transparent object-contain [background:none]"
        />
      </div>
    </div>
  );
}
