import React from 'react';
import type { MetaProps } from './Meta';
import Meta from './Meta';

export type MainLayoutArgs = { type: 'main' };
type MainLayoutProps = {
  children: React.ReactNode;
  meta: MetaProps;
};

const MainLayout = ({ meta, children }: MainLayoutProps) => {
  return (
    <>
      <Meta {...meta} />
      <header>
        <h1>Header</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h3>Footer</h3>
      </footer>
    </>
  );
};

export default MainLayout;
