"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Check, Copy, Flame, Sparkles, Ticket } from "lucide-react";

import blackEdition from "../../../public/BlackEdition_NEW.png";
import blackEditionHover from "../../../public/FeatureProductImg_BlackEdition_Hover-removebg-preview.png";
import dietPowder from "../../../public/Diet_Powder_Render.png";
import liteRtdFront from "../../../public/front.png";
import liteRtdHover from "../../../public/RTDLite_hover-over-image.png";
import liteRamenFront from "../../../public/blog/ramen-1.png";
import liteRamenHover from "../../../public/blog/ramen-2.png";
import lightLean from "../../../public/light.png";
import drinkProtein from "../../../public/huel-protein-shake.png";
import drinkProteinHover from "../../../public/drink-protein-hover-removebg.png";
import hsMealPacks from "../../../public/FeatureProduct_H_S_Mealpacks_Chick_nMushroom.png";
import hsMealPacksHover from "../../../public/H_S_MEALPACK_CHICKEN_MUSHROOM_HOVER_IMAGE.png";
import huelPowder from "../../../public/Powder_20Featured.png";
import hsPotsFront from "../../../public/H_S_Pots_Collection_Default.png";
import hsPotsHover from "../../../public/H_S_Pots_Top_Down_Hover.png";
import rtdFront from "../../../public/FeatureProductImg_RTD_Hover.png";

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
    id: "huel-diet",
    badge: "New",
    badgeTone: "new",
    name: "Diet",
    description: "Nutritionally complete weight loss meal",
    specs: ["20g protein", "200 kcal per meal"],
    price: "From £34",
    pricePer: "£1 per meal",
    image: dietPowder,
    hoverImage: blackEditionHover,
    buyHref: "https://uk.huel.com/products/huel-diet-powder",
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
    id: "lite-ramen",
    badge: "New",
    badgeTone: "new",
    name: "Huel Lite Ramen",
    description: "The lighter calorie instant ramen pot",
    specs: ["25g protein", "Up to 230 kcal per pot"],
    price: "From £18.30",
    pricePer: "£3.05 per pot",
    image: liteRamenFront,
    hoverImage: liteRamenHover,
    buyHref: "https://uk.huel.com/products/hot-and-savoury-lite-ramen",
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
    id: "hot-savoury-meal-packs",
    badge: "Bestseller",
    badgeTone: "bestseller",
    name: "Hot & Savoury Meal Packs",
    description: "Hot & tasty instant meals",
    specs: ["Up to 25g protein", "400 kcal per meal"],
    price: "From £19.60",
    pricePer: "£2.80 per meal",
    image: hsMealPacks,
    hoverImage: hsMealPacksHover,
    buyHref: "https://uk.huel.com/products/hot-and-savoury-meal-packs",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "huel-powder",
    name: "Powder",
    description: "The original complete meal",
    specs: ["30g protein", "400 kcal per meal"],
    price: "From £27",
    pricePer: "£1.59 per meal",
    image: huelPowder,
    hoverImage: blackEditionHover,
    buyHref: "https://uk.huel.com/products/huel",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "hot-savoury-pots",
    name: "Hot & Savoury Pots",
    description: "On-the-go instant meals",
    specs: ["Up to 25g protein", "400 kcal per pot"],
    price: "From £24.40",
    pricePer: "£3.05 per pot",
    image: hsPotsFront,
    hoverImage: hsPotsHover,
    buyHref: "https://uk.huel.com/products/huel-instant-meal-pots",
    discountCode: "HEALTHWISE360",
  },
  {
    id: "ready-to-drink",
    name: "Ready-to-drink",
    description: "On-the-go meal shakes",
    specs: ["Up to 22g protein", "400 kcal per bottle"],
    price: "From £38",
    pricePer: "£3.17 per bottle",
    image: rtdFront,
    hoverImage: rtdFront,
    buyHref: "https://uk.huel.com/products/huel-ready-to-drink",
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
                      alt={`${product.name} — alternate product packaging`}
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
