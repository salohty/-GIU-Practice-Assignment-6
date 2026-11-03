import Link from "next/link";

export default function PlaygroundB() {
  return <section className="card"><h2>Page B</h2><Link href="/playground/a">Go to page A</Link></section>;
}
