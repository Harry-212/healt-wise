import type { ReactNode } from "react";

/**
 * Faster first paint for blog thumbnails: warm connection to ImgBB CDN
 * before `/_next/image` fetches originals.
 */
export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <link rel="preconnect" href="https://i.ibb.co.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://i.ibb.co.com" />
      {children}
    </>
  );
}
