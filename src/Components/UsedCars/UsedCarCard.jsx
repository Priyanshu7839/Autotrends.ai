import React from 'react'
import { seltos } from '../../assets/Images';
import { LuDot } from "react-icons/lu";
import { LocationIconSvg } from '../../assets/Images/SVG';


const UsedCarCard = () => {
    return (

        <div className='flex flex-col w-fit border-[1px] border-[#24272c1a] overflow-hidden rounded-[16px]'>
            <div className='w-[285px] h-[158px] bg-[#007565] rounded-[8px]'>
                <img src={seltos} alt="" />

            </div>

            <div className='p-[16px] rounded-b-[16px] flex flex-col gap-[.25rem] font-4'>
               <div>
                    <h1 className='text-[1rem] font-medium'>2019 Kia Seltos GTX Plus DCT</h1>
               </div>
               <div className='flex items-center justify-start gap-[.25rem] text-[.75rem] text-color-9-70 font-normal'>
                      <p>97,815Kms</p>
                      <h1 className='text-[1rem]'><LuDot /></h1>
                      <p>Diesel</p>
                      <h1 className='text-[1rem]'><LuDot /></h1>
                      <p>Manual</p>
               </div>
               <div className='flex items-center justify-between'>
                     <h1 className='font-semibold text-[1.25rem] text-color-9'>₹8.21 Lakh</h1>
                     <div className='flex items-center justify-center gap-[.5rem]'>
                        <input type="checkbox" name="" id="" />
                        <h1 className='font-normal text-color-9 text-[.8125rem]'>Compare</h1>
                     </div>
               </div>
               <div>
                <h1 className='text-color-9-70 text-[.6875rem] '><span className='line-through'>₹9.75 Lakh</span> <span className='font-medium text-color-20 text-[.625rem]'>(Save ₹1,54,000)</span> </h1>
               </div>
               <div className='font-semibold text-[.875rem] text-color-2'>
                View Seller Details
               </div>
              <div className='pt-[16px] border-dashed border-t-[1px] border-[#24272c1a] flex items-center gap-[.5rem]'>
                <LocationIconSvg/>
                    <h1 className='text-color-9 text-[.6875rem]'>
                    Ramgarh B.o, Gurgaon
                    </h1>
              </div>
            </div>


        </div>
    )
}

export default UsedCarCard