type Props = {
  params: Promise<{
    locale: string;
    parentCategory: string;
  }>;
};

export default async function BlackFridayDealPage({ params }: Props) {
  const { locale, parentCategory } = await params;

  return (
    <main>
      <h1>Black Friday Deals</h1>
      <p>Locale: {locale}</p>
      <p>Category: {parentCategory}</p>
      {/* Display Black Friday deals for the parent category */}
    </main>
  );
}
