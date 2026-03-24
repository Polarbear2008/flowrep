'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none flex justify-center items-start pt-20">
        <div className="relative w-full max-w-[1400px] aspect-[2/1]">
          <Image 
            src="/assets/hero-bg.png" 
            alt="Hero Background" 
            fill 
            className="object-contain object-top"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest text-gray-300 bg-white/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse"></span>
          NOW IN PUBLIC BETA
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight"
        >
          Missing Layer for your<br />
          <span className="inline-flex items-center gap-2 align-bottom">
            <svg viewBox="0 0 28 20" width="40" height="28" className="mt-2">
              <rect rx="4" ry="4" width="28" height="20" fill="#FF0000" />
              <polygon points="11,5 11,15 20,10" fill="#fff" />
            </svg>
            Youtube
          </span>{' '}
          Fitness
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl font-medium"
        >
          Plan. Play. Progress. Turn YouTube's infinite workout library into a structured, trackable fitness routine — automatically.
        </motion.p>

        {/* CTA Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-6 mb-20"
        >
          <a href="#" className="bg-white text-black px-8 py-3.5 rounded-full font-bold flex items-center gap-2 hover:bg-gray-200 transition-all hover:scale-105">
            Start free today
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#" className="flex items-center gap-3 text-white hover:text-gray-300 font-semibold transition-colors">
            <svg viewBox="0 0 24 24" width="36" height="36">
              <circle cx="12" cy="12" r="11" fill="#FF0000" />
              <polygon points="10,7 10,17 17,12" fill="#fff" />
            </svg>
            Watch 90-sec demo
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full bg-[#4A90D9] border-2 border-black flex items-center justify-center text-xs font-bold">JD</div>
            <div className="w-10 h-10 rounded-full bg-[#E8A838] border-2 border-black flex items-center justify-center text-xs font-bold">AS</div>
            <div className="w-10 h-10 rounded-full bg-[#4caf50] border-2 border-black flex items-center justify-center text-xs font-bold">1k+</div>
          </div>
          <p className="text-sm font-semibold text-gray-400 tracking-wide">
            5,000+ <span className="text-white">FITNESS ENTHUSIASTS</span> ALREADY ON BOARD
          </p>
        </motion.div>
      </div>

      {/* Network Animation (Pills + SVG Lines) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative w-full h-[400px] max-w-4xl mx-auto mt-24 text-xs font-bold tracking-wider hidden md:block"
      >
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
          <defs>
            <filter id="whiteGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Lines & Particles */}
          <path d="M200,105 L365,270 Q375,280 375,290 L375,340" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <g>
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M200,105 L365,270 Q375,280 375,290 L375,340" />
            <circle cx="0" cy="0" r="3" fill="#4caf50" filter="url(#whiteGlow)" />
          </g>

          <path d="M400,55 L400,340" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <g>
            <animateMotion dur="3.5s" repeatCount="indefinite" path="M400,55 L400,340" />
            <circle cx="0" cy="0" r="3" fill="#4caf50" filter="url(#whiteGlow)" />
          </g>

          <path d="M600,105 L435,270 Q425,280 425,290 L425,340" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <g>
            <animateMotion dur="3.1s" repeatCount="indefinite" path="M600,105 L435,270 Q425,280 425,290 L425,340" />
            <circle cx="0" cy="0" r="3" fill="#4caf50" filter="url(#whiteGlow)" />
          </g>

          <path d="M180,210 L250,210 Q260,210 267,217 L343,293 Q350,300 350,310 L350,340" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <g>
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M180,210 L250,210 Q260,210 267,217 L343,293 Q350,300 350,310 L350,340" />
            <circle cx="0" cy="0" r="3" fill="#4caf50" filter="url(#whiteGlow)" />
          </g>

          <path d="M620,210 L550,210 Q540,210 533,217 L457,293 Q450,300 450,310 L450,340" stroke="rgba(255,255,255,0.15)" strokeWidth="2" fill="none" />
          <g>
            <animateMotion dur="2.9s" repeatCount="indefinite" path="M620,210 L550,210 Q540,210 533,217 L457,293 Q450,300 450,310 L450,340" />
            <circle cx="0" cy="0" r="3" fill="#4caf50" filter="url(#whiteGlow)" />
          </g>
        </svg>

        {/* Center Pill */}
        <div className="absolute left-[50%] -translate-x-[50%] top-[40px] flex items-center gap-2 bg-[#1A1A1A] border border-white/20 px-5 py-2.5 rounded-full z-20 hover:border-[#4caf50]/50 transition-colors shadow-lg">
          <svg width="20" height="15" viewBox="0 0 28 20">
            <rect rx="3" ry="3" width="28" height="20" fill="#FF0000" />
            <polygon points="11,5 11,15 20,10" fill="#fff" />
          </svg>
          YOUTUBE VIDEOS
        </div>

        {/* Top Left */}
        <div className="absolute left-[20%] -translate-x-[50%] top-[90px] flex items-center gap-2 bg-[#1A1A1A] border border-white/20 px-5 py-2.5 rounded-full z-20 shadow-lg">
          <svg width="14" height="16" viewBox="0 0 14 18" fill="none">
            <path d="M1 1h12v16l-6-4-6 4V1z" stroke="#fff" strokeWidth="1.5" fill="none" />
          </svg>
          1 CLICK SAVE
        </div>

        {/* Top Right */}
        <div className="absolute left-[80%] -translate-x-[50%] top-[90px] flex items-center gap-2 bg-[#1A1A1A] border border-white/20 px-5 py-2.5 rounded-full z-20 shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="2" width="14" height="13" rx="2" stroke="#fff" strokeWidth="1.5" fill="none" />
            <path d="M1 6h14" stroke="#fff" strokeWidth="1.5" />
            <path d="M5 1v3M11 1v3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          WEEKLY PLANNER
        </div>

        {/* Bottom Left */}
        <div className="absolute left-[15%] -translate-x-[50%] top-[190px] flex items-center gap-2 bg-[#1A1A1A] border border-white/20 px-5 py-2.5 rounded-full z-20 shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <rect x="1" y="1" width="14" height="14" rx="2" stroke="#fff" strokeWidth="1.5" fill="none" />
            <path d="M4 10l3-3 2 2 3-4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          PROGRESS TRACKING
        </div>

        {/* Bottom Right */}
        <div className="absolute left-[85%] -translate-x-[50%] top-[190px] flex items-center gap-2 bg-[#1A1A1A] border border-white/20 px-5 py-2.5 rounded-full z-20 shadow-lg">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="5" r="3" stroke="#fff" strokeWidth="1.5" fill="none" />
            <path d="M2 15c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          </svg>
          CREATOR PROGRAM
        </div>

        {/* Bottom Logo target */}
        <div className="absolute left-[50%] -translate-x-[50%] bottom-[20px] bg-black p-2 rounded-2xl z-20 shadow-[0_0_30px_rgba(76,175,80,0.2)]">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#1A1A1A] flex flex-col items-center justify-center">
            <svg className="text-[#4caf50]" viewBox="0 0 32 32" width="28" height="28" fill="none">
              <path d="M6 8 Q16 4 26 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M6 14 Q16 10 26 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M6 20 Q16 16 26 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M6 26 Q16 22 26 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            </svg>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
