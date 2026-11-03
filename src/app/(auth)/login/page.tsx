"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  function login() {
    document.cookie = "demo-auth=1; path=/; max-age=86400; SameSite=Lax";
    router.push("/dashboard");
    router.refresh();
  }

  return (
    <section>
      <h1>Demo login</h1>
      <p>Click the button to set the demo-auth cookie.</p>
      <button onClick={login}>Login</button>
    </section>
  );
}
