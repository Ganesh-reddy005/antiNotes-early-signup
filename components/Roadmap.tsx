import React from 'react';
import { Lock } from "lucide-react";

export default function Roadmap() {
  return (
    <section className="w-full border-t border-gray-100 py-20 bg-gray-50/50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-10">The Curriculum</p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {/* Step 1 */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full border-2 border-indigo-600 bg-white flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.2)]">
              <span className="text-indigo-600 font-bold text-lg">01</span>
            </div>
            <span className="font-serif text-lg text-gray-900">DSA Foundation</span>
          </div>

          {/* Connector */}
          <div className="h-10 w-0.5 md:h-0.5 md:w-16 bg-gray-300"></div>

          {/* Step 2 */}
          <div className="flex flex-col items-center gap-3 grayscale opacity-50">
            <div className="w-14 h-14 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <span className="font-serif text-lg text-gray-500">System Design</span>
          </div>

           {/* Connector */}
           <div className="h-10 w-0.5 md:h-0.5 md:w-16 bg-gray-300"></div>

          {/* Step 3 */}
          <div className="flex flex-col items-center gap-3 grayscale opacity-50">
            <div className="w-14 h-14 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <span className="font-serif text-lg text-gray-500">Real World Projects</span>
          </div>
        </div>
      </div>
    </section>
  );
}