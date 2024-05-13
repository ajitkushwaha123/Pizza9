import React from 'react'
import Title from './Title'

const Journey = () => {
  return (
    <div className='w-full py-[40px] bg-pattern1 flex justify-center items-center flex-col md:px-[100px]'>
      <Title title={"JOURNEY"}/>

      <div className='w-[100%] flex justify-center items-center'>
         <img className='w-[100%] h-[auto]' src='http://www.mbachaiwala.com/wp-content/uploads/2023/04/our-journey-video.gif'/>
      </div>
    </div>
  )
}

export default Journey
