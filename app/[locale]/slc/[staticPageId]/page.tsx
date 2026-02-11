type Props = {
  params: Promise<{
    locale: string;
    staticPageId: string;
  }>;
};

export default async function StaticPageById({ params }: Props) {
  const { locale, staticPageId } = await params;

  return (
    <main>
      <h1>Static Page</h1>
      <p>Locale: {locale}</p>
      <p>Page ID: {staticPageId}</p>
      {/* Fetch and display static page content by ID */}
    </main>
  );
}
