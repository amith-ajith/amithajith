import React from 'react'
import css from '../style/ResumePage.module.css'

const ResumePage = () => {
  return (
    <div className={css.maincontainer}>
    <div className={css.resume}>
    <iframe title='resume' src="https://drive.google.com/file/d/1usTWBb83WRNXb2xXGKfNOzTeQ-zx-urL/preview" width="100%" height="100%"  allow="autoplay"></iframe>
    </div>
    </div>
  )
}

export default ResumePage


// https://drive.google.com/file/d/1usTWBb83WRNXb2xXGKfNOzTeQ-zx-urL/view?usp=sharing