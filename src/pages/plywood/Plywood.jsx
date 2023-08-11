import React from 'react'
import Component1 from '../plywood/Component1/Component1'
import Component2 from '../plywood/Component2/Component2'
import Component3 from '../plywood/Component3/Component3'
import Component4 from '../plywood/Component4/Component4'
import Component5 from '../plywood/Component5/Component5'
import Component6 from '../plywood/Component6/Component6'

const Plywood = () => {
  return (
    <div className='plywood'>
        <Component1/>
        <Component6/>
        <Component2/>
        <Component3/>
        <Component4/>
        <Component5/>
    </div>
  )
}

export default Plywood