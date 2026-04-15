import React from 'react'
import { brandoffers } from '../../../MockData'
import { useScreenResizeValue } from '../../../ScreenSizeFunction'

const BodyTypeGrid = () => {

    const breakpoint=useScreenResizeValue();

  return (
    <div className={` ${breakpoint<=412?" w-max flex gap-[20px]":"grid w-full grid-cols-2  mt-[11px] rounded-[16px] "}`}>
      {brandoffers.brands.map((brand,index) => (
        <div
          key={brand.name}
          className={` flex flex-col  gap-[5px] pt-[11px] pb-[17px] border  border-[rgba(36,39,44,0.1)] ${index===brandoffers.brands.length-2&&breakpoint>412?'rounded-bl-[16px]':(index===brandoffers.brands.length-1 && breakpoint>412)?'rounded-br-[16px]':''} `}
          role="button"
          tabIndex={0}
        >
            <img src={brand.image} alt="" className=" w-full h-[48px] " />
          <div className="text-sm font-medium w-full text-center text-gray-900">{brand.name}</div>
         
        </div>
      ))}
    </div>
  )
}

export default BodyTypeGrid
