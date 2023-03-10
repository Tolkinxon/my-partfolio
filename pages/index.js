import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name="Tolkinxon" content="about tesla company" />
      </Head>
      <div className="container">
        <Navbar />
      </div>
    </>
  )
}
