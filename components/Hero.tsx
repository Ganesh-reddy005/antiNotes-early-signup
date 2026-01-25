"use client";
import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section className="relative w-full max-w-4xl mx-auto pt-24 md:pt-32 pb-20 px-6 text-center">
      
      {/* Background Ambience (Parallax Blobs) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
         <motion.div style={{ y: y1 }} className="absolute top-20 left-[-10%] w-64 h-64 border border-indigo-100/50 rounded-full blur-3xl bg-indigo-50/50" />
         <motion.div style={{ y: y2 }} className="absolute bottom-20 right-[-10%] w-96 h-96 border border-purple-100/50 rounded-full blur-3xl bg-purple-50/50" />
      </div>

      <div className="relative z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
          <span className="text-xs font-mono font-medium text-indigo-900 tracking-wide uppercase">V1: Foundation Level</span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-serif text-5xl md:text-8xl font-medium text-gray-900 leading-[0.95] tracking-tight mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block"
          >
            Logic, not syntax.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block text-gray-400 italic"
          >
            Thinking, not typing.
          </motion.span>
        </h1>

        {/* UPDATED Subheadline (Option 1) */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Your compiler checks your code. <span className="text-black-600 font-medium">We check your thinking</span>.
        </motion.p>

        {/* UPDATED CTA Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input 
            type="email" 
            placeholder="name@gmail.com" 
            className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all font-mono text-sm shadow-sm"
          />
          
            <button className="relative w-full sm:w-auto group overflow-hidden rounded-xl bg-gray-900 px-8 py-3.5 text-white shadow-[0_1px_2px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-gray-800">
            
            {/* The Shimmer Effect (Subtle "Sheen" instead of rainbow) */}
            <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out" />
            
            {/* Button Content */}
            <div className="relative flex items-center justify-center gap-3 font-sans font-medium tracking-wide">
              <Sparkles className="w-3 h-3 text-indigo-400" />
              <span>Request Access</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-gray-400 group-hover:text-white" />
            </div>
          </button>
        </motion.div>

        {/* Social Proof */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-xs font-mono text-gray-400 uppercase tracking-widest"
        >
          Join 400+ Engineers on the Waitlist
        </motion.p>
      </div>
    </section>
  );
}