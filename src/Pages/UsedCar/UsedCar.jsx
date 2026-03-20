import React from 'react'
import { UsedCarSections, UsedCarSidebar } from '../../components'
import { useScreenResizeValue } from '../../ScreenSizeFunction'

const UsedCar = () => {

  const breakpoint = useScreenResizeValue();

  return (
    <div className='bg-[#FFFFFF] w-[100%] flex items-center justify-center drop-shadow-[0_6px_10px_rgba(0,0,0,0.05)] '>
      <div className={` py-[1rem] flex items-start justify-between gap-[20px]
                         ${breakpoint <= 1440 ? 'w-[84%]' : 'w-[1200px]'}`}>
                          <div className='w-[30%] '>
                              <UsedCarSidebar/>
                          </div>
                          <div className='w-full'>
                              <UsedCarSections/>
                          </div>
                          
      </div>
    </div>
  )
}

export default UsedCar