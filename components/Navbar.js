import React from 'react'
import styles from '../styles/navbar.module.css'

const Navbar = ({ scroll }) => {
  console.log(scroll)

  return (
    <nav className={styles.navbar} style={{ top: scroll }}>
      <div className={styles.box_container}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
      </div>

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
    </nav>
  )
}

export default Navbar
