import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Title from './Title';
import Button from './Button'

const Review = () => {
  const testimonials = [
    {
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjWXTAq088nCnDe2NDDV-2aYi4AWFUDh5jT-PRZwWEWrOvSePZUM5Q=s64-c-rp-mo-br100",
      title: "V Shashank",
      designation: "CEO",
      review: "Best place to relax and dine! You know what's great? Pizza 9 is located in our PG and open till midnight. Pizza, burger, different variety of coffees and what not ✌",
    },

    {
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjUR7ugHwsrlxcrn5e85YdzWpmlpabCwJ6UXBqOfnaBgjKLABMJF=s64-c-rp-mo-br100",
      title: "SAHIL GaMinG",
      designation: "CEO",
      review: "Really a good service and good thing about he was selling in the shop top pizza's likes paneer makhani so delicious food and don't forget to ordering second one Indi tanduri paneer 💹😄",
    },

    {
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXfTasUMn1X7Qq0v-na3akIRjk7GwAh5oiRJ-rF2c3Ux9hxt1cm=s64-c-rp-mo-br100",
      title: "Yuvraj Prakash",
      designation: "CEO",
      review: "Base of the pizza to good and the veggies are fresh. Overall you will love the taste of pizza9",
    },

    {
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjWdiqLds-TdHl8_IltN1R1NAkPV2ruWgJ-q2Ib7GFn_J_mavalzHw=s64-c-rp-mo-ba2-br100",
      title: "Ambuj Sharma",
      designation: "CEO",
      review: "The best pizza out there. The behaviour is also very good. Order 'Hamara Pizza' at just rs 99 'paneer and corn'😅😁😁😁",
    },

    {
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjXgtOUx8BecYSBcOpnAydef8lYuVvqRoD-FXMMlnhDGNgxcNEKA=s64-c-rp-mo-br100",
      title: "Shobha Yadav",
      designation: "CEO",
      review: "Amazing food, good environment service was very nice 🙂",
    },

    {
      imgSrc: "https://lh3.googleusercontent.com/a/ACg8ocJ3txaxojeg_rpiFqN_0sH7uQZWTyMGTkjLYjGFu4_U_iaOSKiK=s64-c-rp-mo-ba2-br100",
      title: "Prati V",
      designation: "CEO",
      review: "Good n hygiene place .. Quality,taste, quantity, ingredients all are superb.5 ⭐⭐⭐⭐⭐ from our side.",
    },

    {
      imgSrc: "https://lh3.googleusercontent.com/a-/ALV-UjVCKob18zoOwXEJ5EUSjUVAIExROGyOX3AhAAYydQaont3jwInm=s64-c-rp-mo-ba4-br100",
      title: "Naman Rathore",
      designation: "CEO",
      review: "Must try Pizza at Pizza 9 Best place to eat pizaa,tacos and other stuffs I went twice and would love to go again & eat",
    },

    // Add more testimonials as needed
  ];

  return (
    <div id='testimonials'>
      <Title preTitle="Our" title="Customers" />

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
          slidesPerView={window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className='mx-[15px]'>
              <div className="w-full max-w-sm flex justify-center items-center flex-shrink-0">
                <div className="p-6 bg-white rounded-4xl min-h-[250px] shadow-lg">
                  <div className="flex mb-6 items-center">
                    <img className="block w-15 h-15 rounded-full" src={testimonial.imgSrc} alt={testimonial.title} />
                    <div className="ml-5">
                      <span className="block text-xl font-semibold leading-none">{testimonial.title}</span>
                      <span className="block text-sm text-gray-500">{testimonial.designation}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-900 text-[16px] mb-6">{testimonial.review}</p>
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
          ))}
        </Swiper>

        <a target='_blank' href='https://www.google.com/search?q=pizza+9&sca_esv=991ca55629cb7d36&sca_upv=1&sxsrf=ADLYWIJawqPXysUKNMbXfQQ0bpmahyDxDA%3A1715700502747&ei=FoNDZq2ULdn3seMPz8yV8Ak&ved=0ahUKEwit94a4uo2GAxXZe2wGHU9mBZ4Q4dUDCBA&uact=5&oq=pizza+9&gs_lp=Egxnd3Mtd2l6LXNlcnAiB3BpenphIDkyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyChAAGLADGNYEGEcyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDRAAGIAEGLADGEMYigUyDhAAGLADGOQCGNYE2AEBMg4QABiwAxjkAhjWBNgBATIZEC4YgAQYsAMY0QMYQxjHARjIAxiKBdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAjIZEC4YgAQYsAMYQxjHARjIAxiKBRivAdgBAkhKUABYAHABeAGQAQCYAQCgAQCqAQC4AQPIAQCYAgGgAgiYAwCIBgGQBhK6BgYIARABGAm6BgYIAhABGAiSBwExoAcA&sclient=gws-wiz-serp&lqi=CgdwaXp6YSA5IgOIAQFInNSQ3I25gIAIWhkQABABGAAYASIHcGl6emEgOSoGCAIQABABkgEKcmVzdGF1cmFudKoBPBABKgsiB3BpenphIDkoADIeEAEiGg0MiP2ZdX1q265b377HjhFa_Xz71bAll1W5MgsQAiIHcGl6emEgOQ#lkt=LocalPoiReviews&rlimm=12997184429820642054' className='flex justify-center items-center pt-[60px]'><Button title={"More Reviews"}
           hoverColor={"white"}
                    bgColor={"primary"}
                    borderColor={"white"}
                    textColor={"white"}
                    hoverText={"primary"}
                    bgHover={"white"}
                    hoverBorder={"primary"}
        /></a>
      </div>
    </div>
  );
};

export default Review;
