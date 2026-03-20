import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'



const HighlightImages = ({ data }) => {
    return (
        <div className='px-[15px] md:px-[18px] py-[20px]  shadow-md border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
            <h1 className='text-[18px] md:text-[24px] font-semibold'>{data.highlight}</h1>
            <div className='pb-[15px]  '>
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
                    {
                        data.images.map((image, index) => (
                            <SwiperSlide >
                                <div className='pb-[4px] flex flex-col gap-4 justify-center  border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 overflow-clip'>
                                    <div className='flex justify-center items-center'>
                                        <img src={image.image} alt="" className='h-[195px] w-full ' />
                                    </div>
                                    <p className='px-[4px] text-[17px] text-[#24272C] font-semibold '>{image.title}</p>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>


        </div>
    )
}

export default HighlightImages