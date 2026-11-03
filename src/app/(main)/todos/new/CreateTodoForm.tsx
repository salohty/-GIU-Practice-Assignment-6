"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTodoForm() {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const backendUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";
      const response = await fetch(`${backendUrl}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message ?? data.error ?? "Could not create todo.");
        return;
      }

      router.push("/todos");
      router.refresh();
    } catch {
      setError("The backend is not available.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Enter todo title"
      />
      <button disabled={submitting}>{submitting ? "Creating..." : "Create"}</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}
