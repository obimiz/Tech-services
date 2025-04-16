import React from 'react'
import missionone from "../../Assets/missionone.jpeg"
import missiotwo from "../../Assets/missiontwo.jpg"
import missionthree from "../../Assets/missionthree.jpg"

export default function MissionVission() {
  return (
    <div className='w-full h-96 bg-white rounded-xl p-6 shadow-md flex justify-center gap-48'>

      <div className='mt-12'>
        <h2 className='text-xl font-bold text-brightBlue mb-4'>OUR MISSION & VISION</h2>
        <h3 className='font-bold text-xl'>Innovating Practical Solutions for a <br /> 
        Sustainable Future</h3>

        <p className='mt-5 text-xl'>Lorem ipsum dolor sit, amet consectetur <br />
        elit.</p> 
        
        <p className='mt-2 text-xl'>Cum, cupiditate! Dolorem voluptatibus omnis <br />
        voluptas, in fugit sunt! Expedita natus rem odio.</p>

        
      </div>
      <div className='flex gap-2 mt-12'>
        <div>
          <img src={missionone} alt="" className='w-44 h-60 rounded'/>
        </div>
        <div>
          <img src={missiotwo} alt="" className='w-48 h-28 rounded'/>
          <img src={missionthree} alt="" className='mt-3 rounded w-48 h-28'/>
        </div>
        

      </div>
      
    </div>
  )
}
