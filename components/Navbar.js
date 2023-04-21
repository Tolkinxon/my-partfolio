import React, { useEffect, useState, useRef } from 'react'
import styles from '../styles/navbar.module.css'

const Navbar = ({ scroll, changeFilter }) => {
  const [clicking, setClicking] = useState(false)
  const elem = useRef(null)

  useEffect(() => {
    elem.current = document.querySelector(
      '.navbar_selects_wrapper__A_8BC',
    ).offsetLeft
    console.log(elem.current)
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
            ? { transform: `translateX(${elem.current}px)` }
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
