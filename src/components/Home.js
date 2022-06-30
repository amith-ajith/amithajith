import React, { useRef, useMemo } from 'react'
import "../style/Home.css"
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ContainerOne from './ContainerOne';
import ContainerTwo from './ContainerTwo';
import ContainerThree from './ContainerThree';


gsap.registerPlugin(ScrollTrigger);



function useSelectorVertical() {
  const mainref = useRef();
  const qm = useMemo(() => gsap.utils.selector(mainref), [mainref]);
  return [qm, mainref];
}


const Home = () => {

  const [qm, mainref] = useSelectorVertical();  


  return (
    <div className="maincontainer-home" ref={mainref}>
     
      <ContainerOne qm={qm} mainref={mainref}/>
      {/* <ContainerTwo qm={qm} mainref={mainref}/> */}
     <ContainerThree/>
      
    
    </div>
  )
}

export default Home


  





  