"use client";

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export type HeroCta = { label: string; href: string };

/** Two-line parallax when splitTitle is false (e.g. split after “Wegovy”). */
function splitHeadlineForParallax(title: string): [string, string] {
  const t = title.trim();
  if (!t) return ["", ""];
  const lower = t.toLowerCase();
  const wegIdx = lower.indexOf("wegovy");
  if (wegIdx !== -1) {
    const afterW = t.slice(wegIdx + "wegovy".length).trimStart();
    if (afterW.length > 0) {
      return [t.slice(0, wegIdx + "wegovy".length).trimEnd(), afterW];
    }
  }
  const words = t.split(/\s+/);
  if (words.length <= 1) return [t, ""];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(" "), words.slice(mid).join(" ")];
}

export interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  /** true: first word | remainder. false: smart split (e.g. at “Wegovy”). */
  splitTitle?: boolean;
  trustStatement?: string;
  ctas?: HeroCta[];
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

const ScrollExpandMedia = ({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  splitTitle = true,
  trustStatement,
  ctas,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] =
    useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
    setTouchStartY(null);
  }, [mediaType]);

  useEffect(() => {
    const onReset = (): void => {
      setScrollProgress(0);
      setShowContent(false);
      setMediaFullyExpanded(false);
      setTouchStartY(null);
      window.scrollTo(0, 0);
    };
    window.addEventListener("resetSection", onReset);
    return () => window.removeEventListener("resetSection", onReset);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollDelta = e.deltaY * 0.0009;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1,
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY === null) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartY - touchY;

      if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        const scrollFactor = deltaY < 0 ? 0.008 : 0.005;
        const scrollDelta = deltaY * scrollFactor;
        const newProgress = Math.min(
          Math.max(scrollProgress + scrollDelta, 0),
          1,
        );
        setScrollProgress(newProgress);

        if (newProgress >= 1) {
          setMediaFullyExpanded(true);
          setShowContent(true);
        } else if (newProgress < 0.75) {
          setShowContent(false);
        }

        setTouchStartY(touchY);
      }
    };

    const handleTouchEnd = (): void => {
      setTouchStartY(null);
    };

    const handleScroll = (): void => {
      if (!mediaFullyExpanded) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener("scroll", handleScroll as EventListener);
    window.addEventListener(
      "touchstart",
      handleTouchStart as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener(
      "touchmove",
      handleTouchMove as unknown as EventListener,
      { passive: false },
    );
    window.addEventListener("touchend", handleTouchEnd as EventListener);

    return () => {
      window.removeEventListener(
        "wheel",
        handleWheel as unknown as EventListener,
      );
      window.removeEventListener("scroll", handleScroll as EventListener);
      window.removeEventListener(
        "touchstart",
        handleTouchStart as unknown as EventListener,
      );
      window.removeEventListener(
        "touchmove",
        handleTouchMove as unknown as EventListener,
      );
      window.removeEventListener("touchend", handleTouchEnd as EventListener);
    };
  }, [scrollProgress, mediaFullyExpanded, touchStartY]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";
  const [headlineLeft, headlineRight] = title
    ? splitTitle
      ? [firstWord, restOfTitle]
      : splitHeadlineForParallax(title)
    : ["", ""];

  const heroTextBlend = textBlend ? "mix-blend-difference" : "mix-blend-normal";

  return (
    <div
      ref={sectionRef}
      className="transition-colors duration-700 ease-in-out overflow-x-hidden"
    >
      <section className="relative flex min-h-dvh flex-col items-center justify-start">
        <div className="relative flex min-h-dvh w-full flex-col items-center">
          <motion.div
            className="absolute inset-0 z-0 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <Image
              src={bgImageSrc}
              alt="Background"
              width={1920}
              height={1080}
              className="h-screen w-screen"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              priority
            />
            <div className="absolute inset-0 bg-black/50" />
          </motion.div>

          <div className="relative z-10 mx-auto flex w-full max-w-full flex-col items-center justify-start px-4 md:px-8">
            <div className="relative flex h-dvh w-full flex-col items-center justify-center">
              <div
                className="absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 rounded-2xl transition-none"
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                {mediaType === "video" ? (
                  mediaSrc.includes("youtube.com") ? (
                    <div className="pointer-events-none relative h-full w-full">
                      <iframe
                        width="100%"
                        height="100%"
                        src={
                          mediaSrc.includes("embed")
                            ? mediaSrc +
                              (mediaSrc.includes("?") ? "&" : "?") +
                              "autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1"
                            : mediaSrc.replace("watch?v=", "embed/") +
                              "?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=" +
                              mediaSrc.split("v=")[1]
                        }
                        className="h-full w-full rounded-xl"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: "none" }}
                      />

                      <motion.div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className="pointer-events-none relative h-full w-full">
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="h-full w-full rounded-xl object-cover"
                        controls={false}
                        disablePictureInPicture
                        disableRemotePlayback
                      />
                      <div
                        className="absolute inset-0 z-10"
                        style={{ pointerEvents: "none" }}
                      />

                      <motion.div
                        className="absolute inset-0 rounded-xl bg-black/30"
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className="relative h-full w-full">
                    <Image
                      src={mediaSrc}
                      alt={title || "Media content"}
                      width={1280}
                      height={720}
                      className="h-full w-full rounded-xl object-cover"
                    />

                    <motion.div
                      className="absolute inset-0 rounded-xl bg-black/50"
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.7 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}

                <div className="relative z-10 mt-4 flex flex-col items-center text-center transition-none">
                  {date && (
                    <p
                      className="text-xl font-medium text-violet-100 md:text-2xl"
                      style={{
                        transform: `translateX(-${textTranslateX}vw)`,
                      }}
                    >
                      {date}
                    </p>
                  )}
                  {scrollToExpand && (
                    <p
                      className="text-center text-sm font-medium text-violet-100/95 md:text-base"
                      style={{
                        transform: `translateX(${textTranslateX}vw)`,
                      }}
                    >
                      {scrollToExpand}
                    </p>
                  )}
                </div>
              </div>

              <div
                className={`relative z-10 flex w-full flex-col items-center justify-center gap-4 text-center transition-none ${heroTextBlend}`}
              >
                {title ? (
                  <h1 className="sr-only">{title}</h1>
                ) : null}
                {headlineLeft ? (
                  <motion.h2
                    className="text-4xl font-bold tracking-tight text-violet-100 transition-none sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{
                      transform: `translateX(-${textTranslateX}vw)`,
                    }}
                  >
                    {headlineLeft}
                  </motion.h2>
                ) : null}
                {headlineRight ? (
                  <motion.h2
                    className="text-center text-4xl font-bold tracking-tight text-violet-100 transition-none sm:text-5xl md:text-6xl lg:text-7xl"
                    style={{
                      transform: `translateX(${textTranslateX}vw)`,
                    }}
                  >
                    {headlineRight}
                  </motion.h2>
                ) : null}

                {trustStatement ? (
                  <div className="mt-5 max-w-2xl md:max-w-3xl">
                    <p className="text-balance rounded-2xl border border-white/20 bg-black/25 px-6 py-5 text-center text-base font-medium leading-relaxed text-white/95 shadow-lg backdrop-blur-sm md:px-8 md:py-6 md:text-lg md:leading-relaxed">
                      {trustStatement}
                    </p>
                  </div>
                ) : null}

                {ctas && ctas.length > 0 ? (
                  <div className="mt-7 flex w-full flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-4">
                    {ctas.map((cta) => (
                      <Link
                        key={cta.href + cta.label}
                        href={cta.href}
                        className="inline-flex min-w-[220px] justify-center rounded-xl bg-emerald-600 px-7 py-4 text-center text-base font-semibold text-white shadow-lg shadow-emerald-900/30 ring-1 ring-emerald-400/50 transition-all duration-300 hover:bg-violet-700 hover:shadow-violet-900/35 hover:ring-violet-400/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                      >
                        {cta.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <motion.section
              className="flex w-full flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: showContent ? 1 : 0 }}
              transition={{ duration: 0.7 }}
            >
              {children}
            </motion.section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
