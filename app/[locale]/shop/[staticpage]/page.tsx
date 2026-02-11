type Props = {
  params: Promise<{
    locale: string;
    staticpage: string;
  }>;
};

export default async function ShopStaticPage({ params }: Props) {
  const { locale, staticpage } = await params;

  return (
    <main>
      <h1>Shop: {staticpage}</h1>
      <p>Locale: {locale}</p>
      {/* Display shop static page content */}
    </main>
  );
}
