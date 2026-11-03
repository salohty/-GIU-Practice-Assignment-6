import Link from "next/link";

export default function PlaygroundA() {
  return <section className="card"><h2>Page A</h2><Link href="/playground/b">Go to page B</Link></section>;
}
