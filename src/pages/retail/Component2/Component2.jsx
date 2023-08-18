import React from 'react'
import '../Component2/Component2.css'
import line from '../assets/line.png'
const Component2 = () => {
  return (
    <div className='retail-Component2-div'>
        <div className='retail-Component2-content'>
        <p className='retail-Component2-text'>
        “Lorem ipsum dolor sit amet consectetur. Enim lectus ornare sit volutpat cras sit.”
        </p>
        </div>
        <div className='retail-Component2-bottom'>
          <img src={line} className='retail-Component2-line'/>
          <p className='retail-Component2-name'>Person Name</p>
        </div>
    </div>
  )
}

export default Component2