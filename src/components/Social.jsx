import React, { useState } from 'react'
import { insta2, insta3 } from '../assets'
import Button from './Button'

const Social = () => {
    const [toggle , setToggle] = useState(0);

    const changeMockup = () => {
 
        if(toggle == 0)
            {
              setToggle(1);
            }
            else
            {
                setToggle(0);
            }

        console.log("click")
    }
  return (
    <div className='w-full px-[100px] bg-primary rounded-lg text-white h-screen justify-center items-center py-[100px] flex'>
       <div className='w-[50%] px-[40px]'>
          <h2 className='text-[66px] leading-12 font-black font-poppins'><span className='text-[white]'>Follow us</span> on <span className='text-[white]'>Instagram</span> </h2>
          <p className='text-[22px] py-[28px] text-[#dbdbdb] '>Get to know about us better by connecting with us personally over Instagram</p>

          <Button func={changeMockup} border={"white"} title="Instagram"/>
       </div>

       <div className='w-[50%] pl-[40px] ml-[40px]'>
         {toggle == 0 &&
            <img className='w-[80%]' src={insta2}/>
         }
         {toggle != 0 &&
            <img className='w-[100%]' src={insta3}/>
         }
       </div>
    </div>
  )
}

export default Social
