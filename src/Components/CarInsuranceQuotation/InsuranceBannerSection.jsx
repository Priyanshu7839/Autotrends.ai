import React from 'react'
import { BsDot } from 'react-icons/bs'
import { useScreenResizeValue } from '../../ScreenSizeFunction'
import { DoubleArrowSvg } from '../../assets/Images/SVG';
import { CarPriceBannerImg, InsuranceCarImage } from '../../assets/Images';

const InsuranceBannerSection = () => {

    const breakpoint = useScreenResizeValue();
    return (

        <div className='flex items-center justify-center bg-[#FAFAFA] font-1 pt-[20px] pb-[20px] font-1 z-0'>
   <div className={`${breakpoint<=1440 ? 'w-[84%]':'w-[1200px]'} flex p-[4rem] relative ${breakpoint>1000 && 'pr-[0rem]'}
    `}>  
        {/* <div className={`flex p-[4rem]  relative
                ${breakpoint>1000 && 'pr-[0rem]'}
        `}> */}
            <div className={`flex flex-col gap-[1rem] items-center relative z-10
             ${breakpoint > 1200 && 'w-[40%]'}
             ${(breakpoint <= 1200 && breakpoint > 1000) && 'w-[35%]'}
             ${(breakpoint <= 1000 && breakpoint > 0) && 'w-[100%]'}
             ${breakpoint <= 600 ? 'justify-center' : 'justify-start'}
            `}>
                <div className={`p-[1rem] flex flex-col gap-[1rem] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.2)] relative z-10 
                    ${breakpoint > 1000 && 'w-full bg-[#FAFCFF] mix-blend-screen'}
                    ${(breakpoint <= 1000 && breakpoint > 500) && 'w-[350px] bg-white/30 backdrop-blur-md '}
                    ${(breakpoint <= 500 && breakpoint > 0) && 'w-[300px] bg-white/30 backdrop-blur-md '}
                    `}>
                    <h1 className={`text-color-6 font-1 font-semibold
                         ${breakpoint > 1200 && 'text-[1.5rem]'}
                         ${(breakpoint <= 768 && breakpoint > 480) && 'text-[1.25rem]'} 
                         ${(breakpoint <= 480) && 'text-[1.125rem]'}
                         ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[1.375rem]'}
                        `}>Already Have a Price Quotation</h1>
                    <p className={`text-color-6 font-1 font-regular
                        ${breakpoint > 1200 && 'text-[.875rem]'}
                        ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.75rem]'}
                        ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.625rem]'} 
                        ${(breakpoint <= 480) && 'text-[.5rem]'}
                        `}>
                        Let's see if we can do better! Enter your car details and the quoted price from another dealer to see if we can find a better deal for you.
                    </p>
                    <div className='text-color-8 flex flex-col gap-[1rem]'>
                        <div className='flex items-center justify-between'>
                            <div className='w-[49%] flex flex-col gap-[.25rem]'>
                                <label htmlFor=""
                                    className={`font-normal font-1
                                    ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                 `}>Car Maker</label>
                                <input type="text"
                                    className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                                     ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                    `}
                                    placeholder='Toyota'
                                />
                            </div>
                            <div className='w-[49%] flex flex-col gap-[.25rem]'>
                                <label htmlFor=""
                                    className={`font-normal font-1
                                    ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                 `}>Car Model</label>
                                <input type="text" className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                                 ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                `}
                                    placeholder='Enter The Model'
                                />
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='w-[49%] flex flex-col gap-[.25rem]'>
                                <label htmlFor=""
                                    className={`font-normal font-1
                                    ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                 `}>Car variant</label>
                                <input type="text" className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                                 ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                `}
                                    placeholder='Enter The Variant'
                                />
                            </div>
                            <div className='w-[49%] flex flex-col gap-[.25rem]'>
                                <label htmlFor="" className={`font-normal font-1
                                    ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                 `}>Car color</label>
                                <input type="text" className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                                 ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                                `}
                                    placeholder='Toyota'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col gap-[.25rem]'>
                            <label htmlFor=""
                                className={`font-normal font-1
                                ${breakpoint > 1200 && 'text-[1rem]'}
                                ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                ${(breakpoint <= 480) && 'text-[.625rem]'}
                             `}
                            >Ex-Showroom Quoted Price</label>
                            <input type="text" className={`rounded-[5px] border-[1px] border-[#000000DE] p-[.5rem] text-color-8 font-1
                             ${breakpoint > 1200 && 'text-[1rem]'}
                                    ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                    ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                    ${(breakpoint <= 480) && 'text-[.625rem]'}
                            `}
                                placeholder='Enter The Price'
                            />
                        </div>


                    </div>


                    <button className={`p-[.5rem] flex items-center justify-center text-color-1 font-1 font-semibold rounded-[5px] bg-[#0B66FA]
                                ${breakpoint > 1200 && 'text-[1rem]'}
                                ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                                ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                                ${(breakpoint <= 480) && 'text-[.625rem]'}
                        `}>
                        Get The Best Price Now
                    </button>
                </div>
                <div className={`p-[1rem] rounded-[8px] border-[1px] border-[rgba(0,0,0,0.2)]  flex flex-col gap-[.5rem] relative z-10
                     ${breakpoint > 1000 && 'w-full mix-blend-screen bg-[#FAFCFF]'}
                     ${(breakpoint <= 1000 && breakpoint > 500) && 'w-[350px] bg-white/30 backdrop-blur-md '}
                     ${(breakpoint <= 500 && breakpoint > 0) && 'w-[300px] bg-white/30 backdrop-blur-md '}
                    `}>
                    <h1 className={`font-4 text-color-6 font-medium
                        ${breakpoint > 1200 && 'text-[1.125rem]'}
                        ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[1rem]'}
                        ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.875rem]'} 
                        ${(breakpoint <= 480) && 'text-[.75rem]'}
                        `}>Car insurance starting from <span className='font-semibold'>₹ 6/day*</span></h1>
                    <div className={`flex items-center gap-[1rem] text-color-12 font-normal font-4
                        ${breakpoint > 1200 && 'text-[.75rem]'}
                        ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.6875rem]'}
                        ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.625rem]'} 
                        ${(breakpoint <= 480) && 'text-[.5625rem]'}
                        `}>
                        <div className='flex items-center'>
                            <BsDot />
                            <h1>Car No.</h1>
                        </div>
                        <DoubleArrowSvg />
                        <div className='flex items-center'>
                            <BsDot />
                            <h1>Select Plan</h1>
                        </div>
                        <DoubleArrowSvg />
                        <div className='flex items-center'>
                            <BsDot />
                            <h1>Policy Issued</h1>
                        </div>
                    </div>

                    <div className='w-full relative'>
                        <input type="text" className={`outline-none w-full border-[1px] border-[rgba(0,0,0,0.2)] pl-[1rem] pr-[8rem] py-[.5rem] rounded-[5px]
                            ${breakpoint > 1200 && 'text-[1rem]'}
                            ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                            ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                            ${(breakpoint <= 480) && 'text-[.625rem]'}
                            `} />
                        <button className={`p-[.5rem] border-[1px] border-[#0B66FA]  bg-[#0B66FA] rounded-r-[5px] flex items-center justify-center text-color-1 font-medium absolute right-0 top-0
                            ${breakpoint > 1200 && 'text-[1rem]'}
                            ${(breakpoint <= 1200 && breakpoint > 768) && 'text-[.875rem]'}
                            ${(breakpoint <= 768 && breakpoint > 480) && 'text-[.75rem]'} 
                            ${(breakpoint <= 480) && 'text-[.625rem]'}
                            `}>Check Prices</button>
                    </div>
                </div>
            </div>
            <div className={` flex items-end justify-center  
                     ${breakpoint > 1200 && 'w-[65]%]'}
                     ${(breakpoint <= 1200 && breakpoint > 1000) && 'w-[70%]'}
                     ${(breakpoint <= 1000 && breakpoint > 0) && 'w-[100%] absolute z-0 bottom-0 left-0'}
                     `}>
                    <img src={CarPriceBannerImg} alt="" className='' />
            </div>
        </div>
        </div>
    )
}

export default InsuranceBannerSection