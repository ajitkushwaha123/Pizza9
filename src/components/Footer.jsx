import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className='bg-[#d1d1d1] w-full px-[100px] py-[100px]'> 
      <div>
        <h3 className='text-[40px] font-bold text-primary'>Get In Touch</h3>

        <ul className=''>
            <li><FaPhoneAlt />+91 722 290 5222</li>
            <li><MdEmail />salessupport@mbachaiwala.com</li>
            <li><MdMarkEmailRead />info@mbachaiwala.com</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
