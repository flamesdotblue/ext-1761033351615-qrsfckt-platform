import React from 'react';
import { ShoppingBag, Flame, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-white/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-semibold tracking-tight text-stone-900">Lumina Candles</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-stone-700">
            <a href="#collection" className="hover:text-stone-900 transition">Collection</a>
            <a href="#about" className="hover:text-stone-900 transition">About</a>
            <a href="#contact" className="hover:text-stone-900 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md bg-stone-900 px-4 py-2 text-white shadow-sm hover:bg-stone-800 transition">
              <ShoppingBag className="h-4 w-4" />
              Shop now
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-stone-200 text-stone-700 hover:bg-stone-50">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
