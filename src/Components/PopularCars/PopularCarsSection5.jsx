import React from 'react'
import ReviewsList from '../GeneralComponents/ReviewList'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
const PopularCarsSection5 = () => {

     const breakpoint=useScreenResizeValue();

  return (
    <div className={`h-max w-full ${breakpoint<=412?'px-[20px]':'px-[10px]'} rounded-[8px] flex flex-col gap-[20px] pt-[18px] pb-[21px]  border border-[rgba(36,39,44,0.2)] shadow-[0px_4px_8px_rgba(36,39,44,0.2)]`}>
    <h3 className=" text-[32px] font-[600] leading-[38.8px] text-[#24272c] ">
   Top Car Reviews
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
                                        slidesPerView: 3,
                                        spaceBetween: 12,
                                    },
                                }}
                                modules={[FreeMode, Pagination, Autoplay]}
                                className="w-full h-full"
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

export default PopularCarsSection5
