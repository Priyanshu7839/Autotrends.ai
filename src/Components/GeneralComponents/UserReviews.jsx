import React, { useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import {Menu,ReviewsList} from '../../components'
import { useNavigate } from 'react-router'
import { GoStarFill } from 'react-icons/go'
import { Rightarrow } from '../../assets/Images/SVG'
import { useScreenResizeValue } from '../../ScreenSizeFunction'


const UserReviews = ({price=false,reviews}) => {
    const navigate =useNavigate();
    const breakpoint= useScreenResizeValue();
        const viewType = ["All (396)", "Mileage (75)", "Performance (20)", "Looks (98)", "Comfort (153)", "Engine (50)", "Interior (40)", "Power (100)", "More..."];
        const [selectedReviewType, setSelectedReviewType] = useState("All");
        const [reviewCategory, setReviewCategory] = useState("Latest");


  return (
    <div className='px-[20px] py-[20px] flex flex-col w-full   drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] border-[#24272C] border rounded-[16px] border-opacity-10'>
                    <h1 className={`font-semibold
                         ${breakpoint>1250 && 'text-[24px]'}
                         ${breakpoint<=1250 && 'text-[20px]'}
                        `}>{reviews?.title}</h1>
                    <div className='mt-[8.6px]'>
                        <div className={` ${breakpoint<=480?'flex-col items-start gap-[20px]':'flex-row    '} w-full flex gap-[1rem]
                        ${breakpoint<=1250 && 'flex-col items-start justify-start gap-[1rem]'}
                        `}>
                            <div className='flex items-center flex-row gap-[15px] text-[13px] '>
                                <p className={`flex gap-1 font-bold items-center
                                     ${breakpoint>1250 && 'text-[26px]'}
                                     ${breakpoint<=1250 && 'text-[22px]'}
                                    `}>4.5 <span><GoStarFill className=' text-blue w-[28px] h-[28px]'/></span></p>
                                <div>
                                    {/* <p className=' w-max'>Based on 396 User Reviews</p> */}
                                </div>
                            </div>
                            {/* <div className={` w-full`}>
                                <button className={` text-blue border-[1px] ${breakpoint<=480?'w-[90%]':'w-max'} border-blue leading-[43px]  font-[500] px-[25px]   rounded-[8px] 
                                 ${breakpoint>1250 && 'text-[16px]'}
                                     ${breakpoint<=1250 && 'text-[14px]'}
                                `}>Write a Review & Win ₹1000</button>
                            </div> */}
                        </div>
                    </div>
                    {/* <div className={`  mt-[22.5px] leading-[19px] text-[#24272c] font-[400]
                         ${breakpoint>1250 && 'text-[15px]'}
                         ${breakpoint<=1250 && 'text-[13px]'}
                        `}>
                        Popular Mentions
                    </div> */}
                    <div className='flex flex-col gap-2  mt-[12px]'>
                        {/* <div className=' w-full overflow-x-scroll' style={{scrollbarWidth:'none'}}>
                        <div className=' w-max flex  gap-2 items-center'>
                            {
                                viewType.map((view, index) => (
                                    <div key={index} onClick={() => setSelectedReviewType(view)} className={` drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] px-[13px] py-[9px] flex flex-col cursor-pointer gap-4 rounded-md ${selectedReviewType === view ? "border-2  border-[#007BE5] text-[#007BE5] bg-[#007BE5] bg-opacity-10 " : " border-[#24272C] border  border-opacity-10  text-[#24272C]"} `}>
                                        <li className={` leading-[20.8px] font-[400] 
                                             ${breakpoint>1250 && 'text-[12px]'}
                                     ${breakpoint<=1250 && 'text-[10px]'}
                                            `}>{view}</li>
                                    </div>
                                ))
                            }
                        </div>
                        </div> */}
                   
                        {/* <Menu menuItems={["Latest","Helpful"]} item={reviewCategory} setitem={setReviewCategory}/> */}
                        <div className=' w-full flex gap-2 mt-[20px] '>
                            <Swiper
                                // spaceBetween={25}
                                loop={true}
                                // freeMode={true}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: true,
                                }}
                                breakpoints={{
                                   0:{
                                    slidesPerView:1.5,
                                    spaceBetween:12
                                   },
                                    750: {
                                        slidesPerView: 2,
                                        spaceBetween: 12,
                                    },
                                    1050: {
                                        slidesPerView: 2.5,
                                        spaceBetween: 12,
                                    },
                                    1345: {
                                        slidesPerView: 3,
                                        spaceBetween: 12,
                                    },
                                }}
                                modules={[FreeMode, Pagination, Autoplay]}
                                className="w-full h-full"
                            >


                               
                             

                                {reviews?.list.map((review)=>{
                                    return(
                                <SwiperSlide key={review.id} className={` ${breakpoint<=480?'w-[60%]':'w-[33%]'} border-[#24272C] border-[1px] rounded-[8px] border-opacity-10 `}>
                                    <ReviewsList name={review.authorName} desc={review.description} date={review.date} rating={review.rating} title={review.title}/>
                                </SwiperSlide>      
                                    )
                                })}


                            </Swiper>

                        </div>
                        <p className=' cursor-pointer flex text-[14px] leading-[21px] gap-1 mt-[12px] text-blue font-[600] items-center' onClick={()=>{navigate("/CarDetails")}}>
                            View All  {(price)?'Price':''} Reviews <Rightarrow/>
                        </p>
                    </div>

                </div>
  )
}

export default UserReviews