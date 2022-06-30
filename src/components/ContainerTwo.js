import React, { useEffect, useRef, useMemo } from 'react'
import '../style/ContainerTwo.css'
import {gsap} from 'gsap'
import PageOne from './PageOne';
import PageTwo from './PageTwo';

function useSelectorHorizontal() {
    const ref = useRef();
    const q = useMemo(() => gsap.utils.selector(ref), [ref]);
    return [q, ref];
    }

const ContainerTwo = ({qm,mainref}) => {


const [q, ref] = useSelectorHorizontal();

useEffect(()=>{
    gsap.to(q(".page"),{
        xPercent: -100*(q(".page").length-1),
        ease: "none",
        scrollTrigger:{
          trigger: ref.current,
          scrub:true,
          pin: true,
        
          // snap: 1/(q(".page").length - 1),
          // end: ()=> "+="+ `${ref.current.offsetWidth*1}`,
          end: ()=> "+=4000"
        },
        
      })
  

},[])


  return (
    <div className='container horizontal second' ref={ref}>
      <div className='pages-wrap' >

      <PageOne qm={qm} mainref={mainref}/>
      <PageTwo qm={qm} mainref={mainref}/>


      </div>
      </div>
  )
}

export default ContainerTwo