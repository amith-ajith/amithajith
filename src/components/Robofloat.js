import React from 'react'
import { useEffect } from 'react'
import robolh from '../assets/robo-hand-left.png'
import roborh from '../assets/robo-hand-right.png'
import lightbulb from '../assets/cyborg-light-bulb-5.png'
import roboface from '../assets/cyborg-robot-face.png'
import {gsap} from 'gsap'
import { Power1 } from 'gsap'
import '../style/Robofloat.css'

const Robofloat = ({qm}) => {

useEffect(()=>{
    gsap.to(qm(".bulb"),{
        y: "-40px",
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        duration: 2,
      })

    gsap.to(qm(".hand"),{
        y: "-40px",
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        duration: 2,
        stagger: 1
      })
      gsap.to(qm(".roboface"),{
        y: "-20px",
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        duration: 2,
      })
},[])
  return (
    <div className='backgrnd'>  
    <div className='imagewrapper'>
      <div className='bulb'>
        <img src={lightbulb} alt="bulb" style={{width : "100px"}}/>
      </div>
      <div className='robobody'>
        <img src={robolh} alt="lefthand" className="hand" style={{width : "60px"}}/>          
        <img src={roboface} alt="roboface" className="roboface" style={{width : "100px"}}/>
        <img src={roborh} alt="righthand" className="hand" style={{width : "60px"}}/>
      </div>
    </div>
    
    
    </div>
  )
}

export default Robofloat