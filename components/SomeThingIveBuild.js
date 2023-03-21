import React from 'react'
import style from '../styles/SomeThingIveBuild.module.css'

const SomeThingIveBuild = () => {
  return (
    <div className={style.someThingIveBuild}>
      <h1>
        {' '}
        03. <span>Some Things I've Built</span>
      </h1>
      <div className={style.picture}></div>
      <div className={style.content}>
        <h2>Featured project</h2>
        <h2>Spotlify profile</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores veniam, optio, qui magnam, facilis rem placeat modi incidunt saepe deleniti perspiciatis natus maiores soluta accusamus sed itaque vero illum ducimus.</p>
        <ul>
            <li>
                next Js
            </li>
            <li>
                html
            </li>
            <li>
                css
            </li>
            <li>
                bootstrap
            </li>
            <li>
                java Script
            </li>
        </ul>
      </div>
    </div>
  )
}

export default SomeThingIveBuild
