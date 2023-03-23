import React from 'react'
import style from '../styles/loader.module.css'

const Loader = () => {
  return (
    <div className={style.loader}>
      <div className={styles.box_container}>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        <div className={styles.box}>S</div>
      </div>

    </div>
  )
}

export default Loader