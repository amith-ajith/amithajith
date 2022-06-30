import React, { useEffect } from 'react'
import {gsap} from 'gsap'
import aws from '../assets/logos/aws.png'
import Cpp from '../assets/logos/Cpp.png'
import flasklogo from '../assets/logos/flask-logo.png'
import gcp from '../assets/logos/gcp.png'
import greensock from '../assets/logos/greensock.svg'
import javascript from '../assets/logos/javascript.png'
import python from '../assets/logos/python.png'
import react from '../assets/logos/react.png'
import scikit from '../assets/logos/scikit.png'
import tensorflow from '../assets/logos/tensorflow.png'
import '../style/ContainerThree.css'



const ContainerThree = () => {

    useEffect(()=>{

        

    },[])


  return (
    <div className='container three'>
    <div className='heading'>
      Tech Stack
    </div>
    <div className='content'>
      <div className='languages'>
      <img src={javascript} alt="logo" style={{height : "100px"}}/>
        <img src={python} alt="logo" style={{height : "100px"}}/>        
        <img src={Cpp} alt="logo" style={{height : "100px"}}/>
      </div>
      <div className='cloud'>
        <img src={gcp} alt="logo" style={{height : "100px"}}/>
        <img src={aws} alt="logo" style={{height : "100px"}}/>
      </div>
      <div className='frameworks'>
        <img src={react} alt="logo" style={{height : "100px"}}/>
        <img src={flasklogo} alt="logo" style={{height : "100px"}}/>
        <img src={greensock} alt="logo" style={{height : "100px"}}/>
        <img src={scikit} alt="logo" style={{height : "100px"}}/>
        <img src={tensorflow} alt="logo" style={{height : "100px"}}/>
      </div>
        
        
       
        
        
        
    </div>
      </div>
  )
}

export default ContainerThree