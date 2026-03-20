import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { IoStar } from 'react-icons/io5';
import { HeartIconSvg } from '../../assets/Images/SVG';
import { seltos } from '../../assets/Images';
import { useSelector } from 'react-redux';

const MileageSection1 = () => {

  const breakpoint = useScreenResizeValue();
  const details = useSelector((state)=>state.CarDetails);


  return (
    <div className='bg-[#FFFFFF] w-full flex items-center justify-center drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] '>
        <div className={` py-[1rem] flex flex-col gap-[21px]
                       
                       ${ breakpoint <= 1440
            ? breakpoint <= 500
              ? "w-[92%]"
              : "w-[84%]"
            : "w-[1200px]"
        }
                        `}>
             
              <div className={`pt-[20px] flex gap-[20px]
                ${breakpoint <= 700 && 'flex-col'}
                `}>
                <div>
                    <div className={`h-[158px] bg-red-300 rounded-[8px] overflow-hidden
                      ${breakpoint<=700?'w-full':'w-[230px]'}
                      `}>
                      <img src={details?.overView?.image} alt="" className='object-cover h-[100%] w-[100%]' />
                    </div>
                </div>
                <div className='flex flex-col gap-[8px] w-full font-1 '>
                    <h1 className={`font-medium  text-color-9
                      ${breakpoint>1250 && 'text-[27px]'}
                      ${breakpoint<=1250 && 'text-[20px]'}
                      `}>Mileage of {details?.overView?.name}</h1>
                    <div className='flex items-center justify-start gap-[.25rem]'>
                      <h1 className='font-bold text-[.8125rem] text-color-9 '>{details?.overView?.rating}</h1>
                      <IoStar/>
                      <p className='font-normal text-[.8125rem] text-color-9'>{details?.overView?.ratingDesc}</p>
                    </div>
                    <p className={`font-medium text-color-9 
                      ${breakpoint>1250 && 'text-[19px]'}
                      ${breakpoint<=1250 && 'text-[16px]'}
                      `}>INR {details?.overView?.priceRange}</p>
                    <p className={`font-normal underline text-color-9-70
                      ${breakpoint>1250 && 'text-[15px]'}
                      ${breakpoint<=1250 && 'text-[13px]'}
                      `}>{details?.emi?.emiText}</p>
                    <button className={`min-w-[320px] w-fit min-h-[40px] rounded-[8px] bg-[#0B66FA] flex items-center justify-center font-bold text-color-1 
                      ${breakpoint>1250 && 'text-[16px]'}
                      ${breakpoint<=1250 && 'text-[14px]'}
                      `}>
                        View Live Offers
                    </button>
                    <div className='pt-[18px] w-full flex items-center justify-between  border-dashed border-t-[2px] border-[rgba(36,39,44,0.15)]
                    text-color-9 text-[.8125rem]
                    '>
                        <p>Ex-showroom Price in <span className='underline'>New Delhi</span></p>
                        <div className='flex items-center justify-center gap-[10px]'>
                          <HeartIconSvg/>
                          <h1 className='text-color-9-70'>Shortlist</h1>
                        </div>
                    </div>
                </div>

              </div>
        </div>
    </div>
  )
}

export default MileageSection1