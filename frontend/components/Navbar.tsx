'use client';
import Link from 'next/link';

const links = [
  ['Home', '/'],
  ['Shop', '/shop'],
  ['Cart', '/cart'],
  ['Wishlist', '/wishlist'],
  ['Orders', '/orders'],
  ['Dashboard', '/dashboard'],
  ['Admin', '/admin/dashboard']
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold text-primary">CommercePro</Link>
        <div className="flex gap-4 text-sm">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-accent">{label}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
