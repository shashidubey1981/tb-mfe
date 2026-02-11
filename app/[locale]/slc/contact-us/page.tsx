type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function ContactUsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <main>
      <h1>Contact Us</h1>
      <p>Locale: {locale}</p>
      {/* Contact form and information */}
    </main>
  );
}
