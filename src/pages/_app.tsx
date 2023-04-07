import Header from '@/components/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="container max-w-5xl mx-auto">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}
