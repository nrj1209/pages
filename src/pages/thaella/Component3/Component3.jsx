import React from 'react'
import './Component3.css'
import left from '../assets/left.png'
import right from '../assets/right.png'
const Component3 = () => {
  return (
    <div className='Component3-div'>
        <div className='Component3-left'>
            <img className='Component3-left-img' src={left}/>
        </div>
        <div className='Component3-middle'>
            <p className='Component3-heading'>How We Started?</p>
            <p className='Component3-heading-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra elementum dictum. Etiam laoreet neque dapibus, consectetur massa id, euismod urna. Morbi eu ex at risus volutpat laoreet eu vel sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer ac ultricies leo, at sodales arcu. Sed nec orci magna. Cras quis massa id augue imperdiet ornare. Vivamus pellentesque id dolor non gravida. Nullam nec justo a purus fermentum malesuada sit amet id urna. Mauris mollis lectus mattis, eleifend felis non, dignissim quam.
            </p>
        </div>
        <div className='Component3-right'>
            <img className='Component3-right-img' src={right}/>
        </div>
    </div>
  )
}

export default Component3