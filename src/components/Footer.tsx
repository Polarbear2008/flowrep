'use client';

import Link from 'next/link';
import { Globe, Instagram, AtSign, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111] text-white pt-32 pb-12 rounded-t-[60px] relative mt-[-60px] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          {/* Logo and About */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-black tracking-tighter">FLOWREP</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
              The ultimate operating system for the modern athlete and fitness creator. Organize, track, and monetize your training journey.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Globe size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white">
                <AtSign size={18} />
              </a>
            </div>
          </div>

          {/* Links: Platform */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-8 text-gray-500">Platform</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">How it works</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="#" className="text-[#4caf50] hover:text-[#81c784] transition-colors">Creator Program</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Links: Company */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-8 text-gray-500">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-xs tracking-widest uppercase mb-8 text-gray-500">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-6">Join our newsletter for the latest updates and fitness tips.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm focus:outline-none focus:border-[#4caf50]/50 transition-colors"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1.5 bottom-1.5 w-10 bg-[#00e676] rounded-full flex items-center justify-center text-black hover:bg-[#00c853] transition-colors"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-medium">
          <p>© 2024 FlowRep Performance. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Status</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
