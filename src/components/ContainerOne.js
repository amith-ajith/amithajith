import React, { useEffect, useRef } from 'react'
import '../style/ContainerOne.css'
import { Power3} from 'gsap'
import {gsap} from 'gsap'
import pic from '../assets/webdev.svg'

const ContainerOne = ({qm,mainref}) => {

    const containerOneTimeline = useRef();

    useEffect(()=>{

    const mainel = mainref.current

    containerOneTimeline.current = gsap.timeline()
    .fromTo(qm(".container.first .content"),{
      x:"-100px",
      opacity:0
    },
    {
        x: "0px",
        opacity: 1,
        duration: 0.5,
        },

    )  
    .fromTo(qm(".container.first .image"),{
      x:"100px",
      opacity:0
    },
    {
        x: "0px",
        opacity: 1,
        duration: 0.5,
        },"-=0.5"

    )  

    // .fromTo(
    //   mainel.querySelector(".container.first"),{
    //     opacity:0,
    //     y:-100,
    //   },{
    //       opacity:1,
    //       y:0,
    //       // ease: Power3.easeOut,   
    //       duration: 1
    //   }) 

    gsap.to(qm(".container.first .content"),
      {
          y: "-200px",
          scrollTrigger:{
            trigger: ".container.first",
            start: "bottom 80%",
            end: "bottom top",
            toggleActions:"restart pause reverse pause",
            scrub: 1,
          },
          }
        )
 
      gsap.to(qm(".container.first .image"),
      {
          y: "-100px",
          scrollTrigger:{
            trigger: ".container.first",
            start: "bottom 80%",
            end: "bottom top",
            toggleActions:"restart pause reverse pause",
            scrub: 1,
          },
          }
        )
    },[])


  return (
    <div className='container first'>

      <div className='content'>
      <div className='head'>
      Hi, I'm Amith.
      </div>      
      <div className='writeup'>
        {/* Lorem Ipsum */}
        I am a data engineer, current working in Bengaluru, India. I am relatively new to the world of web development, still learning the ropes by myself. I aspire to become a developer that can bring creative ideas to reality.
      </div>
      </div>
      <div className='image'>
        <img src={pic} style={{height:"500px"}}/>
      </div>
      </div>
  )
}

export default ContainerOne