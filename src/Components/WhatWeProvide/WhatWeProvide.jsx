import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlutter } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlassChart } from '@fortawesome/free-solid-svg-icons';
import { faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faBarsProgress } from '@fortawesome/free-solid-svg-icons';

export default function WhatWeProvide() {
  return (
    <div className='w-full h-auto bg-white p-6 shadow-md justify-center'>
      <h3 className='text-center mt-8 text-xl font-bold text-brightBlue'>WHAT WE PROVIDE</h3>
      <p className='text-center text-xl font-bold mt-6'>Satisfied Customers. Empowered Employees. That's Real Impact.</p>

      <div className='flex gap-9 justify-center mt-8'>
        <p className='bg-royalBlue text-white rounded-lg p-4 text-lg font-medium border-2 border-blue-300'>Systems Integration</p>
        <p className='bg-lightMint rounded-lg p-4 text-black-700 text-lg font-medium border-2 border-blue-400'>Managed IT Services</p>
        <p className='bg-lightMint rounded-lg p-4 text-lg font-medium text-black border-2 border-blue-400'>Application Services</p>
        <p className='bg-lightMint rounded-lg p-4 text-lg font-medium text-black border-2 border-blue-400'>Infrastructure Services</p>
      </div>

      <div className='bg-lightMint rounded-xl border-8 border-black w-[80%] h-[35rem] mt-16 justify-center 
      item-center ml-32'>
        <p className='mt-5 text-center text-lg font-bold'>We integrate your IT systems to enhance efficiency and enable real-time <br />
            data sharing, ensuring smooth collaborations between your applications 
        </p>

        <div className='flex container mt-10 gap-5 items-center justify-center'>
          <div>
            <div className='bg-white w-60 h-48 p-3 rounded'>
              <div className='h-12 w-12 bg-royalBlue rounded'><FontAwesomeIcon icon={faFlutter} 
              className='text-white text-xl p-3'/></div>
              <h2 className='text-lg font-bold mt-3'>Lorem ipsum dolor </h2>
              <p className='mt-2'>Sit amet consectetur adipisicing elit. 
              Enim sit laudantium repudiandae eos.</p>
            </div>
            <div className='bg-white w-60 h-48 p-3 rounded mt-5'>
            <div className='h-12 w-12 bg-royalBlue rounded'>
            <FontAwesomeIcon icon={faDatabase} className='text-white text-xl p-3'/>
            </div>
            <h2 className='text-lg font-bold mt-3'>Lorem ipsum dolor </h2>
              <p className='mt-2'>Sit amet consectetur adipisicing elit. 
              Enim sit laudantium repudiandae eos.</p>
            </div>
          </div>
          <div className=''>
            <div className='bg-white w-60 h-48 p-3 rounded'>
            <div className='h-12 w-12 bg-royalBlue rounded'>
              <FontAwesomeIcon icon={faMagnifyingGlassChart} className='text-white text-xl p-3'/></div>
              <h2 className='text-lg font-bold mt-3'>Lorem ipsum dolor </h2>
              <p className='mt-2'>Sit amet consectetur adipisicing elit. 
              Enim sit laudantium repudiandae eos.</p>
            </div>
            <div className='bg-white w-60 h-48 p-3 rounded mt-5'>
            <div className='h-12 w-12 bg-royalBlue rounded'>
              <FontAwesomeIcon icon={faAirbnb} className="text-white text-xl p-3" />

            </div>
            <h2 className='text-lg font-bold mt-3'>Lorem ipsum dolor </h2>
              <p className='mt-2'>Sit amet consectetur adipisicing elit. 
              Enim sit laudantium repudiandae eos.</p>
            </div>
          </div>
          <div>
            <div className='bg-white w-60 h-48 p-3 rounded'>
            <div className='h-12 w-12 bg-royalBlue rounded'>
            <FontAwesomeIcon icon={faJs} className="text-white text-xl p-3" />
            </div>
            <h2 className='text-lg font-bold mt-3'>Lorem ipsum dolor </h2>
              <p className='mt-2'>Sit amet consectetur adipisicing elit. 
              Enim sit laudantium repudiandae eos.</p>
            </div>
            <div className='bg-white w-60 h-48 p-3 rounded mt-5'>
            <div className='h-12 w-12 bg-royalBlue rounded'>
            <FontAwesomeIcon icon={faBarsProgress} className="text-white text-xl p-3" />

            </div>
            <h2 className='text-lg font-bold mt-3'>Lorem ipsum dolor </h2>
              <p className='mt-2'>Sit amet consectetur adipisicing elit. 
              Enim sit laudantium repudiandae eos.</p>
            </div>
          </div>
          
          
          
        </div>

      </div>
    </div>
  )
}
