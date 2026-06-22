"use client";

import {
  Children,
  cloneElement,
  Fragment,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";
import type { TocEntry } from "@/components/guide/GuideLayout";
import GuideTocSidebar from "@/components/guide/GuideTocSidebar";
import GuideTocMobile from "@/components/guide/GuideTocMobile";

type Props = {
  toc: TocEntry[];
  darkMode?: boolean;
  children: ReactNode;
};

const HERO_END_ID = "guide-article-hero-end";

/** Inserts mobile TOC immediately after the hero thumbnail marker in article children. */
function injectMobileTocAfterHero(
  children: ReactNode,
  mobileToc: ReactNode,
): ReactNode {
  let injected = false;

  function walk(node: ReactNode): ReactNode {
    if (node == null || typeof node === "boolean") return null;
    if (typeof node === "string" || typeof node === "number") return node;

    if (Children.count(node) > 1) {
      return Children.map(node, (child) => walk(child));
    }

    if (!isValidElement(node)) return node;

    const props = node.props as { id?: string; children?: ReactNode };

    if (props.id === HERO_END_ID && !injected) {
      injected = true;
      const groupKey = node.key != null ? String(node.key) : HERO_END_ID;
      return (
        <Fragment key={`${groupKey}-with-toc`}>
          {node}
          {mobileToc}
        </Fragment>
      );
    }

    if (props.children != null) {
      const newChildren = walk(props.children);
      if (newChildren === props.children) return node;
      return cloneElement(
        node as ReactElement<{ children?: ReactNode }>,
        {},
        newChildren,
      );
    }

    return node;
  }

  const result = walk(children);
  return injected ? result : (
    <>
      {children}
      {mobileToc}
    </>
  );
}

/** Centered article column with desktop TOC in the left margin (does not shift content). */
export default function BlogArticleColumn({
  toc,
  darkMode = false,
  children,
}: Props) {
  const sidebarKey = toc.map((t) => t.id).join("-");
  const mobileToc =
    toc.length > 0 ? <GuideTocMobile toc={toc} darkMode={darkMode} /> : null;

  const content = mobileToc
    ? injectMobileTocAfterHero(children, mobileToc)
    : children;

  return (
    <div className="relative mx-auto w-full max-w-3xl">
      {toc.length > 0 && (
        <div className="absolute right-full top-0 mr-10 hidden w-64 xl:block">
          <GuideTocSidebar key={sidebarKey} toc={toc} />
        </div>
      )}
      {content}
    </div>
  );
}
