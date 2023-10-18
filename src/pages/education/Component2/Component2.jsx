import React from 'react'
import './Component2.css'
import line from '../assets/line.png'
const Component2 = () => {
  return (
    <div className='Education-Component2-div'>
        <div className='Education-Component2-content'>
        <p className='Education-Component2-heading'>Testimonial</p>
        <div className='Education-Component-text-content'>
        <p className='Education-Component2-text'>“Lorem ipsum dolor sit amet consectetur. Enim lectus ornare sit volutpat cras sit.”</p>
        {/* <p className='Education-Component2-text'>The quality of their collection is exemplary. They are honest and knowledgeable professionals with a passion for antiques. Each interaction has been wonderful.</p> */}
        </div>
        
        </div>
        <div className='Education-Component2-bottom'>
        <p className='Education-Component2-name'>PERSON NAME</p>
          <img src={line} className='Education-Component2-line'/>
        </div>
    </div>
  )
}

export default Component2