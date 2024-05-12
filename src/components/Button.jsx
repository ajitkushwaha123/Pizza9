import React from 'react';
import { FaShopLock } from "react-icons/fa6";

const Button = ({ title, func, border }) => {
  return (
    <div>
      <button
        onClick={() => { func() }}
        className={`hover:bg-primary border-2 border-${border} flex bg-white border-2 border-white hover:border-2 hover:border-white text-primary hover:text-[white] font-medium font-poppins justify-center items-center px-4 py-2 rounded-md`}
      >
        <FaShopLock className='mr-[8px]' /> {title}
      </button>
    </div>
  );
};

export default Button;
