"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSupabaseAuth } from "@/components/providers/SupabaseAuthProvider";

type Props = {
  onStartTracking: () => void;
};

/** Handles `?start=1` without forcing the whole tracker page into Suspense. */
export default function WeightTrackerStartQuery({ onStartTracking }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, ready: authChecked } = useSupabaseAuth();

  useEffect(() => {
    if (searchParams.get("start") !== "1") return;
    if (!authChecked) return;
    if (!user) {
      router.replace("/tools/weight-loss-tracker", { scroll: false });
      return;
    }
    onStartTracking();
    router.replace("/tools/weight-loss-tracker", { scroll: false });
  }, [searchParams, router, authChecked, user, onStartTracking]);

  return null;
}
