import React from 'react'
import ReviewsList from '../GeneralComponents/ReviewList'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
const EVSection17 = () => {
  return (
    <div className='h-max w-full px-[20px] flex flex-col gap-[50px] '>
    <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
   User reviews of Electric Cars
    </h3>
        
        <div className=' w-full flex gap-2  '>
                            <Swiper
                                // spaceBetween={25}
                                loop={true}
                                // freeMode={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                breakpoints={{
                                    '@0.00': {
                                        slidesPerView: 1,
                                        spaceBetween: 10,
                                    },
                                    '@0.75': {
                                        slidesPerView: 2,
                                        spaceBetween: 12,
                                    },
                                    '@1.00': {
                                        slidesPerView: 3,
                                        spaceBetween: 12,
                                    },
                                    '@1.50': {
                                        slidesPerView: 4,
                                        spaceBetween: 12,
                                    },
                                }}
                                modules={[FreeMode, Pagination, Autoplay]}
                                className="w-[100%] h-full"
                            >


                                <SwiperSlide className=' px-[10px]  border-[#24272C] border-[1px] rounded-[8px] border-opacity-10' >
                                    <ReviewsList />
                                </SwiperSlide>
                                <SwiperSlide className=' px-[10px]  border-[#24272C] border-[1px] rounded-[8px] border-opacity-10'  >
                                    <ReviewsList />
                                </SwiperSlide >
                                <SwiperSlide className=' px-[10px]  border-[#24272C] border-[1px] rounded-[8px] border-opacity-10' >
                                    <ReviewsList />
                                </SwiperSlide >
                                <SwiperSlide className=' px-[10px]  border-[#24272C] border-[1px] rounded-[8px] border-opacity-10'  >
                                    <ReviewsList />
                                </SwiperSlide>


                            </Swiper>

                        </div>
         
        </div>
       
         

 
  )
}

export default EVSection17
