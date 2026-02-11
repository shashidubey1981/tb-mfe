type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ClassicGiftCardsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <h1>Classic Gift Cards for Men</h1>
      <p>Locale: {locale}</p>
      {/* Display classic gift cards for men */}
    </main>
  );
}
