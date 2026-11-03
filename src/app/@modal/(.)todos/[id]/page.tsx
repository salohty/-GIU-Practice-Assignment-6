import Link from "next/link";

type Todo = { id: number | string; title: string; done: boolean };

async function getTodo(id: string): Promise<Todo | null> {
  const backendUrl = process.env.API_URL ?? "http://localhost:3000";
  const response = await fetch(`${backendUrl}/todos/${id}`, { cache: "no-store" });
  if (response.status === 404 || !response.ok) return null;
  return response.json();
}

export default async function TodoModalPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await getTodo(id);

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Todo details (modal)</h2>
        {todo ? (
          <>
            <p><strong>ID:</strong> {todo.id}</p>
            <p><strong>Title:</strong> {todo.title}</p>
            <p><strong>Done:</strong> {todo.done ? "Yes" : "No"}</p>
          </>
        ) : <p>Todo not found.</p>}
        <Link href="/todos">Close</Link>
      </div>
    </div>
  );
}
