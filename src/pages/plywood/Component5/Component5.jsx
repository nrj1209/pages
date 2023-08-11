import React from 'react'
import './Component5.css'
import drawing from '../assets/drawing.png'

const Component5 = () => {
  return (
    <div className='plywood-Component5-div'>
        <p className='plywood-Component5-heading'>Highlight Moment</p>
        <img className='plywood-Component5-img' src={drawing}/>
        <div className='plywood-Component5-div2'>
            <div className='plywood-Component5-div2-1'>
                <div className='plywood-Component5-div2-1-1'>
                Moment Name
                </div>
                <div className='plywood-Component5-div2-1-2'>
                    Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. Lorem ipsum dolor sit amet consectetur. A mi urna ornare eu auctor tincidunt malesuada ut porta. 
                </div>
            </div>
            <div className='plywood-Component5-div2-2'>
                <div className='plywood-Component5-div2-2-1'>2002</div>
                <div className='plywood-Component5-div2-2-2'>Kolkata</div>
            </div>
            
        </div>
    </div>
  )
}

export default Component5