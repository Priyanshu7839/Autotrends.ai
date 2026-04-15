import React from 'react'
import { kia1 } from '../../assets/Images'

import { GoStarFill } from 'react-icons/go'

const ReviewsList = ({name,title,date,rating,desc}) => {
    return (
        <div className={`px-[17px] py-[17px]       w-full flex flex-col gap-[10.75px]  font-1 `}>
            <div className='flex flex-row gap-2 items-center'>
                {/* <div className='w-[32px] h-[32px] bg-[#9FB7E4] rounded-full flex justify-center items-center'><img src={kia1} alt="" className=' rounded-full w-full h-full' /></div> */}
                <div className=''>
                    <p className='text-[#24272C] text-[11px] leading-[18px] text-opacity-70'>{name} on {date}</p>
                    <p className='text-[14px] flex  items-center gap-1 '><span className='font-bold'>{rating}</span><GoStarFill className=' text-blue w-[13px] h-[13px]'/></p>
                </div>
            </div>
            <div className=' flex flex-col justify-between gap-[9.75px]'>
                <div className=' flex flex-col gap-[4.25px]'>
                    <h1 className='text-[15px] leading-[28px] text-[#24272C] font-[500] '>{title}</h1>
                    
                            <p className='text-[13px] leading-[22px] pb-[7px] text-[#24272C] text-opacity-70 font-normal'>{desc} </p>
                </div>


            <div className='flex gap-[30px] text-[#24272C] text-opacity-70 items-center mt-[12px] '>
                <p className='text-[11px] leading-[15px] w-max  font-[400px]'>Was this review helpful?</p>
                <div className=' flex gap-[10px]'>
                <button className='rounded-[6px] px-3 py-1 text-[10px] leading-[20px]  border-[#e9e9e9] border-[1px] '>Yes</button>
                <button className='rounded-[6px] px-3 py-1 text-[10px] leading-[20px] border-[#e9e9e9] border-[1px] ' >No</button>
                </div>

            </div>
            </div>
           
           

        </div>
    )
}

export default ReviewsList