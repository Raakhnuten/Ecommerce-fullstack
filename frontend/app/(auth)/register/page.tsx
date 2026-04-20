export default function RegisterPage() {
  return (
    <section className="mx-auto max-w-md card space-y-3">
      <h1 className="text-2xl font-bold">Create Account</h1>
      <input className="w-full rounded-lg border p-2" placeholder="Name" />
      <input className="w-full rounded-lg border p-2" placeholder="Email" />
      <input className="w-full rounded-lg border p-2" placeholder="Password" type="password" />
      <button className="btn-primary w-full">Register</button>
    </section>
  );
}
