type Stats = { total: number; done: number; open: number };

async function getStats(): Promise<Stats> {
  const response = await fetch("http://localhost:3001/api/stats", { cache: "no-store" });
  if (!response.ok) throw new Error("Could not load todo statistics.");
  return response.json();
}

export default async function HomePage() {
  const stats = await getStats();

  return (
    <main>
      <h1>Todo App</h1>
      <p>Welcome! Here are the current todo statistics.</p>
      <section className="links">
        <div className="card"><h3>Total</h3><p>{stats.total}</p></div>
        <div className="card"><h3>Done</h3><p>{stats.done}</p></div>
        <div className="card"><h3>Open</h3><p>{stats.open}</p></div>
      </section>
      <h2>Assignment pages</h2>
      <div className="links">
        <a href="/todos">Todos list</a>
        <a href="/todos/new">Create todo</a>
        <a href="/help/todos/create">Help catch-all</a>
        <a href="/archive">Archive optional catch-all</a>
        <a href="/playground/a">Playground</a>
        <a href="/dashboard">Dashboard (login required)</a>
      </div>
    </main>
  );
}
