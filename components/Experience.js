import React from 'react'
import style from '../styles/experience.module.css'

const Experience = () => {
  return (
    <div className={style.experience}>
      <h1>
        <span>02.</span> Where I've Worked <span className={style.line}></span>
      </h1>
      <div>
        <div className={style.selecting}>
          <p>Mohirdev</p>
          <p>Home</p>
          <p>IT centre</p>
        </div>
        <div className={style.selecting_about}>
          <h2>Mohirdev</h2>
          <p>January - june 2017</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              corporis error at ut ipsam ipsa ad repellendus vero dolore amet
              exercitationem, dolores commodi deleniti ratione similique
              sapiente, saepe quod facilis!
            </li>
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
              corporis error at ut ipsam ipsa ad repellendus vero dolore amet
              exercitationem, dolores commodi deleniti ratione similique
              sapiente, saepe quod facilis!
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
