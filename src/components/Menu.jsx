import React from 'react'
import Title from './Title'
import { scooter, scooter1, scooter3 } from '../assets'

const Menu = () => {
  return (
    <div className='w-full'>
       <div className='bg-[#EDF000] md:pt-[40px] md:px-[100px] px-[30px]'>
           <Title title={"DISCOVER"}/>
          <h2 className='text-center font-medium text-[18px] font-poppins py-[16px]'>Our Recommeded Menu</h2>
          <img className='pt-[40px] border-2 shadow-lg shadow-indigo-500/40 bg-white rounded-lg' src='https://www.mbachaiwala.com/wp-content/uploads/2023/04/DIS-Cover-2-1.png'/>
       </div>

        <div className='bg-white bg-pattern1 py-[50px] px-[40px] flex md:flex-row flex-col justify-center items-center'>
           <div className='md:w-[50%] bg-pattern2 w-[100%]'>
              <p className='font-semibold text-center md:text-start md:px-[40px] px-[10px] font-poppins md:text-[40px] text-[20px] text-primary'>
                 Here’s a treat for your taste buds! 
                 <br />
                 Feeling too lazy to step out?
                 Sit back and Relax!
              </p>

              <p className='text-medium font-poppins md:text-start md:px-[40px] py-[20px] text-center text-[#252525d1]'>We are dedicated to satisfying your cravings with an extensive range of high-quality, delicious snacks and beverages. With our convenient delivery services, you can now enjoy delicious food delivered straight to your doorstep.</p>
              <div className='flex bg-pattern2 items-center justify-between md:pl-[40px] py-[30px] md:pr-[80px]'>
                <img src='http://www.mbachaiwala.com/wp-content/uploads/2023/04/Zomato_button-jpg.webp'/>
                <img src='http://www.mbachaiwala.com/wp-content/uploads/2023/04/Swiggy_button-jpg.webp'/>
              </div>
           </div>

           <div className='min-w-[380px] flex items-center justify-center'>
             <img  src={scooter3}/>
           </div>
        </div>
    </div>
  )
}

export default Menu
