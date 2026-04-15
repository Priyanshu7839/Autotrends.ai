import React from 'react'
import { RxCross2 } from "react-icons/rx";
import UsedCarCard from './UsedCarCard';


const UsedCarSections = () => {

    const appliedFilters = ['0L - 2L']

    const subFilters = ['Under 3 Lakhs','Under 5 Lakhs','SUV Cars','Luxury Cars']
  return (
    <div className='flex flex-col gap-[22px]'>
          <h1 className='font-4 font-medium text-[1.125rem] text-color-6'>170 Second Hand Kia Seltos Cars in Delhi NCR</h1>
            <div className='flex gap-[10px]'>
                {
                    appliedFilters.map((name,index)=>{
                        return(
                            <div key={index} className='py-[5px] px-[11px] bg-[#007be513] rounded-[8px] border-[1px] border-[#007FFF] drop-shadow-[0_1px_4px_#24272c1a] font-4 text-[.75rem] text-color-19 flex items-center justify-between gap-[10px]'>
                                {name}
                                <RxCross2/>
                            </div>
                        )
                    })
                }

            </div>

          <div className=' flex items-center justify-between font-4'>
                <div className='flex gap-[44px]'>
                    {subFilters.map((name,index)=>{
                        return(
                            <button className='text-color-9 text-[1.0625rem] font-bold '>
                                {name}
                            </button>
                        )
                    })}
                </div>
                <button className='px-[12px] py-[6px] rounded-[8px] border-[1px] border-[#24272c1a] drop-shadow-[0_1px_4px_#24272c1a] text-color-9 text-[.75rem]'> Relevance</button>
            </div>

          <div className='flex flex-wrap gap-[10px]'>
              {
                  Array(20).fill().map((_, index) => {
                      return (
                          <UsedCarCard />
                      )
                  })
              }
          </div>


    </div>
  )
}

export default UsedCarSections