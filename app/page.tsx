import Catalog from "./catalog";
import { Navbar } from "@/components/navbar";
import { HeroHeader } from "@/components/hero-header";
import { ComparisonSection } from "@/components/comparison-section";
import { GuideSection } from "@/components/guide-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#f4f6f8] text-[#0c0d0e]">
      <Navbar />

      <main className="mx-auto max-w-[1440px] px-6 pt-12 pb-24 sm:px-10 sm:pt-16 lg:px-14">
        <HeroHeader />
        <Catalog />
        <ComparisonSection />
        <GuideSection />
      </main>

      <Footer />
    </div>
  );
}
