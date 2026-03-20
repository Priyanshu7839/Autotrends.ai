import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

import ReviewsList from './ReviewsList'
import greenStar from "../Asset/greenstar.png"
import arrowright from "../Asset/right-arrow.png"
import {Menu} from "../components/index"

const UserReviewForCar = () => {

    const viewType = ["All", "Mileage", "Performance", "Looks", "Comfort", "Engine", "Interior", "Power", "More..."];
    const [selectedReviewType, setSelectedReviewType] = useState("All");
    return (
        <div className='px-[15px] py-[20px] shadow-md flex flex-col gap-3   border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
            <h1 className='text-[18px] md:text-[24px] font-semibold'>Kia Seltos user reviews</h1>
            <div>
                <div className='flex md:gap-[95px] items-center '>
                    <div className='flex flex-row gap-[15px] text-[10px] md:text-[13px] '>
                        <p className='flex gap-1 text-[18px] md:text-[26px] font-bold items-center'>4.5 <span><img src={greenStar} alt="" className=' h-[18px] w-[18px] md:h-[28px] md:w-[28px] ' /></span></p>
                        <div>
                            <p>Based on</p>
                            <p>396 User Reviews</p>
                        </div>
                    </div>
                    <div>
                        <button className=" text-[#0B66FA] border-[1px] border-[#0B66FA] text-[12px] md:text-[16px] font-bold px-[20px] md:px-[25px] py-[12px] md:w-[250px] rounded-md " >Write a Review & Win ₹1000</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 '>
                <div className='flex gap-2 items-center overflow-auto  py-2' style={{scrollbarWidth:'none'}}>
                    {
                        viewType.map((view, index) => (
                            <div key={index} onClick={() => setSelectedReviewType(view)} className={`px-1 md:px-2 py-1 flex flex-col gap-4 rounded-md ${selectedReviewType === view ? "border-2 md:border-2  border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : " border-[#24272C] border-[1px]  border-opacity-10  text-[#24272C]"} `}>
                                <p className='text-[10px] md:text-[14px] font-semibold '>{view}</p>
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Menu menuItems={["Latest","Helpful"]} item={"Latest"} />
                </div>

                <div className='flex gap-2 mt-[20px] '>
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


                        <SwiperSlide className=' border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip' >
                            <ReviewsList />
                        </SwiperSlide>
                        <SwiperSlide className=' border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'  >
                            <ReviewsList />
                        </SwiperSlide >
                        <SwiperSlide className=' border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip' >
                            <ReviewsList />
                        </SwiperSlide >
                        <SwiperSlide className=' border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'  >
                            <ReviewsList />
                        </SwiperSlide>
                    </Swiper>

                </div>
                <p className='flex gap-1 text-[#0085FF] font-semibold items-center text-[14px] md:text-[16px]' >
                    View All Seltos Review <img src={arrowright} alt="" className='w-[16px] md:w-[19px] h-[16px] md:h-[18px] ' />
                </p>
            </div>

        </div>
    )
}

export default UserReviewForCar