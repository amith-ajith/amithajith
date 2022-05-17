import React, { useEffect, useRef } from 'react'
import css from "../style/Home.css"
import {gsap} from 'gsap'

const Home = () => {

  const boxRef = useRef();
  const q = gsap.utils.selector(boxRef);

  useEffect(()=>{
    gsap.to(q(".box"),{
      rotation : "360"

    })
  },[])


  return (
    <div className="maincontainer-home">
      <div className="subcontainer first" ref={boxRef} >
        <div className="box" > 
        </div>
        <div className="box"> 
        </div>
        Hi I'm Amith
      </div>
      <div className="subcontainer">
        Hi I'm Amith
      </div>
    </div>
  )
}

export default Home