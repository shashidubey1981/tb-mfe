type Props = {
  params: Promise<{
    locale: string;
    productId: string[];
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { locale, productId } = await params;

  return (
    <main>
      <h1>Product Page</h1>
      <p>Locale: {locale}</p>
      <p>Product ID: /{productId.join('/')}</p>
      {/* Add your product page implementation here */}
    </main>
  );
}
