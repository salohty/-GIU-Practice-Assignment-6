import Link from "next/link";
import { notFound } from "next/navigation";
import DeleteButton from "./DeleteButton";

type Todo = { id: number | string; title: string; done: boolean };

async function getTodo(id: string): Promise<Todo | null> {
  const backendUrl = process.env.API_URL ?? "http://localhost:3000";
  const response = await fetch(`${backendUrl}/todos/${id}`, { cache: "no-store" });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error("Could not load this todo.");
  return response.json();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await getTodo(id);
  return { title: todo ? todo.title : "Todo not found" };
}

export default async function TodoDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await getTodo(id);
  if (!todo) notFound();

  return (
    <main>
      <h1>Todo details</h1>
      <div className="card">
        <p><strong>ID:</strong> {todo.id}</p>
        <p><strong>Title:</strong> {todo.title}</p>
        <p><strong>Done:</strong> {todo.done ? "Yes" : "No"}</p>
      </div>
      <div className="links">
        <Link href="/todos">Back to todos</Link>
        <DeleteButton id={String(todo.id)} />
      </div>
    </main>
  );
}
