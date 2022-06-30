import React, { useEffect, useRef } from 'react'
import { Power3} from 'gsap'
import {gsap} from 'gsap'
import '../style/PageOne.css'

const PageOne = ({qm,mainref}) => {

    useEffect(()=>{


        const mainel = mainref.current
    
        gsap.to(
          mainel.querySelector(".page.one .heading"),{
              opacity:0,
              x:200,
              scrollTrigger:{
                // containerAnimation: scrollTween,
                trigger: ".page.one",
                start: "right right",
                end: "right left",
                // toggleActions:"restart pause reverse pause",
                scrub: true,
                // pin: true,
              },
            //   duration:3,
              
          })    
        
    
        },[])
    



  return (
    <div className='page one'>
        <div className='heading'>
            Tech Stack
        </div>
        <div className='content'>
            <div className='languages'>
            <div className='heading'>
            Languages
            </div>
          
            <ul>
                <li>JavaScript</li>
                <li>C++</li>
                <li>Python</li>
            </ul>
            </div>
            <div className='frameworks'>
            <div className='heading'>
            Frameworks
            </div>
            <ul>
                <li>ReactJS</li>
                <li>Flask</li>
                <li>GSAP</li>
                <li>Scikit Learn</li>
                <li>TensorFlow</li>
            </ul>
            </div>
            <div className='frameworks'>
            <div className='heading'>
            Frameworks
            </div>
            <ul>
                <li>ReactJS</li>
                <li>Flask</li>
                <li>GSAP</li>
                <li>Scikit Learn</li>
                <li>TensorFlow</li>
            </ul>
            </div>
            <div className='stack'>
              
            </div>
            {/* <div className='languages'>
            Cloud technologies worked on: 
            <ul>
                <li>GCP</li>
                <li>AWS</li>
            </ul>
            </div> */}
           
        </div>
    </div>
  )
}

export default PageOne