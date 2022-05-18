import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="a clone of facebook with next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/> 
    </div>
  )
}
