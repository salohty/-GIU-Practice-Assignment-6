import Counter from "../../_components/Counter";

export default function PlaygroundTemplate({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Counter label="Template counter (resets when navigating)" />
      {children}
    </>
  );
}
