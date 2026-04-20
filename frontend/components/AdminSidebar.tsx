import Link from 'next/link';

const nav = ['dashboard', 'products', 'categories', 'orders', 'users', 'coupons', 'reviews', 'settings'];

export default function AdminSidebar() {
  return (
    <aside className="card h-fit">
      <h2 className="text-lg font-semibold">Admin Panel</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {nav.map((item) => (
          <li key={item}>
            <Link className="capitalize hover:text-accent" href={`/admin/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
