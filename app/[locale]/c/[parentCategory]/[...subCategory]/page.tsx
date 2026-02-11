type Props = {
  params: Promise<{
    locale: string;
    parentCategory: string;
    subCategory: string[];
  }>;
};

export default async function SubCategoryPage({ params }: Props) {
  const { locale, parentCategory, subCategory } = await params;

  return (
    <main>
      <h1>Sub Category Page</h1>
      <p>Locale: {locale}</p>
      <p>Parent Category: {parentCategory}</p>
      <p>Sub Category: {subCategory.join(' / ')}</p>
      {/* 
        Examples:
        - /en/c/mens-clothing/suits → parentCategory: 'mens-clothing', subCategory: ['suits']
        - /en/c/mens-clothing/suits/tuxedos → parentCategory: 'mens-clothing', subCategory: ['suits', 'tuxedos']
      */}
    </main>
  );
}
