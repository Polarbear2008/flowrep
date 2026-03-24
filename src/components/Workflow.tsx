'use client';

import { motion, Variants } from 'framer-motion';

export function Workflow() {
  const drawLine: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
  };

  const cardEntrance: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="workflow" className="relative py-24 bg-[#050505] overflow-hidden text-white">
      {/* Decorative Blobs */}
      <div className="absolute top-40 left-10 w-96 h-96 bg-[#4caf50]/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#2e7d32]/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-3 block">The Workflow</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Elevate your routine<br />in seconds</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stop juggling tabs and screenshots. FlowRep turns inspiration into execution with a seamless five-step flow.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative py-10 flex flex-col items-center">
          
          {/* Central spine line - hidden on mobile, visible on lg */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#4caf50]/30 to-transparent -translate-x-1/2"></div>

          {/* Connective Curves */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block z-0 flex justify-center">
            <svg viewBox="0 0 600 1500" className="w-[600px] h-[1500px] opacity-70" preserveAspectRatio="xMidYMid meet" fill="none">
              <defs>
                <linearGradient id="curveGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#4caf50" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#2e7d32" stopOpacity="0.2" />
                </linearGradient>
                <filter id="curveGlow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <motion.path 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={drawLine}
                d="M180,120 C180,180 300,180 300,240 C300,300 420,300 420,340" stroke="url(#curveGrad)" strokeWidth="3" filter="url(#curveGlow)" />
              
              <motion.path 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={drawLine}
                d="M420,520 C420,580 300,580 300,640 C300,700 180,700 180,740" stroke="url(#curveGrad)" strokeWidth="3" filter="url(#curveGlow)" />
              
              <motion.path 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={drawLine}
                d="M180,920 C180,980 300,980 300,1040 C300,1100 420,1100 420,1140" stroke="url(#curveGrad)" strokeWidth="3" filter="url(#curveGlow)" />
              
              <motion.path 
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={drawLine}
                d="M420,1320 C420,1370 300,1370 300,1420" stroke="url(#curveGrad)" strokeWidth="3" filter="url(#curveGlow)" />
            </svg>
          </div>

          <div className="space-y-12 lg:space-y-0 w-full relative z-10">
            {/* Step 01 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardEntrance} className="w-full lg:w-1/2 lg:pr-16 lg:-mt-0 mb-8 self-start">
              <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-colors relative group">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#222] border border-white/10 rounded-xl flex items-center justify-center font-bold text-sm text-gray-300">01</div>
                <div className="w-12 h-12 rounded-xl bg-[#4caf50]/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="3" stroke="#4caf50" strokeWidth="1.5" />
                    <path d="M7 10h6M10 7v6" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Install Extension</h3>
                <p className="text-sm text-gray-400">One-click install to your browser. Seamlessly integrates with your favorite platforms.</p>
              </div>
            </motion.div>

            {/* Step 02 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardEntrance} className="w-full lg:w-1/2 lg:pl-16 lg:-mt-12 ml-auto mb-8 self-end">
              <div className="bg-[#0a0a0a] border border-[#4caf50]/20 rounded-2xl p-6 hover:border-[#4caf50]/50 transition-colors relative group">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white text-black border border-white/10 rounded-xl flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]">02</div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 14 18" fill="none">
                    <path d="M1 1h12v16l-6-4-6 4V1z" stroke="#fff" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Save Workout</h3>
                <p className="text-sm text-gray-400">Clip any YouTube or Instagram workout directly to your library with zero friction.</p>
              </div>
            </motion.div>

            {/* Step 03 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardEntrance} className="w-full lg:w-1/2 lg:pr-16 lg:-mt-12 mb-8 self-start">
              <div className="bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-white/20 transition-colors relative group">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-[#222] border border-white/10 rounded-xl flex items-center justify-center font-bold text-sm text-gray-300">03</div>
                <div className="w-12 h-12 rounded-xl bg-[#4caf50]/10 flex items-center justify-center mb-4">
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="3" width="16" height="15" rx="2" stroke="#4caf50" strokeWidth="1.5" />
                    <path d="M2 7h16" stroke="#4caf50" strokeWidth="1.5" />
                    <path d="M6 1v4M14 1v4" stroke="#4caf50" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Plan Week</h3>
                <p className="text-sm text-gray-400">Drag and drop sessions into your personalized training calendar for total clarity.</p>
              </div>
            </motion.div>

            {/* Step 04 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardEntrance} className="w-full lg:w-1/2 lg:pl-16 lg:-mt-12 ml-auto mb-8 self-end">
              <div className="bg-[#0a0a0a] border border-[#4caf50]/20 rounded-2xl p-6 hover:border-[#4caf50]/50 transition-colors relative group">
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-white text-black border border-white/10 rounded-xl flex items-center justify-center font-bold text-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]">04</div>
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 relative z-10">
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="2" width="16" height="16" rx="2" stroke="#fff" strokeWidth="1.5" />
                    <path d="M5 14l3-4 3 3 4-6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Track Progress</h3>
                <p className="text-sm text-gray-400">Watch your performance peaks with automated, high-fidelity data visualization.</p>
              </div>
            </motion.div>

            {/* Step 05 */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={{ hidden: { opacity: 0, scale: 0.9, y: 30 }, visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } } }} className="w-full lg:w-3/4 mx-auto lg:mt-16 relative z-20">
              <div className="bg-gradient-to-r from-[#1E3B20] to-[#122414] border border-[#4caf50]/50 shadow-[0_0_40px_rgba(76,175,80,0.2)] rounded-3xl p-8 flex flex-col items-center text-center">
                <div className="absolute -top-5 w-12 h-12 bg-gradient-to-br from-[#E8A838] to-[#FFC107] text-[#5c4000] rounded-xl flex items-center justify-center font-bold shadow-lg">05</div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 mt-4">
                  <svg width="32" height="32" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#fff" strokeWidth="2" />
                    <path d="M7 10l2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Share & Inspire</h3>
                <p className="text-gray-300 max-w-sm mb-6">
                  Export your training splits and achievements. Build your fitness community on FlowRep.
                </p>
                <button className="bg-white text-black px-6 py-2.5 rounded-full font-bold hover:bg-gray-200 transition-colors">Start Building Now</button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
