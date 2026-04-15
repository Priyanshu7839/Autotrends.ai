import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { useScreenResizeValue } from '../../ScreenSizeFunction';
import CompareSimilarCarCard from '../SimilarSections/CompareSimilarCarCard';

const ComparisonSection7 = () => {
    const breakpoint = useScreenResizeValue();

    return (
      <div className="bg-[#FAFAFA] w-[100%] flex items-center justify-center font-1">
      <div
        className={` px-[21px] flex flex-col gap-[20px] font-1  py-[20px] border-[1px] border-[#24272c1a]  rounded-[16px]
                         ${breakpoint <= 1440 ? "w-[84%]" : "w-[1200px]"}`}
      >
              <h1 className='text-color-9 font-medium text-[1.4375rem]'>Seltos Comparison With Similar Cars</h1>
              <div className='py-[8px]'>
                  <Swiper spaceBetween={50} slidesPerView={2.9}>
                      {Array(4).fill().map((_,index) => {
                          return (
                              <SwiperSlide key={index}>
                                 <CompareSimilarCarCard/>
                              </SwiperSlide>
                          )
                      })}
                  </Swiper>
  
              </div>
          </div>
          </div>
    )
}

export default ComparisonSection7