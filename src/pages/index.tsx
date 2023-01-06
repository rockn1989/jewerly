import Head from 'next/head'
import Image from 'next/image'
import { HeroBanner } from '../components/HeroBanner';

import { Layout } from '../layout';

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
    </Layout>
  )
}
