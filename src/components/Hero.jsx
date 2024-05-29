import React from 'react'
import Title from './Title'
import { chef, mirch, pizza, pizza1, pizza2, tomato } from '../assets'
import Button from './Button'

const Hero = () => {
  return (
    <div className='sm:h-screen bg-pattern4 bg-no-repeat bg-cover flex flex-col md:flex-row justify-center items-center w-full'>
       <div className='w-[50%] ml-[100px] h-screen md:px-[100px] flex justify-center flex-col items-center'>
       {/* <img className='w-[300px]' src={chef}/> */}
          <h2 className='md:text-[80px] text-[28px] font-poppins font-bold'> Tasty Food </h2>
          <h2 className={`md:text-[80px] text-[40px] font-poppins font-bold text-primary`}> 
             <span className="text-primary">Collections</span>
         </h2>
      <div className="w-40 h-1 rounded-lg bg-primary my-4"></div>

      <p className='md:px-[60px] font-poppins py-[30px] text-center'>To Provide nutritional support for an orgnisation . Food is usually of plant , animal or fungal origin...</p>

      <a href='#franchise'>
      <Button className='text-center items-center'
                    // func={"sumbitHandler"}
                   title={"GET FRANCHISE"}
                    hoverColor={"white"}
                    bgColor={"primary"}
                    borderColor={"white"}
                    textColor={"white"}
                    hoverText={"primary"}
                    bgHover={"white"}
                    hoverBorder={"primary"}
                   />
      </a>
       </div>


      
       <div className='w-[60%] bg-pattern2 flex justify-center items-center'>
          <img className='absolute w-[150px] sm:w-[270px] sm:h-270px sm:top-16 top-20 right-0' src={tomato}/>
          <img className='w-[800px] h-[600px] mr-[150px]' src={pizza2}/>

          <img className='absolute w-[150px] sm:w-[220px] bottom-10 left-10' src={mirch}/> 
       </div>
    </div>
  ) 
}

export default Hero
