"use client";
import React, { useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Detect scroll to trigger the "Glossy Capsule" effect
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
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
           relative px-6 py-3 rounded-full flex items-center justify-between transition-all duration-300
           ${scrolled
             ? "bg-white/70 backdrop-blur-xl border border-white/20 shadow-lg shadow-black/5 w-auto min-w-[320px] gap-8"
             : "bg-transparent w-full max-w-7xl gap-12"
           }
        `}
      >
        {/* Logo */}
        <span 
          onClick={() => scrollToSection('hero')}
          className="font-serif text-xl font-bold tracking-tight text-gray-900 cursor-pointer"
        >
          Antinotes.
        </span>

        {/* Links (Hidden on small mobile) */}
        <div className={`hidden md:flex items-center gap-6 text-sm font-sans text-gray-500 font-medium ${scrolled ? '' : 'ml-auto mr-4'}`}>
           <button onClick={() => scrollToSection('demo')} className="hover:text-indigo-600 transition-colors">
             Demo
           </button>
           <button onClick={() => scrollToSection('methodology')} className="hover:text-indigo-600 transition-colors">
             Methodology
           </button>
           <button onClick={() => scrollToSection('features')} className="hover:text-indigo-600 transition-colors">
             Features
           </button>
        </div>

        {/* CTA Button */}
        <button 
          onClick={() => scrollToSection('hero')} 
          className="px-5 py-2 rounded-full bg-gray-900 text-white text-xs font-medium hover:bg-gray-800 transition-all shadow-md active:scale-95"
        >
          Get Early Access
        </button>
      </motion.nav>
    </div>
  );
}