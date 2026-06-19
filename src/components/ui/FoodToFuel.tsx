import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import moreProtein from "../../../public/more-protein-huel.avif";
import eatHealthy from "../../../public/eat-healthy-huel.avif";
import manageWeight from "../../../public/manage-weight-huel.avif";
import saveTime from "../../../public/save-time-huel.avif";

const CARDS = [
  { title: "Extra Protein", image: moreProtein, href: "/protein-and-fitness" },
  { title: "Eat Healthier", image: eatHealthy, href: undefined },
  { title: "Support Weight Management", image: manageWeight, href: undefined },
  { title: "Time Saver", image: saveTime, href: undefined },
] as const;

export default function FoodToFuel() {
  return (
    <section className="w-full bg-white px-4 py-5 sm:px-6 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[820px]">
        <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          Food to <span className="italic">fuel</span> your goals
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:grid-cols-4 sm:gap-3">
          {CARDS.map((card) => {
            const inner = (
              <>
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 640px) 180px, 45vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"
                  aria-hidden
                />
                <h3 className="absolute left-2.5 top-2.5 text-xs font-bold text-white drop-shadow-sm sm:text-sm">
                  {card.title}
                </h3>
                <span
                  className="absolute bottom-2.5 left-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden
                >
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
              </>
            );

            const className =
              "group relative aspect-square overflow-hidden rounded-xl";

            return card.href ? (
              <Link key={card.title} href={card.href} className={className}>
                {inner}
              </Link>
            ) : (
              <div key={card.title} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
