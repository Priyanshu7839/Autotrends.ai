import React from 'react'
import hyundaiCreta from "../../Asset/hyundai-creta.png"
import kiaSonet from "../../Asset/kia-sonet.png"
import maruti from "../../Asset/maruti.png"
import star from "../../Asset/star.png"
import arrowright from "../../Asset/right-arrow.png"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

const PopularCars = ({ heading }) => {
    const currentMonth = "January";

    return (
        <div className='px-[18px] py-[20px] shadow-md  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-2'>
            <h1 className='text-[24px] font-semibold'>{heading}</h1>
            <div className=' '>
                <Swiper
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
                            spaceBetween: 10,
                        },
                        '@1.00': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                        '@1.50': {
                            slidesPerView: 3,
                            spaceBetween: 10,
                        },
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="w-full h-full"
                >


                    <SwiperSlide >
                        <div className=' flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                            <div className='flex justify-center items-center'>
                                <img src={hyundaiCreta} alt="" className='h-[195px] w-full rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[20px] px-[15px] font-semibold  '>
                                <p className='px-[2px] text-[17px] text-[#24272C] '>Hyundai Creta</p>
                                <p className='px-[2px] text-[17px] text-[#24272C]  '><span className='text-[15px]'>R</span>11 - 20.30 Lakh</p>

                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >{`Check ${currentMonth} Offers`}</button>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className=' flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                            <div className='flex justify-center items-center'>
                                <img src={kiaSonet} alt="" className='h-[195px] w-full rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[20px] px-[15px] font-semibold '>
                                <p className='px-[2px] text-[17px] text-[#24272C] '>Kia Sonet</p>
                                <p className='px-[2px] text-[17px] text-[#24272C] '><span className='text-[15px]'>R</span>8 - 15.77 Lakh</p>

                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >{`Check ${currentMonth} Offers`}</button>
                                </div>


                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className=' flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                            <div className='flex justify-center items-center'>
                                <img src={maruti} alt="" className='h-[195px] w-full rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[20px] px-[15px] font-semibold  '>
                                <p className='px-[2px] text-[17px] text-[#24272C] '>Maruti Grand Vitara</p>
                                <p className='px-[2px] text-[17px] text-[#24272C] '><span className='text-[15px]'>R</span>10.99 - 20.09 Lakh</p>

                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >{`Check ${currentMonth} Offers`}</button>
                                </div>

                            </div>

                        </div>
                    </SwiperSlide>


                </Swiper>

            </div>

            <p className='flex gap-1 text-[#0085FF] font-semibold items-center'>
                View All Popular Cars<img src={arrowright} alt="" className='w-[19px] h-[18px]' />
            </p>


        </div>
    )
}

export default PopularCars