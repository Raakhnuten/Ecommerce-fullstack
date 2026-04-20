export default function UserDashboardPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">User Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="card">Profile</div>
        <div className="card">Recent Orders</div>
        <div className="card">Saved Addresses</div>
      </div>
    </section>
  );
}
