import React from 'react'
import M from "../Asset/M.png"
import greenStar from "../Asset/greenstar.png"

const ReviewsList = ({ width = "285" }) => {
    return (
        <div className={`px-[10px] py-[10px]  ${width ? `w-[${width}px]` : ""} w-full md:overflow-clip`}>
            <div className='flex flex-row gap-2 items-center'>
                <div className='w-[32px] h-[32px] bg-[#9FB7E4] rounded-full flex justify-center items-center'><img src={M} alt="" className='' /></div>
                <div className=''>
                    <p className='text-[#24272C] text-opacity-70 text-[10px] md:text-[12px] '>mukul on Dec 17, 2024</p>
                    <p className='text-[11px] md:text-[13px] flex  items-center gap-1 '><span className='font-bold'>4.5</span><img src={greenStar} alt="" className='w-[12px] h-[12px] md:w-[14px] md:h-[14px] ' /></p>
                </div>
            </div>
            <h1 className='text-[13px] md:text-[15px] text-[#24272C] font-bold max-md:mt-[10px]'>Kia Seltos Htk Diesel Ownership</h1>
            {/* <h1 className='text-[15.5px] text-[#24272C]  font-bold'>Review</h1> */}
            <p className='text-[12px] md:text-[14px] text-[#24272C] text-opacity-70 font-semibold'>I bought kia seltos in Jan 2024. The overall
                experience is ok ok. My main concern is
                about the rear passenger seat which is not
                comfortable at all. You feel jerk and
                potholes if you are sitting in rear seat. <span className='underline text-[13px] md:text-[15px] '>{" "}Read More</span></p>

            <div className='flex gap-[10px] items-center mt-[12px] text-[11px] md:text-[13px] '>
                <p className=' text-[#24272C] text-opacity-70 font-semibold'>Was this review helpful?</p>
                <button className='rounded-[6px] px-3 py-1  border-[#24272C] border-[1px] border-opacity-10'>Yes</button>
                <button className='rounded-[6px] px-3 py-1  border-[#24272C] border-[1px] border-opacity-10' >No</button>
            </div>

        </div>
    )
}

export default ReviewsList