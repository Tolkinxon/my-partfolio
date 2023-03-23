import React from 'react'
import style from '../styles/loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={style.box_container}>
        <div className={style.box}> <div></div><div></div>  </div>
        <div className={style.box}> <div></div><div></div>  </div>
        <div className={style.box}> <div></div><div></div>  </div>
        <div className={style.box}><h1>S</h1></div>

      </div>
    </div>
  )
}

export default Loader
