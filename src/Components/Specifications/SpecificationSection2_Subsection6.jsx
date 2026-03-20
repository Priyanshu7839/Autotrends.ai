import React, { useState } from 'react'

import { ViewallvariantIconSvg } from '../../assets/Images/SVG';;
import { MdKeyboardArrowDown } from "react-icons/md";
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const SpecificationSection2_Subsection6 = () => {
    const MileageVariantsHeading = ["Fuel Cost"];
    const [MileageVariantHeading, SetMileageVariantHeading] = useState("Fuel Cost")
    const [value, setValue] = useState(50);
    const handleSliderChange = (event) => {
        setValue(event.target.value);
      };
      console.log(value)

  const min = 10; // Set your custom min value
  const max = 200; // Set your custom max value
  const percentage = ((value - min) / (max - min)) * 100;

  const breakpoint = useScreenResizeValue();


    return (
        <div className='w-full py-[20px] border-[1px] border-[#24272c1a]  rounded-[16px] flex flex-col gap-[20px] font-1'>
            <div className='flex flex-col gap-[10px]'>
                <h1 className={`font-medium  text-color-9 px-[24px]
                     ${breakpoint>1250 && 'text-[23px]'}
                    ${breakpoint<=1250 && 'text-[20px]'}
                    `}>Seltos Ownership Cost</h1>
                <div className='relative flex px-[24px] py-[10px] items-center justify-start gap-[36px] border-b-[1px] border-[rgba(36,39,44,0.15)] '>
                    {MileageVariantsHeading.map((heading, index) => {
                        return (
                            <div key={index} className='flex flex-col cursor-pointer relative'
                                onClick={() => { SetMileageVariantHeading(heading) }}
                            >
                                <h1 className={`${MileageVariantHeading === heading ? "font-medium text-[.875rem] text-color-9" : "text-color-9-70 text-[.875rem] "}`}>{heading}</h1>
                                <span className={` h-[3px] bg-[#0b66fa] absolute bottom-[-10px]  ${MileageVariantHeading === heading ? 'w-full' : 'w-0'} transition-all duration-200`}></span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='px-[20px] '>
                <div className='w-[50%]  flex flex-col gap-[12px]'>
                    <h1 className={`font-medium  text-color-9
                         ${breakpoint>1250 && 'text-[15px]'}
                    ${breakpoint<=1250 && 'text-[13px]'}
                        `}>Select Engine type</h1>
                    <button className=' w-full flex items-center justify-between px-[13px] py-[8px] rounded-[8px] border-[1px] border-[#24272c1a]'>
                        <div className='flex flex-col gap-[1px] items-start justify-center text-color-9'>
                            <p className={`font-medium
                                 ${breakpoint>1250 && 'text-[13px]'}
                    ${breakpoint<=1250 && 'text-[12px]'}
                                `}>Diesel (Manual)</p>
                            <h1 className={`font-semibold 
                                 ${breakpoint>1250 && 'text-[15px]'}
                    ${breakpoint<=1250 && 'text-[13px]'}
                                `}>1493cc</h1>
                        </div>
                        <MdKeyboardArrowDown />

                    </button>
                    <div className='flex flex-col gap-[18px]'>
                        <div className='flex items-center justify-between text-color-9'>
                            <h1 className={` font-medium
                                 ${breakpoint>1250 && 'text-[15px]'}
                    ${breakpoint<=1250 && 'text-[13px]'}
                                `}>Kms Driven Per Day</h1>
                            <div className={`px-[13px] py-[8px] w-fit min-w-[90px] rounded-[8px] border-[1px] border-[#24272c1a] font-medium  text-color-6 flex items-center justify-center
                                 ${breakpoint>1250 && 'text-[15px]'}
                    ${breakpoint<=1250 && 'text-[13px]'}
                                `}>{value} Kms</div>
                        </div>
                        <input
                            type="range"
                            min={min}
                            max={max}
                            value={value}
                            onChange={handleSliderChange}
                            name="" id=""
                            className='w-full h-[2px] border-none outline-none bg-[#FAFAFA] appearance-none cursor-pointer 
                            [&::-webkit-slider-thumb]:appearance-none 
                            [&::-webkit-slider-thumb]:w-[24px] [&::-webkit-slider-thumb]:h-[24px] 
                        [&::-webkit-slider-thumb]:bg-[#0B66FA] [&::-webkit-slider-thumb]:rounded-full 
                            [&::-webkit-slider-thumb]:border-[2px] [&::-webkit-slider-thumb]:border-[#0B66FA] 
                                            
                            [&::-moz-range-thumb]:appearance-none 
                            [&::-moz-range-thumb]:w-[24px] [&::-moz-range-thumb]:h-[24px] 
                            [&::-moz-range-thumb]:bg-[#0B66FA] [&::-moz-range-thumb]:rounded-full 
                            [&::-moz-range-thumb]:border-[2px] [&::-moz-range-thumb]:border-[#0B66FA]

                             ' 
                             style={{
                                 background: `linear-gradient(to right, #0B66FA ${percentage}%, #ccc ${percentage}%)`
                              }}
                             />
                        <div className='flex items-center justify-between text-color-9-70 text-[.6875rem]'>
                            <h1>10 Kms</h1>
                            <h1>200 Kms</h1>
                        </div>
                    </div>
                    <button className=' w-full flex items-center justify-between px-[13px] py-[8px] rounded-[8px] border-[1px] border-[#24272c1a]'>
                        <div className='flex flex-col gap-[1px] items-start justify-center text-color-9'>
                            <p className='font-medium text-[.8125rem]'>Monthly Fuel Cost</p>
                            <h1 className='font-semibold text-[.9375rem]'>INR 6853*</h1>
                        </div>


                    </button>
                </div>
            </div>

            <div className='px-[20px] flex gap-[10px] items-center '>
                <h1 className={`font-semibold text-color-7
                     ${breakpoint>1250 && 'text-[.875rem]'}
                    ${breakpoint<=1250 && 'text-[.75rem]'}
                    `}>View Seltos Mileage</h1>
                <ViewallvariantIconSvg />
            </div>
        </div>
    )
}

export default SpecificationSection2_Subsection6