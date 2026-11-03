import Counter from "../../_components/Counter";

export default function PlaygroundLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Playground — layout counter</h1>
      <Counter label="Layout counter (should persist between A and B)" />
      {children}
    </main>
  );
}
