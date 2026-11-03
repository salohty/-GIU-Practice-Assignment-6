"use client";

export default function TodosError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main>
      <h2>Something went wrong.</h2>
      <p>We could not load the todos. Make sure the backend is running.</p>
      <button onClick={() => reset()}>Try again</button>
    </main>
  );
}
