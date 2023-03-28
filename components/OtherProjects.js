import React, { useEffect } from 'react'
import style from '../styles/OtherProjects.module.css'
import { useState } from 'react'


const OtherProjects = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    setData({
      nameProject: 'Single application project',
      descriptionProject: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      eligendi qui a iste maiores sapiente natus saepe ut? Illum unde,
      delectus sit beatae velit incidunt modi illo eum excepturi
      accusamus!'`,
      usingTechnoligies: ['css', 'bootstrap']
    })
  },[])

  return (
    <div className={style.OtherProjects}>
      <h1>Other Noteworthy Projects</h1>
      <span>
        <span></span>view the archive
      </span>

      <div>
        {data.map(thing => (
          <>
            <div className={style.item}>
              <div className={style.folder}></div>
              <h1>{thing.nameProject}</h1>
              <p>
                {thing.descriptionProject}
              </p>
              <ul className={style.technologies}>
                {thing.usingTechnoligies.map(arr => (
                  <>
                    <li>{arr}</li>
                  </>
                ))}
              </ul>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default OtherProjects
