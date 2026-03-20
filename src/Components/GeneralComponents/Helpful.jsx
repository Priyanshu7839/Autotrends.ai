import React from 'react'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const Helpful = () => {

  const breakpoint= useScreenResizeValue();

  return (
    <div className={` ${breakpoint<=412?'w-[95%]':'w-full'}  rounded-lg  flex justify-between px-[20px] items-center py-[16.5px] border-[1px] border-[rgba(36,39,44,0.1)] drop-shadow-[0_1px_2px_#24272c1a]`}>
       <div className={` text-[rgba(36,39,44,0.5)] ${breakpoint<=412?'text-[13px]':'text-[15px]'}  leading-[16px]`}>
       Did you find this information helpful?
       </div>
       <div className={` ${breakpoint<=412?'text-[13px]':'text-[15px]'} text-[#24272c]  leading-[18px] flex gap-[19px]`}>
        <div className=' px-[20px] py-[8px] border-[1px] rounded-lg  cursor-pointer border-[rgba(36,39,44,0.1)]'>Yes</div>
        <div className=' px-[20px] py-[8px] border-[1px] rounded-lg cursor-pointer border-[rgba(36,39,44,0.1)]'>No</div>

       </div>
      
    </div>
  )
}

export default Helpful