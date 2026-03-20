import React from 'react'
import { Overlay } from '../../assets/Images/SVG'

const EVNewsCard = ({props}) => {
    const {image,title,author,date} = props
  return (
    <div className=' w-[295px] h-max flex flex-col '>
        <div className=' w-full h-[194px] bg-center rounded-[16px] bg-no-repeat bg-cover' style={{backgroundImage:`url(${image})`}}></div>
        <div className=' w-full pt-[15px] flex flex-col gap-[18px]'>
            <p className=' text-[16px] leading-[24px] font-[700] line-clamp-2 text-ellipsis '>{title}</p>
            <p className=' text-[12px] items-center leading-[18px] flex gap-[6px] text-[rgba(36,39,44,0.7)] font-[400] '>
                <p>By{author}</p><Overlay/>{date}
            </p>
        </div>

      
    </div>
  )
}

export default EVNewsCard
