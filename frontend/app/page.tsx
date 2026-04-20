import ProductCard from '@/components/ProductCard';

const featured = [
  { id: 1, name: 'Premium Headphones', price: 249, slug: 'premium-headphones' },
  { id: 2, name: 'Smart Watch Pro', price: 199, slug: 'smart-watch-pro' },
  { id: 3, name: 'Minimal Sneakers', price: 129, slug: 'minimal-sneakers' }
];

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl bg-gradient-to-r from-primary to-slate-700 p-10 text-white">
        <h1 className="text-4xl font-bold">Shop Premium Products</h1>
        <p className="mt-3 max-w-2xl text-slate-200">A modern eCommerce experience with fast checkout, wishlist, reviews, and order tracking.</p>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Featured Products</h2>
        <div className="grid gap-6 md:grid-cols-3">{featured.map((p) => <ProductCard key={p.id} {...p} />)}</div>
      </section>
    </div>
  );
}
