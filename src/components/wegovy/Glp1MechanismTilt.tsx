"use client";

import { useCallback, useRef, useState } from "react";

/**
 * Interactive tilt wrapper around an SVG diagram — lightweight “3D” feel without WebGL.
 */
export default function Glp1MechanismTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState(
    "perspective(1200px) rotateX(0deg) rotateY(0deg)",
  );

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    const ry = px * 16;
    const rx = -py * 12;
    setTransform(`perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg)`);
  }, []);

  const onLeave = useCallback(() => {
    setTransform("perspective(1200px) rotateX(0deg) rotateY(0deg)");
  }, []);

  return (
    <div className="w-full">
      <p className="mb-3 text-center text-xs text-slate-500">
        Move the pointer over the diagram for a tilt effect — GLP-1 pathways are simplified.
      </p>
      <div
        ref={ref}
        role="presentation"
        className="relative mx-auto max-w-2xl cursor-grab rounded-2xl border border-brand-border bg-linear-to-br from-white to-slate-50 p-4 shadow-lg transition-transform duration-200 ease-out"
        style={{ transform }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        <svg
          viewBox="0 0 480 320"
          className="h-auto w-full"
          aria-labelledby="glp1-title glp1-desc"
          role="img"
        >
          <title id="glp1-title">GLP-1 receptor agonist mechanism</title>
          <desc id="glp1-desc">
            Diagram showing gut GLP-1, brain appetite centres, delayed gastric emptying, and
            insulin response with semaglutide.
          </desc>
          <defs>
            <linearGradient id="brain" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0f2fe" />
              <stop offset="100%" stopColor="#bae6fd" />
            </linearGradient>
            <linearGradient id="gut" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ecfdf5" />
              <stop offset="100%" stopColor="#a7f3d0" />
            </linearGradient>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L6,3 L0,6 z" fill="#64748b" />
            </marker>
          </defs>
          <rect width="480" height="320" fill="#fafafa" rx="12" />
          <ellipse
            cx="120"
            cy="90"
            rx="70"
            ry="55"
            fill="url(#brain)"
            stroke="#0284c7"
            strokeWidth="2"
          />
          <text
            x="120"
            y="88"
            textAnchor="middle"
            fill="#1e293b"
            fontSize="11"
            fontWeight="600"
          >
            Brain / hypothalamus
          </text>
          <text x="120" y="105" textAnchor="middle" fill="#475569" fontSize="9">
            Appetite &amp; satiety
          </text>
          <path
            d="M280 140 Q320 100 360 140 Q380 200 340 240 Q300 260 260 220 Q240 180 280 140"
            fill="url(#gut)"
            stroke="#059669"
            strokeWidth="2"
          />
          <text
            x="330"
            y="200"
            textAnchor="middle"
            fill="#1e293b"
            fontSize="11"
            fontWeight="600"
          >
            Stomach
          </text>
          <text x="330" y="216" textAnchor="middle" fill="#475569" fontSize="9">
            Slower emptying
          </text>
          <ellipse
            cx="100"
            cy="250"
            rx="45"
            ry="28"
            fill="#fef3c7"
            stroke="#d97706"
            strokeWidth="2"
          />
          <text
            x="100"
            y="252"
            textAnchor="middle"
            fill="#1e293b"
            fontSize="10"
            fontWeight="600"
          >
            Pancreas
          </text>
          <text x="100" y="266" textAnchor="middle" fill="#475569" fontSize="9">
            Insulin (glucose-dependent)
          </text>
          <rect x="200" y="28" width="120" height="36" rx="8" fill="#0f766e" opacity="0.95" />
          <text x="260" y="50" textAnchor="middle" fill="white" fontSize="11" fontWeight="700">
            Semaglutide (Wegovy)
          </text>
          <path
            d="M260 64 L260 50 L120 50 L120 75"
            fill="none"
            stroke="#475569"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <path
            d="M280 64 L320 120"
            fill="none"
            stroke="#475569"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <path
            d="M220 64 L140 230"
            fill="none"
            stroke="#475569"
            strokeWidth="2"
            markerEnd="url(#arrow)"
          />
          <text x="248" y="130" fill="#64748b" fontSize="9">
            GLP-1 receptor activation
          </text>
        </svg>
      </div>
    </div>
  );
}
