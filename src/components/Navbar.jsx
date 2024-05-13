import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex bg-primary text-white z-100 md:px-[80px] px-[20px] top-0 shadow-sm border-2 py-3 justify-between items-center navbar">
      <p className="text-[28px] font-semibold font-serif">Pizza</p><img src={logo} alt="pizza9" className="w-[32px] h-[32px]" />

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-[#f1f1f1]" : "text-dimBlack"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="hidden sm:block">
      <Button className='text-center flex-1 justify-end items-center'
                   title={"GET FRANCHISE"}
                    hoverColor={"primary"}
                    bgColor={"white"}
                    borderColor={"white"}
                    textColor={"primary"}
                    hoverText={"primary"}
                    bgHover={"primary"}
                    hoverBorder={"white"}
                   />
      </div>

     
      
      <div className="sm:hidden flex flex-1 justify-end items-center">

      <Button className='text-center flex flex-1 justify-end items-center'
                   title={"GET FRANCHISE"}
                    hoverColor={"primary"}
                    bgColor={"white"}
                    borderColor={"white"}
                    textColor={"primary"}
                    hoverText={"primary"}
                    bgHover={"primary"}
                    hoverBorder={"white"}
                   />
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] ml-[10px] h-[28px] text-white object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-primary text-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;