import React, { useState } from 'react'
import { IoArrowForward } from 'react-icons/io5';
import { useScreenResizeValue } from '../../ScreenSizeFunction';
import { IoIosArrowForward } from 'react-icons/io';
import { ViewallvariantIconSvg } from '../../assets/Images/SVG';

const ComparisonSection1 = () => {

    const breadcrumbs = [
            
        'Home','New Cars','CompareCars','Creta vs Seltos'
    ];
    const breakpoint = useScreenResizeValue();

    const [IsExpanded,setIsExpanded] = useState(false);


    
  return (
    <div className='flex items-center justify-center bg-[#FAFAFA] font-1 pt-[32px] pb-[20px] font-1'>
   <div className={`${breakpoint<=1440 ? 'w-[84%]':'w-[1200px]'} flex flex-col items-start justify-between gap-[20px]
    `}>  
       <div className='flex  gap-[.5rem]'>
            {
                breadcrumbs.map((item,index)=>{
                    return(
                        <div key={index} className='flex gap-[.5rem]  '>
                            <h1 className={`leading-none text-[.625rem] cursor-pointer
                                ${index!== breadcrumbs.length-1 ?'text-color-9':'text-color-9-30'}
                                `} >{item}</h1>
                           {index !== breadcrumbs.length-1 &&
                            <IoIosArrowForward className='leading-none text-[.625rem]'/>}
                        </div>

                    )
                })
            }
       </div>
       <div className='w-full rounded-[16px] border-[1px] border-[rgba(36,39,44,0.1)] drop-shadow-[0_1px_2px_rgba(36,39,44,0.1)] p-[20px] flex flex-col gap-[1rem]'>
            <h1 className='text-color-9 text-[1.6875rem] font-medium'>Hyundai Creta vs Kia Seltos</h1>
            <p className={`text-color-9-70 text-[.9375rem] ${IsExpanded&&'line-clamp-2'}`}>Should you buy Hyundai Creta or Kia Seltos? Find out which car is best for you - compare the two models on the basis of their Price, Size, Space, Boot Space, Service cost, Mileage,
            Features, Colours and other specs. Hyundai Creta price starts at Rs 11 Lakh ex-showroom for E (Petrol) and Kia Seltos price starts Rs 10.90 Lakh ex-showroom for HTE (Petrol). Creta</p>
            <button className='flex gap-[.5rem] items-center' onClick={()=>{setIsExpanded(!IsExpanded)}}>
                <h1 className='text-color-7 font-semibold text-[.875rem]'>Read More</h1>
                <ViewallvariantIconSvg/>
            </button>

       </div>
        

    </div>
   </div>
  )
}

export default ComparisonSection1