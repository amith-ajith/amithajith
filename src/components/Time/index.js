import React from 'react'
import './time.css'

const Time = ({data}) => {
    const text_list = ["-","-","-"]
  return (
    <div className='time-main'>
        <div className='time-left'>
            {data.time}
        </div>
        <div className='time-center'>
            {text_list.map((item,i) => (<div key={i} className='dot'> {item} </div>))}
        </div>
        <div className='time-right'>
            <div className='time-title'>
                {data.title}
            </div>
            <div className='time-desc'>
                {data.description}
            </div>
        </div>
        
    </div>
  )
}

export default Time