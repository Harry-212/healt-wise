import type { Metadata } from "next";
import { TipsPageClient } from "@/components/lifestyle/tips/TipsPageClient";
import { PILLAR_TIPS } from "@/lib/lifestyle/pillar-routes";

export const metadata: Metadata = {
  title: "Weight loss tips | Lifestyle",
  description:
    "Science-backed weight loss tips: nutrition, appetite, sustainable habits, sleep, stress, and movement—plus how GLP-1 treatments can fit alongside lifestyle change.",
  alternates: {
    canonical: PILLAR_TIPS,
  },
};

export default function TipsPage() {
  return <TipsPageClient />;
}
