import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="mt-8 border-t border-white/60 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-lg font-semibold text-stone-900">Lumina Candles</p>
            <p className="mt-2 text-sm text-stone-600">Hand-poured in small batches with love and care. Elevate your everyday rituals.</p>
          </div>
          <div className="text-sm text-stone-700">
            <p className="font-medium text-stone-900">Contact</p>
            <p className="mt-2">hello@luminacandles.com</p>
            <p>Mon–Fri, 9am–5pm</p>
          </div>
          <div className="text-sm text-stone-700">
            <p className="font-medium text-stone-900">Newsletter</p>
            <form className="mt-3 flex max-w-sm">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-stone-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-300"
                aria-label="Email address"
              />
              <button type="submit" className="rounded-r-md bg-stone-900 px-3 py-2 text-sm text-white hover:bg-stone-800">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Lumina Candles. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-stone-700">Privacy</a>
            <a href="#" className="hover:text-stone-700">Terms</a>
            <a href="#" className="hover:text-stone-700">Shipping & Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
