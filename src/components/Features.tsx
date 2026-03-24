'use client';

import { motion } from 'framer-motion';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function Features() {
  return (
    <section id="features" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <span className="text-[#4caf50] font-bold tracking-widest text-sm uppercase mb-3 block">System Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">The FlowRep Ecosystem</h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Card 1: 1-Click Metadata Sync (large left) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="md:col-span-2 md:row-span-2 bg-[#111] border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-[#4caf50]/50 transition-colors flex flex-col justify-between"
          >
            <div className="z-10 relative max-w-sm">
              <div className="w-12 h-12 rounded-full bg-[#4caf50]/20 flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" stroke="#4caf50" strokeWidth="1.5" />
                  <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#4caf50" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">1-Click Metadata Sync</h3>
              <p className="text-gray-400 mb-6">
                Instantly parse workout duration, muscle focus, and equipment requirements from any YouTube URL. No manual entry required.
              </p>
              <a href="#" className="font-semibold text-white flex items-center gap-2 group-hover:text-[#4caf50] transition-colors">
                Learn more
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transform group-hover:translate-x-1 transition-transform">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
            
            {/* Visual Decoration */}
            <div className="absolute right-0 bottom-0 md:-right-10 md:-bottom-10 w-64 h-64 bg-gradient-to-tl from-[#4caf50]/20 to-transparent rounded-full blur-3xl opacity-50"></div>
          </motion.div>

          {/* Card 2: Weekly Architect (accent card) */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.2 } } }}
            className="md:col-span-1 md:row-span-2 bg-gradient-to-br from-[#1a2f1c] to-[#0a120b] border border-[#4caf50]/30 rounded-3xl p-8 relative overflow-hidden flex flex-col"
          >
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="3" width="16" height="15" rx="2" stroke="#fff" strokeWidth="1.5" />
                <path d="M2 7h16" stroke="#fff" strokeWidth="1.5" />
                <path d="M6 1v4M14 1v4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-3">Weekly Architect</h3>
            <p className="text-gray-300 mb-8 flex-grow">
              Drag and drop sessions from your favorite creators into a professional-grade training calendar.
            </p>
            
            <div className="bg-black/40 border border-white/10 rounded-xl p-4 backdrop-blur-sm -mx-2">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[10px] font-bold tracking-widest text-[#4caf50]">TUESDAY</span>
                <span className="bg-white/10 text-xs px-2 py-0.5 rounded text-white font-medium">HIIT</span>
              </div>
              <div className="font-semibold text-sm">Upper Body Shred</div>
            </div>
          </motion.div>

          {/* Card 3: Omni-Channel Metrics */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUpVariant}
            className="md:col-span-1 md:row-span-1 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col justify-between group hover:border-white/20 transition-colors"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Omni-Channel Metrics</h3>
              <p className="text-gray-400 text-sm">
                Track volume and intensity across all your subscribed fitness channels seamlessly.
              </p>
            </div>
            
            {/* Fake Chart */}
            <div className="flex items-end justify-between h-20 mt-6 px-2 gap-2">
              {[40, 60, 45, 80, 50, 65, 30].map((h, i) => (
                <div key={i} className="w-full bg-[#222] rounded-t-sm relative group-hover:bg-[#333] transition-colors">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + (i * 0.1) }}
                    className={`absolute bottom-0 w-full rounded-t-sm ${i === 3 ? 'bg-[#4caf50]' : 'bg-[#4caf50]/40'}`}
                  ></motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Card 4: Advanced Discovery */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } } }}
            className="md:col-span-2 md:row-span-1 bg-[#111] border border-white/10 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-center hover:border-white/20 transition-colors"
          >
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Advanced Discovery</h3>
              <p className="text-gray-400 text-sm mb-6">
                Filter by equipment availability, specific muscle groups, or precise session duration.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">Kettlebell</span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium">15-30 Min</span>
                <span className="px-3 py-1 bg-[#4caf50]/20 text-[#4caf50] border border-[#4caf50]/30 rounded-full text-xs font-medium">Posterior Chain</span>
              </div>
            </div>
            
            <div className="w-full md:w-48 space-y-3 opacity-60">
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-full"></div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[85%]"></div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-white w-[60%]"></div>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-[#4caf50] w-[40%]"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
