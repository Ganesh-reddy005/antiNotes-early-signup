"use client";
import React from 'react';
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Comparison() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h3 className="font-serif text-3xl text-gray-900">The "Tutorial Hell" Loop</h3>
        <ul className="space-y-4 font-sans text-gray-500">
          <li className="flex items-start gap-3">
            <span className="text-gray-300">01.</span>
            <p>You memorize the solution to pass the test.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-300">02.</span>
            <p>You forget the logic 2 days later.</p>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-gray-300">03.</span>
            <p>The interviewer changes one constraint, and you panic.</p>
          </li>
        </ul>
      </div>

      <motion.div 
        whileHover={{ y: -5 }}
        className="relative bg-white p-6 md:p-8 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
      >
        <div className="absolute -top-3 -right-3 bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wider">
          LIVE AGENT
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-700 font-sans leading-relaxed">
              "Your Hash Map solution is <span className="font-mono text-xs bg-gray-200 px-1 rounded">O(n)</span>, which is correct. But <b>why</b> did you choose a Map over a Set here?"
            </div>
          </div>
          
          <div className="flex items-start gap-3 justify-end">
            <div className="bg-indigo-50 p-4 rounded-2xl rounded-tr-none text-sm text-indigo-900 font-sans border border-indigo-100 leading-relaxed">
              Because we need to store the index of the complement?
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs shrink-0 font-bold">ME</div>
          </div>

           <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="bg-gray-50 p-4 rounded-2xl rounded-tl-none text-sm text-gray-700 font-sans leading-relaxed">
              "Exactly. You just derived the trade-off between Space and Time complexity. <span className="text-emerald-600 font-medium">+10 Logic Points</span>"
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}