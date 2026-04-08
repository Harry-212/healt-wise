"use client";

import type React from "react";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { MeshGradient } from "@paper-design/shaders-react";

/** Avoid mounting Paper Shaders when WebGL is unavailable (RDP, some VMs, locked-down browsers). */
function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl" as "webgl")
    );
  } catch {
    return false;
  }
}

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

type HeroShaderFilterIds = {
  /** Use as `style={{ filter: ids.glassUrl }}` */
  glassUrl: string;
  /** Use as `style={{ filter: ids.gooeyUrl }}` for gooey button groups */
  gooeyUrl: string;
};

const HeroShaderFilterContext = createContext<HeroShaderFilterIds | null>(null);

export function useHeroShaderFilters(): HeroShaderFilterIds | null {
  return useContext(HeroShaderFilterContext);
}

export type HeroShaderVariant = "teal" | "violet" | "blue";

interface ShaderBackgroundProps {
  children: React.ReactNode;
  /** Minimum block height (default matches reference layout). */
  minHeight?: string;
  /** Mesh gradient palette — teal (Wegovy), violet (Mounjaro), blue (Saxenda). */
  variant?: HeroShaderVariant;
}

const MESH_BY_VARIANT: Record<
  HeroShaderVariant,
  { layer1: string[]; layer2: string[] }
> = {
  teal: {
    layer1: ["#020617", "#0f766e", "#ecfdf5", "#1e1b4b", "#312e81"],
    layer2: ["#020617", "#ffffff", "#5eead4", "#020617"],
  },
  violet: {
    layer1: ["#0f0828", "#5b21b6", "#ede9fe", "#1e1b4b", "#6d28d9"],
    layer2: ["#020617", "#faf5ff", "#a78bfa", "#1e1b4b"],
  },
  blue: {
    layer1: ["#020617", "#1d4ed8", "#e0f2fe", "#0c4a6e", "#2563eb"],
    layer2: ["#020617", "#dbeafe", "#38bdf8", "#0f172a"],
  },
};

export function ShaderBackground({
  children,
  minHeight = "min-h-[560px] sm:min-h-[620px] lg:min-h-[650px]",
  variant = "teal",
}: ShaderBackgroundProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [webglOk, setWebglOk] = useState(false);
  const [gpuChecked, setGpuChecked] = useState(false);

  useEffect(() => {
    setWebglOk(detectWebGL());
    setGpuChecked(true);
  }, []);

  const uid = useId().replace(/:/g, "");
  const glassId = `glass-effect-${uid}`;
  const gooeyId = `gooey-filter-${uid}`;

  const filterUrls = useMemo(
    () => ({
      glassUrl: `url(#${glassId})`,
      gooeyUrl: `url(#${gooeyId})`,
    }),
    [glassId, gooeyId],
  );

  const mesh = MESH_BY_VARIANT[variant];
  const staticGradient = useMemo(
    () =>
      `linear-gradient(145deg, ${mesh.layer1[0]} 0%, ${mesh.layer1[2] ?? mesh.layer1[1]} 42%, ${mesh.layer1[1]} 78%, ${mesh.layer2[2] ?? mesh.layer1[0]} 100%)`,
    [mesh.layer1, mesh.layer2],
  );

  const useAnimatedMesh =
    gpuChecked && webglOk && !reducedMotion;

  return (
    <div className={`relative w-full overflow-hidden ${minHeight}`}>
      <svg className="absolute inset-0 h-0 w-0" aria-hidden>
        <defs>
          <filter id={glassId} x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id={gooeyId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>

      {!useAnimatedMesh ? (
        <div
          className="absolute inset-0 z-0"
          style={{ background: staticGradient }}
          aria-hidden
        />
      ) : (
        <div className="absolute inset-0 z-0">
          <MeshGradient
            className="absolute inset-0 h-full w-full"
            colors={mesh.layer1}
            speed={0.14}
            distortion={0.72}
            swirl={0.14}
            grainOverlay={0.06}
          />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-black/75 via-black/35 to-black/25"
        aria-hidden
      />

      <HeroShaderFilterContext.Provider value={filterUrls}>
        <div className="relative z-10 flex h-full min-h-[inherit] flex-col">
          {children}
        </div>
      </HeroShaderFilterContext.Provider>
    </div>
  );
}
