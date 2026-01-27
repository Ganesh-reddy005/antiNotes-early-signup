"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Comparison from "@/components/Comparison";
import BentoGrid from "@/components/BentoGrid";
import Roadmap from "@/components/Roadmap";
import FaqFooter from "@/components/FaqFooter";
import ProductDemo from "@/components/ProductDemo";
import CommunityPulse from "@/components/CommunityPulse";
import BackgroundGraph from "@/components/BackgroundGraph";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center overflow-hidden bg-mistral-bg selection:bg-mistral-orange selection:text-white">
      <BackgroundGraph />
      
      {/* 2. Optional: A subtle gradient overlay to fade the edges */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(252,251,249,0.5)_100%)] z-0"></div>

      {/* 3. CONTENT LAYER (z-10 ensures it sits on top) */}
      <div className="relative z-10 w-full">
      </div>
      {/* 1. Navbar */}
      <Navbar />
      
      {/* 2. Hero (ID: hero) */}
      <section id="hero" className="w-full">
        <Hero />
      </section>

      {/* 3. Demo (ID: demo) */}
      <section id="demo" className="w-full">
        <ProductDemo />
      </section>

      {/* 4. Methodology (ID: methodology) -> Not in navbar, but good for context */}
      <section id="methodology" className="w-full">
        <Comparison />
      </section>

      {/* 5. Features (ID: features) */}
      <section id="features" className="w-full">
        <BentoGrid />
      </section>

      {/* 6. Roadmap (ID: roadmap) */}
      <section id="roadmap" className="w-full">
        <Roadmap />
      </section>

      {/* 7. FAQ (ID: faq) */}
      <section id="faq" className="w-full">
        <FaqFooter />
      </section>
      {/* 8. Community Pulse (ID: community) */}
      <section className="w-full">
        <CommunityPulse />
      </section>
      
    </main>
  );
}