import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {gsap} from 'gsap'

function App() {

  gsap.to(".container",{
    x: 800,
    duration: 2,
    delay: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  })

  // gsap.from(".card",{
  //   x:900,
  //   duration: 2,
  //   delay: 1,
  //   repeat: -1,
  //   yoyo: true,
  //   ease: "power1.inOut"
  // })

  return (
    <>
    <div className="container">
      <h1 className='title'>Hello World</h1>
    </div>

    <div className="card">
    </div>
       
    </>
  )
}

export default App
