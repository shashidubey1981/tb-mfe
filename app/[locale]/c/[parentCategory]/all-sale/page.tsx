type Props = {
  params: Promise<{
    locale: string;
    parentCategory: string;
  }>;
};

export default async function AllSalePage({ params }: Props) {
  const { locale, parentCategory } = await params;

  return (
    <main>
      <h1>All Sale Items</h1>
      <p>Locale: {locale}</p>
      <p>Category: {parentCategory}</p>
      {/* Display all sale items for the parent category */}
    </main>
  );
}
