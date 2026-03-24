'use client';

import { motion } from 'framer-motion';

export function Pricing() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="pricing" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#4caf50] font-bold tracking-widest text-sm uppercase mb-3 block">TRANSPARENT PRICING</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Choose your power level</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Fuel your performance with plans built for every stage of your journey.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* FREE Plan */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-white/20 transition-colors"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-300">FREE</h3>
              <div className="text-gray-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 14 3-11 5 10H8l3 11z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">Essential tools for beginners.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">$0</span><span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Save up to 10 workouts
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Basic performance analytics
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-600 opacity-50">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line></svg>
                Pro Weekly Planner
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-colors">Get Started</button>
          </motion.div>

          {/* PRO Plan */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} transition={{ delay: 0.1 }}
            className="bg-gradient-to-b from-[#1E3B20] to-[#122414] border border-[#4caf50] rounded-3xl p-8 flex flex-col relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(76,175,80,0.2)]"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#4caf50] text-black text-[10px] font-black tracking-widest px-3 py-1 rounded-full">MOST POPULAR</div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-black text-[#4caf50]">PRO</h3>
              <div className="text-[#4caf50]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-6">Unleash your full potential.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">$5.99</span><span className="text-[#81c784]">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Unlimited saved workouts
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Advanced Weekly Planner
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Real-time performance dashboard
              </li>
              <li className="flex items-center gap-3 text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Priority 24/7 expert support
              </li>
            </ul>
            <button className="w-full py-3 rounded-full bg-[#4caf50] text-black font-extrabold hover:bg-[#81c784] transition-colors shadow-lg shadow-[#4caf50]/20">Start 7-Day Free Trial</button>
          </motion.div>

          {/* CREATOR Plan */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={cardVariants} transition={{ delay: 0.2 }}
            className="bg-[#111] border border-white/5 rounded-3xl p-8 flex flex-col hover:border-white/20 transition-colors"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-300">CREATOR</h3>
              <div className="text-gray-400">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 3h12l4 6-10 12L2 9z" /><path d="M11 3 8 9l4 12 4-12-3-6" /><path d="M2 9h20" />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-500 mb-6">Monetize your training routines.</p>
            <div className="mb-8">
              <span className="text-4xl font-extrabold">$12.99</span><span className="text-gray-500">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Everything in Pro plan
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Monetization & Adsense tools
              </li>
              <li className="flex items-center gap-3 text-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4caf50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                Custom white-label pages
              </li>
            </ul>
            <button className="w-full py-3 rounded-full border border-white/20 font-bold hover:bg-white/5 transition-colors">Join Creator Hub</button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
