type Todo = { id: number | string; title: string; done: boolean };

async function getRecent(): Promise<Todo[]> {
  const backendUrl = process.env.API_URL ?? "http://localhost:3000";
  const response = await fetch(`${backendUrl}/todos`, { cache: "no-store" });
  if (!response.ok) return [];
  const todos: Todo[] = await response.json();
  return todos.slice(-3).reverse();
}

export default async function RecentSlotPage() {
  const todos = await getRecent();
  return (
    <ul>
      {todos.map((todo) => <li key={todo.id}>{todo.title} — {todo.done ? "Done" : "Open"}</li>)}
      {todos.length === 0 && <li>No recent todos.</li>}
    </ul>
  );
}
