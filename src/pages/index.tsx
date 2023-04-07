import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Products from '@/components/Products';
import { checkEnv } from '@/helper/checkEnv';
import { Product } from '@/interfaces/product.interface';

interface Props {
  data: Product[];
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-hero',
});

export const getServerSideProps = async () => {
  const res = await fetch(`${checkEnv()}/api/get/getProducts`, {
    method: 'GET',
  });

  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function Home(props: Props) {
  return (
    <>
      <Head>
        <title>Бытовая химия - магазин</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`font-hero ${inter.variable}`}>
        <Products products={props.data} />
      </main>
    </>
  );
}
