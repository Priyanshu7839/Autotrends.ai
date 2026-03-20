import React,{useState} from 'react'
import { ViewallvariantIconSvg } from '../../assets/Images/SVG';
import 'swiper/css';
import { Swiper,SwiperSlide, useSwiper } from 'swiper/react';
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const MileageSection2_SubSectionLeft_Section6 = () => {

      const MileageVariantsHeading = ["Petrol","Diesel"];
        const [MileageVariantHeading, SetMileageVariantHeading] = useState("Petrol")

        const breakpoint = useScreenResizeValue();

  return (
    <div className='w-full py-[20px] border-[1px] border-[#24272c1a]  rounded-[16px] flex flex-col gap-[20px] font-1'>
        <div className='flex flex-col gap-[10px]'>
                <h1 className={`font-medium  text-color-9 px-[24px]
                    ${breakpoint>1250 && 'text-[23px]'}
                    ${breakpoint<=1250 && 'text-[20px]'}
                    `}>Seltos Mileage (Variants)</h1>
                <div className='relative flex px-[24px] py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] '>
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
        <Swiper 
         breakpoints={{
            0:{
             slidesPerView:1,
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
             1200: {
                 slidesPerView: 2,
                 spaceBetween: 12,
             },
         }}
        spaceBetween={10}
        >

          {Array(4).fill().map((_,index)=>{
            return(
            <SwiperSlide >
                <div key={index} className='w-[286px] min-h-[400px] border-[1px] border-[rgba(36,39,44,0.1)] drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)] rounded-[8px] pt-[20px] px-[5px] flex flex-col gap-[1rem] overflow-hidden'>
                        <div className='flex flex-col gap-[1rem] px-[20px]'>
                            <h1 className='text-color-16 font-medium text-[1rem]'>Seltos HTE</h1>
                            <div className='flex items-end justify-start gap-[1rem]'>
                                <h1 className='text-[1.125rem] font-medium text-color-9'>INR 10,89,900*</h1>
                                <p className='text-color-9-70 font-medium text-[0.75rem]'>EMI INR 23,656</p>
                            </div>
                            <div className='text-color-9-70 text-[.75rem] flex items-center justify-start gap-[1rem]'>
                                <h1>17kmpl</h1>
                                <span className='w-[3px] h-[3px] bg-[rgba(39,36,44,0.5)] rounded-full'></span>
                                <h1>Manual</h1>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <span className=' h-[1px] w-[15px] bg-[rgba(36,39,44,0.15)]'></span>
                            <h1 className='px-[5px] text-[.8125rem] text-color-17'>Key Features</h1>
                            <span className='flex-1 h-[1px] bg-[rgba(36,39,44,0.15)]'></span>
                        </div>
                        <div className='px-[20px] text-color-9-70 text-[.8125rem] flex flex-col gap-[1rem]'>
                                <h1>Halogen projector headlights</h1>
                                <h1>16-inch steel wheels with covers</h1>
                                <h1>Height-adjustable driver seat</h1>
                                <h1>Electronic stability control</h1>
                                <h1>6 airbags</h1>
                        </div>
                        <div className='py-[14px] px-[20px]  border-t-[1px] border-[rgba(36,39,44,0.1)] flex items-center justify-between'>
                                <h1 className='text-[.875rem] text-color-16 font-medium'>Get On road Price</h1>
                                <div className='flex items-center justify-center gap-[.5rem]'>
                                    <input type="checkbox" name="" id="" />
                                    <label htmlFor="" className='text-color-9-50 text-[.75rem]'>Compare</label>
                                </div>
                        </div>
                </div>
                </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
        
         <div className='px-[20px] flex gap-[10px] items-center '>
                <h1 className='font-semibold text-[.875rem] text-color-7'>View All Variants</h1>
                <ViewallvariantIconSvg/>
        </div>
    </div>
  )
}

export default MileageSection2_SubSectionLeft_Section6