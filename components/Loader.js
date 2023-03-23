import React from 'react'
import style from '../styles/loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.box_container}>
        <div className={style.box}> <span></span><span></span> </div>
        <div className={style.box}> <span></span><span></span>  </div>
        <div className={style.box}> <span></span><span></span>  </div>
      </div>
    </div>
  )
}

export default Loader
