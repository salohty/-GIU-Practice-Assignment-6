import { NextResponse } from "next/server";

type Todo = { id: number | string; title: string; done: boolean };

export async function GET() {
  try {
    const backendUrl = process.env.API_URL ?? "http://localhost:3000";
    const response = await fetch(`${backendUrl}/todos`, { cache: "no-store" });

    if (!response.ok) {
      return NextResponse.json({ error: "Could not fetch todos." }, { status: response.status });
    }

    const todos: Todo[] = await response.json();
    const done = todos.filter((todo) => todo.done).length;
    const total = todos.length;

    return NextResponse.json({ total, done, open: total - done });
  } catch {
    return NextResponse.json({ error: "Backend is not available." }, { status: 500 });
  }
}
