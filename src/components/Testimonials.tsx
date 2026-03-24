'use client';

import { motion, useInView, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const testimonials = [
  { id: 1, handle: "@jake_lifts", time: "2H AGO", quote: "The habit tracking feature alone is worth the sub. Haven't missed a leg day in 4 months.", color: "#c8e6c9" },
  { id: 2, handle: "@nick_lifts", time: "2D AGO", quote: "The 1-click YouTube sync is a lifesaver. No more manually typing out exercises while I'm in the middle of a set.", color: "#f5f5f5" },
  { id: 3, isEditorial: true, quote: '"FlowRep is the silent partner in thousands of transformations."', source: "MEN'S HEALTH" },
  { id: 4, handle: "@miaruns", time: "5H AGO", quote: "Filtering workouts by duration is so smart. Now I can find the perfect 20-min session for busy mornings on YouTube.", color: "rgba(255,255,255,0.2)", isDark: true },
  { id: 5, handle: "@coach_ben", time: "1D AGO", quote: "I recommend FlowRep to all my clients. The shared training plans make organizing their YouTube routines so much easier.", color: "#e0e0e0" },
  { id: 6, isStat: true, value: 9.2, label: "AVERAGE ATHLETE SATISFACTION" },
  { id: 7, handle: "@the_real_kyle", time: "8H AGO", quote: "Finally a platform that makes YouTube fitness feel organized. Clean UI, even better performance than keeping 100 tabs open.", color: "#eeeeee" },
  { id: 8, isAppStore: true, quote: '"Literally the best $5.99/mo I spend. Better than a personal trainer for organizing my routine."', source: "REVIEW ON X" },
  { id: 9, handle: "@fitness_freak_99", time: "3D AGO", quote: "FlowRep combined my workout history and YouTube planner perfectly. Switched from a mess of notes and bookmarks.", color: "#bdbdbd" },
  { id: 10, handle: "@amanda_v", time: "1D AGO", quote: "The AI coaching suggestions are scary good. It knew I needed a deload before I did.", color: "#c8e6c9" },
  { id: 11, handle: "@sara_active", time: "2D AGO", quote: "Joined for the tracking, stayed for the community. The local meetups are amazing.", color: "#a5d6a7" },
  { id: 12, handle: "@leo_runs", time: "3D AGO", quote: "PR'd my 5k today using the pacing tools. 19:42! FlowRep actually works.", color: "#c8e6c9" }
];

function StatCard({ value, label }: { value: number, label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      animate(0, value, {
        duration: 2,
        onUpdate: (latest) => setCount(Number(latest.toFixed(1))),
      });
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="bg-gradient-to-br from-[#4caf50] to-[#2e7d32] rounded-3xl p-8 break-inside-avoid mb-6 flex flex-col items-center justify-center text-center text-white shadow-xl shadow-[#4caf50]/20">
      <h3 className="text-6xl font-black mb-2">{count}</h3>
      <p className="text-xs font-bold tracking-widest opacity-80">{label}</p>
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">Wall of Love</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real check-ins from the community. Updated in real-time by athletes around the globe.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => {
            const delay = i * 0.1;

            if (t.isStat) {
              return <StatCard key={t.id} value={t.value!} label={t.label!} />;
            }

            if (t.isEditorial) {
              return (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 break-inside-avoid flex flex-col justify-center items-center text-center h-48"
                >
                  <p className="text-lg font-medium italic text-gray-300 mb-4">{t.quote}</p>
                  <span className="text-xs font-bold tracking-widest text-zinc-500">— {t.source}</span>
                </motion.div>
              );
            }

            if (t.isAppStore) {
              return (
                <motion.div 
                  key={t.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay }}
                  className="bg-[#111] border border-white/5 rounded-3xl p-6 break-inside-avoid flex flex-col h-48 justify-center"
                >
                  <div className="flex gap-1 text-[#FFC107] text-xl mb-4">★★★★★</div>
                  <p className="text-base font-medium italic text-gray-300 mb-4">{t.quote}</p>
                  <span className="text-xs font-bold tracking-widest text-[#4caf50]">{t.source}</span>
                </motion.div>
              );
            }

            // Standard Tweet Card
            const isDark = t.isDark;
            return (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay }}
                className={`${isDark ? 'bg-gradient-to-b from-[#1E3B20] to-[#122414] border-[#4caf50]/30 glow' : 'bg-[#111] border-white/5'} border rounded-3xl p-6 break-inside-avoid`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full" style={{ backgroundColor: t.color }}></div>
                  <div className="flex flex-col">
                    <span className="font-bold text-sm flex items-center gap-1">
                      {t.handle} 
                      <svg width="14" height="14" viewBox="0 0 24 24" fill={isDark ? '#fff' : '#4caf50'}><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </span>
                    <span className={`text-xs ${isDark ? 'text-white/60' : 'text-gray-500'}`}>{t.time}</span>
                  </div>
                </div>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-200' : 'text-gray-300'}`}>{t.quote}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
