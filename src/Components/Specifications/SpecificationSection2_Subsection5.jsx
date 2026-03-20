import React, { useState } from 'react'

import { ViewallvariantIconSvg } from '../../assets/Images/SVG';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { seltos } from '../../assets/Images';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const SpecificationSection2_Subsection5 = () => {
    const MileageVariantsHeading = ["Popular", "Upcoming"];
    const [MileageVariantHeading, SetMileageVariantHeading] = useState("Popular")
const breakpoint = useScreenResizeValue();


    return (
        <div className='w-full py-[20px] border-[1px] border-[#24272c1a]  rounded-[16px] flex flex-col gap-[20px] font-1'>
            <div className='flex flex-col gap-[10px]'>
                <h1 className={`font-medium text-[1.4375rem] text-color-9 px-[24px]
                    ${breakpoint>1250 && 'text-[23px]'}
                    ${breakpoint<=1250 && 'text-[20px]'}
                    `}>Electric Cars</h1>
                <div className='relative flex px-[24px] py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[#24272c1a] '>
                    {MileageVariantsHeading.map((heading, index) => {
                        return (
                            <div key={index} className='flex flex-col cursor-pointer relative'
                                onClick={() => { SetMileageVariantHeading(heading) }}
                            >
                                <h1 className={`${MileageVariantHeading === heading ? "font-medium  text-color-9" : "text-color-9-70  "}
                                ${breakpoint>1250 && 'text-[.875rem]'}
                                ${breakpoint<=1250 && 'text-[.75rem]'}
                                `}>{heading}</h1>
                                <span className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${MileageVariantHeading === heading ? 'w-full' : 'w-0'} transition-all duration-200`}></span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='px-[20px]'>
                <Swiper  breakpoints={{
            0:{
             slidesPerView:1,
             spaceBetween:12
            },
            600:{
                slidesPerView: 1.4,
                spaceBetween: 12,
            },
             750: {
                 slidesPerView: 2,
                 spaceBetween: 12,
             },
             1050: {
                 slidesPerView: 2.5,
                 spaceBetween: 12,
             },
             1200: {
                 slidesPerView: 2.5,
                 spaceBetween: 12,
             },
         }}
        spaceBetween={10}>
                    {Array(4).fill().map((_, index) => {
                        return (
                            <SwiperSlide>
                                <div key={index} className='flex flex-col w-fit border-[1px] border-[#24272c1a] overflow-hidden rounded-[8px]'>
                                    <div className='w-[285px] h-[190px] rounded-[8px]'>
                                        <img src={seltos} alt="" />

                                    </div>

                                   <div className=' p-[16px] rounded-b-[8px] flex flex-col gap-[1rem] '>
                                       <div className='flex flex-col gap-[2px] font-medium text-[.9375rem] text-color-9'>
                                            <h1 className=''>Mahindra BE 6</h1>
                                            <h1 className=''>INR 18.90 Lakh</h1>
                                       </div>
                                       <button className='w-full p-[.5rem] rounded-[8px] border-[1px] border-[#0B66FA] text-[1rem] font-medium text-color-7 flex items-center justify-center'>
                                            Contact Dealer
                                       </button>
                                   </div>


                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>

            <div className='px-[20px] flex gap-[10px] items-center '>
                <h1 className='font-semibold text-[.875rem] text-color-7'>View All Variants</h1>
                <ViewallvariantIconSvg />
            </div>
        </div>
    )
}

export default SpecificationSection2_Subsection5