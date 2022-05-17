import React, { useEffect, useRef } from 'react'
import css from "../style/Home.css"
import {gsap} from 'gsap'

const Home = () => {

  const boxRef = useRef();
  const q = gsap.utils.selector(boxRef);

  useEffect(()=>{
    gsap.fromTo(boxRef.current,{
      y : -100,opacity:0
    },{y: -50, opacity:1,duration: 2})
  },[])


  return (
    <div className="maincontainer-home">
      <div className="subcontainer first" ref={boxRef} >
       
        Hi I'm Amith
      </div>
      {/* <div className="subcontainer">
        Hi I'm Amith
      </div> */}
    </div>
  )
}

export default Home