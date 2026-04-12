"use client";

import type React from "react";
import {
  useEffect,
  useMemo,
  useRef,
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

function subscribeMinLg(onChange: () => void) {
  const mq = window.matchMedia("(min-width: 1024px)");
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getMinLgSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getMinLgServerSnapshot() {
  return false;
}

/** Animated WebGL mesh is heavy on laptops and phones; reserve it for large viewports. */
function useMinLgViewport() {
  return useSyncExternalStore(
    subscribeMinLg,
    getMinLgSnapshot,
    getMinLgServerSnapshot,
  );
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
  const minLg = useMinLgViewport();
  const [webglOk, setWebglOk] = useState(false);
  const [gpuChecked, setGpuChecked] = useState(false);
  const [heroInView, setHeroInView] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);
  const [meshIdleReady, setMeshIdleReady] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inViewRaf = useRef<number | null>(null);

  useEffect(() => {
    setWebglOk(detectWebGL());
    setGpuChecked(true);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const kick = () => {
      if (!cancelled) setMeshIdleReady(true);
    };
    if (typeof requestIdleCallback !== "undefined") {
      const id = requestIdleCallback(kick, { timeout: 1400 });
      return () => {
        cancelled = true;
        cancelIdleCallback(id);
      };
    }
    const t = window.setTimeout(kick, 400);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const onVis = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (inViewRaf.current != null) {
          cancelAnimationFrame(inViewRaf.current);
        }
        inViewRaf.current = requestAnimationFrame(() => {
          inViewRaf.current = null;
          setHeroInView(entry.isIntersecting);
        });
      },
      {
        root: null,
        // Inflate root so brief scroll near the hero boundary does not thrash WebGL on/off.
        rootMargin: "160px 0px 280px 0px",
        threshold: 0,
      },
    );
    obs.observe(el);
    return () => {
      if (inViewRaf.current != null) cancelAnimationFrame(inViewRaf.current);
      obs.disconnect();
    };
  }, []);

  const mesh = MESH_BY_VARIANT[variant];
  const staticGradient = useMemo(
    () =>
      `linear-gradient(145deg, ${mesh.layer1[0]} 0%, ${mesh.layer1[2] ?? mesh.layer1[1]} 42%, ${mesh.layer1[1]} 78%, ${mesh.layer2[2] ?? mesh.layer1[0]} 100%)`,
    [mesh.layer1, mesh.layer2],
  );

  const useAnimatedMesh =
    gpuChecked &&
    webglOk &&
    !reducedMotion &&
    minLg &&
    heroInView &&
    tabVisible &&
    meshIdleReady;

  return (
    <div
      ref={rootRef}
      className={`relative w-full overflow-hidden ${minHeight}`}
    >
      {!useAnimatedMesh ? (
        <div
          className="absolute inset-0 z-0"
          style={{ background: staticGradient }}
          aria-hidden
        />
      ) : (
        <div
          className="absolute inset-0 z-0 contain-strict"
          aria-hidden
        >
          <MeshGradient
            className="absolute inset-0 h-full w-full"
            colors={mesh.layer1}
            speed={0.085}
            distortion={0.55}
            swirl={0.1}
            grainOverlay={0.03}
          />
        </div>
      )}

      <div
        className="pointer-events-none absolute inset-0 z-1 bg-linear-to-t from-black/75 via-black/35 to-black/25"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-[inherit] flex-col">
        {children}
      </div>
    </div>
  );
}
