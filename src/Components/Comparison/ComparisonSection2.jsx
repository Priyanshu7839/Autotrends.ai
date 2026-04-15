import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import { seltos } from '../../assets/Images';


const ComparisonSection2 = () => {

    const breakpoint = useScreenResizeValue();

    return (
        <div className='flex items-center justify-center bg-[#FFFFFF] font-1 pt-[32px] pb-[20px] font-1'>
            <div className={`${breakpoint <= 1440 ? 'w-[84%]' : 'w-[1200px]'} 
    `}>
                <h1 className='text-color-9 font-medium text-[1.4375rem]'>Hyundai Creta vs Kia Seltos Comparison</h1>
               
                <div className='py-[8px]'>
                    <Swiper spaceBetween={50} slidesPerView={3.5}>
                        {Array(4).fill().map((_, index) => {
                            return (
                                <SwiperSlide>
                                    <div key={index} className='p-[10px] flex flex-col gap-[1rem] w-fit '>
                                        <div className='flex flex-col gap-[.25rem]'>
                                            <div className='w-[285px] h-[190px]'>
                                                <img src={seltos} alt="" />

                                            </div>

                                            <h1 className='font-medium text-[.8125rem] text-color-9'>Hyundai Creta</h1>
                                        </div>
                                        <div className='p-[10px] border-[1px] border-[rgba(36,39,44,0.3)] rounded-[8px] w-full flex items-center justify-between'>
                                            dfnjd
                                        </div>
                                        <h1 className='text-[1rem] text-color-9 font-medium'>INR 20.30 Lakh*</h1>
                                        <button className='p-[10px] text-color-7 flex items-center justify-center rounded-[8px] border-[1px] border-[#0b66fa] text-[.75rem] font-medium'>
                                            Check December Offer
                                        </button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>

                </div>
            </div>
        </div>
    )
}

export default ComparisonSection2