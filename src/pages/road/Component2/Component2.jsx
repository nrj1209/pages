import React from 'react'
import '../Component2/Component2.css'
import left from '../assets/left.jpeg'
import middle from '../assets/roadbg.png'
import right from '../assets/right.jpeg'
const Component2 = () => {
  return (
    <div className='road-Component2-div'>
    <img className='road-Component2-left' src={left}/>
    <img className='road-Component2-middle' src={middle}/>
    <img className='road-Component2-right' src={right}/>
    </div>
  )
}

export default Component2