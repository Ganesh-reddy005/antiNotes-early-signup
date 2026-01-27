"use client";
import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset matches the fixed navbar height so content isn't hidden
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div 
      className={`fixed top-0 w-full z-50 flex justify-center transition-all duration-300 ${
        scrolled ? 'pt-4' : 'pt-6'
      }`}
    >
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`
           relative px-4 py-3 flex items-center justify-between transition-all duration-300 border
           ${scrolled
             ? "bg-white/50 backdrop-blur-md border-mistral-navy/10 rounded-full shadow-sm w-auto min-w-[320px] gap-8"
             : "bg-transparent border-transparent w-full max-w-7xl gap-12 rounded-none"
           }
        `}
      >
        {/* LOGO (Scrolls to Top) */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="grid grid-cols-2 gap-0.5">
            <div className="w-1.5 h-1.5 bg-[#0f172a]"></div>
            <div className="w-1.5 h-1.5 bg-[#f97316]"></div>
            <div className="w-1.5 h-1.5 bg-[#94a3b8]"></div>
            <div className="w-1.5 h-1.5 bg-[#fce7f3]"></div>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-mistral-navy">
            AntiNotes<span className="text-mistral-orange">.</span>
          </span>
        </div>

        {/* LINKS (Added 'Roadmap') */}
        <div className={`hidden md:flex items-center gap-6 text-sm font-sans text-mistral-navy/60 font-medium ${scrolled ? '' : 'ml-auto mr-4'}`}>
           {['Demo', 'Features', 'Roadmap', 'FAQ'].map((item) => (
             <button 
               key={item}
               onClick={() => scrollToSection(item.toLowerCase())} 
               className="hover:text-mistral-navy hover:underline decoration-mistral-orange decoration-2 underline-offset-4 transition-all"
             >
               {item}
             </button>
           ))}
        </div>

        {/* CTA BUTTON */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="px-5 py-2 bg-mistral-navy text-white text-xs font-mono border border-mistral-navy hover:bg-transparent hover:text-mistral-navy transition-all shadow-[2px_2px_0px_0px_rgba(15,23,42,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
        >
          Get_Access
        </button>
      </motion.nav>
    </div>
  );
}