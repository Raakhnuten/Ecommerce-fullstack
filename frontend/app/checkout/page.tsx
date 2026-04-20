export default function CheckoutPage() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="card space-y-4">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <input className="w-full rounded-lg border p-2" placeholder="Full Name" />
        <input className="w-full rounded-lg border p-2" placeholder="Address" />
        <input className="w-full rounded-lg border p-2" placeholder="Coupon Code" />
        <button className="btn-primary">Place Order</button>
      </div>
      <div className="card">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <p className="mt-2 text-slate-500">Items, taxes, shipping, discounts shown here.</p>
      </div>
    </section>
  );
}
