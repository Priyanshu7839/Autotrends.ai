import React from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { seltos } from '../../assets/Images';
import { useSelector } from 'react-redux';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const SpecificationSection2_Subsection1 = () => {

    const details = useSelector((state)=>state.CarDetails);
    const StandOutFeatures=details?.quickOverview?.keyAndFeatureList[2].list;
    const breakpoint = useScreenResizeValue();

    return (
        <div className='py-[18px] px-[21px] font-1 border-[1px] border-[#24272c1a] rounded-[16px]'>
            <h1 className={`text-color-9 font-medium
                ${breakpoint>1250 && 'text-[23px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
                `}>Standout Features of {details?.overView?.name}</h1>
            <div className='py-[8px]'>
                <Swiper 
                
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
                >
                    {StandOutFeatures.map((feat) => {
                        return (
                            <SwiperSlide>
                                <div key={feat.id} className='px-[10px] flex flex-col gap-[.25rem] w-fit '>
                                    <div className='w-[285px] h-[160px] overflow-hidden rounded-[8px]'>
                                        <img src={feat.imageUrl} alt="" className='w-[100%] h-[100%]' />

                                    </div>

                                    <h1 className='font-medium text-[.8125rem] text-color-9'>{feat.text}</h1>


                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>

            </div>
        </div>
    )
}

export default SpecificationSection2_Subsection1