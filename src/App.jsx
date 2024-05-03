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



  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 2000)
  }, [])

  return (
  

    <>
      {loader ? (
        <Loader />
      ) : (
        <>
  
              <Navbar />
              <Icons />
              <Header />
              {/* <About />
              <Experience />
              <SomeThingIveBuild />
              <OtherProjects />
              <DesignedBy /> */}
        
        
        </>
      )}
    </>
  )
}

export default App;
