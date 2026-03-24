'use client';

import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 bg-[#f8fbf8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#1b5e20] rounded-[50px] py-24 px-8 md:px-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-8 max-w-4xl mx-auto leading-tight"
            >
              Ready to organize your fitness?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/80 text-xl md:text-2xl font-medium mb-12 max-w-2xl mx-auto"
            >
              Join 50,000+ athletes leveling up their performance every day.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-white text-[#1b5e20] text-lg font-bold py-5 px-10 rounded-full shadow-xl hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                Get FlowRep Free
              </button>
              <button className="bg-transparent border-2 border-white/30 text-white text-lg font-bold py-5 px-10 rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm">
                Book a Demo
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
