import Head from 'next/head'
import Navbar from '../components/Navbar'
import Icons from '@/components/Icons'


export default function Home() {
  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name="Tolkinxon" content="about tesla company" />
      </Head>
      <div className="container">
        <Navbar />
        <Icons />
      </div>
    </>
  )
}
