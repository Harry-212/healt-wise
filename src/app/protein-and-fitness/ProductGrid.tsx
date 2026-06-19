"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Check, Clock, Copy, Flame, Sparkles, Ticket } from "lucide-react";

import blackEdition from "../../../public/BlackEdition_NEW.png";
import blackEditionHover from "../../../public/FeatureProductImg_BlackEdition_Hover-removebg-preview.png";
import drinkProtein from "../../../public/huel-protein-shake.png";
import drinkProteinHover from "../../../public/drink-protein-hover-removebg.png";
import starterPack from "../../../public/starter-pack.png";
import lightLean from "../../../public/light.png";
import completeProtein from "../../../public/FeatureProductImg_CompleteProtein.png";
import barFront from "../../../public/bar-front.png";
import barHover from "../../../public/FeatureProductImg_Bars_Hover.png";
import liteRtdFront from "../../../public/rtdlited-front.png";
import liteRtdHover from "../../../public/RTDLite_hover-over-hovering.png";
import highProteinBundle from "../../../public/UK-high-protein-bundle-10serve.png";
import beRamenFront from "../../../public/BE_Katsu_Curry_front.png";
import beRamenHover from "../../../public/BE_Ramen_Hover-Over.png";

type Product = {
  id: string;
  badge?: string;
  badgeTone?: "bestseller" | "new" | "soon";
  name: string;
  description: string;
  specs: string[];
  price: string;
  pricePer?: string;
  image: StaticImageData;
  hoverImage?: StaticImageData;
  buyHref: string;
  discountCode: string;
};

const PRODUCTS: Product[] = [
  {
    id: "black-edition",
    badge: "Bestseller",
    badgeTone: "bestseller",
    name: "Black Edition",
    description: "Complete high-protein powder meal",
    specs: ["40g protein", "400 kcal per meal"],
    price: "From £30.50",
    pricePer: "£1.79 per meal",
    image: blackEdition,
    hoverImage: blackEditionHover,
    buyHref: "https://uk.huel.com/products/huel-black-edition",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "black-edition-ready-to-drink",
    badge: "New flavour",
    badgeTone: "new",
    name: "Black Edition Ready-to-drink",
    description: "High-protein meal shakes",
    specs: ["35g protein", "400 kcal per bottle"],
    price: "From £41",
    pricePer: "£3.42 per bottle",
    image: drinkProtein,
    hoverImage: drinkProteinHover,
    buyHref: "https://uk.huel.com/products/huel-black-edition-ready-to-drink",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "high-protein-starter-kit",
    name: "High-Protein Starter Kit",
    description: "Protein that fits your day",
    specs: [
      "The best of our highest protein products",
      "Free T-shirt and shaker",
    ],
    price: "From £40.35",
    image: starterPack,
    buyHref: "https://uk.huel.com/products/high-protein-starter-kit",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "light-lean-bundle",
    name: "Light & Lean Bundle",
    description: "Lighter meals that still satisfy",
    specs: ["Our lighter ready-to-go products", "Free T-shirt and shaker"],
    price: "From £39.50",
    image: lightLean,
    buyHref: "https://uk.huel.com/products/light-lean-bundle",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "complete-protein",
    name: "Complete Protein",
    description: "Complete protein powder",
    specs: ["20g protein", "105 kcal per serve"],
    price: "From £22.50",
    pricePer: "£0.87 per serving",
    image: completeProtein,
    hoverImage: blackEditionHover,
    buyHref: "https://uk.huel.com/products/huel-complete-protein",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "complete-nutrition-bar",
    name: "Complete Nutrition Bar",
    description: "Complete protein bar",
    specs: ["Up to 15g protein", "Up to 210 kcal per bar"],
    price: "From £27.50",
    pricePer: "£2.29 per bar",
    image: barFront,
    hoverImage: barHover,
    buyHref: "https://uk.huel.com/products/huel-bar",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "lite-ready-to-drink",
    badge: "New flavours",
    badgeTone: "new",
    name: "Lite Ready-to-drink",
    description: "The 190-calorie meal shake",
    specs: ["25g protein", "190 kcal per bottle"],
    price: "From £39",
    pricePer: "£3.25 per bottle",
    image: liteRtdFront,
    hoverImage: liteRtdHover,
    buyHref: "https://uk.huel.com/products/huel-lite-ready-to-drink",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "high-protein-bundle",
    name: "High-Protein Bundle",
    description: "Our ultimate high-protein products",
    specs: ["Our highest-protein meals", "Free T-shirt and shaker"],
    price: "From £73",
    image: highProteinBundle,
    buyHref: "https://uk.huel.com/products/huel-high-protein-bundle",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "black-edition-ramen",
    badge: "Coming soon",
    badgeTone: "soon",
    name: "Huel Black Edition Ramen",
    description: "The high-protein instant ramen pot",
    specs: ["40g protein", "360 kcal per meal"],
    price: "From £20.70",
    pricePer: "£3.45 per pot",
    image: beRamenFront,
    hoverImage: beRamenHover,
    buyHref: "https://uk.huel.com/products/hot-and-savoury-black-edition-ramen",
    discountCode: "HEALTHWISE360",
  },
];

export default function ProductGrid() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Clipboard unavailable; silently ignore.
    }
  };

  return (
    <section className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
          {PRODUCTS.map((product) => {
            const copied = copiedId === product.id;
            return (
              <div
                key={product.id}
                className="group flex flex-col rounded-2xl"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#efece4]">
                  {product.badge ? (
                    <span className="absolute left-3 top-3 z-10 inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur-sm sm:text-xs">
                      {product.badgeTone === "new" ? (
                        <Sparkles
                          className="h-3.5 w-3.5 text-amber-500"
                          aria-hidden
                        />
                      ) : product.badgeTone === "soon" ? (
                        <Clock
                          className="h-3.5 w-3.5 text-violet-500"
                          aria-hidden
                        />
                      ) : (
                        <Flame
                          className="h-3.5 w-3.5 text-amber-500"
                          aria-hidden
                        />
                      )}
                      {product.badge}
                    </span>
                  ) : null}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1080px) 340px, (min-width: 768px) 33vw, 50vw"
                    className={`object-contain p-5 transition-transform duration-500 group-hover:scale-105 sm:p-6 ${
                      product.hoverImage
                        ? "transition-opacity group-hover:opacity-0"
                        : ""
                    }`}
                  />
                  {product.hoverImage ? (
                    <Image
                      src={product.hoverImage}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1080px) 340px, (min-width: 768px) 33vw, 50vw"
                      aria-hidden
                      className="object-contain p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-6"
                    />
                  ) : null}
                </div>

                <div className="mt-4 flex flex-1 flex-col">
                  <h2 className="text-base font-bold text-slate-900 sm:text-lg">
                    {product.name}
                  </h2>
                  <p className="mt-0.5 text-sm text-slate-600">
                    {product.description}
                  </p>

                  <ul className="mt-3 space-y-1 border-t border-slate-200/80 pt-3 text-sm text-slate-600">
                    {product.specs.map((spec) => (
                      <li key={spec} className="flex items-center gap-2">
                        <Check
                          className="h-4 w-4 shrink-0 text-emerald-600"
                          aria-hidden
                        />
                        {spec}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-3 text-sm text-slate-900">
                    <span className="font-bold">{product.price}</span>
                    {product.pricePer ? (
                      <span className="text-slate-500"> / {product.pricePer}</span>
                    ) : null}
                  </p>

                  <div className="mt-auto flex items-end gap-2 pt-4">
                    <a
                      href={product.buyHref}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-slate-900 px-3 py-2 text-xs font-bold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.98] sm:px-4 sm:text-sm"
                    >
                      Buy now
                    </a>

                    <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                      <span className="text-[9px] font-semibold uppercase tracking-wide text-amber-700 sm:text-[10px]">
                        Discount code
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(product.id, product.discountCode)}
                        aria-label={`Copy discount code ${product.discountCode}`}
                        title={`Discount code: ${product.discountCode}`}
                        className="group/code relative inline-flex w-full min-w-0 cursor-pointer items-center justify-center gap-1 rounded-full border-2 border-dashed border-amber-400 bg-amber-50 px-1.5 py-2 text-amber-900 shadow-sm ring-1 ring-amber-200/70 transition hover:border-amber-500 hover:bg-amber-100 active:scale-[0.99] sm:px-2.5"
                      >
                        <span
                          className={`pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-emerald-600 px-2 py-1 text-[11px] font-semibold text-white shadow-md transition-opacity duration-200 ${
                            copied ? "opacity-100" : "opacity-0"
                          }`}
                          aria-hidden
                        >
                          Code copied!
                        </span>
                        <Ticket
                          className="h-3 w-3 shrink-0 text-amber-600 sm:h-3.5 sm:w-3.5"
                          aria-hidden
                        />
                        <span className="whitespace-nowrap text-[9px] font-extrabold leading-none tracking-tight sm:text-xs sm:tracking-wide">
                          {product.discountCode}
                        </span>
                        {copied ? (
                          <Check
                            className="hidden h-3.5 w-3.5 shrink-0 text-emerald-600 sm:block"
                            aria-hidden
                          />
                        ) : (
                          <Copy
                            className="hidden h-3.5 w-3.5 shrink-0 text-amber-700 sm:block"
                            aria-hidden
                          />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
