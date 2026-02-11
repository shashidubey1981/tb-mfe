type Props = {
  params: Promise<{
    locale: string;
    parentCategory: string;
  }>;
};

export default async function CyberMondayDealPage({ params }: Props) {
  const { locale, parentCategory } = await params;

  return (
    <main>
      <h1>Cyber Monday Deals</h1>
      <p>Locale: {locale}</p>
      <p>Category: {parentCategory}</p>
      {/* Display Cyber Monday deals for the parent category */}
    </main>
  );
}
