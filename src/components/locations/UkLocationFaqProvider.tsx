"use client";

import React, { createContext, useContext } from "react";
import type { FaqItem } from "@/lib/content/uk-location-article-data";

const UkLocationFaqContext = createContext<FaqItem[] | null>(null);

export function UkLocationFaqProvider({
  faqItems,
  children,
}: {
  faqItems: FaqItem[];
  children: React.ReactNode;
}) {
  return (
    <UkLocationFaqContext.Provider value={faqItems}>
      {children}
    </UkLocationFaqContext.Provider>
  );
}

/** FAQ copy from the server RSC payload — avoids SSR/client drift from `buildLocationFaq` in client bundles. */
export function useUkLocationFaq(): FaqItem[] {
  const items = useContext(UkLocationFaqContext);
  if (!items) {
    throw new Error(
      "useUkLocationFaq must be used under UkLocationFaqProvider (UK location blog pages).",
    );
  }
  return items;
}
