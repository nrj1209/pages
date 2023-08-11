import React from 'react'
import  './Component3.css'
import bed1 from '../assets/bed1.png'
import table1 from '../assets/table1.png'
const Component3 = () => {
  return (   
    <div className=' plywood-Component3-div'>
        <p className=' plywood-Component3-heading'>How We Started?</p>
        <p className=' plywood-Component3-div2'>During World War II, the army needed a lot of timber but it was 
        in short supply. My father kept our door and kitchen open to all army personnel. He said this was the least we could do;
        Generals, Captains and Jawaan's alike were risking their lives. A group of fifteen came for Diwali-dinner in 1945. After a hearty 
        dinner of over 15o puri's and accompaniments, they got talking. They shared both heart-warming as well as gut-wrenching stories
        . They asked if we could organise a large supply of woolens for them. "Consider it done: my father said in his deep voice. They joked "Can you organise large supplies of timber also". After an hour of discussions, the entrepreneur in my father realised this was a good opportunity; it was a win-win, and he had 
        illng customers. Six months later, in the midst of the war, Bawri Timber industries wasborne
        </p>
        <div className=' plywood-Component3-img-container'>
            <img className=' plywood-Component3-bed' src={bed1}/>
            <img className=' plywood-Component3-table' src={table1}/>
        </div>
    </div>
  )
}

export default Component3