import React from 'react'
import {starIcon,Maruti,hyundai_creta,KiaSonet} from '../../assets/Images'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { useScreenResizeValue } from '../../ScreenSizeFunction'


const ExploreAlternativeImages = ({ heading, userReview = true }) => {

    const breakpoint = useScreenResizeValue();

    return (
        <div className='px-[18px] py-[20px]   border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
            <h1 className={`font-medium
                 ${breakpoint>1250 && 'text-[24px]'}
        ${breakpoint<=1250 && 'text-[20px]'}
                `}>{heading}</h1>
            <div className='pb-[15px]  '>
                <Swiper
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
                    spaceBetween={10}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="w-full h-full"
                >


                    <SwiperSlide >
                        <div className='  flex flex-col gap-4 justify-center drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)]  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                            <div className='flex w-full justify-center items-center'>
                                <img src={hyundai_creta} alt="" className='h-[195px] w-full rounded-xl object-cover' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[10px] px-[15px] font-semibold  '>
                                <p className={`px-[2px]  text-[#24272C] 
                                 ${breakpoint>1250 && 'text-[17px]'}
                                    ${breakpoint<=1250 && 'text-[14px]'}
                                    `}>Hyundai Creta</p>
                                <p className={`px-[2px]  text-[#24272C]  
                                    ${breakpoint>1250 && 'text-[17px]'}
                                    ${breakpoint<=1250 && 'text-[14px]'}
                                    `}><span className='text-[15px]'>R</span>11 - 20.30 Lakh</p>
                                {userReview && <p className='text-[14px] flex  items-baseline gap-1 '><span className='font-bold'>4.5</span><img src={starIcon} alt="" className='w-[14px] h-[14px] ' />315 User reviews</p>
                                }
                                <div className='w-full '>
                                    <button className={`w-full text-[#0B66FA] border-[1px] border-[#0B66FA] font-bold px-auto py-[12px] rounded-md 
                                        ${breakpoint>1250 && 'text-[16px]'}
                                        ${breakpoint<=1250 && 'text-[14px]'}
                                        `} >Hyundai Creta Images</button>
                                </div>

                                <p className={` flex gap-1  text-[#0085FF] font-semibold items-center justify-center
                                    ${breakpoint>1250 && 'text-[14px]'}
                                    ${breakpoint<=1250 && 'text-[12px]'}
                                    `}>
                                    Seltos vs Creta
                                </p>

                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className='  flex flex-col gap-4 justify-center drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)]  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                            <div className='flex w-full justify-center items-center'>
                                <img src={KiaSonet} alt="" className='h-[195px] w-full rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[10px] px-[15px] font-semibold '>
                                <p className='px-[2px] text-[17px] text-[#24272C] '>Kia Sonet</p>
                                <p className='px-[2px] text-[17px] text-[#24272C] '><span className='text-[15px]'>R</span>8 - 15.77 Lakh</p>
                                {userReview && <p className='text-[14px] flex  items-baseline gap-1 '><span className='font-bold'>4.5</span><img src={starIcon} alt="" className='w-[14px] h-[14px] ' />128 User reviews</p>
                                }

                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[12px] rounded-md " >Kia Sonet Images</button>
                                </div>

                                <p className=' flex gap-1 text-[14px] text-[#0085FF] font-semibold items-center justify-center'>
                                    Seltos vs Sonet
                                </p>

                            </div>

                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className=' flex flex-col gap-4 justify-center drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)]  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
                            <div className='flex w-full justify-center items-center'>
                                <img src={Maruti} alt="" className='h-[195px] w-full rounded-xl' />
                            </div>
                            <div className='flex flex-col gap-2 pb-[10px] px-[15px] font-semibold  '>
                                <p className='px-[2px] text-[17px] text-[#24272C] '>Maruti Grand Vitara</p>
                                <p className='px-[2px] text-[17px] text-[#24272C] '><span className='text-[15px]'>R</span>10.99 - 20.09 Lakh</p>
                                {userReview && <p className='text-[14px] flex  items-baseline gap-1 '><span className='font-bold'>4.5</span><img src={starIcon} alt="" className='w-[14px] h-[14px] ' />521 User reviews</p>
                                }
                                <div className='w-full '>
                                    <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[12px] rounded-md " >Maruti Grand Vitara Images</button>
                                </div>

                                <p className=' flex gap-1 text-[14px] text-[#0085FF] font-semibold items-center justify-center'>
                                    Seltos vs Grand Vitara
                                </p>

                            </div>

                        </div>
                    </SwiperSlide>


                </Swiper>

            </div>


        </div>
    )
}

export default ExploreAlternativeImages