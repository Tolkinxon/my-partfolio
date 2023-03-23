import React from 'react'
import style from '../styles/loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.box_container}>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}></div>
        <div className={style.box}>S</div>
      </div>

    </div>
  )
}

export default Loader