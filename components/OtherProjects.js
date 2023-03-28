import React, { useEffect } from 'react'
import style from '../styles/OtherProjects.module.css'
import { useState } from 'react'


const OtherProjects = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      
    })
  },[])

  return (
    <div className={style.OtherProjects}>
      <h1>Other Noteworthy Projects</h1>
      <span>
        <span></span>view the archive
      </span>

      <div>
        <div className={style.item}>
          <div className={style.folder}></div>
          <h1>Single application project</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            eligendi qui a iste maiores sapiente natus saepe ut? Illum unde,
            delectus sit beatae velit incidunt modi illo eum excepturi
            accusamus!
          </p>
          <ul className={style.technologies}>
            <li>css</li>
            <li>html</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default OtherProjects
