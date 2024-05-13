import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Title from './Title';

const Review = () => {
  return (
    <div>
      <Title preTitle="OUR" title="CUSTOMERS" />

      <div className='py-[80px] bg-pattern2'>
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
          slidesPerView={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4} // Adjust the breakpoints as needed
        >
          {/* Your Swiper slides go here */}
          <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex justify-center items-center flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>
        </Swiper>
      </div>

      <div className='py-[80px] bg-pattern1'>
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
          slidesPerView={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4} // Adjust the breakpoints as needed
        >
          {/* Your Swiper slides go here */}
          <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex justify-center items-center flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>

        <SwiperSlide className='mx-[15px]'>
          <div className="w-full max-w-sm flex-shrink-0 mr-8">
              <div className="p-6 bg-white rounded-4xl shadow-lg">
                <div className="flex mb-6 items-center">
                  <img className="block w-15 h-15 rounded-full" src='https://shuffle.dev/saturn-assets/images/testimonials/avatar-group-5.png' />
                  <div className="ml-5">
                    <span className="block text-xl font-semibold leading-none" data-config-id="auto-txt-13-3">Kathryn Murphy</span>
                    <span className="block text-sm text-gray-500" data-config-id="auto-txt-14-3">CEO of Coca Soft</span>
                  </div>
                </div>
                <p className="text-sm text-gray-900 mb-6" data-config-id="auto-txt-15-3">It was a pleasure working with the Saturn. They understood the brief correctly and delivered great designs exceeding the expectations.</p>
                <div className="flex items-center">
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-22-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-23-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-24-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-25-3" />
                  <img className="block mr-1.5" src="https://shuffle.dev/saturn-assets/images/testimonials/star.svg" alt="" data-config-id="auto-img-26-3" />
                </div>
              </div>
            </div>

        </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
