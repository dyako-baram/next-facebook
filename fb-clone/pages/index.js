import Head from 'next/head'
import Header from '../components/Header'
import Login from '../components/Login'
import { getSession } from 'next-auth/react';

export default function Home({session}) {
 //fb  if(!session) return(<Login/>)
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
export async function getServerSideProps(context){
  const session = await getSession(context)
  return{
    props:{
      session
    }
  }
}