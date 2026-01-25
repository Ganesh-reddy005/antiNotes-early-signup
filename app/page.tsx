"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import BentoGrid from "@/components/BentoGrid";
import Roadmap from "@/components/Roadmap";
import FaqFooter from "@/components/FaqFooter";
import BackgroundGraph from "@/components/BackgroundGraph";
import ProductDemo from "@/components/ProductDemo";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 1. The Dynamic Network Background */}
      <BackgroundGraph />

      {/* 2. A subtle Vignette Overlay (Optional: Focuses eye on center) */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(253,252,248,0.8)_100%)] z-0"></div>

      {/* Content Components */}
      <Navbar />
      <Hero />
      <ProductDemo />
      <Comparison />
      <BentoGrid />
      <Roadmap />
      <FaqFooter />
      
    </main>
  );
}