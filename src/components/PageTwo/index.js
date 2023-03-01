import React from 'react'
import { useEffect } from 'react'
import './pagetwo.css'
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import timelineData from './timeline.json'
import Time from '../Time'


const PageTwo = () => {


  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {

    
    gsap.from(".two-main",{
      scrollTrigger:{
        trigger: ".two-main",
        toggleActions: "restart none reverse none",
        // markers: true,
        scrub: 1,
        start: "top 50%",
        end:"top top"
      },
      scale: 0.8,
      duration:2
    })

    var zoom_cards = gsap.timeline({ repeat: -1})
    zoom_cards.to(".time-right",{
      scale:1.05,
      duration: 2,
      stagger: { each: 0.66, yoyo: true, repeat: -1},
      ease: "sine.inOut"
    })

    // var zoom_dots = gsap.timeline({ repeat: -1})
    // zoom_dots.to(".dot",{
    //   scale:1.3,
    //   duration: 5,
    //   stagger: { each: 0.33, yoyo: true, repeat: -1},
    //   ease: "sine.inOut"
    // })


 

  },[]);
  return (
    <div className='page'>
      <div className='two-main'>
       <div className='section-timeline'>
        <div className='section-heading'>
        Timeline
        </div>
        <div className='section-content'>
          {timelineData.map((item) => (<Time key={item.id} data={item}/>))}
        </div>
        
       </div>
      </div>
    </div>
  )
}

export default PageTwo