export default function CartPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>
      <div className="card flex items-center justify-between"><span>Premium Headphones x 1</span><span>$249</span></div>
      <div className="card flex items-center justify-between"><span>Subtotal</span><span className="font-semibold">$249</span></div>
      <a className="btn-primary inline-block" href="/checkout">Proceed to Checkout</a>
    </section>
  );
}
