import React from 'react'
import './pageone.css'
import devimage from '../../assets/dev-pixelart-2.png'
const PageOne = () => {
  return (
    <div className='page one-main'>
      <div className='intro-left'>
      <div className='name'>
      Hi, I'm Amith.
      </div>
      <div className='description'>
      I am a developer, currently based in Bengaluru, India.
      Relatively new to web development, I'm still learning the ropes by myself. 
      I love solving problems, exploring new tech and creating designs.
      </div>
      <div className='stack'>
      <div className='one'>
      . Python . Javascript . C++ .
      </div>
      <div className='one'>
      . ReactJS . Flask . GSAP . SkLearn . TensorFlow . Kubeflow .
      </div>
      <div className='one'>
      . GCP . AWS . Git . Photoshop .
      </div>
      
      </div>
      </div>
      <div className='intro-right'>
        <img src={devimage} className='devimg' alt="DEV PIC" />
      </div>

    </div>
  )
}

export default PageOne