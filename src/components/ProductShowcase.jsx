import React from 'react';
import { Leaf, Flame, Droplets } from 'lucide-react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Forest Mornings',
    notes: 'Pine • Cedar • Moss',
    price: '$24',
    img: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Citrus Bloom',
    notes: 'Orange • Neroli • Bergamot',
    price: '$22',
    img: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Evening Amber',
    notes: 'Amber • Tonka • Vanilla',
    price: '$26',
    img: 'https://images.unsplash.com/photo-1542010589005-d1eacc3918a1?q=80&w=1600&auto=format&fit=crop',
    badge: 'Limited',
  },
  {
    id: 4,
    name: 'Sea Salt Air',
    notes: 'Mineral • Ozone • Driftwood',
    price: '$24',
    img: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop',
    badge: 'Fresh',
  },
];

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-100 text-amber-700">
      <Icon className="h-4 w-4" />
    </div>
    <div>
      <p className="font-medium text-stone-900">{title}</p>
      <p className="text-sm text-stone-600">{desc}</p>
    </div>
  </div>
);

const ProductCard = ({ product, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.05 * index }}
    className="group relative overflow-hidden rounded-2xl border border-white/60 bg-white shadow-sm shadow-stone-200/60"
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-stone-800 ring-1 ring-stone-200 shadow-sm">{product.badge}</span>
    </div>
    <div className="p-4">
      <h3 className="font-medium text-stone-900">{product.name}</h3>
      <p className="mt-1 text-sm text-stone-600">{product.notes}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-stone-900 font-semibold">{product.price}</span>
        <button className="inline-flex items-center rounded-md border border-stone-300 bg-white px-3 py-2 text-sm text-stone-800 hover:bg-stone-50 transition">
          Add to cart
        </button>
      </div>
    </div>
  </motion.div>
);

const ProductShowcase = () => {
  return (
    <section id="collection" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Featured collection</h2>
            <p className="mt-2 max-w-xl text-stone-700">
              Thoughtfully curated scents for every mood and moment. Clean ingredients, long-lasting burn, and captivating aroma.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <Feature icon={Leaf} title="Soy wax" desc="Sustainably sourced" />
            <Feature icon={Flame} title="Cotton wick" desc="Even, clean burn" />
            <Feature icon={Droplets} title="Essential oils" desc="Phthalate-free" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
