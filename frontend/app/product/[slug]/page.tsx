export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="card aspect-square" />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold capitalize">{slug.replace(/-/g, ' ')}</h1>
        <p className="text-2xl font-semibold text-primary">$199</p>
        <p className="text-slate-600">High-quality product with detailed description, customer reviews, and ratings.</p>
        <div className="flex gap-3">
          <button className="btn-primary">Add to Cart</button>
          <button className="btn border">Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
}
