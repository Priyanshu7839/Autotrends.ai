import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import { Autoplay, FreeMode, Pagination } from 'swiper/modules'
import { useSelector } from 'react-redux'
import { useScreenResizeValue } from '../../ScreenSizeFunction'



const MoreOptions = () => {

    const details = useSelector((state)=>state.CarDetails)
    const breakpoint = useScreenResizeValue();

    return (
        <div className='px-[18px] py-[20px] w-full  drop-shadow-[0px_1px_2px_rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
            <h1 className={` font-medium font-1 text-color-9
                ${breakpoint>1250 && 'text-[24px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
                `}>{details?.filterWidgetContent?.title}</h1>
            <div className=' '>
                <Swiper
                  
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
                    {
                        details?.filterWidgetContent?.list.map((image, index) => (
                            <SwiperSlide >
                                <div className=' flex flex-col  justify-center'>
                                    <div className='flex  items-center'>
                                        <img src={image.coverImage} alt="" className='h-[195px] w-[294px] rounded-xl' />
                                    </div>
                                    <p className=' py-[10px] font-medium text-[.8125rem] text-color-9'>{image.title}</p>

                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

            </div>


        </div>
    )
}

export default MoreOptions