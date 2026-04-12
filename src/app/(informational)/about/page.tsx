import type { Metadata } from "next";
import AboutScrollyClient from "./AboutScrollyClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "How Health Wise helps UK patients compare GLP-1 treatments with independent, safety-first editorial and transparent methodology.",
};

export default function AboutPage() {
  return <AboutScrollyClient />;
}
