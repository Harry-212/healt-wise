"use client";

import { useEffect } from "react";
import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";

export default function HeroDemoPage() {
  const mediaType = "video";
  const customMedia = {
    src: "/Woman_comparing_weight.mp4",
    background: "/comparing_weight_loss.png",
    title: "Transformative Weight Loss Journey",
    date: "Your Health First",
    scrollToExpand: "Scroll to Compare Real Results",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const resetEvent = new Event("resetSection");
    window.dispatchEvent(resetEvent);
  }, []);

  return (
    <div className="min-h-screen">
      <ScrollExpandMedia
        mediaType={mediaType}
        mediaSrc={customMedia.src}
        bgImageSrc={customMedia.background}
        title={customMedia.title}
        date={customMedia.date}
        scrollToExpand={customMedia.scrollToExpand}
        textBlend
      >
        <div className="max-w-4xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">
            About Our Approach
          </h2>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            Finding the right weight loss treatment can feel overwhelming. We
            simplify the process by bringing transparency to provider costs,
            maintenance policies, and true stock availability.
          </p>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed">
            With accurate tracking across major UK pharmacies, you can
            confidently compare treatments and jumpstart your wellness journey
            without overpaying for hidden fees.
          </p>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
