"use client";

import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import { motion, useInView, type Variants } from "framer-motion";

type TimelineCtx = {
  rootRef: React.RefObject<HTMLDivElement | null>;
  isInView: boolean;
};

const TimelineContext = createContext<TimelineCtx | null>(null);

export function TimelineSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rootRef, {
    once: true,
    amount: 0.15,
    margin: "0px 0px -8% 0px",
  });

  return (
    <TimelineContext.Provider value={{ rootRef, isInView }}>
      <div ref={rootRef} className={className}>
        {children}
      </div>
    </TimelineContext.Provider>
  );
}

const cubic: [number, number, number, number] = [0.22, 1, 0.36, 1];

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.55, ease: cubic },
  }),
};

export type TimelineContentProps = {
  as?: "div" | "span" | "h1" | "h2" | "h3" | "p" | "button";
  animationNum: number;
  timelineRef?: React.RefObject<HTMLElement | null>;
  customVariants?: Variants;
  children: ReactNode;
  className?: string;
  id?: string;
};

export function TimelineContent({
  as = "div",
  animationNum,
  customVariants,
  className,
  children,
  id,
  timelineRef: _timelineRef,
}: TimelineContentProps) {
  const ctx = useContext(TimelineContext);
  if (!ctx) {
    throw new Error("TimelineContent must be used inside TimelineSection");
  }

  const { isInView } = ctx;
  const variants = customVariants ?? defaultVariants;
  const state = isInView ? "visible" : "hidden";

  const props = {
    initial: "hidden" as const,
    animate: state,
    variants,
    custom: animationNum,
    className,
    id,
    children,
  };

  switch (as) {
    case "span":
      return <motion.span {...props} />;
    case "h1":
      return <motion.h1 {...props} />;
    case "h2":
      return <motion.h2 {...props} />;
    case "h3":
      return <motion.h3 {...props} />;
    case "p":
      return <motion.p {...props} />;
    case "button":
      return <motion.button {...props} />;
    default:
      return <motion.div {...props} />;
  }
}
