/** Long hashed filenames in `public/blog/` — encode for URL-safe paths. */
export const MOUWEG_HERO_WEBP =
  "A-fiTXpbVkmhwjsp3cuYQM2huWvK0viH-ZUgmbJc-LsNznNX-q1CkBk57RiUxF1pPsvAFSANlu82zJ-kBO5FIHP81uSUbMLq_I3_X1zAx6Sc-314jsebYaRMu83aYB-kbliiLmKiLKHXAkYHodC7hi4SBN6LviIgIYE8LTNy9mmGvicH6LlFNjgRq1utPdBf.webp";

export const MOUWEG_INLINE_1_WEBP =
  "fYuxuAbspOApnS1LHBazacgUnpR35FJK3cqsON-ll25LLVgDRjxxDAbgtLRuHke8LvRz-30m9Kpd8v3GtI1Ao-12_QsL_K_w6u2LQ2ra7D3fIBE-sR3sT2IBfgyo0GKjwiTIp2rlDvq1Gy4CmivPohfWTL-0GEbCjjH1iTZhKM58D3T5AfGLSc1nhdiKjNTU.webp";

export const MOUWEG_INLINE_2_WEBP =
  "QWP9lOZAJwSvTeTnOxtizlIsU7neZu-L15o2diw5pozsahJVySrA4aNXBXSfTontROBOdUwkfjPoz-86uDUWxz7k5t2Gs6irg80FENXoKyLQciVwyYf7d50B-e7j9DapXnJqzJuWzjCwS9DmRPxwT0vs91oybHraugjjoJ5W9OOd-MxbhhmCgznadJm3-ERd.webp";

export function blogWebpPath(filename: string): string {
  return `/blog/${encodeURIComponent(filename)}`;
}
