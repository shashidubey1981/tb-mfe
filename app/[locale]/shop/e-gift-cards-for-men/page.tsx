type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function EGiftCardsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <h1>E-Gift Cards for Men</h1>
      <p>Locale: {locale}</p>
      {/* Display e-gift cards for men */}
    </main>
  );
}
