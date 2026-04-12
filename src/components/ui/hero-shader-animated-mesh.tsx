"use client";

import { MeshGradient } from "@paper-design/shaders-react";

type Props = {
  colors: string[];
  speed: number;
  distortion: number;
  swirl: number;
  grainOverlay: number;
};

/**
 * Isolated so `hero-shader` can lazy-load `@paper-design/shaders-react` only when
 * the animated mesh is actually shown (not on static-only compare heroes).
 */
export default function HeroShaderAnimatedMesh({
  colors,
  speed,
  distortion,
  swirl,
  grainOverlay,
}: Props) {
  return (
    <div className="absolute inset-0 z-0 contain-strict" aria-hidden>
      <MeshGradient
        className="absolute inset-0 h-full w-full"
        colors={colors}
        speed={speed}
        distortion={distortion}
        swirl={swirl}
        grainOverlay={grainOverlay}
      />
    </div>
  );
}
