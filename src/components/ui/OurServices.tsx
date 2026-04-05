"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  PoundSterling,
  BarChart2,
  BookOpen,
  LayoutDashboard,
} from "lucide-react";
import { useEffect, useState } from "react";

const SERVICES = [
  {
    icon: PoundSterling,
    label: "Price Comparison",
    desc: "Compare real costs by dosage across UK providers.",
    angle: -90, // top
  },
  {
    icon: ShieldCheck,
    label: "Verified Providers",
    desc: "Only GPhC-regulated pharmacies make our list.",
    angle: -18, // top-right
  },
  {
    icon: BarChart2,
    label: "Cost Breakdown",
    desc: "See starting price, hidden fees, and long-term costs.",
    angle: 54, // bottom-right
  },
  {
    icon: LayoutDashboard,
    label: "Progress Tracker",
    desc: "Log weight, medication, and milestones privately.",
    angle: 126, // bottom-left
  },
  {
    icon: BookOpen,
    label: "Treatment Guides",
    desc: "Clear, unbiased guides on Wegovy, Mounjaro & Saxenda.",
    angle: 198, // left
  },
];

/** Orbit radius as fraction of container width (from centre to satellite). */
const ORBIT_RATIO = 0.395;

function orbitPositionPercent(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    left: `${50 + ORBIT_RATIO * 100 * Math.cos(rad)}%`,
    top: `${50 + ORBIT_RATIO * 100 * Math.sin(rad)}%`,
  };
}

const ringInsetPercent = `${((1 - 2 * ORBIT_RATIO) / 2) * 100}%`;

export default function OurServices() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % SERVICES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const ActiveIcon = SERVICES[active].icon;

  return (
    <section className="w-full bg-white px-4 py-10 md:px-8 md:py-14 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left: copy */}
        <div>
          <span className="inline-block rounded-sm bg-slate-100 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500">
            The Health Wise Experience
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-slate-950 md:text-4xl">
            Smarter, safer weight&nbsp;loss decisions
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
            We compare GLP-1 treatments — Wegovy, Mounjaro, and Saxenda — across
            price, provider quality, and real long-term cost. Independent data,
            no pharmacy bias.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Real prices by dosage, including hidden fees",
              "GPhC-verified UK pharmacies only",
              "Private progress tracking in My Hub",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/compare/wegovy-vs-mounjaro"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-bold text-white shadow-sm transition-all duration-300 hover:scale-105 hover:brightness-110 active:scale-95"
          >
            See comparisons
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Right: orbit diagram */}
        <div className="flex flex-col items-center justify-center gap-6 sm:flex-row lg:gap-2">
          <div className="relative aspect-square w-[min(100vw-1.25rem,400px)] shrink-0">
            {/* Orbit ring */}
            <div
              className="absolute rounded-full border border-dashed border-slate-200"
              style={{
                top: ringInsetPercent,
                left: ringInsetPercent,
                right: ringInsetPercent,
                bottom: ringInsetPercent,
              }}
            />
            {/* Center circle */}
            <div
              className="absolute left-1/2 top-1/2 flex h-[42%] max-h-[156px] w-[42%] max-w-[156px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[#f4f7f5] text-center transition-all duration-500"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-500">
                <ActiveIcon className="h-6 w-6 text-brand-primary transition-all duration-500" />
              </div>
              <p className="mt-2 px-2 text-[10px] font-semibold leading-tight text-slate-800 transition-all duration-500 sm:text-xs">
                {SERVICES[active].label}
              </p>
            </div>

            {/* Orbiting icons */}
            {SERVICES.map((svc, i) => {
              const pos = orbitPositionPercent(svc.angle);
              const isActive = i === active;
              const Icon = svc.icon;
              return (
                <button
                  key={svc.label}
                  onClick={() => setActive(i)}
                  title={svc.label}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-all duration-500"
                  style={{
                    left: pos.left,
                    top: pos.top,
                    width: isActive ? 52 : 42,
                    height: isActive ? 52 : 42,
                    background: isActive ? "#0F3D3E" : "#f1f5f9",
                    boxShadow: isActive
                      ? "0 4px 16px rgba(15,61,62,0.25)"
                      : "0 1px 4px rgba(0,0,0,0.08)",
                  }}
                >
                  <Icon
                    className="transition-all duration-500"
                    style={{
                      width: isActive ? 24 : 19,
                      height: isActive ? 24 : 19,
                      color: isActive ? "#ffffff" : "#94a3b8",
                    }}
                  />
                </button>
              );
            })}
          </div>

          {/* Active description */}
          <div className="w-full max-w-xs text-center sm:ml-6 sm:w-48 sm:text-left">
            <p className="text-sm font-semibold text-slate-900 transition-all duration-500">
              {SERVICES[active].label}
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-500 transition-all duration-500">
              {SERVICES[active].desc}
            </p>
            {/* Dot indicators */}
            <div className="mt-4 flex gap-1.5">
              {SERVICES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 20 : 6,
                    background: i === active ? "#0F3D3E" : "#e2e8f0",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
