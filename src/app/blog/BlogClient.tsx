"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BadgePoundSterling,
  BookOpen,
  ChevronDown,
  LayoutGrid,
  MapPin,
  Pill,
  Syringe,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { BlogFeedTag } from "@/lib/blog-feed";
import type { FeedArticle } from "@/lib/blog-feed";
import { imgbbDisplaySrc } from "@/lib/imgbb-display-src";

gsap.registerPlugin(ScrollTrigger);

type FilterId = "all" | BlogFeedTag;

type FilterOption = {
  id: FilterId;
  label: string;
  icon: LucideIcon;
  description: string;
};

const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "All", icon: LayoutGrid, description: "Show every article" },
  { id: "wegovy", label: "Wegovy", icon: Pill, description: "Wegovy & semaglutide topics" },
  { id: "mounjaro", label: "Mounjaro", icon: Activity, description: "Mounjaro & tirzepatide topics" },
  { id: "how-it-works", label: "How it works", icon: BookOpen, description: "Mechanism & effectiveness" },
  { id: "guides", label: "How-to & dosage", icon: Syringe, description: "Dosing, injections & instructions" },
  { id: "safety", label: "Costs & safety", icon: BadgePoundSterling, description: "UK cost, eligibility & safety" },
  {
    id: "locations",
    label: "Locations in UK",
    icon: MapPin,
    description: "City & town weight loss treatment guides",
  },
];

function topicHref(topic: FilterId): string {
  if (topic === "all") return "/blog";
  return `/blog?topic=${topic}`;
}

function pageHref(page: number, topic: BlogFeedTag | "all"): string {
  const q = topic !== "all" ? `?topic=${topic}` : "";
  if (page <= 1) return `/blog${q}`;
  return `/blog/page/${page}${q}`;
}

function TopicFilterLinks({ activeTopic }: { activeTopic: BlogFeedTag | "all" }) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {FILTER_OPTIONS.map(({ id, label, icon: Icon, description }) => {
        const selected = activeTopic === id;
        return (
          <Link
            key={id}
            href={topicHref(id)}
            title={description}
            aria-current={selected ? "page" : undefined}
            className={[
              "inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-all duration-200",
              "hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3562ff] focus-visible:ring-offset-2",
              selected
                ? "border-[#3562ff] bg-[#3562ff] text-white shadow-sm hover:border-[#2a4fd6] hover:bg-[#2a4fd6]"
                : "border-slate-200 bg-white text-slate-800",
            ].join(" ")}
          >
            <Icon
              className={`h-4 w-4 shrink-0 ${selected ? "text-white" : "text-slate-500"}`}
              strokeWidth={2}
              aria-hidden
            />
            <span>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}

export type BlogClientProps = {
  articles: FeedArticle[];
  currentPage: number;
  totalPages: number;
  activeTopic: BlogFeedTag | "all";
};

export default function BlogClient({
  articles,
  currentPage,
  totalPages,
  activeTopic,
}: BlogClientProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState("Date Desc");

  const sortedArticles = useMemo(() => {
    const base = [...articles];
    const byTitle = (a: FeedArticle, b: FeedArticle) => a.title.localeCompare(b.title);
    const byDateAsc = (a: FeedArticle, b: FeedArticle) => {
      const d = a.date.localeCompare(b.date);
      return d !== 0 ? d : a.title.localeCompare(b.title);
    };
    const byDateDesc = (a: FeedArticle, b: FeedArticle) => {
      const d = b.date.localeCompare(a.date);
      return d !== 0 ? d : a.title.localeCompare(b.title);
    };
    if (sortMethod === "Title Asc") return base.sort(byTitle);
    if (sortMethod === "Title Desc")
      return base.sort((a, b) => b.title.localeCompare(a.title));
    if (sortMethod === "Date Asc") return base.sort(byDateAsc);
    if (sortMethod === "Date Desc") return base.sort(byDateDesc);
    return base.sort(byDateDesc);
  }, [articles, sortMethod]);

  const featured = sortedArticles[0];
  /** Hero right column — three posts after the featured slot (1 large + 3 list). */
  const heroSideList = sortedArticles.slice(1, 4);
  /** Every post on this page still appears as a card in the grid below the hero. */
  const gridArticles = sortedArticles;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-stagger",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" },
      );

      gsap.fromTo(
        ".article-card",
        { y: 28, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: articlesRef.current,
            start: "top 82%",
          },
        },
      );

      gsap.fromTo(
        ".articles-header",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: articlesRef.current,
            start: "top 85%",
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, [sortedArticles, currentPage, activeTopic]);

  return (
    <div
      ref={containerRef}
      key={`${currentPage}-${activeTopic}`}
      className="w-full bg-slate-950 font-sans"
    >
      <section
        ref={heroRef}
        className="mx-auto max-w-screen-xl px-4 pb-16 pt-10 text-white sm:px-8 md:px-12"
      >
        {featured ? (
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
            <div className="flex flex-col gap-6 lg:w-7/12 hero-stagger">
              <Link href={featured.href} className="group relative block cursor-pointer">
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px] bg-slate-800 md:aspect-[2/1] lg:aspect-video">
                  <Image
                    src={imgbbDisplaySrc(featured.image)}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    quality={70}
                    unoptimized={imgbbDisplaySrc(featured.image).startsWith("/api/")}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                    fetchPriority="high"
                    loading="eager"
                  />
                  <div className="absolute left-5 top-5 z-10">
                    <span className="rounded-full bg-[#c25e42] px-3 py-1.5 text-xs font-semibold text-white">
                      Featured
                    </span>
                  </div>
                </div>
                <h1 className="mt-6 text-2xl font-medium leading-tight tracking-tight text-white transition-colors group-hover:text-[#9ea7ff] sm:text-3xl md:text-4xl">
                  {featured.title}
                </h1>
              </Link>
              <div>
                <Link
                  href={featured.href}
                  className="flex w-fit items-center text-sm font-medium text-[#9ea7ff] transition-colors hover:text-[#b5bcff]"
                >
                  Continue Reading{" "}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-5 pt-2 lg:w-5/12">
              <h2 className="mb-1 text-lg font-medium text-slate-300 hero-stagger">On this page</h2>
              <div className="flex flex-col gap-6">
                {heroSideList.map((post, idx) => {
                  const thumbSrc = imgbbDisplaySrc(post.image);
                  const thumbUnopt = thumbSrc.startsWith("/api/");
                  return (
                    <Link
                      href={post.href}
                      key={`${post.href}-${idx}`}
                      className="group hero-stagger flex cursor-pointer items-center gap-4"
                    >
                      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[16px] bg-slate-800 sm:h-24 sm:w-24">
                        <Image
                          src={thumbSrc}
                          alt={post.title}
                          fill
                          sizes="96px"
                          quality={70}
                          unoptimized={thumbUnopt}
                          loading="lazy"
                          fetchPriority="low"
                          priority={false}
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h3 className="line-clamp-2 text-[15px] font-medium leading-snug text-white transition-colors group-hover:text-[#9ea7ff] sm:text-[16px]">
                          {post.title}
                        </h3>
                        <div className="mt-2 flex items-center text-[13px] font-medium text-slate-400 transition-colors group-hover:text-slate-300">
                          Read{" "}
                          <span className="ml-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2">
                            &rarr;
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <p className="py-12 text-center text-slate-400">
            No articles match this filter. Try &quot;All&quot; or another topic.
           For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-birmingham" className="font-medium text-emerald-600 hover:underline">clinics in Birmingham</Link>.</p>
        )}
      </section>

      <section
        ref={articlesRef}
        className="min-h-screen rounded-t-[40px] bg-white px-4 py-16 text-slate-900 sm:px-8 md:px-12"
      >
        <div className="mx-auto max-w-screen-2xl">
          <div className="articles-header -mt-2 mb-10" role="toolbar" aria-label="Filter articles by topic">
            <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">Topics For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-manchester" className="font-medium text-emerald-600 hover:underline">treatment in Manchester</Link>.</p>
            <TopicFilterLinks activeTopic={activeTopic} />
          </div>

          <div className="articles-header relative z-20 mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-3 text-3xl font-medium">Articles</h2>
            </div>

            <div className="relative">
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex w-40 items-center justify-between rounded-lg border border-transparent bg-slate-100 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm transition-colors hover:bg-slate-200"
              >
                {sortMethod}
                <ChevronDown className="h-4 w-4 text-slate-500" />
              </button>

              {dropdownOpen ? (
                <div className="absolute right-0 z-30 mt-2 flex w-40 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
                  {["Date Asc", "Date Desc", "Title Asc", "Title Desc"].map((option) => (
                    <button
                      key={option}
                      type="button"
                      className={`px-4 py-2.5 text-left text-sm transition-colors hover:bg-slate-50 ${
                        sortMethod === option
                          ? "bg-[#3562ff] text-white hover:bg-[#3562ff]"
                          : "text-slate-700"
                      }`}
                      onClick={() => {
                        setSortMethod(option);
                        setDropdownOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {gridArticles.length === 0 ? (
              <p className="col-span-full py-12 text-center text-[15px] text-slate-500">
                No more cards on this page slice, or empty page.
              </p>
            ) : null}
            {gridArticles.map((article, index) => {
              const cardSrc = imgbbDisplaySrc(article.image);
              const cardUnopt = cardSrc.startsWith("/api/");
              return (
                <Link
                  href={article.href}
                  key={`${article.href}-${index}`}
                  className="article-card group flex h-full cursor-pointer flex-col"
                >
                  <div className="relative mb-4 aspect-[3/2] w-full shrink-0 overflow-hidden rounded-[20px] bg-slate-100 sm:aspect-[16/9]">
                    <Image
                      src={cardSrc}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={70}
                      unoptimized={cardUnopt}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                      priority={false}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col pl-1 pr-2">
                    <h3 className="mb-2 text-lg font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[#3562ff] sm:text-[20px]">
                      {article.title}
                    </h3>
                    {article.description ? (
                      <p className="mb-5 line-clamp-3 flex-1 text-[15px] leading-relaxed text-slate-500">
                        {article.description}
                       For more context, explore our resources on <Link href="/mounjaro-price-comparison" className="font-medium text-emerald-600 hover:underline">Mounjaro price comparison</Link>.</p>
                    ) : null}
                    <div className="mt-auto flex items-center text-[15px] font-semibold text-[#3562ff] transition-colors group-hover:text-[#1e3bb3]">
                      Read more{" "}
                      <span className="ml-1.5 transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {totalPages > 1 ? (
            <>
              <div
                className="mt-14 border-t border-slate-100 pt-10"
                role="toolbar"
                aria-label="Filter articles by topic (repeat)"
              >
                <p className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-400">Topics For more context, explore our resources on <Link href="/blog/best-weight-loss-treatment-in-london" className="font-medium text-emerald-600 hover:underline">treatment in London</Link>.</p>
                <TopicFilterLinks activeTopic={activeTopic} />
              </div>
              <nav className="mt-10 flex flex-wrap justify-center gap-2" aria-label="Blog pagination">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                  <Link
                    key={n}
                    href={pageHref(n, activeTopic)}
                    className={`inline-flex min-h-10 min-w-10 touch-manipulation items-center justify-center rounded-lg px-3 py-2 text-sm ${
                      n === currentPage
                        ? "bg-[#3562ff] text-white"
                        : "border border-slate-200 text-slate-800 hover:bg-slate-50"
                    }`}
                  >
                    {n}
                  </Link>
                ))}
              </nav>
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
}
