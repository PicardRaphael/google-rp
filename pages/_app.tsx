import '../styles/globals.css';

import React from 'react';
import { LayoutFactory } from '../components/Layout/LayoutFactory';
import type { GoogleAppProps } from '../types/layout.type';

function MyApp({ Component, pageProps }: GoogleAppProps) {
  const { layout, meta } = Component;

  return (
    <>
      <LayoutFactory layout={layout} meta={meta}>
        <Component {...pageProps} />
      </LayoutFactory>
    </>
  );
}

export default MyApp;
