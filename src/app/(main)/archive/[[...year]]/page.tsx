export default async function ArchivePage({
  params,
}: {
  params: Promise<{ year?: string[] }>;
}) {
  const { year } = await params;
  return (
    <main>
      <h1>Archive</h1>
      <p>{year?.length ? `Year: ${year.join("/")}` : "All years"}</p>
    </main>
  );
}
