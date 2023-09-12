import React from 'react'
import './Component2.css'
import line from '../assets/line.png'
const Component2 = () => {
  return (
    <div className='idea-Component2-div'>
        <div className='idea-Component2-content'>
        <p className='idea-Component2-heading'>Testimonial</p>
        <div className='idea-Component-text-content'>
        <p className='idea-Component2-text'>“Lorem ipsum dolor sit amet consectetur. Enim lectus ornare sit volutpat cras sit.”</p>
        {/* <p className='idea-Component2-text'>The quality of their collection is exemplary. They are honest and knowledgeable professionals with a passion for antiques. Each interaction has been wonderful.</p> */}
        </div>
        
        </div>
        <div className='idea-Component2-bottom'>
        <p className='idea-Component2-name'>PERSON NAME</p>
          <img src={line} className='idea-Component2-line'/>
        </div>
    </div>
  )
}

export default Component2