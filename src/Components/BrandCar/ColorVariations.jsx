import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { Rightarrow } from '../../assets/Images/SVG'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const ColorVariations = () => {
    const breakpoint = useScreenResizeValue();
    const details = useSelector((state)=>state.CarDetails);
    const [selectedColor, setSelectedColor] = React.useState(1);

    return (
        <div className='px-[20px] py-[20px]    shadow-sm shadow-[rgba(36,39,44,0.1)] border-[#24272C] border-[1px] rounded-[16px] border-opacity-10 flex flex-col gap-4'>
            <h1 className={` font-semibold
                ${breakpoint>1250 && 'text-[24px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
                `}>{details?.overView?.name} Colours</h1>
            <p className={` text-[#24272C] text-opacity-70 font-semibold
                ${breakpoint>1250 && 'text-[14px]'}
                ${breakpoint<=1250 && 'text-[12px]'}
                `}>{details?.galleryColorSection?.description}</p>
            <div className='flex gap-2 '>
            

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
                    {
                        details?.galleryColorSection?.items.map((item,index)=>{
                            return(
                                <SwiperSlide key={index} className='flex flex-col gap-3'>
                                <div>
                                    <img src={item.image} alt="" className='h-[195px] w-[290px] border-[1px] border-[#cfcfd5] rounded-[8px] overflow-hidden' />
                                </div>
                                <p className={`text-[#24272C] font-semibold 
                                    ${breakpoint>1250 && 'text-[16px]'}
                                    ${breakpoint<=1250 && 'text-[14px]'}
                                    `}>{item.title}</p>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>
            </div>

            {/* color pallete  */}
            <div className='flex gap-4'>
                {
                    details?.galleryColorSection?.items.map((pallete, index) => (<div key={index} onClick={(e) => { e.preventDefault(); setSelectedColor(pallete.colorId) }}  style={{
                        background: pallete.dualColorHexCode 
                          ? `linear-gradient(to right, ${pallete.dualColorHexCode[0]} 50%, ${pallete.dualColorHexCode[1]} 50%)`
                          : pallete.code, 
                      
                      }} className={` cursor-pointer overflow-hidden  w-[28px] h-[28px] rounded-full  border-[#24272C] border-[1px] border-opacity-25 flex justify-center items-center`}>
                        {
                            selectedColor === pallete.colorId ? (<div className='  bg-[#24272C] bg-opacity-25 rounded-full text-white w-[20px] h-[20px] flex justify-center items-center'><FaCheck className='w-[14px] h-[14px] text-[white]' /></div>) : (<div></div>)
                        }
                    </div>))
                }
            </div>

            <p className={` flex gap-1 cursor-pointer text-[#0085FF] font-semibold items-center
                ${breakpoint>1250 && 'text-[1rem]'}
                ${breakpoint<=1250 && 'text-[.875rem]'}
                `}>
                View All {details?.overView?.name} Colours <Rightarrow/>
            </p>

        </div>
    )
}

export default ColorVariations