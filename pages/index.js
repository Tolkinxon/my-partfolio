import Head from 'next/head'
import Navbar from '../components/Navbar'
import Icons from '@/components/Icons'
import Header from '../components/Header'

export default function Home() {
  window.addEventListener('scroll', () => {
    console.log('hello world')
  })

  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name="Tolkinxon" content="about tesla company" />
      </Head>
      <div className="container">
        <Navbar />
        <Icons />
        <div className="content">
          <Header />
        </div>
      </div>
    </>
  )
}
