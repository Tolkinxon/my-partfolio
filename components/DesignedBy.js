import React from 'react'
import style from '../styles/DesignedBy.module.css'

const DesignedBy = () => {
  return (
    <div className={style.contianer}>

      <h1>Designed & Built by Soliyev Tolkinxon</h1>
      <span className={style.svg}>
      <svg  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><title>Star</title><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </span>
   
    </div>
  )
}

export default DesignedBy
