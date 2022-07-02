import React, { useEffect } from 'react'
import '../style/ContainerOne.css'
import dev_day from '../assets/handcoding.png'
import dev_night from '../assets/webdev_night.svg'

const ContainerOne = () => {

    useEffect(() =>{
      console.log('render')
    },[])

  


  return (
    <div className='container first'>

      <div className='content'>
      <div className='head'>
      Hi, I'm Amith.
      </div>      
      <div className='writeup'>
        {/* Lorem Ipsum */}
        I am an aspiring developer, currently based in Bengaluru, India. I am relatively new to web development, still learning the ropes by myself. I love solving problems, exploring new tech and creating designs.
      </div>
      <div className='stack'>
        <div className='languages line'>
         . Javascript . Python . C++ .
        </div>
        <div className='frameworks line'>
         . ReactJS . Flask . GSAP . SkLearn . TensorFlow . Kubeflow .
        </div>
        <div className='others line'>
         . GCP . AWS . Git . Photoshop . 
        </div>
        
      </div>
      </div>
      <div className='image'>      
        <div className='day'>
        <img src={dev_day} alt="coder"/>
        </div>  
        {/* <div className='night'>
        <img src={dev_night} alt="coder"/>
        </div> */}

        <div>
        </div>
        
        
        
        
      </div>
      </div>
  )
}

export default ContainerOne