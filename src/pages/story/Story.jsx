import React from 'react'
import HorizontalScroll from "react-scroll-horizontal";
import Component1 from './Component1/Component1'
import Component2 from './Component2/Component2'
import Component3 from './Component3/Component3'
import Component4 from './Component4/Component4'
import Component5 from './Component5/Component5';
import Component6 from './Component6/Component6';
import Component7 from './Component7/Component7';
import Component8 from './Component8/Component8';
import Component9 from './Component9/Component9';
import Component10 from './Component10/Component10';
import Component11 from './Component11/Component11';
import Component12 from './Component12/Component12';
const Story = () => {
  return (
    <div  style={{height: '100vh', width: '100vw'}}>
      <HorizontalScroll reverseScroll={true}>
        <Component1 />
        <Component2 />
        <Component3/>
        <Component4/>
        <Component5/>
        <Component6/>
        <Component7/>
        <Component8/> 
        <Component9/>
        <Component10/>
        <Component11/>
        <Component12/>
      </HorizontalScroll>
    </div>
  )
}

export default Story