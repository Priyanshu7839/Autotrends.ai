import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import JaiPitambraImage from '../../assets/Images/JaiPitambraLogo.jpg'

const BigDealsCard = ({img,name,desc,accesories,delivery,dis,dealership}) => {
  return (
    <div className='font-1 rounded-[12px] border-[1px] border-[#0000001F] overflow-hidden cursor-pointer w-[350px] py-[1rem] flex flex-col gap-[1rem]'>
        <div className='px-[1rem] flex flex-col gap-[.5rem] items-start justify-center'>
            <h1 className='text-[1.5rem] font-bold'>{name}</h1>
            <h1 className='text-[.75rem] line line-clamp-1'>{desc}</h1>
          <h1 className='text-[.875rem] font-bold'>{dealership}</h1>
          <div className='flex items-center justify-between w-full'>
          <span className='text-[12px]  px-[.5rem] py-[.25rem] font-normal rounded-[8px] text-color-1 bg-[#000000]'>₹ {dis} Discount <sup>*</sup></span>
          {/* <img src={JaiPitambraImage} alt="" className='h-[70px] ' /> */}
          </div>

        </div>
        <img src={img} alt=""  className='object-cover h-[180px]'/>
       <div className='flex items-center justify-end px-[1rem]'>
        <div className='px-[1rem] flex flex-col gap-[.25rem] items-end justify-center'>
                <h1 className='text-[.875rem] px-[.5rem] py-[.25rem] bg-[#f1f1f1] rounded-[10px]'>Accesories Worth <span className='font-bold'>Rs{accesories}</span></h1>
                <span className='text-[.875rem] px-[.5rem] py-[.25rem] bg-[#f1f1f1] font-medium rounded-[10px] text-[#0085ff]'>{delivery}</span>
            </div>
            <div className='rounded-full w-[48px] h-[48px] bg-[#000] flex items-center justify-center text-[#e1e1e2]'>
            <IoIosArrowForward className='text-[1.5rem] '/>
            </div>
       </div>
    </div>
  )
}

export default BigDealsCard