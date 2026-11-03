"use client";

import { useState } from "react";

export default function Counter({ label }: { label: string }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      {label}: {count}{" "}
      <button onClick={() => setCount((value) => value + 1)}>Increase</button>
    </div>
  );
}
