import type { Metadata } from "next";
import BlogClient from "./BlogClient";

export const metadata: Metadata = {
  title: "News & Blog",
  description:
    "Stay informed with the latest news, views, product releases, prices, comparisons, guides, and safety articles.",
};

export default function BlogIndexPage() {
  return <BlogClient />;
}
