import React from 'react'
import BrandGrid from '../PopularCarsBy Brands/Brandgrid'
import BodyTypeGrid from './BodyTypeGrid'
import { useScreenResizeValue } from '../../../ScreenSizeFunction'

const PopularCarsByBodyType = ({text}) => {

    const breakpoint=useScreenResizeValue();

  return (
    <div className="flex flex-col w-full   bg-white rounded-2xl pt-[13px] border  border-[rgba(36,39,44,0.1)] border-opacity-10  shadow-[0px_1px_2px_rgba(36,39,44,0.1)]">
          <h5 className="px-4  text-xl font-medium leading-snug text-[rgba(36,39,44)]">
            {text} By body Type
          </h5>
          
          {breakpoint>412 &&<BodyTypeGrid />}
      {breakpoint<=412 && <div className=" w-full overflow-x-scroll px-[20px] mt-[20px] mb-[20px]" style={{scrollbarWidth:'none'}}>
        <BodyTypeGrid/>
        </div>}
         
            
          
        </div>
  )
}

export default PopularCarsByBodyType
