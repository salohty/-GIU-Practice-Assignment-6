import Link from "next/link";

export default function TodoNotFound() {
  return (
    <main>
      <h1>Todo not found</h1>
      <p>The requested todo does not exist.</p>
      <Link href="/todos">Back to todos</Link>
    </main>
  );
}
