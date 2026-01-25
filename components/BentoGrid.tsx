"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Clock, Zap, Search, Plus, X } from "lucide-react";

// Helper Component for the Cards
const FeatureCard = ({ 
  title, 
  icon, 
  shortDescription, 
  revealDescription, 
  className 
}: { 
  title: string, 
  icon: React.ReactNode, 
  shortDescription: string, 
  revealDescription: string, 
  className?: string 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      layout
      onClick={() => setIsOpen(!isOpen)}
      whileHover={{ y: -5 }}
      className={`relative cursor-pointer group overflow-hidden rounded-3xl border shadow-sm transition-all hover:shadow-md ${
        isOpen ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white border-gray-200 hover:border-indigo-200'
      } ${className}`}
    >
      <AnimatePresence mode="wait">
        
        {/* --- STATE A: CLOSED (Simple & Clean) --- */}
        {!isOpen ? (
          <motion.div 
            key="closed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full flex flex-col justify-between p-8"
          >
            <div className="relative z-10">
              <div className="p-3 w-fit rounded-xl bg-indigo-50 text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                {icon}
              </div>
              <h3 className="font-serif text-2xl text-gray-900 mb-3">{title}</h3>
              <p className="font-sans text-gray-500 leading-relaxed">
                {shortDescription}
              </p>
            </div>
            
            {/* "Click me" indicator */}
            <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-widest mt-4">
              <Plus className="w-3 h-3" />
              <span>Reveal Details</span>
            </div>
          </motion.div>
        ) : (
          
          /* --- STATE B: REVEALED (Detailed & Dark) --- */
          <motion.div 
            key="open"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="h-full flex flex-col justify-between p-8 relative z-20"
          >
            <div>
               <div className="flex justify-between items-start mb-6">
                 <div className="p-3 w-fit rounded-xl bg-white/10 text-white">
                  {icon}
                 </div>
                 <X className="w-5 h-5 text-white/50 hover:text-white transition-colors" />
               </div>
               
               <h3 className="font-serif text-2xl text-white mb-4">How it works</h3>
               <p className="font-sans text-indigo-100 leading-relaxed text-lg">
                 {revealDescription}
               </p>
            </div>
            
             <div className="w-full h-1 bg-white/20 rounded-full mt-6">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-white rounded-full"
                />
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};


export default function BentoGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900">
          Engineered for <span className="italic text-indigo-600">Retention</span>.
        </h2>
        <p className="font-sans text-gray-500 max-w-2xl mx-auto text-lg">
          Click any card to see how the engine actually works.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
        
        {/* Card 1: Adaptive Engine (Wide) */}
        <FeatureCard 
          className="md:col-span-2"
          title="Adaptive Difficulty"
          icon={<Brain className="w-6 h-6" />}
          shortDescription="The AI scans your logic in real-time. Struggling with Recursion? It builds a custom micro-curriculum to fix that specific gap."
          revealDescription="We use a Knowledge Graph to map 450+ DSA concepts. If you fail a 'Tree' problem, we don't just give you the answer. We dynamically queue up 3 prerequisite 'Linked List' problems to fix your foundational gap first."
        />

        {/* Card 2: Spaced Repetition (Tall) */}
        <FeatureCard 
          className="md:row-span-2"
          title="Spaced Repetition"
          icon={<Clock className="w-6 h-6" />}
          shortDescription="We track exactly when your memory fades. The system resurfaces patterns right before you forget them."
          revealDescription="Based on the Ebbinghaus Forgetting Curve, our algorithm calculates the 'Half-Life' of every problem you solve. If you solved 'LRU Cache' today, we will force a review in 3 days, then 7 days, then 30 days—ensuring it sticks for the interview."
        />

        {/* Card 3: Logic Score */}
        <FeatureCard 
          title="Logic Score"
          icon={<Zap className="w-6 h-6" />}
          shortDescription="We don't grade syntax. We grade efficiency, readability, and edge-case handling."
          revealDescription="Your code is run against 50+ hidden test cases and analyzed by an LLM for 'Clean Code' principles. You get a breakdown: 90% for Time Complexity, but only 40% for Variable Naming."
        />

        {/* Card 4: Why Engine */}
        <FeatureCard 
          title="The 'Why' Engine"
          icon={<Search className="w-6 h-6" />}
          shortDescription="Deep-dive explanations connecting code to real engineering."
          revealDescription="Stop treating code like abstract math. We explain that a 'Queue' isn't just a list—it's how Kafka handles millions of messages in a distributed system. We bridge theory to production."
        />

      </div>
    </section>
  );
}