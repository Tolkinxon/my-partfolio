import React from 'react'
import style from '../styles/headr.module.css'

const Header = () => {
  return (
    <div className="header">
      <p className={style.p}>Hi, my name is </p>
      <h1 className={style.h1}>Soliyev Tolkinkhon</h1>
      <h2 className={style.h2}>I build things for the web.</h2>
      <p className={style.biography}>
        I am frontend developer and learner backend side web programming. 
        I want to be a fullstack programmer. Now I am learning how build beautiful and awesome 
        web sites. 
      </p>
      <button className='button'>chek out my projects</button>
    </div>
  )
} 

export default Header
