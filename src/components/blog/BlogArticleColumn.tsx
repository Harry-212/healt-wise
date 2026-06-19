"use client";

import type { ReactNode } from "react";
import type { TocEntry } from "@/components/guide/GuideLayout";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import GuideTocMobile from "@/components/guide/GuideTocMobile";

type Props = {
  toc: TocEntry[];
  darkMode?: boolean;
  children: ReactNode;
};

/** Centered article column with desktop TOC in the left margin (does not shift content). */
export default function BlogArticleColumn({
  toc,
  darkMode = false,
  children,
}: Props) {
  const sidebarKey = toc.map((t) => t.id).join("-");

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {toc.length > 0 && (
        <div className="absolute right-full top-0 mr-10 hidden w-64 xl:block">
          <GuideTocSidebar key={sidebarKey} toc={toc} />
        </div>
      )}
      <GuideTocMobile toc={toc} darkMode={darkMode} />
      {children}
    </div>
  );
}
