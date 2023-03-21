import Head from 'next/head'
import Navbar from '../components/Navbar'
import Icons from '@/components/Icons'
import Header from '../components/Header'
import About from '../components/About'
import SomeThingIveBuild from '@/components/SomeThingIveBuild'
import { useRef, useState } from 'react'
import Experience from '@/components/Experience'

export default function Home() {
  const variable = useRef(null)
  const variable2 = useRef(null)
  const [hideNavbar, setHideNavbar] = useState('')

  const logging = (e) => {
    variable2.current = variable.current
    variable.current = e.target.scrollTop

    if (variable2.current < variable.current) {
      setHideNavbar('-70px')
    }
    if (variable2.current > variable.current) {
      setHideNavbar('0px')
    }
    if (0 === variable.current) {
      setHideNavbar('15px')
    }
  }

  return (
    <>
      <Head>
        <title>my portfolio</title>
        <meta name="Tolkinxon" content="about tesla company" />
      </Head>
      <div className="container" onScroll={(e) => logging(e)}>
        <Navbar scroll={hideNavbar} />
        <Icons />
        <div className="content">
          <Header />
          <About />
          <Experience />
          <SomeThingIveBuild />
        </div>
      </div>
    </>
  )
}
