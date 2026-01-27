"use client";
import React from 'react';

export default function FaqFooter() {
  return (
    <>
      {/* FAQ SECTION */}
      <section className="w-full max-w-3xl mx-auto px-6 py-24 bg-mistral-bg">
        <h2 className="font-serif text-3xl md:text-4xl text-mistral-navy mb-12 text-center">
          Common Questions
        </h2>

        <div className="space-y-12">
          
          {/* Q1: Socratic Method vs ChatGPT */}
          <div className="group">
            <h3 className="font-sans font-medium text-lg text-mistral-navy mb-2 group-hover:text-mistral-orange transition-colors cursor-pointer">
              Why can't I just paste these problems into ChatGPT?
            </h3>
            <p className="font-sans text-mistral-navy/60 leading-relaxed">
              ChatGPT gives you the answer. We give you the question. 
              Our <b>Socratic Engine</b> forces you to derive the logic yourself. Plus, ChatGPT is stateless—it forgets your weak spots. 
              Antinotes runs a <b>Background Agent</b> that remembers your "Logic Elo" and forces reviews exactly when you're about to forget.
            </p>
          </div>

          {/* Q2: Engineering vs Coding */}
          <div className="group">
            <h3 className="font-sans font-medium text-lg text-mistral-navy mb-2 group-hover:text-mistral-orange transition-colors cursor-pointer">
              Is this just a LeetCode wrapper?
            </h3>
            <p className="font-sans text-mistral-navy/60 leading-relaxed">
              No. LeetCode checks <i>if</i> your code works (Test Cases). We check <i>how</i> you think (Engineering Standards). 
              Our <b>Reviewer Agent</b> analyzes variable naming, modularity, and trade-offs. We are building Engineers, not competitive programmers.
            </p>
          </div>

          {/* Q3: Career & Projects */}
          <div className="group">
            <h3 className="font-sans font-medium text-lg text-mistral-navy mb-2 group-hover:text-mistral-orange transition-colors cursor-pointer">
              Does this help with Placements?
            </h3>
            <p className="font-sans text-mistral-navy/60 leading-relaxed">
              Directly. V1 builds your Logic Intuition (the Technical Interview). 
              V3 (coming 2027) focuses on <b>Real World Projects</b> and Resume crafting. 
              We don't just teach you to code; we provide the complete architectural guidance to get you hired.
            </p>
          </div>

           {/* Q4: Access */}
           <div className="group">
            <h3 className="font-sans font-medium text-lg text-mistral-navy mb-2 group-hover:text-mistral-orange transition-colors cursor-pointer">
              When can I get access?
            </h3>
            <p className="font-sans text-mistral-navy/60 leading-relaxed">
              We are currently training the <b>Profile Agent</b> on a small batch of beta users. 
              Join the waitlist today to secure your spot for the public beta next month.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-mistral-navy/5 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <span className="font-serif text-xl font-bold tracking-tight text-mistral-navy">Antinotes.</span>
            <span className="font-mono text-xs text-mistral-navy/40 mt-2">© 2026 Antinotes Inc.</span>
          </div>

          {/* Tagline */}
          <p className="font-serif text-lg text-mistral-navy/80 italic text-center md:text-left">
            Built by engineers who hated <span className="line-through decoration-mistral-orange decoration-2 text-mistral-navy/40">memorization</span>.
          </p>

          {/* Social Links */}
          <div className="flex gap-6 font-mono text-xs text-mistral-navy/60 uppercase tracking-widest">
            <a 
              href="https://www.linkedin.com/in/ganesh-reddy-23724b296/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-mistral-orange transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:b.ganesh.reddy.05@gmail.com" 
              className="hover:text-mistral-orange transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}