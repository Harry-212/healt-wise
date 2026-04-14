"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Moon, Sun, ChevronDown } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ARTICLES = [
  {
    title: "How Does Wegovy Work to Transform Your Weight Journey",
    image: "https://i.ibb.co.com/qYntkdQh/how-does-wegovy-work.png",
    description: "Discover exactly how the Wegovy weight loss injection works in your body, from mimicking the GLP-1 hormone to reducing appetite and slowing gastric emptying.",
    href: "/blog/how-does-wegovy-work-to-transform-your-weight-journey",
  },
  {
    title: "Mounjaro Dosage for Weight Loss: Facts You Can Trust",
    image: "https://i.ibb.co.com/cSgqJLYC/image.png",
    description: "Learn how Mounjaro dosage works, the stages from 2.5 mg to higher doses, potential side effects, and long-term success strategies.",
    href: "/blog/mounjaro-dosage-for-weight-loss-facts-you-can-trust",
  },
  {
    title: "The Truth About Wegovy Weight Loss Medication Costs in the UK",
    image: "https://i.ibb.co.com/Ndr2MsY9/image.png",
    description: "Discover real UK costs for wegovy weight loss medication, see if you qualify and compare providers today.",
    href: "/blog/the-truth-about-wegovy-weight-loss-medication-costs-in-the-uk",
  },
  {
    title: "Easy-to-Follow Wegovy Injection Instructions You Can Trust",
    image: "https://i.ibb.co.com/TjdVknY/image.png",
    description: "Follow clear wegovy injection instructions to confidently start your UK weight loss journey today.",
    href: "/blog/easy-to-follow-wegovy-injection-instructions-you-can-trust",
  },
  {
    title: "Discover If Mounjaro Is Safe for Weight Loss and Right for You",
    image: "https://i.ibb.co.com/xqyv8wc3/image.png",
    description: "Wondering is mounjaro safe for weight loss? Get your UK eligibility, cost & provider insights before deciding.",
    href: "/blog/discover-if-mounjaro-is-safe-for-weight-loss-and-right-for-you",
  },
  {
    title: "Does Mounjaro Really Work for Weight Loss? Find Out Here",
    image: "https://i.ibb.co.com/k2NjLMfp/image.png",
    description: "How does Mounjaro work for weight loss? Discover your eligibility, costs and UK providers in one guide.",
    href: "/blog/does-mounjaro-really-work-for-weight-loss-find-out-here",
  }
];

export default function BlogClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortMethod, setSortMethod] = useState("Date Desc");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animation
      const tl = gsap.timeline();
      tl.fromTo(
        ".hero-stagger",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out" }
      );

      // Articles Scroll Animation
      gsap.fromTo(
        ".article-card",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: articlesRef.current,
            start: "top 75%",
          },
        }
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
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full bg-slate-950 font-sans">
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="text-white px-4 pt-10 pb-16 sm:px-8 md:px-12 max-w-screen-xl mx-auto"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Featured */}
          {ARTICLES.length > 0 && (
            <div className="lg:w-7/12 flex flex-col gap-6 hero-stagger">
              <Link href={ARTICLES[0].href} className="group cursor-pointer block relative">
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] lg:aspect-video rounded-[24px] overflow-hidden bg-slate-800">
                  <Image
                    src={ARTICLES[0].image}
                    alt={ARTICLES[0].title}
                    fill
                    unoptimized={ARTICLES[0].image.includes('ibb')}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute top-5 left-5 z-10">
                    <span className="bg-[#c25e42] text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white transition-colors group-hover:text-[#9ea7ff] leading-tight">
                  {ARTICLES[0].title}
                </h1>
              </Link>
              <div>
                <Link
                  href={ARTICLES[0].href}
                  className="text-[#9ea7ff] hover:text-[#b5bcff] text-sm font-medium flex items-center transition-colors w-fit"
                >
                  Continue Reading <span className="ml-1 transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>
          )}

          {/* Right: Most Recent */}
          <div className="lg:w-5/12 flex flex-col gap-5 pt-2">
            <h2 className="text-lg font-medium mb-1 hero-stagger text-slate-300">Most recent</h2>
            <div className="flex flex-col gap-6">
              {ARTICLES.slice(0, 4).map((post, idx) => (
                <Link href={post.href} key={idx} className="group flex gap-4 items-center hero-stagger cursor-pointer">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-[16px] overflow-hidden bg-slate-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      unoptimized={post.image.includes('ibb')}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-[15px] sm:text-[16px] font-medium leading-snug text-white transition-colors group-hover:text-[#9ea7ff] line-clamp-2">
                      {post.title}
                    </h3>
                    <div className="text-slate-400 group-hover:text-slate-300 text-[13px] font-medium mt-2 flex items-center transition-colors">
                      Read <span className="ml-1 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">&rarr;</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES SECTION */}
      <section
        ref={articlesRef}
        className="bg-white text-slate-900 rounded-t-[40px] px-4 sm:px-8 md:px-12 py-16 min-h-screen"
      >
        <div className="max-w-screen-2xl mx-auto">
          {/* Top Bar Navigation */}
          <div className="flex justify-between items-center mb-16 articles-header">
            <Link href="#" className="flex items-center gap-4 text-sm font-medium text-slate-900 hover:opacity-75 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <ArrowLeft className="w-4 h-4" />
              </div>
              Back to News
            </Link>
            
            <div className="flex items-center gap-3">
              <Moon className="w-4 h-4 text-slate-700" />
              <button className="w-12 h-6 bg-slate-100 rounded-full relative shadow-inner flex items-center p-1 transition-colors">
                <div className="w-4 h-4 bg-white shadow rounded-full ml-auto" />
              </button>
              <Sun className="w-4 h-4 text-slate-400" />
            </div>
          </div>

          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 articles-header relative z-20">
            <div>
              <h2 className="text-3xl font-medium mb-3">Articles</h2>
              <p className="text-slate-500 text-[15px]">
                Stay informed with the latest news, views, product releases and more.
              </p>
            </div>
            
            {/* Sort Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-40 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-800 transition-colors border border-transparent shadow-sm"
              >
                {sortMethod}
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden py-1 z-30 flex flex-col">
                  {["Date Asc", "Date Desc", "Title Asc", "Title Desc"].map((option) => (
                    <button
                      key={option}
                      className={`text-left px-4 py-2.5 text-sm hover:bg-slate-50 transition-colors ${sortMethod === option ? 'bg-[#3562ff] text-white hover:bg-[#3562ff]' : 'text-slate-700'}`}
                      onClick={() => {
                        setSortMethod(option);
                        setDropdownOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
            {ARTICLES.map((article, idx) => (
              <Link href={article.href} key={idx} className="group flex flex-col article-card cursor-pointer h-full">
                <div className="relative w-full aspect-[3/2] sm:aspect-[16/9] rounded-[20px] overflow-hidden bg-slate-100 mb-4 shrink-0">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    unoptimized={article.image.includes('ibb')}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 pl-1 pr-2">
                  <h3 className="text-lg sm:text-[20px] font-semibold text-slate-900 transition-colors group-hover:text-[#3562ff] leading-snug mb-2">
                    {article.title}
                  </h3>
                  {article.description && (
                    <p className="text-[15px] leading-relaxed text-slate-500 line-clamp-3 mb-5 flex-1">
                      {article.description}
                    </p>
                  )}
                  <div className="mt-auto text-[#3562ff] font-semibold text-[15px] flex items-center group-hover:text-[#1e3bb3] transition-colors">
                    Read more <span className="ml-1.5 transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
