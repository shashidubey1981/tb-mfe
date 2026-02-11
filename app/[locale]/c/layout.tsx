import { ReactNode, Suspense } from 'react';

type Props = {
  children: ReactNode;
};

// Loading fallback for category section
function CategoryLoading() {
  return (
    <div className="category-loading">
      <p>Loading categories...</p>
    </div>
  );
}

// Error fallback component would be in error.tsx at this level
export default function CategoryLayout({ children }: Props) {
  return (
    <div className="category-layout">
      {/* Category section header */}
      <header className="category-header">
        {/* Add navigation, breadcrumbs, filters, sidebar toggle, etc. */}
      </header>

      <div className="category-container">
        {/* Optional sidebar */}
        <aside className="category-sidebar">
          {/* Add category filters, navigation tree, etc. */}
        </aside>

        {/* Main content with Suspense boundary */}
        <Suspense fallback={<CategoryLoading />}>
          <main className="category-main">{children}</main>
        </Suspense>
      </div>

      {/* Category section footer */}
      <footer className="category-footer">
        {/* Add category-specific footer content */}
      </footer>
    </div>
  );
}
