import React, { useEffect } from 'react'
import style from '../styles/OtherProjects.module.css'
import { useState } from 'react'

const OtherProjects = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData([
      {
        nameProject: 'Single application project',
        descriptionProject: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      eligendi qui a iste maiores sapiente natus saepe ut? Illum unde,
      delectus sit beatae velit incidunt modi illo eum excepturi
      accusamus!'`,
        usingTechnoligies: ['css', 'bootstrap'],
      },
    ])
  }, [])

  return (
    <div className={style.OtherProjects}>
      <h1>Other Noteworthy Projects</h1>
      <span>
        <span></span>view the archive
      </span>

      <div>
        {data.map((thing) => (
          <>
            <div className={style.item}>
              <i></i>
              <div className={style.folder}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-folder"
                >
                  <title>Folder</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-github"
                >
                  <title>GitHub</title>
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </div>
              <h1>{thing.nameProject}</h1>
              <p>{thing.descriptionProject}</p>
              <ul className={style.technologies}>
                {thing.usingTechnoligies.map((arr) => (
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
