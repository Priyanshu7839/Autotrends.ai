import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const ComparisonSection1_Subsection2 = () => {

  const breakpoint = useScreenResizeValue();

  return (
    <div className={`flex items-center justify-center bg-[#FAFAFA] w-[100%]`}>
     <div className={`${breakpoint<=1440 ? 'w-[84%]':'w-[1200px]'} flex bg-[#F0F0F0] py-[56px] rounded-[16px]
    `}>
   
      <div className='w-[40%]'></div>
      <div className='w-[60%] flex items-center justify-start gap-[1.5rem]'>
        <div className='font-1'>
          <h4 className='font-medium text-[.75rem]'><span className='font-bold'>AutoTrends </span>Recommender</h4>
          <h1 className='text-[1.5rem] text-color-9 font-medium'>Not sure which Car to Buy?</h1>
          <p className='text-[.875rem] text-color-9'>Let us help you find the dream car.</p>
        </div>
        <div>
          <button className='rounded-[8px] border-[1px] border-[#0b66fa] bg-[#FFFFFF]  text-color-7 font-medium text-[.875rem] py-[.5rem] px-[1rem] min-w-[196px]'>Show me Best car</button>
        </div>
        
      </div>
 
    </div>
    </div>
  )
}

export default ComparisonSection1_Subsection2