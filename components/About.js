import React from 'react'
import Image from 'next/image'
import style from '../styles/about.module.css'
import myImage from '../public/myImage.jpg'
import { useState } from 'react'

const About = () => {
  const [isLogging, setIsLogging] = useState(false)

  const logging = () => {
    setIsLogging(true)
  }
  const outLogging = () => {
    setIsLogging(false)
  }

  return (
    <div className={style.about}>
      <div className={style.content}>
        <span>
          01. <span>About me</span> <div className={style.line}></div>
        </span>
        <p>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
        </p>
        <br />
        <p>
          Fast-forward to today, and Ive had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <br />
        <p>
          Fast-forward to today, and Ive had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p>
        <br />

        <p>
          I also recently launched a course that covers everything you need to
          build a web app with the Spotify API using Node & React. <br /> <br />
          Here are a few technologies Ive been working with recently:
        </p>

        <div className={style.wrapperLi}>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
          <ul>
            <li>TypeScript</li>
            <li>Eleventy</li>
            <li>Eleventy</li>
          </ul>
        </div>
      </div>

      <div
        className={style.image_wrapper}
        style={{
          top: isLogging ? '-40px' : '-35px',
          left: isLogging ? '10px' : '15px',
        }}
      >
        <Image
          src={myImage}
          className={style.image}
          style={{
            top: isLogging ? '-15px' : '-20px',
            left: isLogging ? '-15px' : '-20px',
          }}
        />
        <div
          className={style.image}
          style={{
            top: isLogging ? '-15px' : '-20px',
            left: isLogging ? '-15px' : '-20px',
          }}
          onMouseEnter={() => logging()}
          onMouseOut={() => outLogging()}
        ></div>
      </div>
    </div>
  )
}

export default About
