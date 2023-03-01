import React, { useEffect } from 'react'
import './pageone.css'
import gsap from 'gsap'

const PageOne = () => {

  useEffect(() => {

    gsap.from('.block-one-wrapper.before', { yPercent: 100,x: 100, delay: 1 });

  },[])


  return (
    <div className='page one'>
      <div className='one-main'>
        <div className='block one'>
          <div className='block-one-wrapper'>
            <div className='before'>
              AMITH AJITH
            </div>
            <div className='after'>
              AMITH AJITH
            </div>
          </div>          
        </div>
        <div className='block two'>
        </div>
        <div className='block three'>
        </div>
        <div className='block four'>
        </div>
        <div className='block five'>
        </div>
        <div className='block six'>
        </div>
      </div>
    </div>
  )
}

export default PageOne