type Props = {
  params: Promise<{
    locale: string;
    featuredCategory: string;
  }>;
};

export default async function FeaturedCategoryPage({ params }: Props) {
  const { locale, featuredCategory } = await params;

  return (
    <main>
      <h1>Featured Category</h1>
      <p>Locale: {locale}</p>
      <p>Featured: {featuredCategory}</p>
      {/* Display featured category items */}
    </main>
  );
}
