import React from 'react';

export default function FaqFooter() {
  return (
    <>
      {/* FAQ SECTION */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24">
        <h2 className="font-serif text-3xl text-gray-900 mb-12 text-center">
          Common Questions
        </h2>

        <div className="space-y-12">
          
          {/* Q1 */}
          <div className="group">
            <h3 className="font-sans font-medium text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors cursor-pointer">
              Why can't I just paste these problems into ChatGPT?
            </h3>
            <p className="font-sans text-gray-500 leading-relaxed">
              ChatGPT is stateless—it forgets your weaknesses the moment you close the tab. 
              Antinotes runs a <b>Background Agent</b> that remembers every error you've ever made. 
              It tracks your "Logic Elo" and forces you to review specific patterns (like Recursion) exactly when you're about to forget them.
            </p>
          </div>

          {/* Q2 */}
          <div className="group">
            <h3 className="font-sans font-medium text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors cursor-pointer">
              Is this just a LeetCode wrapper?
            </h3>
            <p className="font-sans text-gray-500 leading-relaxed">
              No. LeetCode checks <i>if</i> your code works (Test Cases). We check <i>how</i> you think (Engineering Standards). 
              Our <b>Reviewer Agent</b> analyzes your variable naming, space complexity trade-offs, and modularity—grading you like a Senior Engineer would in a real interview.
            </p>
          </div>

          {/* Q3 */}
          <div className="group">
            <h3 className="font-sans font-medium text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors cursor-pointer">
              I know Python syntax, but I can't solve hard problems. Is this for me?
            </h3>
            <p className="font-sans text-gray-500 leading-relaxed">
              You are exactly who we built this for. We don't teach syntax (loops/arrays). 
              We teach <b>Pattern Recognition</b>. Our <b>Tutor Agent</b> will guide you from "Brute Force" to "Optimized Solution" without giving you the answer, building your intuition for V1 Engineering.
            </p>
          </div>

           {/* Q4 */}
           <div className="group">
            <h3 className="font-sans font-medium text-lg text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors cursor-pointer">
              When can I get access?
            </h3>
            <p className="font-sans text-gray-500 leading-relaxed">
              We are currently training the <b>Profile Agent</b> on a small batch of beta users. 
              Join the waitlist today to secure your spot for the public beta next month.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-gray-100 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-xl font-bold tracking-tight text-black">Antinotes.</span>
            <span className="font-mono text-xs text-black mt-2">© 2026 Antinotes Inc.</span>
          </div>

          {/* Tagline (Updated Style) */}
          <p className="font-serif text-lg text-gray-800 italic text-center md:text-left">
            Built by engineers who hated <span className="line-through decoration-gray-300 decoration-2 text-gray-700">memorization</span>.
          </p>

          {/* Social Links (Updated) */}
          <div className="flex gap-6 font-mono text-xs text-gray-1000 uppercase tracking-widest">
            <a 
              href="https://www.linkedin.com/in/ganesh-reddy-23724b296/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-indigo-600 transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:b.ganesh.reddy.05@gmail.com" 
              className="hover:text-indigo-600 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}