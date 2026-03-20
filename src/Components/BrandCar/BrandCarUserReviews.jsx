import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { useNavigate } from 'react-router'
import { GoStarFill } from 'react-icons/go'
import { Rightarrow } from '../../assets/Images/SVG'
import {ReviewsList} from '../../components/index'


const BrandCarUserReviews = ({price=false}) => {
    const navigate =useNavigate();
        const viewType = ["All", "Mileage", "Performance", "Looks", "Comfort", "Engine", "Interior", "Power", "More..."];
        const [selectedReviewType, setSelectedReviewType] = useState("All");
        const [reviewCategory, setReviewCategory] = useState("latest");

  return (
    <div className='px-[20px] py-[20px] flex flex-col gap-4  shadow-md border-[#24272C] border rounded-[16px] border-opacity-10'>
                    <h1 className='text-[24px] font-semibold'>Kia Seltos user reviews</h1>
                    <div>
                        <div className='flex gap-[95px] items-center '>
                            <div className='flex flex-row gap-[15px] text-[13px] '>
                                <p className='flex gap-1 text-[26px] font-bold items-center'>4.5 <span><GoStarFill className=' text-blue w-[28px] h-[28px]'/></span></p>
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
                    <div className='flex flex-col gap-2 '>
                    <div className='flex gap-2 items-center'>
                            {
                                viewType.map((view, index) => (
                                    <div key={index} onClick={() => setSelectedReviewType(view)} className={`px-[13px] py-[9px] flex flex-col cursor-pointer gap-4 drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] rounded-[4px] bg-[#FFFFFF] ${selectedReviewType === view ? "border-[1px]  border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : " border-[#24272C] border  border-opacity-10  text-[#24272C]"} `}>
                                        <p className='text-[12px] font-1 text-color-18'>{view}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex gap-[36px] pt-[10px]  text-[14px] text-[#24272C] text-opacity-70 border-b border-[rgba(36,39,44,0.1)] '>
                            <li className={`${(reviewCategory==='latest')?'font-bold text-[#24272C] opacity-100':''} cursor-pointer`} onClick={()=>setReviewCategory('latest')} >
                                Latest
                                {(reviewCategory==='latest')&&<div className=' w-full mt-[8px] h-[4px] bg-blue'></div>}
                            </li>
                            <li className={`${(reviewCategory==='helpful')?'font-bold text-[#24272C] opacity-100':''} cursor-pointer`} onClick={()=>setReviewCategory('helpful')} >
                                Helpful
                                {(reviewCategory==='helpful')&&<div className=' w-full mt-[8px] h-[4px] bg-blue'></div>}
                            </li>
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


                                <SwiperSlide className='shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10' >
                                    <ReviewsList />
                                </SwiperSlide>
                                <SwiperSlide className='shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'  >
                                    <ReviewsList />
                                </SwiperSlide >
                                <SwiperSlide className='shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10' >
                                    <ReviewsList />
                                </SwiperSlide >
                                <SwiperSlide className='shadow-inner border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'  >
                                    <ReviewsList />
                                </SwiperSlide>


                            </Swiper>

                        </div>
                        <p className='flex gap-1 mt-[12px] text-[#0085FF] font-semibold items-center' onClick={()=>{navigate("/kia-user-review")}}>
                            View All Seltos {(price)?'Price':''} Reviews <Rightarrow/>
                        </p>
                    </div>

                </div>
  )
}

export default BrandCarUserReviews