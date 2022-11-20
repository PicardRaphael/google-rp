import Head from 'next/head';
import type { GoogleNextPage } from '../types/layout.type';

const Home: GoogleNextPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center py-2'>
      <h1>Hello world !</h1>
    </div>
  );
};

Home.layout = { type: 'main' };
Home.meta = {
  title: 'Google by Raphaël PICARD',
  description: 'Google by Raphaël PICARD',
};
export default Home;
