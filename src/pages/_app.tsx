import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

// container max-w-5xl pb-24 mx-auto

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
