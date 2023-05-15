import type { AppProps } from 'next/app'
import Head from 'next/head'

import './global.scss';

export default function App({ Component, pageProps }: AppProps) {

  return (
    <>
      <Head>
        <title>OJJO</title>
        <link rel="icon" href="/favicon.svg" />
        <meta property='og:locale' content="ru_RU" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
