import React from 'react'
import Title from './Title'
import { scooter, scooter1, scooter3 } from '../assets'

const Menu = () => {
  return (
    <div className='w-full'>
       <div className='bg-[#EDF000] pt-[40px] px-[100px]'>
           <Title title={"DISCOVER"}/>
          <h2 className='text-center font-poppins py-[16px]'>Our Recommeded Menu</h2>
          <img className='pt-[40px] bg-white rounded-lg' src='https://www.mbachaiwala.com/wp-content/uploads/2023/04/DIS-Cover-2-1.png'/>
       </div>

        <div className='bg-white px-[120px] flex justify-center items-center'>
           <div className='w-[50%]'>
              <p className='font-semibold px-[40px] font-poppins text-[40px] text-red-400 '>
                 Here’s a treat for your taste buds! 
                 <br />
                 Feeling too lazy to step out?
                 Sit back and Relax!
              </p>

              <p className='text-medium font-poppins px-[40px] py-[20px] text-[#252525d1]'>We are dedicated to satisfying your cravings with an extensive range of high-quality, delicious snacks and beverages. With our convenient delivery services, you can now enjoy delicious food delivered straight to your doorstep.</p>
              <div className='flex justify-between pl-[40px] py-[30px] pr-[80px]'>
                <img src='http://www.mbachaiwala.com/wp-content/uploads/2023/04/Zomato_button-jpg.webp'/>
                <img src='http://www.mbachaiwala.com/wp-content/uploads/2023/04/Swiggy_button-jpg.webp'/>
              </div>
           </div>

           <div className='w-[600px] h-[600px]'>
             <img src={scooter3}/>
           </div>
        </div>
    </div>
  )
}

export default Menu
