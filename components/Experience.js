import React from 'react'
import style from '../styles/experience.module.css'
import { useState, useEffect, useRef } from 'react'

const Experience = () => {
  const [active, setActive] = useState({})
  const [content, setContent] = useState([])
  const ref = useRef(null)

  const element = ref.current

  const element2 = document.getElementById('hello')
  console.log(element2);

  

  const Active = (e, id) => {
    let h = 0
    if (e !== null) {
      h = getComputedStyle(e.target).height
    }

    console.log()
    setActive({
      scrol: {
        transform: e !== null ? `translateY(${parseInt(h) * id}px)` : null,
        height: e !== null ? h : null,
      },
      id: id,
    })
  }

  useEffect(() => {
    setContent(['Mohirdev', 'Home', 'IT centre', 'hello world', 'goods'])
    Active(null, 0)
  }, [])

  return (
    <div className={style.experience}>
      <h1>
        <span>02.</span> Where I've Worked <span className={style.line}></span>
      </h1>
      <div>
        <div className={style.selecting}>
          <div className={style.box} style={active.scrol}></div>
          {content.map((item, idx) => (
            <>
              <p
                id="hello"
                ref={ref}
                key={idx}
                onClick={(e) => Active(e, idx)}
                className={idx === active.id ? 'p active' : 'p'}
              >
                {item}
              </p>
            </>
          ))}
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
