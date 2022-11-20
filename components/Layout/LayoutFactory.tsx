import dynamic from 'next/dynamic';
import { PageLayoutProps } from '../../types/layout.type';
import type { MetaProps } from './Meta';

const MainLayout = dynamic(() => import('./MainLayout'));

type LayoutFactoryProps = {
  layout: PageLayoutProps['layout'];
  children: React.ReactNode;
  meta: MetaProps;
};

export const LayoutFactory = ({
  layout = { type: 'none' },
  children,
  meta,
}: LayoutFactoryProps) => {
  switch (layout.type) {
    case 'main':
      return <MainLayout meta={meta}>{children}</MainLayout>;
    default:
      return <>{children}</>;
  }
};
