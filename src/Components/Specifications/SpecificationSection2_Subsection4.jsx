import React, { useState } from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction';

const SpecificationSection2_Subsection4 = () => {

    const SpecsButttons = ['Engine & Transmission','Fuel & Performance','Suspension,Steering & Brakes','Dimension & Capacity','Comfort & Convenience','Interior','Exterior','Safety','Entertainment & Communication','ADAS Feature','Advance Internet Feature']

    const [SpecsButtonActive,SetSpecsButtonActive] = useState('Engine & Transmission');

    const breakpoint = useScreenResizeValue();

  return (
    <div className='w-full  border-[1px] border-[#24272c1a]  rounded-[16px] flex flex-col font-1'>
        <div className={`py-[16px] px-[24px] flex  justify-between border-b-[1px] border-[#24272c1a]
            ${breakpoint<=600 ? 'flex-col items-start gap-[1rem]':'items-center'}
            `}>
            <h1 className={`text-[1.4375rem] font-medium text-color-9
                ${breakpoint>1250 && 'text-[23px]'}
                ${breakpoint<=1250 && 'text-[20px]'}
                `}>Kia Seltos Specifications</h1>
            <button className={`py-[.5rem] px-[1rem]  min-w-[280px] border-[1px] border-[#24272c1a] rounded-[8px] text-color-6
                ${breakpoint>1250 && 'text-[16px]'}
                ${breakpoint<=1250 && 'text-[14px]'}
                `}>
                Kia seltos X-Line Turbo DCT
            </button>

        </div>
        <div className='py-[16px] flex '>
            <div className='w-[30%] flex flex-col items-start'>
                {
                    SpecsButttons.map((item,index)=>{
                        return(
                            <button key={index} className={`text-[.8125rem] w-full px-[15px] py-[12px] bg-[#FAFAFA] flex items-center justify-start relative  
                            ${SpecsButtonActive===item ?'rounded-[6px] text-color-1':'text-color-9'}
                            `}
                            onClick={()=>{SetSpecsButtonActive(item)}}
                            >
                               <h1 className='relative z-20'> {item}</h1>
                            <div className={` absolute bg-[#24272c] top-0 left-0 z-10 h-full transition-all duration-200 ${SpecsButtonActive===item ?'w-full rounded-[6px]':'w-0'}`} ></div>
                            </button>
                        )
                    })
                }

            </div>
            <div className='w-[73%]'>

            </div>

        </div>
    </div>
  )
}

export default SpecificationSection2_Subsection4