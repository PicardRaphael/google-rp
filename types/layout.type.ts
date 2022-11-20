import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { MainLayoutArgs } from '../components/Layout/MainLayout';
import type { MetaProps } from '../components/Layout/Meta';

interface LayoutArgs {
  layout?: { type: string };
  meta: MetaProps;
}

export interface PageLayoutProps extends LayoutArgs {
  layout?: MainLayoutArgs | { type: 'none' };
}

export type GoogleNextPage<P = Record<string, never>, IP = P> = NextPage<
  P,
  IP
> &
  PageLayoutProps;

export type GoogleAppProps = AppProps & {
  Component: GoogleNextPage;
};
