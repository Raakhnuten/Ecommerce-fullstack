export default function TrackOrderPage() {
  return (
    <section className="mx-auto max-w-xl card space-y-3">
      <h1 className="text-2xl font-bold">Track Order</h1>
      <input className="w-full rounded-lg border p-2" placeholder="Enter order number" />
      <button className="btn-primary">Track</button>
    </section>
  );
}
