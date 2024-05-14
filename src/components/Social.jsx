import React, { useState } from 'react'
import { insta2, insta3, insta4 } from '../assets'
import Button from './Button'
import Title from './Title';
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

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
    <div className='w-full md:px-[100px] bg-pattern1 rounded-lg flex-col  sm:flex-row justify-center items-center py-[100px] flex'>
       <div className='sm:w-[50%] md:px-[40px] '>
          {/* <h2 className='sm:text-[66px] text-[38px] leading-10  text-center font-black font-poppins'><span className='text-[white]'>Follow us</span> on <span className='text-[white]'>Instagram</span> </h2> */}
          <Title preTitle={"Our"} color={"black"} title={"Socials"}/>
          <p className='text-[22px] py-[28px] font-poppins  text-center'>Get to know about us better by connecting with us personally over Instagram</p>

         {/* <div className='flex justify-center items-center'>
         <Button className='text-center items-center'
                   title={"Instagram"}
                   func={changeMockup}
                    hoverColor={"white"}
                    bgColor={"primary"}
                    borderColor={"white"}
                    textColor={"white"}
                    hoverText={"primary"}
                    bgHover={"white"}
                    hoverBorder={"primary"}
                   />
         </div> */}

         <div className='font-poppins flex justify-center items-center'>
      <button
        className={`hover:bg-white mx-[8px] border-2 border-primary flex bg-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center  items-center p-2 text-[18px] rounded-md`}
      >
        <FaInstagram />
      </button>

      <button
        className={`hover:bg-white mx-[8px] border-2 border-primary flex bg-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center  items-center p-2 text-[18px] rounded-md`}
      >
        <IoLogoYoutube />
      </button>

      <button
        className={`hover:bg-white mx-[8px] border-2 border-primary flex bg-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center  items-center p-2 text-[18px] rounded-md`}
      >
        <FaWhatsapp />
      </button>

      <button
        className={`hover:bg-white mx-[8px] border-2 border-primary flex bg-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center  items-center p-2 text-[18px] rounded-md`}
      >
        <FaFacebookF />
      </button>

      <button
        className={`hover:bg-white mx-[8px] border-2 border-primary flex bg-primary hover:border-2 hover:border-primary text-white hover:text-primary font-medium font-poppins justify-center  items-center p-2 text-[18px] rounded-md`}
      >
        <FaTwitter />
      </button>
          </div>
       </div>

       <div className='sm:w-[50%] pt-[40px] sm:pl-[100px] sm:ml-[100px]'>
         {/* {toggle == 0 && */}
            <img className='sm:w-[50%] px-[40px] sm:px-[0]' src={insta4}/>
         {/* } */}
         {/* {toggle != 0 &&
            <img className='h-[60%]' src={insta4}/>
         } */}
       </div>
    </div>
  )
}

export default Social
