import React from 'react'
import Title from './Title'

const Outlets = () => {
  return (
    <div id='our-outlets' className='py-[60px]'>
      <Title preTitle={"OUR"} title={"OUTLETS"}/>

      <div className='px-[40px] bg-pattern2 rounded-lg py-[40px] flex flex-col sm:flex-row justify-center items-center'>
          <div className='border-2 sm:mr-[30px] my-[30px]  shadow-lg shadow-indigo-500/40 rounded-md '>
            <img className='rounded-lg' src='https://www.mbachaiwala.com/wp-content/uploads/2023/04/Highway-eatery.jpg'/>
            <div className='text-center bg-white'>
                <h2 className='bg-[#EDF000] py-[5px] px-[20px] text-primary font-bold text-[26px] font-poppins'>Highway Model</h2>
                <p className='text-[20px] py-[5px] font-poppins '>5000-8000+ SQFT</p>
            </div>
          </div>

          <div className='border-2 sm:mr-[30px] my-[30px]  shadow-lg shadow-indigo-500/40 rounded-md '>
            <img className='rounded-lg' src='https://www.mbachaiwala.com/wp-content/uploads/2023/04/Highway-eatery.jpg'/>
            <div className='text-center bg-white'>
                <h2 className='bg-[#EDF000] py-[5px] px-[20px] text-primary font-bold text-[26px] font-poppins'>Highway Model</h2>
                <p className='text-[20px] py-[5px] font-poppins '>5000-8000+ SQFT</p>
            </div>
          </div>

          <div className='border-2 sm:mr-[30px] my-[30px]  shadow-lg shadow-indigo-500/40 rounded-md '>
            <img className='rounded-lg' src='https://www.mbachaiwala.com/wp-content/uploads/2023/04/Highway-eatery.jpg'/>
            <div className='text-center bg-white'>
                <h2 className='bg-[#EDF000] py-[5px] px-[20px] text-primary font-bold text-[26px] font-poppins'>Highway Model</h2>
                <p className='text-[20px] py-[5px] font-poppins '>5000-8000+ SQFT</p>
            </div>
          </div>

          <div className='border-2 sm:mr-[30px] my-[30px]  shadow-lg shadow-indigo-500/40 rounded-md '>
            <img className='rounded-lg' src='https://www.mbachaiwala.com/wp-content/uploads/2023/04/Highway-eatery.jpg'/>
            <div className='text-center bg-white'>
                <h2 className='bg-[#EDF000] py-[5px] px-[20px] text-primary font-bold text-[26px] font-poppins'>Highway Model</h2>
                <p className='text-[20px] py-[5px] font-poppins '>5000-8000+ SQFT</p>
            </div>
          </div>

      </div>
    </div>
  )
}

export default Outlets
