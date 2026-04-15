import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

import ReviewsList from './ReviewsList'
import greenStar from "../Asset/greenstar.png"
import arrowright from "../Asset/right-arrow.png"

const ReviewPage = () => {
    return (
        <div className='parent-div flex justify-center'>

            <div className=' w-[calc(100%-240px)] mt-[32px] mb-[40px]  '>
                <div className=' h-[200px] w-[76%] mt-[20px] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 '>Empty Container</div>


                <div className=' w-[76%] mt-[20px] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                    <h1 className='text-[24px] font-semibold'>Rating of Kia Seltos</h1>
                    <div>
                        <div className='flex gap-[95px] items-center '>
                            <div className='flex flex-row gap-[15px] text-[13px] '>
                                <p className='flex gap-1 text-[26px] font-bold items-center'>4.5 <span><img src={greenStar} alt="" className='h-[28px] w-[28px] ' /></span></p>
                                <div>
                                    <p>Based on</p>
                                    <p>396 User Reviews</p>
                                </div>
                            </div>
                            <div>
                                <button className=" text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-[25px] py-[12px] w-[250px] rounded-md " >Write a Review & Win ₹1000</button>
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' w-[76%] mt-[20px] px-[20px] py-[20px]  shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                    <h1 className='text-[24px] font-semibold'>Kia Seltos user reviews</h1>

                    <div className='flex flex-col gap-2 '>
                        <div className='flex gap-[36px] py-[6px] text-[14px] text-[#24272C] text-opacity-70 border-b-[1px] '>
                            <li className='font-bold text-[#24272C] opacity-100 border-b-[#0085FF] border-b-[4px] py-[10px]'>Latest</li>
                            <li className='py-[10px]'>Helpful</li>
                            <li className='py-[10px]'>Critical</li>

                        </div>
                        <div className='flex flex-col gap-2 mt-[20px] '>
                            {/* <Swiper
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
                            > */}

<ReviewsList />
<ReviewsList />
<ReviewsList />
<ReviewsList />
<ReviewsList />
<ReviewsList />

                                {/* <SwiperSlide >
                                    <ReviewsList />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <ReviewsList />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <ReviewsList />
                                </SwiperSlide>
                                <SwiperSlide >
                                    <ReviewsList />
                                </SwiperSlide> */}


                            {/* </Swiper> */}

                        </div>
                        <p className='flex gap-1 text-[#0085FF] font-semibold items-center'>
                            View All Seltos Review <img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ReviewPage