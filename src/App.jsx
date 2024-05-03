import './App.css';
import Header from './components/Header/Header'
import About from './components/About/About';
import Experience from './components/Experience/Experience'
import SomeThingIveBuild from './components/SomeThingIveBuild/SomeThingIveBuild'
import OtherProjects from './components/OtherProjects/OtherProjects'
import DesignedBy from './components/DesignedBy/DesignedBy'
import Icons from './components/Icons/Icons'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import { useState, useRef, useEffect } from 'react';


function App() {
  const [loader, setLoader] = useState(true)
  const variable = useRef(null)
  const variable2 = useRef(null)
  const [hideNavbar, setHideNavbar] = useState('')
  const [filter, setFilter] = useState(false)

  const changeFilter = (bool = false) => {
    setFilter(!bool)
  }

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

  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
  
        <Header />
  
    // <>
    //   {loader ? (
    //     <Loader />
    //   ) : (
    //     <>
    //       <Navbar scroll={hideNavbar} changeFilter={changeFilter} />

    //       <div
    //         className="container"
    //         onScroll={(e) => logging(e)}
    //         style={
    //           filter
    //             ? {
    //                 filter: 'blur(5px) brightness(0.7)',
    //                 overflow: 'hidden',
    //               }
    //             : {
    //                 filter: 'blur(0px) brightness(1)',
    //                 overflow: 'scroll',
    //               }
    //         }
    //       >
    //         <div className="content">
    //           <Icons />
    //           {/* <Header />
    //           <About />
    //           <Experience />
    //           <SomeThingIveBuild />
    //           <OtherProjects />
    //           <WhatNext />
    //           <DesignedBy /> */}
    //         </div>
    //       </div>
    //     </>
    //   )}
    // </>
  )
}

export default App;
