import React from 'react'
import './Component4.css'
import retaillogo from '../assets/retaillogo.svg'
const Component4 = () => {
  return (
    <div className='retail-Component4-div'>
        <p className='retail-Component4-heading'>About</p>
      <div className='retail-Component4-main'>
        <img src={retaillogo} className='retail-Component4-img'/>
        <div className='retail-Component4-content'>
            <p className='retail-Component4-content-1'>
              Lorem ipsum dolor sit amet consectetur. Neque eros vitae mattis orci cursus. Consequat massa sed eu maecenas. Sagittis lectus quis adipiscing faucibus maecenas. Sed vulputate placerat a nunc cursus.            </p>
            <p className='retail-Component4-content-2'>
                Ullamcorper risus gravida in orci. Eget et bibendum at consequat vel et elit vitae id. Malesuada tincidunt auctor a amet in ultricies sit id. Aliquet tortor pellentesque convallis faucibus feugiat dictum augue. Morbi sed diam viverra.             </p>
        </div>
      </div>
    </div>
  )
}

export default Component4       