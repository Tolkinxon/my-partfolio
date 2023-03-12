import React from 'react'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        <a href='#'><span>01. </span> About</a>
        <a href='#'><span>02. </span> Experience</a>
        <a href='#'><span>03. </span> Work</a>
        <a href='#'><span>04. </span> Contact</a>
        <button className='button'>Resume</button>
      </div>
    </nav>
  )
}

export default Navbar