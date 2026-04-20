import Link from 'next/link';

type Props = { id: number; name: string; price: number; slug?: string };

export default function ProductCard({ id, name, price, slug }: Props) {
  return (
    <div className="card">
      <div className="aspect-square rounded-xl bg-slate-100" />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
      <p className="text-slate-500">${price}</p>
      <Link className="btn-primary mt-4 inline-block" href={`/product/${slug || id}`}>View Product</Link>
    </div>
  );
}
