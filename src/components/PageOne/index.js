import React, { useEffect } from 'react'
import './pageone.css'
import devimage from '../../assets/dev-pixelart-2.png'

import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const PageOne = () => {
  

  gsap.registerPlugin(ScrollTrigger);


  
  useEffect(() => {

  
    // gsap.from(".one",{
    //   scale:0.8,
    //   opacity:0,
    //   duration:1,
    // })  

    
    gsap.to(".one-main",{
      scrollTrigger:{
        trigger: ".one-main",
        toggleActions: "restart none reverse none",
        scrub: true,
        start: "bottom 90%",
        end:"bottom center"
      },
      scale: 0.8,
      duration:1
    })

    var move_stack = gsap.timeline({ repeat: -1 })
    move_stack.to(".stack",{
      y:0,
      duration: 1,
      stagger: { each: 0.15, yoyo: true, repeat: -1 },
      ease: "sine.inOut"
    })
  



    // return () =>{

    // };

  },[]);



  return (
    <div className='page one'>
      <div className='one-main'>
        <div className='intro-left'>
          <div className='name'>
          
          <div className='dname'>AMITH AJITH</div>
          <div className='role'> {"(SOFTWARE DEV - DATA)"} </div>
          </div>
          <div className='description'>
          I am a developer, currently based in Bengaluru, India.
          Relatively new to web development, I'm still learning the ropes by myself. 
          I love solving problems, exploring new tech and creating designs.
          </div>
        <div className='techstack'>
          <div className='stack one'>
          . Python . Javascript . C++ .
          </div>
          <div className='stack two'>
          . ReactJS . Flask . GSAP . SkLearn . TensorFlow . Kubeflow .
          </div>
          <div className='stack three'>
          . GCP . AWS . Git . Photoshop .
          </div>
        
        </div>
      </div>
      <div className='intro-right'>
        <img src={devimage} className='devimg' alt="DEV PIC" />
      </div>
      </div>
    </div>
  )
}

export default PageOne