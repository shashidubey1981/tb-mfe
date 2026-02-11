import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function SearchLayout({ children }: Props) {
  return (
    <div className="search-layout">
      <header className="search-header">
        {/* Search header/filters */}
      </header>
      <main className="search-main">{children}</main>
    </div>
  );
}
