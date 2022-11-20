import Head from 'next/head';
import { NextSeo } from 'next-seo';

export type MetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = ({ title, description, canonical }: MetaProps) => (
  <>
    <Head>
      <meta charSet='UTF-8' key='charset' />
      <meta
        name='viewport'
        content='width=device-width,initial-scale=1'
        key='viewport'
      />
      <meta name='author' content='Raphaël PICARD' />
      <link rel='icon' type='image/svg' href='/assets/logo/logo-sombre.svg' />
    </Head>
    <NextSeo
      title={title}
      description={description}
      canonical={canonical}
      openGraph={{
        title: 'Google by Raphaël PICARD',
        description: 'Google by Raphaël PICARD',
        url: canonical,
        locale: 'fr_FR',
        site_name: 'Google by Raphaël PICARD',
      }}
    />
  </>
);

export default Meta;
