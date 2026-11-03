import Link from "next/link";

export default function DashboardLayout({
  children,
  stats,
  recent,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
  recent: React.ReactNode;
}) {
  return (
    <main>
      <h1>Dashboard</h1>
      <div className="links"><Link href="/dashboard">Overview</Link><Link href="/dashboard/settings">Settings</Link></div>
      <div className="card"><h2>Stats slot</h2>{stats}</div>
      <div className="card"><h2>Recent todos slot</h2>{recent}</div>
      {children}
    </main>
  );
}
