import React from 'react'
import Title from './Title'
import { pizza } from '../assets'

const Hero = () => {
  return (
    <div className='md:h-screen  bg-no-repeat bg-cover flex justify-center items-center w-full'>
       <div className='w-[50%] h-screen px-[50px] flex justify-center flex-col items-center'>
          <h2 className='text-[80px] font-poppins font-bold'> Tasty Food </h2>
          <h2 className={`md:text-[80px] text-[80px] font-poppins font-bold text-primary`}> 
             <span className="text-primary">Collections</span>
         </h2>
      <div className="w-40 h-1 rounded-lg bg-primary my-4"></div>

      <p className='px-[60px] font-poppins py-[30px] text-center'>To Provide nutritional support for an orgnisation . Food is usually of plant , animal or fungal origin...</p>
       </div>

       <div className='w-[50%] flex justify-center items-center'>
          <img src={pizza}/>
       </div>
    </div>
  ) 
}

export default Hero
