import React from 'react'

const CompareAlternativesCard = () => {
  return (
    <div className='flex flex-col w-fit font-1 border-[1px] border-[#24272c1a] rounded-[8px] overflow-hidden drop-shadow-[0_1px_2px_#24272c1a]'>
        <div className='w-[283px] h-[189px] bg-[#6f6f6f]'>
            {/* image */}
        </div>
        <div className='p-[1rem] flex flex-col gap-[1rem]'>
            <div className='font-medium text-[.9375rem] flex flex-col gap-[.25rem]'>
                <h1>Hyundai Creta</h1>
                <h1>INR 11 - 20.30 Lakh*</h1>
            </div>
            <p className='text-[.625rem] font-medium text-color-9-70'>Mileage: 17.4 to 21.8 kmpl</p>
            <div className='flex flex-col gap-[.25rem]'>
                <button className='flex items-center justify-center border-[1px] border-[#0b66fa] text-color-7 font-medium text-[1rem] px-[1rem] py-[.5rem] w-full rounded-[8px]'>Creta Mileage</button>
                <button className='flex items-center justify-center  text-color-7 font-medium text-[.875rem] px-[1rem] py-[.5rem] w-full'>Seltos Vs Creta</button>
            </div>
        </div>

    </div>
  )
}

export default CompareAlternativesCard