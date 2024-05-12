import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Title from './Title';

const Gallery = () => {
  return (
    <div className='px-[100px] flex flex-col rounded-lg py-[100px]'>
      <Title preTitle={"Our"} title={"Gallery"}/>
         
      <div className='flex'>

         <div className='w-[38%] h-[600px] pt-[40px]'>
            <img className='rounded-lg' src='https://lassidaycafe.com/Cafe14.png'/>
            <div className='flex h-[50%]'>
              <img className='w-[50%] rounded-lg h-[50%] my-5 pr-2' src='https://lassidaycafe.com/Cafe8.png'/>
              <img className='w-[50%] rounded-lg h-[50%] my-5 pl-2' src='https://lassidaycafe.com/Cafe11.png'/>
            </div>
         </div>

         <div className='w-[62%] max-h-[500px] pt-[40px] pl-[40px]'>
         <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='h-[100%] max-h-[500px] rounded-lg' src='https://lassidaycafe.com/Cafe14.png'/></SwiperSlide>
        <SwiperSlide><img className='h-[100%] max-h-[500px] rounded-lg' src='https://lassidaycafe.com/Cafe14.png'/></SwiperSlide>
        <SwiperSlide><img className='h-[100%] max-h-[500px] rounded-lg' src='https://lassidaycafe.com/Cafe14.png'/></SwiperSlide>
      </Swiper>
         </div>
      </div>
    </div>
  )
}

export default Gallery
