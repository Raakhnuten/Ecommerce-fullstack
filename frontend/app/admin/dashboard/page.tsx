export default function AdminDashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="card"><p className="text-sm text-slate-500">Revenue</p><p className="text-2xl font-bold">$24,560</p></div>
        <div className="card"><p className="text-sm text-slate-500">Orders</p><p className="text-2xl font-bold">1,204</p></div>
        <div className="card"><p className="text-sm text-slate-500">Users</p><p className="text-2xl font-bold">4,982</p></div>
        <div className="card"><p className="text-sm text-slate-500">Products</p><p className="text-2xl font-bold">320</p></div>
      </div>
    </section>
  );
}
