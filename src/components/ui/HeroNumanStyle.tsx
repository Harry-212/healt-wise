import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroNumanStyle() {
  return (
    <section className="relative w-full max-w-full overflow-x-hidden overflow-y-visible bg-[#f4f7f5] pt-16 pb-12 md:pt-20 md:pb-16 lg:pt-24 lg:pb-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/comparing_weight_loss.jpeg"
          alt="Couple discussing weight loss treatments"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:object-[center_top] md:object-[center_15%]"
        />
        {/* Hapus background hitam/putih overlay sama sekali */}
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          {/* Left Content — lebar agar judul max ~3 baris */}
          <div className="w-full min-w-0 lg:w-[58%] lg:max-w-none lg:pb-8">
            <div className="relative w-full max-w-[min(100%,44rem)] rounded-2xl bg-linear-to-br from-white/92 via-white/72 to-white/25 px-4 py-5 shadow-sm ring-1 ring-white/60 backdrop-blur-[2px] sm:px-6 sm:py-6 lg:max-w-[min(100%,52rem)] xl:max-w-[56rem]">
              {/* Judul Hitam Pekat — maksimal 3 baris */}
              <h1 className="text-[1.65rem] font-black uppercase leading-[1.02] tracking-tight text-slate-950 sm:text-3xl md:text-4xl md:leading-[1.05] lg:text-[3.35rem] lg:leading-[1.02] xl:text-[3.65rem]">
                Compare Weight-Loss Treatments
                <br />
                Prices UK
                <br />
                Safely
              </h1>
              {/* Sub-headline Hitam Tipis */}
              <p className="mt-4 max-w-2xl text-base font-normal text-slate-800 md:text-lg">
                Independent UK comparison for GLP-1 prices, safety, and support.
              </p>
            </div>

            <div className="mt-5 flex sm:mt-6">
              <Link
                href="#compare-preview"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-brand-cta px-6 py-3 text-base font-bold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-105 hover:shadow-amber-500/20 active:scale-95"
              >
                <span>Compare</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right/Bottom Cards: Diperkecil & disejajarkan 3 kolom ke kanan */}
          <div className="w-full lg:w-[42%]">
            {/* Grid 3 Kolom untuk 3 Kartu */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
              {/* Card 1: Wegovy */}
              <Link
                href="/compare/wegovy-vs-mounjaro"
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white/95 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl lg:-translate-y-2"
              >
                <div className="z-10">
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">Wegovy®</h3>
                  <p className="mt-0.5 text-[9px] font-medium text-slate-500 sm:text-[10px]">
                    Semaglutide
                  </p>
                </div>
                
                {/* Simulated product image representation */}
                <div className="relative mt-3 h-12 w-full transition-transform duration-500 group-hover:scale-105 sm:h-14">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-6 w-4/5 rounded bg-gradient-to-br from-teal-50 to-teal-100/50 border border-teal-100 shadow-sm flex items-center justify-start px-1.5 sm:h-8 sm:px-2">
                       <div className="h-1 w-4 rounded-full bg-teal-500/20 sm:h-1.5 sm:w-6" />
                    </div>
                    <div className="absolute -right-1 top-1/2 h-8 w-2 -translate-y-1/2 rotate-12 rounded-full border border-teal-100 bg-white shadow-sm sm:h-10 sm:w-2.5" />
                  </div>
                </div>

                <div className="mt-2 flex items-center text-slate-900">
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
                </div>
              </Link>

              {/* Card 2: Mounjaro */}
              <Link
                href="/mounjaro-price-comparison"
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white/95 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl lg:translate-y-2"
              >
                <div className="z-10">
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">Mounjaro®</h3>
                  <p className="mt-0.5 text-[9px] font-medium text-slate-500 sm:text-[10px]">
                    Tirzepatide
                  </p>
                </div>
                
                {/* Simulated product image representation */}
                <div className="relative mt-3 h-12 w-full transition-transform duration-500 group-hover:scale-105 sm:h-14">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="h-6 w-4/5 rounded bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-100 shadow-sm flex items-center justify-start px-1.5 sm:h-8 sm:px-2">
                       <div className="h-1 w-4 rounded-full bg-purple-500/20 sm:h-1.5 sm:w-6" />
                    </div>
                    <div className="absolute -right-1 top-1/2 h-8 w-2 -translate-y-1/2 rotate-12 rounded-full border border-purple-100 bg-white shadow-sm sm:h-10 sm:w-2.5" />
                  </div>
                </div>

                <div className="mt-2 flex items-center text-slate-900">
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
                </div>
              </Link>

              {/* Card 3: Saxenda */}
              <Link
                href="/compare/mounjaro-vs-saxenda"
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-white/95 p-2.5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl lg:-translate-y-2"
              >
                <div className="z-10">
                  <h3 className="text-sm font-bold text-slate-900 sm:text-base">Saxenda®</h3>
                  <p className="mt-0.5 text-[9px] font-medium text-slate-500 sm:text-[10px]">
                    Liraglutide
                  </p>
                </div>
                
                {/* Simulated product image representation */}
                <div className="relative mt-3 h-12 w-full transition-transform duration-500 group-hover:scale-105 sm:h-14">
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="h-6 w-4/5 rounded bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-100 shadow-sm flex items-center justify-start px-1.5 sm:h-8 sm:px-2">
                       <div className="h-1 w-4 rounded-full bg-blue-500/20 sm:h-1.5 sm:w-6" />
                    </div>
                    <div className="absolute -right-1 top-1/2 h-8 w-2 -translate-y-1/2 rotate-12 rounded-full border border-blue-100 bg-white shadow-sm sm:h-10 sm:w-2.5" />
                  </div>
                </div>

                <div className="mt-2 flex items-center text-slate-900">
                  <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 sm:h-3.5 sm:w-3.5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
