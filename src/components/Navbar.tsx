'use client';

import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity">
          <svg className="text-[#4caf50]" viewBox="0 0 32 32" width="28" height="28" fill="none">
            <path d="M6 8 Q16 4 26 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M6 14 Q16 10 26 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M6 20 Q16 16 26 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M6 26 Q16 22 26 26" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          </svg>
          <span className="font-bold tracking-wider text-sm">FLOWREP</span>
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-gray-300 font-medium">
          <li><Link href="#home" className="hover:text-white transition-colors">Home</Link></li>
          <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
          <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
          <li><Link href="#resources" className="hover:text-white transition-colors">Resources</Link></li>
          <li><Link href="#blog" className="hover:text-white transition-colors">Blog</Link></li>
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link href="#login" className="hidden md:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="#start" className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
            Get started
          </Link>
        </div>
      </div>
    </nav>
  );
}
