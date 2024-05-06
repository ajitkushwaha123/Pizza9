import React from 'react'
import { FaShopLock } from "react-icons/fa6";

const Button = () => {
  return (
    <div>
      <button className='bg-primary flex hover:bg-white hover:border-2 hover:border-primary hover:text-primary text-white font-medium font-poppins justify-center items-center px-4 py-2 rounded-md'><FaShopLock className='mr-[8px]'/> Get Franchise</button>
    </div>
  )
}

export default Button
