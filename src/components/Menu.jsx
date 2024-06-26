import React from 'react'
import Title from './Title'
import { scooter, scooter1, scooter3 } from '../assets'

const Menu = () => {
  return (
    <div id='discover' className='w-full overflow-x-hidden pb-[100px]'>
       <div className='bg-[#EDF000] md:pt-[40px] md:px-[100px] flex flex-col justify-center items-center px-[30px]'>
           <Title title={"DISCOVER"}/>
          <h2 className='text-center font-medium text-[18px] font-poppins py-[16px]'>Our Recommeded Menu</h2>
          <img className='pt-[40px] min-w-[330px] border-2  bg-white rounded-lg' src='https://www.mbachaiwala.com/wp-content/uploads/2023/04/DIS-Cover-2-1.png'/>
       </div>

        <div className='bg-[#EDF000] py-[50px] flex md:flex-row flex-col justify-center items-center'>
           <div className='md:w-[50%] w-[100%]'>
              <p className='font-semibold ] text-center md:text-start md:px-[40px] px-[20px] font-poppins md:text-[40px] text-[20px] text-primary'>
                 Here’s a treat for your taste buds! 
                 <br />
                 Feeling too lazy to step out?
                 Sit back and Relax!
              </p>

              <p className='text-medium px-[20px] font-poppins md:text-start md:px-[40px] py-[20px] text-center text-[#252525d1]'>We are dedicated to satisfying your cravings with an extensive range of high-quality, delicious snacks and beverages. With our convenient delivery services, you can now enjoy delicious food delivered straight to your doorstep.</p>
              <div className='flex w-[100%] px-[40px] items-center justify-between md:pl-[40px] py-[30px] md:pr-[80px]'>
                <img className='w-[140px] mr-[15px]' src='http://www.mbachaiwala.com/wp-content/uploads/2023/04/Zomato_button-jpg.webp'/>
                <img className='w-[140px]' src='http://www.mbachaiwala.com/wp-content/uploads/2023/04/Swiggy_button-jpg.webp'/>
              </div>
           </div>

           <div className='min-w-[350px] md:w-[600px] flex items-center justify-center'>
             <img  src={scooter3}/>
           </div>
        </div>
    </div>
  )
}

export default Menu
