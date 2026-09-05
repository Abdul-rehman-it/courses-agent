import { Contact } from "@/components/landing/Contact";
import { CourseOverview } from "@/components/landing/CourseOverview";
import { Hero } from "@/components/landing/Hero";
import { WhyLumina } from "@/components/landing/WhyLumina";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main id="main">
        <Hero />
        <CourseOverview />
        <WhyLumina />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
