import React from 'react'
import star from "../Asset/star.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'

import hyundaiAl from "../Asset/hyundai-alcazar.png"
import kiasonethtx from "../Asset/kiasonet-htx.png"
import arrowright from "../Asset/right-arrow.png"
const RecommendedAlternativeCars = () => {
  return (
    <div className='px-[18px] py-[20px] shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-2'>
      <h1 className='text-[24px] font-semibold'>
        {"Recommended used Kia Seltos alternative cars in Jhansi"}
      </h1>
      <div className='  '>
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
                <img src={hyundaiAl} alt="" className='h-[195px] w-full rounded-xl' />
              </div>
              <div className='flex flex-col gap-2 pb-[10px] px-[15px] font-semibold  '>
                <p className='px-[2px] text-[15px] text-[#24272C] '>Hyundai Alcazar Prestige 7-Seater </p>
                <p className='px-[2px] text-[15px] text-[#24272C]  '><span className='text-[15px]'>R</span>18.00 Lakh<sup>*</sup></p>
                <div className='flex gap-2 text-[12px] text-[#24272C] text-opacity-70'>
                  <p>2024</p>
                  <li>• 30,000 Km</li>
                  <li>• Diesel</li>
                </div>
                <div className='w-full '>
                  <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >View Seller Details</button>
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className='flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
              <div className='flex justify-center items-center'>
                <img src={hyundaiAl} alt="" className='h-[195px] w-full rounded-xl' />
              </div>
              <div className='flex flex-col gap-2 pb-[10px] px-[15px] font-semibold '>
                <p className='px-[2px] text-[15px] text-[#24272C] '>Hyundai Alcazar Prestige 7-Seater </p>
                <p className='px-[2px] text-[15px] text-[#24272C] '><span className='text-[15px]'>R</span>16.00 Lakh<sup>*</sup></p>
                <div className='flex gap-2 text-[12px] text-[#24272C] text-opacity-70'>
                  <p>2024</p>
                  <li>• 30,000 Km</li>
                  <li>• Diesel</li>
                </div>
                <div className='w-full '>
                  <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >View Seller Details</button>
                </div>

              </div>

            </div>
          </SwiperSlide>

          <SwiperSlide >
            <div className='flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10'>
              <div className='flex justify-center items-center'>
                <img src={kiasonethtx} alt="" className='h-[195px] w-full rounded-xl' />
              </div>
              <div className='flex flex-col gap-2 pb-[10px] px-[15px] font-semibold  '>
                <p className='px-[2px] text-[15px] text-[#24272C] '>Kia Sonet HTX Turbo iMT BSVI</p>
                <p className='px-[2px] text-[15px] text-[#24272C] '><span className='text-[15px]'>R</span>8.50 Lakh<sup>*</sup></p>
                <div className='flex gap-2 text-[12px] text-[#24272C] text-opacity-70'>
                  <p>2024</p>
                  <li>• 30,000 Km</li>
                  <li>• Petrol</li>
                </div>
                <div className='w-full '>
                  <button className="w-full text-[#0B66FA] border-[1px] border-[#0B66FA] text-[16px] font-bold px-auto py-[8px] rounded-md " >View Seller Details</button>
                </div>


              </div>

            </div>
          </SwiperSlide>


        </Swiper>

      </div>

      <p className=' flex gap-1 text-[#0085FF] font-semibold items-center'>
                View Used Kia Cars in {"Jhansi"} <img src={arrowright} alt="" className='w-[19px] h-[18px] ' />
            </p>


    </div>
  )
}

export default RecommendedAlternativeCars