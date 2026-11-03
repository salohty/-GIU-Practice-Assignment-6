import Link from "next/link";

type Todo = { id: number | string; title: string; done: boolean };

async function getTodos(): Promise<Todo[]> {
  const backendUrl = process.env.API_URL ?? "http://localhost:3000";
  const response = await fetch(`${backendUrl}/todos`, { cache: "no-store" });
  if (!response.ok) throw new Error("Failed to load todos. Check that the backend is running.");
  return response.json();
}

export default async function TodosPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const todos = await getTodos();
  const filteredTodos =
    status === "done" ? todos.filter((todo) => todo.done) :
    status === "open" ? todos.filter((todo) => !todo.done) : todos;

  return (
    <main>
      <h1>Todos</h1>
      <div className="filters">
        <Link href="/todos">All</Link>
        <Link href="/todos?status=done">Done</Link>
        <Link href="/todos?status=open">Open</Link>
        <Link href="/todos/new" className="button">Create todo</Link>
      </div>
      {filteredTodos.length === 0 && <p>No todos found.</p>}
      {filteredTodos.map((todo) => (
        <div className="card" key={todo.id}>
          <Link href={`/todos/${todo.id}`}>{todo.title}</Link>
          {" — "}
          <span>{todo.done ? "Done" : "Open"}</span>
        </div>
      ))}
    </main>
  );
}
