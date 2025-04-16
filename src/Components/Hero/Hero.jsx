import React from 'react'
import worldmap from '../../Assets/worldmap.png'
import cat from '../../Assets/cat.png'
import google from '../../Assets/google.png'
import amazon from '../../Assets/amazon.png'
import apple from '../../Assets/apple.png'
import activasion from '../../Assets/activasion.png'


export default function Hero() {
  return (
    <section className='bg-gradient-to-r from-deepBlue to-brightBlue text-white min-h-screen items-center
    justify-center'>
        <div className='flex px-32'>
      <div className='text-center lg:text-left max-w-xl mt-32'>
      <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-grey-800 mb-4 leading-snug'>Innovative IT Solutions<br />
            For a Sustainable Future
        </h2>
        <p className='text-grey-600 text-base md:text-lg mb-6'>
            Experience-Driven Solutions for Unstoppable Business Growth
        </p>

        <button className='bg-brightBlue hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold 
        transition-all duration-300 mt-6'>Explore More</button>
       
      </div>
      <div className='w-60 md:w-100 lg:w-[20rem] mx-auto mr-5 mb-30'>
      <img src={worldmap} alt="heroimg" className='w-ful h-auto object-contain'/>
      </div>

      </div>
      <div>
        <p className='text-center md:text-4xl lg:text-xl font-bold text-grey-800 mb-4 mt-20'>TRUSTED BY 60+ BUSINESSES OF ALL SIZE</p>
        <div className='flex flex-wrap gap-28 justify-center items-center mt-8'>
            <img src={google} alt="google logo" className='w-36 h-auto'/>
            <img src={activasion} alt="activation logo" className='w-36 h-auto'/>
            <img src={amazon} alt="amazon logo" className='w-36 h-auto'/>
            <img src={cat} alt="cat logo" className='w-36 h-auto'/>
            <img src={apple} alt="apple logo" className='w-16 h-auto'/>
        </div>
      </div>

      
    </section>
  )
}
