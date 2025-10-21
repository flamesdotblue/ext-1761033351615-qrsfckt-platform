import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-stone-700 ring-1 ring-inset ring-stone-200 shadow-sm">
                <Star className="h-3.5 w-3.5 text-amber-600" /> Hand-poured • Clean burn • Essential oils
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl font-semibold tracking-tight text-stone-900">
                Illuminate your space with nature-inspired scents
              </h1>
              <p className="mt-4 text-stone-700 leading-relaxed max-w-xl">
                Discover small-batch soy candles crafted with eco-friendly wax, cotton wicks, and premium essential oils. Designed to calm, uplift, and make every moment glow.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#collection" className="inline-flex items-center justify-center rounded-md bg-stone-900 px-5 py-3 text-white shadow-sm hover:bg-stone-800 transition">
                  Explore collection
                </a>
                <a href="#about" className="inline-flex items-center justify-center rounded-md border border-stone-300 bg-white px-5 py-3 text-stone-800 hover:bg-stone-50 transition">
                  Our story
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/60 shadow-xl shadow-stone-200/60">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
                alt="Assorted soy candles on a table with warm light"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="pointer-events-none absolute -bottom-5 -left-5 hidden sm:block rounded-xl bg-white/80 px-4 py-3 text-sm text-stone-700 ring-1 ring-stone-200 shadow-md">
              Clean-burning soy wax • Up to 45h burn time
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
