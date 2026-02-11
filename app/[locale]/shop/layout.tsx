import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ShopLayout({ children }: Props) {
  return (
    <div className="shop-layout">
      <header className="shop-header">{/* Shop header/navigation */}</header>
      <main className="shop-main">{children}</main>
      <footer className="shop-footer">{/* Shop footer */}</footer>
    </div>
  );
}
