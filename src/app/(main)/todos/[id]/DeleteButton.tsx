"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleDelete() {
    setError("");
    const backendUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000";
    const response = await fetch(`${backendUrl}/todos/${id}`, { method: "DELETE" });

    if (!response.ok) {
      setError("Could not delete this todo.");
      return;
    }

    router.push("/todos");
    router.refresh();
  }

  return (
    <span>
      <button className="danger" onClick={handleDelete}>Delete</button>
      {error && <p className="error">{error}</p>}
    </span>
  );
}
