import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger, SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
    <div>
        <h1 className='text-3xl'>HELLO</h1>
      App
    </div>
  )
}

export default App

