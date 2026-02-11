type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function GiftCardsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <h1>Gift Cards for Men</h1>
      <p>Locale: {locale}</p>
      {/* Display gift cards for men */}
    </main>
  );
}
