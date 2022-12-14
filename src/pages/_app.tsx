import '../styles/globals.css';

import Layout from 'components/Layout';
import { RecoilRoot } from 'recoil';

import type { AppProps } from 'next/app';
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}
