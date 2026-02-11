import { ReactNode, Suspense } from 'react';

type Props = {
  children: ReactNode;
};

// Loading fallback for product section
function ProductLoading() {
  return (
    <div className="product-loading">
      <p>Loading products...</p>
    </div>
  );
}

// Error fallback component would be in error.tsx at this level
export default function ProductLayout({ children }: Props) {
  return (
    <div className="product-layout">
      {/* Product section header */}
      <header className="product-header">
        {/* Add navigation, breadcrumbs, filters, etc. */}
      </header>

      {/* Main content with Suspense boundary */}
      <Suspense fallback={<ProductLoading />}>
        <main className="product-main">{children}</main>
      </Suspense>

      {/* Product section footer */}
      <footer className="product-footer">
        {/* Add product-specific footer content */}
      </footer>
    </div>
  );
}
