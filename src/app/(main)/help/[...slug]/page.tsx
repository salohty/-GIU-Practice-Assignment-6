export default async function HelpPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <main>
      <h1>Help</h1>
      <p>Breadcrumb:</p>
      <p>Help {slug.map((part) => ` > ${part}`).join("")}</p>
    </main>
  );
}
