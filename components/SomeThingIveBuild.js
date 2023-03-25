import React from 'react'
import style from '../styles/SomeThingIveBuild.module.css'
import Image from 'next/image'
import pnng from '../public/image1.png'

const SomeThingIveBuild = () => {
  return (
    <div className={style.someThingIveBuild}>
      <h1>
        03. <span>Some Things I've Built</span> <span></span>
      </h1>
      <Image
        src={pnng}
        className={style.picture}
        width={400}
        alt="there have a background image"
      />
      <div className={style.content}>
        <h2>Featured project</h2>
        <h2>Spotlify profile</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          veniam, optio, qui magnam, facilis rem placeat modi incidunt saepe
          deleniti perspiciatis natus maiores soluta accusamus sed itaque vero
          illum ducimus.
        </p>
        <ul>
          <li>next Js</li>
          <li>html</li>
          <li>css</li>
          <li>bootstrap</li>
          <li>java Script</li>
        </ul>
        <div className={style.icons}>
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-external-link"
          >
            <title>External Link</title>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </div>
      </div>


 
      
    </div>
  )
}

export default SomeThingIveBuild
