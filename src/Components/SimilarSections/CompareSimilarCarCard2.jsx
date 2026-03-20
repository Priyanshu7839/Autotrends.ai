import React from 'react'

const CompareSimilarCarCard2 = () => {
  return (
    <div className='flex flex-col font-1 w-fit border-[1px] border-[#24272c1a] rounded-[8px] overflow-hidden'>
        <div className='w-[287px] h-[194px] bg-[#6f6f6f]'>
            {/* image */}
        </div>
        <div className='p-[1rem] flex flex-col gap-[1rem]'>
            <div className='font-medium text-[.9375rem] flex flex-col gap-[2px]'>
                <h1>Mahindra Scorpio N</h1>
                <h1>INR 13.85 - 24.54 Lakh*</h1>
            </div>
            <div className='flex items-center justify-center gap-[.5rem]'>
                <h1 className='text-color-9-70 text-[.75rem] whitespace-nowrap'>Compare With</h1>
                <span className='w-full h-[1px] bg-[#24272c] bg-opacity-70'></span>
            </div>
            <div className='flex items-center justify-between'>
                <button className='flex items-center justify-center min-w-[112px] py-[.25rem] border-[1px] border-[#0b66fa] text-[1rem] font-medium text-color-7 rounded-[8px]'>XUV 700</button>
                <button className='flex items-center justify-center min-w-[112px] py-[.25rem] border-[1px] border-[#0b66fa] text-[1rem] font-medium text-color-7 rounded-[8px]'>Scorpio</button>
            </div>
        </div>
    </div>
  )
}

export default CompareSimilarCarCard2