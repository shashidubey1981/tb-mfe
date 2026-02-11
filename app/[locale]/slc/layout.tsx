import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function StaticContentLayout({ children }: Props) {
  return (
    <div className="slc-layout">
      <header className="slc-header">{/* Static content header */}</header>
      <main className="slc-main">{children}</main>
      <footer className="slc-footer">{/* Static content footer */}</footer>
    </div>
  );
}
