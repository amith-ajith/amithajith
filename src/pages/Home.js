import React, {useEffect } from 'react'
import "../style/Home.css"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ContainerOne from '../components/ContainerOne';



gsap.registerPlugin(ScrollTrigger);




const Home = () => {

  useEffect(()=>{

    gsap.to("body", {
      css: {
        visibility: "visible"
      }
    })

    var actionNav = gsap.to('.maincontainer-navbar',{
      y: "-=90", duration: 0.5, ease: 'power2.in', paused: true
    })

    ScrollTrigger.create({
      trigger: ".maincontainer-navbar",
      start: "top top",
      end: 99999,
      onUpdate: ({progress, direction, isActive}) => {
        if (direction === -1) {
          actionNav.reverse()
        } if (direction === 1 ) {
          actionNav.play()
        } else if (direction === 1 && isActive === true) {
          actionNav.play()
        }
      }
    });
 

    const containerOneTimeline = gsap.timeline()
    
    containerOneTimeline.from(".container.first .content .head",{
      y : 50,
      opacity:0,
      duration: 1,
      ease: "power4.out",
  
    }
    )    
    .from(".container.first .content .writeup",{
      y : 50,
      opacity: 0,
      duration: 1,
      ease: "power4.out",  
    }, "-=0.5"
    )
 
    gsap.to(".container",
    {
        css:{
          backgroundColor : "#041C32",
        },
        immediateRender: false,
        scrollTrigger:{
          trigger: ".container.first",
          start: "bottom 80%",
          end : "bottom 70%",    
          // scrub: true,
          toggleActions: "play none none reverse"
        },
        }
    )
    gsap.to(".container.first .content .head",
    {
        css:{
          color : "#37E2D5",
        },
        immediateRender: false,
        scrollTrigger:{
          trigger: ".container.first",
          start: "bottom 80%",
          end : "bottom 70%",
          duration: 3, 
          scrub: true
     
        },
        }
    )
    gsap.to(".container.first",
        {
           
            scrollTrigger:{
              trigger: ".container.first",
              start: "bottom bottom",
              duration: 5,
              end: "bottom 30%",
              scrub: true,
              pin: true,             
            },
            }
        )  
        
    const stacktimeline = gsap.timeline({
      scrollTrigger:{
        trigger: ".dummy.one",
        start: "top 80%",
        end: "top 40%",
        duration: 1,
        toggleActions: "play none none reverse",
        // scrub: true,
        // markers: true,        
      }
    })
    stacktimeline.to(".container.first .content .stack",
            {
              css : {
                height: "auto"
              },
            }
    
    )

    const scaletimeline = gsap.timeline({
      scrollTrigger:{
        trigger: ".dummy.one",
        start: "top 30%",
        end: "top 20%",
        // scrub: 1,
        toggleActions: "play none none reverse",
        markers: true,
        
      },
    })

    scaletimeline.to(".container.first .content",
    {
        scale: 0.8,
        duration: 0.5,
        
        }
    )
    .to(".container.first .image",{
      scale: 0.9,
      duration: 0.5
    }, "-=0.5")

    
    
    
     
    },[])


  return (
    <div className="maincontainer-home">
     
    <ContainerOne/>
    <div className='container dummy one'>

    </div>

    <div className='container second'>

    </div>
      
    
    </div>
  )
}

export default Home


  





  