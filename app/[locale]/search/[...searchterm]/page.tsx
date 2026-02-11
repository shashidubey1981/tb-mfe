type Props = {
  params: Promise<{
    locale: string;
    searchterm: string[];
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function SearchPage({ params, searchParams }: Props) {
  const { locale, searchterm } = await params;
  const query = await searchParams;

  const searchQuery = searchterm.join(' ');

  return (
    <main>
      <h1>Search Results</h1>
      <p>Locale: {locale}</p>
      <p>Search Query: {searchQuery}</p>
      <p>Filters: {JSON.stringify(query)}</p>
      {/* 
        Examples:
        - /en/search/mens-suits → searchterm: ['mens-suits']
        - /en/search/mens/suits/blue → searchterm: ['mens', 'suits', 'blue']
        - /en/search/tuxedo?color=black&size=42 → searchterm: ['tuxedo'], query: { color: 'black', size: '42' }
      */}
    </main>
  );
}
