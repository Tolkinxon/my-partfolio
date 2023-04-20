import React, { useEffect, useState } from 'react'
import styles from '../styles/navbar.module.css'

const Navbar = ({ scroll, changeFilter }) => {
  const [clicking, setClicking] = useState(false)

useEffect(() => {
  document.addEventListener('DOMContentLoaded', () => {
    const movingWIdth = document.querySelector('.selects_wrapper') 
    const widthSelectW = document.getComputedStyle(movingWIdth).width
    console.log(widthSelectW);
  })
}, [])
 

  const hideAndShow = () => {
    setClicking(!clicking)
    changeFilter(clicking)
  }

  return (
    <nav className={styles.navbar} style={{ top: scroll }}>
      <div className={styles.box_container}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}>S</div>
      </div>

      <div
        className={styles.selects_wrapper}
        style={
          clicking
            ? { transform: 'translateX(-300px)' }
            : { transform: 'translateX(0px)' }
        }
      >
        <div className={styles.selects}>
          <a href="#">
            <span>01. </span> About
          </a>
          <a href="#">
            <span>02. </span> Experience
          </a>
          <a href="#">
            <span>03. </span> Work
          </a>
          <a href="#">
            <span>04. </span> Contact
          </a>
          <button className="button">Resume</button>
        </div>
      </div>

      <div className={styles.hide_selects} onClick={hideAndShow}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
