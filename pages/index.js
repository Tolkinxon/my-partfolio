import Head from 'next/head'
import Navbar from '../components/Navbar'
import Icons from '@/components/Icons'
import Header from '../components/Header'

export default function Home() {

  const logging = (e) => {
    console.log(e);
  }
 

  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name="Tolkinxon" content="about tesla company" />
      </Head>
      <div className="container" onScroll={(e) => logging(e)}>
        <Navbar />
        <Icons />
        <div className="content">
          <Header />
        </div>
      </div>
    </>
  )
}
