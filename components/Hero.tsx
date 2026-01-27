"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Loader2, CheckCircle2, Gift, Mail, ArrowRight } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState("");

  const handleSubscribe = async () => {
    if (!email || status === 'loading') return;
    
    setStatus('loading');
    setMessage("");

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      const data = await res.json();

      if (res.ok) {
        // Wait a tiny bit to show the loading state, then switch
        setTimeout(() => {
            setStatus('success');
            setMessage(data.message || "Access Requested");
            setEmail(""); 
        }, 500);
      } else {
        setStatus('error');
        setMessage(data.error || "Something went wrong");
      }
    } catch (e) {
      setStatus('error');
      setMessage("Connection failed. Try again.");
    }
  };

  return (
    <section className="relative w-full max-w-5xl mx-auto pt-32 pb-24 px-6 text-center">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30 bg-pixel-pattern"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-mistral-yellow via-mistral-orange/20 to-transparent blur-3xl opacity-40 z-0" />

      <div className="relative z-10">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 border border-mistral-navy/10 bg-white mb-8 shadow-[2px_2px_0px_0px_rgba(200,200,200,0.5)]"
        >
          <span className="w-2 h-2 bg-mistral-orange animate-pulse"></span>
          <span className="text-xs font-mono font-medium text-mistral-navy tracking-tight uppercase">v1.0 // public_beta</span>
        </motion.div>

        {/* Headlines */}
        <h1 className="font-serif text-5xl md:text-8xl font-medium text-mistral-navy leading-[0.9] tracking-tight mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="block"
          >
            Logic, <span className="italic text-mistral-orange">not</span> syntax.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="block text-mistral-navy/80"
          >
            Thinking, not typing.
          </motion.span>
        </h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-mistral-navy/60 font-sans max-w-2xl mx-auto leading-relaxed mb-12"
        >
          The first AI tutor that ignores your semicolons and grades your mental models.
          Stop grinding LeetCode blind.
        </motion.p>

        {/* EMAIL INTERACTION AREA */}
        <div className="h-[200px] relative"> {/* Fixed height to prevent layout jumps */}
          <AnimatePresence mode="wait">
            
            {/* STATE 1: THE FORM */}
            {status !== 'success' ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.3 }}
                className="flex flex-col items-center gap-4 max-w-md mx-auto"
              >
                {/* THE OFFER BADGE */}
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-mistral-orange uppercase tracking-widest bg-mistral-orange/5 px-2 py-1 rounded border border-mistral-orange/20 mb-1">
                   <Gift className="w-3 h-3" />
                   Waitlist Offer: 1-Month Pro Free
                </div>

                <div className="flex flex-col sm:flex-row items-center w-full gap-3 relative">
                  <input 
                    type="email" 
                    placeholder="example@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                    className="w-full px-4 py-3.5 bg-white border border-mistral-navy/20 text-mistral-navy placeholder-mistral-navy/30 focus:outline-none focus:border-mistral-navy focus:ring-1 focus:ring-mistral-navy transition-all font-mono text-sm disabled:opacity-50"
                  />
                  
                  <button 
                    onClick={handleSubscribe}
                    disabled={status === 'loading'}
                    className={`
                      relative w-full sm:w-auto min-w-[160px] group overflow-hidden px-6 py-3.5 text-white border transition-all 
                      active:shadow-none active:translate-x-[2px] active:translate-y-[2px] disabled:cursor-not-allowed
                      bg-mistral-navy border-mistral-navy shadow-[4px_4px_0px_0px_#f97316] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#f97316]
                    `}
                  >
                    <div className="relative flex items-center justify-center gap-3 font-mono text-sm font-bold tracking-wide uppercase">
                      {status === 'loading' ? (
                        <Loader2 className="w-4 h-4 animate-spin text-white" />
                      ) : (
                        <>
                          <Terminal className="w-4 h-4 text-mistral-yellow" />
                          <span>Start_Engine</span>
                        </>
                      )}
                    </div>
                  </button>
                </div>
                
                {/* Error Message */}
                {status === 'error' && (
                  <p className="text-xs font-mono font-bold text-red-600 mt-2">
                    {message}
                  </p>
                )}
              </motion.div>

            ) : (
              
             /* STATE 2: THE SUCCESS CARD (Honest Version) */
             <motion.div 
             key="success"
             initial={{ opacity: 0, scale: 0.9, y: 20 }}
             animate={{ opacity: 1, scale: 1, y: 0 }}
             className="max-w-lg mx-auto bg-white border border-emerald-100 p-6 rounded-xl shadow-lg shadow-emerald-500/10 relative overflow-hidden"
           >
             {/* Background Decor */}
             <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-50 rounded-bl-full -z-10" />

             <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-600 shadow-sm">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-2xl text-mistral-navy mb-2">
                  Spot Secured.
                </h3>
                <p className="font-sans text-sm text-mistral-navy/60 leading-relaxed mb-6 max-w-xs mx-auto">
                  Your <b>1-Month Pro Credit</b> has been linked to this email address in our database. We will auto-apply it when your invite arrives.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                   {/* REPLACED "Check Inbox" with "Priority Status" */}
                   <div className="flex items-center gap-2 text-xs font-mono font-bold text-mistral-navy/70 bg-mistral-navy/5 px-3 py-2 rounded border border-mistral-navy/10">
                      <Terminal className="w-3 h-3" /> Status: Priority Queue
                   </div>
                   <div className="flex items-center gap-2 text-xs font-mono font-bold text-mistral-orange bg-mistral-orange/5 px-3 py-2 rounded border border-mistral-orange/10">
                      <Gift className="w-3 h-3" /> Offer Locked
                   </div>
                </div>
             </div>
           </motion.div>

            )}
          </AnimatePresence>
        </div>

        {/* Social Proof (Fades out on success to reduce clutter, or stays) */}
        {status !== 'success' && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1 }}
            className="mt-4 flex flex-col items-center gap-3"
          >
             <p className="text-xs font-mono text-mistral-navy/40 uppercase tracking-widest">
               System Status: 400+ Engineers in Queue
             </p>
          </motion.div>
        )}
        
      </div>
    </section>
  );
}