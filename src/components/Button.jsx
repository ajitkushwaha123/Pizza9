import React from 'react';
import { FaShopLock } from "react-icons/fa6";

const Button = ({ title , func, border , hoverColor , bgHover, bgColor , borderColor , hoverBorder , textColor , hoverText}) => {
  return (
    <div>
      <button
        onClick={() => { func() }}
        className={`hover:bg-${bgHover} border-2 border-${border} flex bg-${bgColor} border-2 border-${borderColor} hover:border-2 hover:border-${hoverBorder} text-${textColor} hover:text-${hoverText} font-medium font-poppins justify-center items-center px-4 py-2 rounded-md`}
      >
        <FaShopLock className='mr-[8px]' /> {title}
      </button>
    </div>
  );
};

export default Button;
