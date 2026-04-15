import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { seltos } from '../../assets/Images';
import {CompareAlternativesCard} from '../../components'
import { useScreenResizeValue } from '../../ScreenSizeFunction';


const MileageSection2_SubSectionLeft_Section5 = () => {

    const breakpoint = useScreenResizeValue();

    return (
        <div className='py-[18px] px-[21px] font-1 border-[1px] border-[#24272c1a] rounded-[16px]'>
            <h1 className={`text-color-9 font-medium 
                 ${breakpoint>1250 && 'text-[23px]'}
                      ${breakpoint<=1250 && 'text-[19px]'}
                `}>Compare mileage of Seltos alternatives</h1>
            <div className='py-[8px]'>
                <Swiper  breakpoints={{
                        0:{
                         slidesPerView:1,
                         spaceBetween:12
                        },
                        595:{
                            slidesPerView: 1.5,
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
                    {Array(4).fill().map((_,index) => {
                        return (
                            <SwiperSlide key={index}>
                               <CompareAlternativesCard/>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </div>
    )
}

export default MileageSection2_SubSectionLeft_Section5