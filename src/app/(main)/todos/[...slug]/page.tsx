export default async function TodoCatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  return (
    <main>
      <h1>Catch-all route</h1>
      <p>Slug array: {JSON.stringify(slug)}</p>
    </main>
  );
}
