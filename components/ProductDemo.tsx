"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  MessageSquare, 
  BarChart3, 
  Play, 
  CheckCircle2, 
  AlertTriangle, 
  BookOpen,
  ArrowUpRight,
  XCircle,
  User,
  History,
  BrainCircuit,
  TrendingUp,
  TrendingDown,
  Calendar,
  Zap,
  Target
} from "lucide-react";

export default function ProductDemo() {
  const [activeTab, setActiveTab] = useState<"ide" | "agent" | "stats">("ide");

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 bg-gray-50/50 border-y border-gray-100">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="font-serif text-4xl text-gray-900 mb-4">
          The <span className="text-indigo-600 italic">Antinotes</span> Workflow
        </h2>
        <p className="font-sans text-gray-500">
          See how our Multi-Agent System personalizes your learning.
        </p>
      </div>

      {/* The "App" Container */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl shadow-gray-200 overflow-hidden border border-gray-200 flex flex-col md:flex-row h-[700px]">
        
        {/* --- SIDEBAR NAVIGATION --- */}
        <div className="w-full md:w-64 bg-gray-50 border-r border-gray-100 flex flex-col p-4 gap-2">
          {/* Window Controls */}
          <div className="flex gap-2 mb-8 px-2">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <div className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>

          <button 
            onClick={() => setActiveTab("ide")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "ide" ? "bg-white shadow-sm text-indigo-600" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <Code2 className="w-4 h-4" />
            1. The Problem
          </button>
          
          <button 
            onClick={() => setActiveTab("agent")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "agent" ? "bg-white shadow-sm text-indigo-600" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <BrainCircuit className="w-4 h-4" />
            2. AI Agent Review
          </button>

          <button 
            onClick={() => setActiveTab("stats")}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
              activeTab === "stats" ? "bg-white shadow-sm text-indigo-600" : "text-gray-500 hover:bg-gray-100"
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            3. Growth Data
          </button>
        </div>

        {/* --- MAIN CONTENT AREA --- */}
        <div className="flex-1 relative bg-white font-mono text-sm overflow-hidden">
          <AnimatePresence mode="wait">
            
            {/* VIEW 1: THE IDE */}
            {activeTab === "ide" && (
              <motion.div 
                key="ide"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0 flex flex-col"
              >
                {/* Top Bar */}
                <div className="h-12 border-b border-gray-100 flex items-center justify-between px-6 bg-white">
                  <span className="text-gray-500">Problem: <b>Invert Binary Tree</b></span>
                  <div 
                    onClick={() => setActiveTab("agent")}
                    className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs cursor-pointer hover:bg-green-100 transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" /> Submit to Agent
                  </div>
                </div>

                <div className="flex-1 flex overflow-hidden">
                  {/* Problem Description */}
                  <div className="w-1/3 border-r border-gray-100 p-6 bg-gray-50/30 prose prose-sm overflow-y-auto">
                    <h4 className="text-gray-900 font-bold mb-4">Description</h4>
                    <p className="text-gray-500 mb-4">Given the root of a binary tree, invert the tree, and return its root.</p>
                    <div className="bg-gray-100 p-2 rounded mb-2 text-xs">Input: root = [4,2,7]</div>
                    <div className="bg-gray-100 p-2 rounded text-xs">Output: [4,7,2]</div>
                  </div>

                  {/* Code Editor */}
                  <div className="flex-1 p-6 bg-[#0d1117] text-gray-300 overflow-y-auto">
                    <div className="flex gap-4 mb-4 text-xs text-gray-500 font-sans">
                      <span className="text-white border-b border-indigo-500">solution.py</span>
                      <span>test_cases.py</span>
                    </div>
                    <code className="block space-y-1">
                      <div className="text-purple-400">class Solution:</div>
                      <div className="pl-4"><span className="text-blue-400">def</span> <span className="text-yellow-200">invertTree</span>(self, root):</div>
                      <div className="pl-8 text-gray-500"># TODO: Write your logic here</div>
                      <div className="pl-8"><span className="text-blue-400">if not</span> root:</div>
                      <div className="pl-12"><span className="text-blue-400">return</span> None</div>
                      <div className="pl-8">root.left, root.right = root.right, root.left</div>
                      <div className="pl-8"><span className="text-blue-400">self</span>.invertTree(root.left)</div>
                      <div className="pl-8"><span className="text-blue-400">self</span>.invertTree(root.right)</div>
                      <div className="pl-8"><span className="text-blue-400">return</span> root</div>
                    </code>
                  </div>
                </div>
              </motion.div>
            )}

            {/* VIEW 2: THE AGENT REVIEW */}
            {activeTab === "agent" && (
              <motion.div 
                key="agent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0 bg-white flex flex-col overflow-y-auto"
              >
                 {/* AGENT HEADER */}
                 <div className="bg-slate-900 p-4 border-b border-gray-800 text-white">
                    <div className="flex items-center gap-4 text-xs font-mono opacity-80 mb-2">
                        <span className="flex items-center gap-1 text-blue-300"><User className="w-3 h-3" /> PROFILE AGENT: ACTIVE</span>
                        <span className="text-gray-600">|</span>
                        <span className="flex items-center gap-1 text-purple-300"><History className="w-3 h-3" /> BACKGROUND AGENT: LOADED</span>
                    </div>
                    <div className="flex justify-between items-end">
                         <div>
                            <h3 className="text-lg font-serif">Reviewer Agent Analysis</h3>
                            <p className="text-xs text-gray-400">Context: Student • Visual Learner • Weakness: Recursion</p>
                         </div>
                         <div className="text-right">
                             <span className="text-2xl font-bold text-green-400">85/100</span>
                             <p className="text-[10px] text-gray-500 uppercase tracking-wider">Logic Score</p>
                         </div>
                    </div>
                 </div>

                 <div className="p-8 space-y-6">
                    {/* BACKGROUND INSIGHT */}
                    <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 flex gap-3 items-start">
                        <BrainCircuit className="w-5 h-5 text-indigo-600 mt-1 shrink-0" />
                        <div>
                            <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider mb-1">Background Agent Insight</h4>
                            <p className="text-sm text-indigo-800 leading-snug">
                                "Compared to your last submission on 'Tree Traversal', your understanding of <b>Recursion Base Cases</b> has improved significantly. You avoided the infinite loop error from last week."
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-100 my-4" />

                    {/* STRENGTHS */}
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                            <CheckCircle2 className="w-4 h-4 text-green-500" /> What you did well
                        </h4>
                        <div className="bg-white border border-gray-200 rounded-lg p-4 text-sm text-gray-700 shadow-sm">
                            <ul className="space-y-2">
                                <li className="flex gap-2">
                                    <span>•</span>
                                    <span>Correct identification of the <b>Base Case</b> (<code className="text-xs bg-gray-100 px-1 rounded">if not root</code>).</span>
                                </li>
                                <li className="flex gap-2">
                                    <span>•</span>
                                    <span>Clean, Pythonic tuple unpacking for the swap operation.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* ISSUES */}
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                            <XCircle className="w-4 h-4 text-red-500" /> Problems in Code
                        </h4>
                        <div className="bg-red-50 border border-red-100 rounded-lg p-4 text-sm text-gray-700">
                            <ul className="space-y-2">
                                <li className="flex gap-2 items-start">
                                    <span className="mt-1 text-red-400">•</span>
                                    <span><b>Stack Overflow Risk:</b> On extremely deep trees, this recursive approach will hit the recursion limit.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* SUGGESTION */}
                    <div>
                        <h4 className="flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">
                            <ArrowUpRight className="w-4 h-4 text-orange-500" /> Tutor Agent Recommendation
                        </h4>
                        <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 text-sm text-gray-700">
                             <p className="mb-2">Since your profile indicates you are preparing for <b>Production Engineering</b>, you should learn the Iterative approach to handle large-scale data.</p>
                             <div className="text-xs font-mono bg-white p-2 rounded border border-orange-100 text-gray-500">
                                 {`queue = collections.deque([root]) # Use BFS to save stack memory`}
                             </div>
                        </div>
                    </div>

                 </div>
              </motion.div>
            )}

            {/* VIEW 3: GROWTH STATS (UPDATED DASHBOARD) */}
            {activeTab === "stats" && (
              <motion.div 
                key="stats"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="absolute inset-0 bg-white p-8 overflow-y-auto"
              >
                 {/* DASHBOARD HEADER */}
                 <div className="flex justify-between items-end mb-8">
                     <div>
                        <h3 className="font-serif text-2xl text-gray-900">Engineering Profile</h3>
                        <p className="text-xs text-gray-400 font-mono mt-1 uppercase">Generated by Background Agent</p>
                     </div>
                     <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
                        <History className="w-3 h-3" /> Last Updated: Just now
                     </div>
                 </div>

                 {/* TOP METRICS */}
                 <div className="grid grid-cols-3 gap-4 mb-8">
                    {/* Metric 1 */}
                    <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                        <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs uppercase tracking-wider">
                            <Target className="w-3 h-3" /> Logic Elo
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-gray-900">1,450</span>
                            <span className="text-xs text-green-600 font-medium flex items-center mb-1">
                                <TrendingUp className="w-3 h-3 mr-0.5" /> +12
                            </span>
                        </div>
                    </div>
                    {/* Metric 2 */}
                    <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                        <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs uppercase tracking-wider">
                            <Zap className="w-3 h-3" /> Retention Rate
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-gray-900">94%</span>
                            <span className="text-xs text-gray-400 font-medium mb-1">all time</span>
                        </div>
                    </div>
                     {/* Metric 3 */}
                     <div className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                        <div className="flex items-center gap-2 text-gray-500 mb-2 text-xs uppercase tracking-wider">
                            <Calendar className="w-3 h-3" /> Streak
                        </div>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-bold text-gray-900">12</span>
                            <span className="text-xs text-gray-400 font-medium mb-1">days</span>
                        </div>
                    </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     
                     {/* LEFT COLUMN: ADAPTIVE ANALYSIS */}
                     <div className="space-y-6">
                        <h4 className="font-serif text-lg text-gray-900 border-b border-gray-100 pb-2">Adaptive Analysis</h4>
                        
                        {/* Weakness Card */}
                        <div className="group p-5 border border-red-100 bg-red-50/30 rounded-xl hover:border-red-200 transition-colors">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded uppercase">Critical Weakness</span>
                                    <h5 className="font-medium text-red-900 mt-1">Graph Traversal (DFS/BFS)</h5>
                                </div>
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <TrendingDown className="w-4 h-4 text-red-500" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                <b>Why:</b> You struggled with "Cycle Detection" in 3 recent problems. You tend to forget the <code className="bg-white px-1 rounded border border-red-100">visited</code> set logic.
                            </p>
                            <button className="w-full py-2 bg-white border border-red-200 text-red-700 text-xs font-medium rounded-lg hover:bg-red-50 transition-colors">
                                Start Recovery Session (5 Problems)
                            </button>
                        </div>

                        {/* Strength Card */}
                        <div className="p-5 border border-green-100 bg-green-50/30 rounded-xl">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded uppercase">Top Strength</span>
                                    <h5 className="font-medium text-green-900 mt-1">Dynamic Programming (1D)</h5>
                                </div>
                                <div className="p-2 bg-white rounded-lg shadow-sm">
                                    <TrendingUp className="w-4 h-4 text-green-500" />
                                </div>
                            </div>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                <b>Why:</b> Your space complexity has been optimal (O(1)) in the last 4 submissions. You have mastered the "sliding window" pattern.
                            </p>
                        </div>
                     </div>

                     {/* RIGHT COLUMN: REVISION QUEUE */}
                     <div>
                        <h4 className="font-serif text-lg text-gray-900 border-b border-gray-100 pb-2 mb-6">Memory Queue</h4>
                        
                        <div className="space-y-4">
                            {/* Queue Item 1 */}
                            <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">LRU Cache Design</span>
                                    <span className="text-[10px] font-bold text-orange-500 bg-orange-50 px-2 py-1 rounded border border-orange-100">FORGETTING SOON</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-orange-400 w-[20%] rounded-full" />
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono">20% Memory</span>
                                </div>
                            </div>

                            {/* Queue Item 2 */}
                            <div className="p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-700">Merge K Lists</span>
                                    <span className="text-[10px] font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded border border-yellow-100">REVIEW TOMORROW</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-yellow-400 w-[45%] rounded-full" />
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono">45% Memory</span>
                                </div>
                            </div>

                            {/* Queue Item 3 */}
                            <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl opacity-70">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-medium text-gray-500">Trie Implementation</span>
                                    <span className="text-[10px] font-medium text-green-600 bg-green-50 px-2 py-1 rounded border border-green-100">HEALTHY</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-green-500 w-[90%] rounded-full" />
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono">90% Memory</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 p-4 bg-indigo-50 rounded-xl flex gap-3 items-center">
                            <BookOpen className="w-4 h-4 text-indigo-600" />
                            <p className="text-xs text-indigo-800">
                                <b>Tip:</b> Reviewing "LRU Cache" today will boost your retention by 300%.
                            </p>
                        </div>

                     </div>
                 </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}